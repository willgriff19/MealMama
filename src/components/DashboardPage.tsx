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

  const quickActions = [
    { title: "Create Meal Plan", icon: "🍽️", action: () => console.log("Create meal plan") },
    { title: "Shopping List", icon: "🛒", action: () => console.log("View shopping list") },
    { title: "Add Recipe", icon: "📝", action: () => console.log("Add recipe") },
    { title: "Set Preferences", icon: "⚙️", action: () => console.log("Set preferences") },
  ];

  const upcomingMeals = [
    { day: "Monday", meal: "Grilled Chicken Salad", time: "Lunch" },
    { day: "Monday", meal: "Pasta Primavera", time: "Dinner" },
    { day: "Tuesday", meal: "Smoothie Bowl", time: "Breakfast" },
    { day: "Tuesday", meal: "Fish Tacos", time: "Dinner" },
  ];

  const stats = [
    { label: "Meals Planned", value: "14" },
    { label: "Money Saved", value: "$45" },
    { label: "Recipes Saved", value: "8" },
    { label: "Shopping Lists", value: "2" },
  ];

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
            className="bg-white hover:bg-white text-[#1e212b] border-4 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b40] transition-transform duration-200 hover:scale-105"
          >
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[20px] p-6 border-4 border-[#1e212b] shadow-[0px_8px_0px_#1e212b40]">
            <h2 className="text-2xl font-bold text-[#1e212b] mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className="flex flex-col items-center justify-center p-4 bg-[#f8f9fa] rounded-lg border-2 border-[#1e212b] transition-transform duration-200 hover:scale-105"
                >
                  <span className="text-2xl mb-2">{action.icon}</span>
                  <span className="text-sm font-medium text-[#1e212b]">{action.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-8 bg-white rounded-[20px] p-6 border-4 border-[#1e212b] shadow-[0px_8px_0px_#1e212b40]">
            <h2 className="text-2xl font-bold text-[#1e212b] mb-6">Your Progress</h2>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[#f8f9fa] rounded-lg border-2 border-[#1e212b]">
                  <div className="text-2xl font-bold text-[#06d6a0]">{stat.value}</div>
                  <div className="text-sm text-[#1e212b]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Meal Plan Overview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[20px] p-6 border-4 border-[#1e212b] shadow-[0px_8px_0px_#1e212b40]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1e212b]">This Week's Meal Plan</h2>
              <Button 
                className="bg-[#06d6a0] hover:bg-[#06d6a0] text-[#1e212b] border-4 border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b40] transition-transform duration-200 hover:scale-105"
              >
                View Full Plan
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingMeals.map((meal, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-lg border-2 border-[#1e212b]"
                >
                  <div>
                    <div className="font-medium text-[#1e212b]">{meal.meal}</div>
                    <div className="text-sm text-gray-600">{meal.day} - {meal.time}</div>
                  </div>
                  <Button
                    className="bg-white hover:bg-white text-[#1e212b] border-2 border-[#1e212b] shadow-[0px_2px_0px_#1e212b40] transition-transform duration-200 hover:scale-105"
                  >
                    View Recipe
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#f8f9fa] rounded-lg border-2 border-[#1e212b]">
              <h3 className="text-lg font-medium text-[#1e212b] mb-2">Shopping List Summary</h3>
              <p className="text-gray-600">12 items needed for the next 3 days</p>
              <Button 
                className="mt-4 w-full bg-white hover:bg-white text-[#1e212b] border-2 border-[#1e212b] shadow-[0px_2px_0px_#1e212b40] transition-transform duration-200 hover:scale-105"
              >
                View Shopping List
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl py-8 text-center text-[#1e212b] text-sm">
        <p>MealMama © 2025 | All rights reserved.</p>
      </footer>
    </div>
  );
} 