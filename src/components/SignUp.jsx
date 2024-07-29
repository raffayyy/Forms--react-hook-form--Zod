import React from 'react';
import { useState } from 'react';
import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username should be at least 3 characters long!')
    .max(30, 'Maximum length of username should be 30 characters!')
    .required('Username is required!'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters long!')
    .max(30, 'Maximum length of password should be 30 characters!')
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .min(8, 'Confirm Password should be at least 8 characters long!')
    .max(30, 'Maximum length of confirm password should be 30 characters!')
    .oneOf([yup.ref('password')], 'Passwords must match!')
    .required('Confirm Password is required!'),
});

function SignUp() {
  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    data.preventDefault();
    const FormValues = {
      username: data.target.username.value,
      password: data.target.password.value,
      confirmPassword: data.target.confirmPassword.value,
    };

    try {
      await signUpSchema.validate(FormValues, { abortEarly: false });
      data.target.reset();
      setErrors({});
    } catch (err) {
      if (err.inner) {
        const validationErrors = err.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      }
    }
  };
  return (
    <div className="flex h-2/4 w-1/4 flex-col items-center justify-center gap-2 rounded-xl border-2 border-green-500 py-2">
      <h1 className="text-xl font-bold">Create Account</h1>
      <form className="flex flex-col items-center gap-3" onSubmit={onSubmit}>
        {errors.username && (
          <p className="w-2/3 rounded bg-red-100 px-2 py-1 text-red-500">
            {errors.username}
          </p>
        )}
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="rounded border-2 border-gray-200 px-2 py-1"
        />
        {errors.password && (
          <p className="w-2/3 rounded bg-red-100 px-2 py-1 text-red-500">
            {errors.password}
          </p>
        )}
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="rounded border-2 border-gray-200 px-2 py-1"
        />
        {errors.confirmPassword && (
          <p className="w-2/3 rounded bg-red-100 px-2 py-1 text-red-500">
            {errors.confirmPassword}
          </p>
        )}
        <input
          name="confirmPassword"
          type="password"
          placeholder="Password"
          className="rounded border-2 border-gray-200 px-2 py-1"
        />
        <button
          type="submit"
          className="w-2/4 rounded-xl bg-emerald-600 px-2 py-1 text-white hover:bg-emerald-500 disabled:bg-slate-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
