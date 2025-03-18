import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";
import { Navigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Loading...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06d6a0] mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="min-h-screen bg-[#fbfcff] flex flex-col items-center p-4 sm:p-8">
      {/* Header */}
      <header className="w-full max-w-7xl flex justify-between items-center mb-8">
        <img
          src="/image-1.png"
          alt="MealMama Logo"
          className="h-12 sm:h-16 object-contain"
        />
        <div className="flex items-center gap-4">
          <span className="text-[#1e212b] hidden sm:inline">
            {user.email}
          </span>
          <Button
            onClick={signOut}
            className="bg-white text-[#1e212b] border-2 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b]"
          >
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl flex-grow">
        <div className="bg-white rounded-[20px] p-8 border-2 border-[#1e212b] shadow-[0px_8px_0px_#00000040]">
          <h1 className="text-3xl font-bold text-[#1e212b] mb-6">Welcome to MealMama!</h1>
          <p className="text-[#1e212b] text-lg mb-4">
            Your personalized meal planning journey begins here. We're currently building amazing features to help you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#1e212b]">
            <li>Plan your weekly meals with ease</li>
            <li>Generate shopping lists automatically</li>
            <li>Discover new recipes tailored to your preferences</li>
            <li>Track your nutrition goals</li>
          </ul>
          <p className="mt-6 text-[#1e212b] text-lg">
            Stay tuned as we roll out these exciting features!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl py-8 text-center text-[#1e212b] text-sm">
        <p>MealMama © 2025 | All rights reserved.</p>
      </footer>
    </div>
  );
} 