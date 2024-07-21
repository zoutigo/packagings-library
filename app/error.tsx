// app/error.tsx

'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const missing = searchParams.get('missing');

  const missingVariables = missing ? missing.split(',') : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Environment Variables Check</h1>
      {missingVariables.length > 0 ? (
        <>
          <p className="text-lg mb-4">
            The following environment variables are missing:
          </p>
          <ul className="list-disc list-inside">
            {missingVariables.map((variable) => (
              <li key={variable} className="text-red-500">
                {variable}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-lg mb-4 text-green-500">
          All environment variables are set correctly.
        </p>
      )}
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
