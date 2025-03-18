import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";
import { Navigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return (
    <div className="min-h-screen bg-[#fbfcff] flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1e212b]">Welcome, {user.email}</h1>
          <Button
            onClick={signOut}
            className="bg-white text-[#1e212b] border-2 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b]"
          >
            Sign Out
          </Button>
        </div>
        
        <div className="bg-white rounded-[20px] p-8 border-2 border-[#1e212b] shadow-[0px_8px_0px_#00000040]">
          <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Your Dashboard</h2>
          <p className="text-[#1e212b]">Welcome to MealMama! Your dashboard is coming soon.</p>
        </div>
      </div>
    </div>
  );
} 