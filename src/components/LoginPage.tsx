import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { signIn, signInWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      await signIn(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in with Google');
    }
  };

  return (
    <div className="min-h-screen bg-[#06d6a0] flex flex-col items-center justify-between p-4 sm:p-8">
      {/* Header with Logo */}
      <Link to="/" className="w-full max-w-[333.87px] mb-8">
        <img
          src="/image-1.png"
          alt="MealMama Logo"
          className="w-full h-auto object-contain"
        />
      </Link>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#f8f9fa] rounded-[20px] p-8 border-4 border-[#1e212b] shadow-[0px_8px_0px_#1e212b40]">
        <h1 className="text-3xl font-bold text-[#1e212b] mb-6 text-center">
          Welcome back!
        </h1>

        {error && (
          <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1e212b] mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              className="w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1e212b] mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
              className="w-full"
              placeholder="Enter your password"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#06d6a0] hover:bg-[#06d6a0] text-[#1e212b] border-4 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b40] font-medium text-lg transition-transform duration-200 hover:scale-105"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#f8f9fa] text-gray-500">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            className="mt-6 w-full bg-white hover:bg-white text-[#1e212b] border-4 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b40] font-medium transition-transform duration-200 hover:scale-105 flex items-center justify-center"
            onClick={handleGoogleSignIn}
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </Button>
        </div>

        <p className="mt-8 text-center text-[#1e212b] text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#06d6a0] hover:text-[#05c090] font-medium">
            Create one here
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-[#1e212b] text-sm">
        <p>MealMama © 2025 | All rights reserved.</p>
      </footer>
    </div>
  );
} 