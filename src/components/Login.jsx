import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const singInSchema = z.object({
  username: z
    .string()
    .min(3, 'Username should be atleast 3 characters long!')
    .max(30, 'Maximum length of username should be 30 characters!'),
  password: z
    .string()
    .min(8, 'Password should be atleast 8 characters long!')
    .max(30, 'Maximum length of password should be 30 characters!'),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(singInSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    reset();
  };
  return (
    <div className="flex h-2/4 w-1/4 flex-col items-center justify-center gap-2 rounded-xl border-2 border-green-500 py-2">
      <h1 className="text-xl font-bold">Sign In</h1>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.username && (
          <p className="rounded bg-red-100 px-2 py-1 text-red-500 w-2/3">
            {errors.username.message}
          </p>
        )}
        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="rounded border-2 border-gray-200 px-2 py-1"
        />
        {errors.password && (
          <p className="rounded bg-red-100 px-2 py-1 text-red-500 w-2/3">
            {errors.password.message}
          </p>
        )}
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="rounded border-2 border-gray-200 px-2 py-1"
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-2/4 rounded-xl bg-emerald-600 px-2 py-1 text-white hover:bg-emerald-500 disabled:bg-slate-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
