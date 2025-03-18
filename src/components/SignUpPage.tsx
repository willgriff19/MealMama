import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen bg-[#fbfcff] flex flex-col items-center justify-between p-4 sm:p-8">
      {/* Header with Logo */}
      <Link to="/" className="w-full max-w-[333.87px] mb-8">
        <img
          src="/image-1.png"
          alt="MealMama Logo"
          className="w-full h-auto object-contain"
        />
      </Link>

      {/* Sign Up Card */}
      <div className="w-full max-w-md bg-white rounded-[20px] shadow-lg p-8 border-2 border-[#1e212b]">
        <h1 className="text-3xl font-bold text-[#1e212b] mb-6 text-center">
          Create your account
        </h1>

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
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1e212b] mb-2">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              required
              className="w-full"
              placeholder="Confirm your password"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#06d6a0] hover:bg-[#06d6a0] text-[#1e212b] border-2 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b] font-medium text-lg"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            className="mt-6 w-full bg-white text-[#1e212b] border-2 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b] font-medium"
            onClick={() => {
              // Handle Google Auth
              console.log("Google Auth clicked");
            }}
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />
            Google
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-[#1e212b] text-sm">
        <p>MealMama © 2025 | All rights reserved.</p>
      </footer>
    </div>
  );
} 