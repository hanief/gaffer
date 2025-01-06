"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl text-center">
          Sign in to continue
        </h5>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-3 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <Image 
            src="/google.svg" 
            alt="Google Logo" 
            width={20} 
            height={20}
            className="bg-white rounded-full p-1"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
