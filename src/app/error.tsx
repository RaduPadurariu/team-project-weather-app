"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Error</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-500 mb-6">
        An unexpected error occurred. You can try again or go back home.
      </p>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition-colors"
        >
          Retry
        </button>

        <Link
          href="/"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded transition-colors"
        >
          Go Home
        </Link>
      </div>

      {process.env.NODE_ENV !== "production" && (
        <pre className="mt-6 text-sm text-red-500">{error.message}</pre>
      )}
    </div>
  );
}
