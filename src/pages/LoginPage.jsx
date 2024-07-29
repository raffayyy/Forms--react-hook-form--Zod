import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

function LoginPage() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center border-2">
        <Login />
        <div className="flex w-1/4 justify-end text-green-700">
          <p>
            <Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
