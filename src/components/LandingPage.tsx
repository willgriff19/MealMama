import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// Feature cards data
const featureCards = [
  {
    id: 1,
    icon: "/vector.svg",
    text: (
      <>
        <span className="font-extralight">Create meal plans tailored </span>
        <span className="font-bold">just for you</span>
      </>
    ),
    iconPosition: "left",
  },
  {
    id: 2,
    icon: "/vector-1.svg",
    text: (
      <>
        <span className="font-extralight">Keep your grocery bill </span>
        <span className="font-bold">under control</span>
      </>
    ),
    iconPosition: "right",
  },
  {
    id: 3,
    icon: "/vector-2.svg",
    text: (
      <>
        <span className="font-extralight">
          Auto-fill a digital cart with{" "}
        </span>
        <span className="font-bold">exactly </span>
        <span className="font-extralight">what you need</span>
      </>
    ),
    iconPosition: "left",
  },
  {
    id: 4,
    icon: "/group.png",
    text: (
      <>
        <span className="font-extralight">Deliver your groceries </span>
        <span className="font-bold">right to your door</span>
      </>
    ),
    iconPosition: "right",
  },
];

// How it works steps data
const howItWorksSteps = [
  {
    step: 1,
    title: "Tell us about your preferences",
    image: "/image-4.png",
  },
  {
    step: 2,
    title: "Receive and edit your meal plan",
    image: "/image-3.png",
  },
  {
    step: 3,
    title: "Get a text with your prefilled cart",
    image: "/image-2.png",
    isBackgroundImage: true,
  },
];

// Pricing features
const pricingFeatures = [
  "Personalized AI-powered meal planning",
  "Unlimited automatic cart generation",
  "Step-by-step recipes",
  "Text reminders and calendar sync",
  "Built-in budget optimization",
  "Access to new features as they launch",
];

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center relative bg-[#fbfcff] min-h-screen">
      {/* Header with curved green background */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-[#06d6a0] rounded-b-[50%] -z-10" />
      
      {/* Logo */}
      <header className="flex flex-col items-center justify-between gap-6 px-4 md:px-20 py-8 relative self-stretch w-full">
        <div className="text-4xl md:text-6xl font-bold">
          mealmama
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-[150px] py-8 md:py-[50px] relative self-stretch w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start justify-center gap-6 max-w-xl">
          <h1 className="text-center md:text-left font-['Outfit'] font-bold text-[#1e212b] text-4xl md:text-6xl leading-tight">
            Smarter Meal Planning.
            <br />
            Easier Grocery Shopping.
          </h1>

          <p className="text-center md:text-left font-['Inter'] text-[#000000b2] text-xl md:text-2xl leading-normal">
            The only meal planner that orders your groceries for you.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 w-full">
            <Button className="w-full md:w-auto px-8 py-3 bg-[#06d6a0] text-[#1e212b] rounded-md border-2 border-[#1e212b] shadow-[0px_4px_0px_#1e212b] text-xl font-medium hover:bg-[#05c090] transition-colors">
              Try free for 14 days
            </Button>
            <p className="text-[#00000080] text-sm">
              No credit card required to start.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-md">
          <img
            src="/images/meal-plan-screen.png"
            alt="MealMama App"
            className="w-full h-auto rounded-[30px] shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-[#06d6a0] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#1e212b] text-white p-6 rounded-3xl border-none shadow-lg">
            <CardContent className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl">
                <span className="font-light">Create meal plans tailored </span>
                <span className="font-bold">just for you</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1e212b] text-white p-6 rounded-3xl border-none shadow-lg">
            <CardContent className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xl">
                <span className="font-light">Keep your grocery bill </span>
                <span className="font-bold">under control</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1e212b] text-white p-6 rounded-3xl border-none shadow-lg">
            <CardContent className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xl">
                <span className="font-light">Auto-fill a digital cart with </span>
                <span className="font-bold">exactly </span>
                <span className="font-light">what you need</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1e212b] text-white p-6 rounded-3xl border-none shadow-lg">
            <CardContent className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <p className="text-xl">
                <span className="font-light">Deliver your groceries </span>
                <span className="font-bold">right to your door</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          How MealMama Works
        </h2>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-[#1e212b] text-[#06d6a0] rounded-full flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold bg-[#06d6a0] px-4 py-2 rounded-full border-2 border-[#1e212b]">
              Tell us about your preferences
            </h3>
            <div className="w-full max-w-[300px] h-[600px] bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
              <p className="text-gray-500">Preferences Screen</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-[#1e212b] text-[#06d6a0] rounded-full flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold bg-[#06d6a0] px-4 py-2 rounded-full border-2 border-[#1e212b]">
              Receive and edit your meal plan
            </h3>
            <div className="w-full max-w-[300px] h-[600px] bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
              <p className="text-gray-500">Meal Plan Screen</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-[#1e212b] text-[#06d6a0] rounded-full flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold bg-[#06d6a0] px-4 py-2 rounded-full border-2 border-[#1e212b]">
              Get a text with your prefilled cart
            </h3>
            <div className="w-full max-w-[300px] h-[600px] bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
              <p className="text-gray-500">SMS Screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#06d6a0] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Start Meal Planning Smarter Today
          </h2>
          <Button className="px-8 py-3 bg-white text-[#1e212b] rounded-md border-2 border-[#1e212b] shadow-[0px_4px_0px_#1e212b] text-xl font-medium hover:bg-gray-50 transition-colors">
            Try MealMama Free for 14 Days
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-[#1e212b]">
        <p>MealMama © 2024 | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage; 