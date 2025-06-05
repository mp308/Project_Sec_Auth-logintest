'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Main() {
  const router = useRouter()
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Welcome to the Main Page
        </h1>
        <div className='w-full max-w-sm p-6  '>
          <button
            type="button"
            onClick={() => router.push('/signin')}
            className="w-full bg-red-500 text-white py-2 rounded mb-4"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={() => router.push('/signup')}
            className="w-full bg-red-500 text-white py-2 rounded mb-4"
          >
            Sign Up
          </button>
        </div>

      </div>
    </>
  );
}
