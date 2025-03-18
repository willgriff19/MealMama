import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import React, { useState } from "react";
import EmailCollectionDialog from "./EmailCollectionDialog";
import { Link } from 'react-router-dom';
import { Input } from './ui/input';

export default function LandingPageWeb() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [email, setEmail] = useState('');

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    // For now, just close the popup and show a thank you message
    alert('Thank you for your interest! We\'ll notify you when we launch.');
    setShowEmailPopup(false);
    setEmail('');
  };

  // Feature cards data
  const featureCards = [
    {
      icon: <img src="/Utensils icon.svg" alt="Utensils" className="w-[59px] h-[61px]" />,
      text: (
        <>
          <span className="font-extralight">Create meal plans tailored </span>
          <span className="font-bold">just for you</span>
        </>
      ),
      position: "left",
    },
    {
      icon: <img src="/money icon.svg" alt="Money" className="w-[63px] h-16" />,
      text: (
        <>
          <span className="font-extralight">Keep your grocery bill </span>
          <span className="font-bold">under control</span>
        </>
      ),
      position: "right",
    },
    {
      icon: <img src="/cart icon.svg" alt="Shopping Cart" className="w-[61.39px] h-[56.43px]" />,
      text: (
        <>
          <span className="font-extralight">
            Auto-fill a digital cart with{" "}
          </span>
          <span className="font-bold">exactly </span>
          <span className="font-extralight">what you need</span>
        </>
      ),
      position: "left",
    },
    {
      icon: <img src="/Delivery icon.png" alt="Delivery" className="w-[60px] h-[60px] sm:w-[79.2px] sm:h-[64.56px] object-contain" />,
      text: (
        <>
          <span className="font-extralight">Deliver your groceries </span>
          <span className="font-bold">right to your door</span>
        </>
      ),
      position: "right",
    },
  ];

  // How it works steps data
  const howItWorksSteps = [
    {
      number: "1",
      title: "Tell us about your diet, goals, and kitchenware",
      image: "/image-4.png",
    },
    {
      number: "2",
      title: "Receive, edit, and approve your meal plan",
      image: "/image-3.png",
    },
    {
      number: "3",
      title: "One-click cart approval for delivery",
      image: "/image-2.png",
    },
  ];

  // Pricing features
  const pricingFeatures = [
    "Personalized AI-powered meal planning",
    "Unlimited automatic cart generation",
    "Step-by-step recipes",
    "Text reminders and calendar sync",
    "Built-in budget optimization",
    "Add and save your favorite meals",
    "Access to new features as they launch",
  ];

  return (
    <div className="flex flex-col items-center relative bg-[#fbfcff] border-none">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-[44px] px-4 sm:px-8 md:px-20 py-4 sm:py-8 relative self-stretch w-full flex-[0_0_auto] bg-[#fbfcff] border-none">
        <img
          className="relative w-[200px] sm:w-[280px] md:w-[333.87px] h-auto object-cover"
          alt="MealMama Logo"
          src="/image-1.png"
        />

        <Button
          onClick={() => setShowEmailPopup(true)}
          className="relative px-4 sm:px-[29.95px] py-2 sm:py-[9.98px] bg-[#06d6a0] hover:bg-[#06d6a0] rounded-[4.99px] overflow-hidden border-2 border-solid border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b] font-medium text-[#1e212b] text-base sm:text-xl md:text-2xl transition-transform duration-200 hover:scale-105 active:scale-100 w-full sm:w-auto text-center"
        >
          Start Meal Planning Smarter—Try for Free!
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-[56px] px-4 sm:px-8 md:px-[150px] py-8 sm:py-[49.92px] relative w-full border-none">
        <div className="flex flex-col items-center md:items-start justify-center gap-6 relative w-full md:w-auto">
          <h1 className="w-full font-display font-bold text-[#1e212b] text-3xl sm:text-5xl md:text-[63.9px] text-center md:text-left tracking-[0] leading-tight [text-shadow:0px_2px_1px_#1e212b40] whitespace-nowrap overflow-hidden">
            Smarter Meal Planning.
          </h1>

          <h1 className="w-full font-display font-bold text-[#1e212b] text-3xl sm:text-5xl md:text-[63.9px] text-center md:text-left tracking-[0] leading-tight [text-shadow:0px_2px_1px_#1e212b3d] whitespace-nowrap overflow-hidden">
            Easier Grocery Shopping.
          </h1>

          <p className="w-full font-sans font-normal text-[#000000b2] text-lg sm:text-xl md:text-2xl text-center md:text-left tracking-[0] leading-normal">
            The only AI meal planner that automates your grocery shopping.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 w-full">
            <Button
              onClick={() => setShowEmailPopup(true)}
              className="px-6 sm:px-[29.95px] py-2 sm:py-[9.98px] bg-[#06d6a0] hover:bg-[#06d6a0] rounded-[4.99px] overflow-hidden border-2 border-solid border-[#1e212b] shadow-[0px_3.99px_0px_#1e212b] font-medium text-[#1e212b] text-lg sm:text-xl md:text-2xl transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              Try free for 14 days.
            </Button>
            <p className="font-sans font-normal text-[#00000080] text-sm sm:text-base">
              No credit card required to start.
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto max-w-[568px]">
          <img
            className="w-full h-auto object-contain"
            alt="MealMama App Preview"
            src="/image-5.png"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col items-center justify-center gap-8 sm:gap-12 py-8 sm:py-16 relative w-full bg-[#06d6a0] border-none">
        <h2 className="relative w-fit [text-shadow:0px_3px_7.7px_#1e212b] font-display font-bold text-[#fbfcff] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center tracking-[0] leading-normal px-4">
          Let MealMama...
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-16 w-full max-w-[1200px] mx-auto">
          {featureCards.map((feature, index) => (
            <Card
              key={`feature-${index}`}
              className="flex w-full h-auto min-h-[120px] sm:min-h-[156px] items-center justify-center gap-4 sm:gap-[27px] px-4 sm:px-8 md:px-[53px] py-6 sm:py-8 md:py-[47px] bg-[#1e212b] rounded-[42px] overflow-hidden shadow-[0px_4px_0px_3px_#00000040] border-none transition-all duration-200 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.3)] cursor-pointer"
            >
              <CardContent className="flex items-center justify-center gap-4 sm:gap-[27px] p-0 border-none w-full">
                {feature.position === "right" ? (
                  <>
                    <div className="flex-1 font-sans text-[#fbfcff] text-base sm:text-lg md:text-xl lg:text-[24px] text-left sm:text-center leading-tight">
                      {feature.text}
                    </div>
                    <div className="flex-shrink-0 w-[40px] sm:w-[50px] md:w-auto">
                      {feature.icon}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-shrink-0 w-[40px] sm:w-[50px] md:w-auto">
                      {feature.icon}
                    </div>
                    <div className="flex-1 font-sans text-[#fbfcff] text-base sm:text-lg md:text-xl lg:text-[24px] text-left sm:text-center leading-tight">
                      {feature.text}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-8">
          <p className="w-fit font-sans font-medium text-[#1e212bed] text-lg sm:text-xl md:text-2xl text-center">
            Smarter meal planning is just one click away!
          </p>
          <Button
            onClick={() => setShowEmailPopup(true)}
            className="px-6 sm:px-[50px] py-2 sm:py-[9.98px] bg-[#fbfcff] hover:bg-[#fbfcff] rounded-[4.99px] overflow-hidden border-4 border-solid border-[#1e212b] shadow-[0px_3.99px_0px_1px_#1e212b80] font-medium text-[#1e212b] text-lg sm:text-xl md:text-2xl transition-transform duration-200 hover:scale-105 active:scale-100"
          >
            Try MealMama for Free!
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col min-h-[600px] sm:min-h-[800px] md:min-h-[1007px] items-center justify-center gap-8 sm:gap-12 relative w-full border-none py-12 sm:py-16">
        <div className="flex items-center justify-center w-full px-4 sm:px-8">
          <h2 className="relative font-display font-bold text-[#1e212b] text-4xl sm:text-5xl md:text-7xl lg:text-[95.9px] text-center tracking-[0] leading-normal [text-shadow:0px_2px_1px_#1e212b40] whitespace-nowrap">
            How MealMama Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 md:gap-[33.48px] w-full max-w-[1200px] mx-auto px-4 sm:px-8">
          {howItWorksSteps.map((step, index) => (
            <div
              key={`step-${index}`}
              className="flex flex-col items-center justify-start gap-[12.4px]"
            >
              <div className="inline-flex items-center justify-center w-[60px] h-[60px] sm:w-[94px] sm:h-[94px] bg-[#1e212b] rounded-full overflow-hidden">
                <div className="font-sans font-normal text-[#06d6a0] text-3xl sm:text-4xl md:text-5xl text-center">
                  {step.number}
                </div>
              </div>

              <div className="flex items-center justify-center min-h-[40px] px-4 sm:px-6 py-2 relative w-full max-w-[280px] bg-[#06d6a0] rounded-[19px] overflow-hidden shadow-[0px_4px_0px_3px_#00000040] border-none transition-all duration-200 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.3)]">
                <div className="font-sans font-bold text-[#1e212b] text-base sm:text-lg md:text-[19.8px] text-center">
                  {step.title}
                </div>
              </div>

              <img
                className="relative w-full max-w-[280px] sm:max-w-[279.04px] h-[400px] sm:h-[570.48px] object-contain sm:object-cover rounded-[31px] transition-all duration-200 hover:scale-105 hover:shadow-[0px_8px_16px_rgba(0,0,0,0.2)] cursor-pointer"
                alt={`Step ${step.number}`}
                src={step.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col min-h-[700px] items-center justify-center gap-8 sm:gap-12 py-12 sm:py-20 relative w-full bg-[#06d6a0] border-none px-4 sm:px-8">
        <h2 className="relative font-display font-bold text-[#fbfcff] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center tracking-[0] leading-normal [text-shadow:0px_3px_7.7px_#1e212b]">
          Pricing
        </h2>

        <Card className="flex flex-col items-center justify-center pt-8 sm:pt-10 pb-10 px-6 sm:px-8 md:px-[30px] bg-[#1e212b] rounded-[90px] overflow-hidden shadow-[0px_8px_0px_#00000040] border-none w-full max-w-[600px]">
          <CardContent className="p-0 flex flex-col items-center gap-8 sm:gap-10 border-none w-full">
            <h3 className="relative w-fit font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center tracking-[0] leading-normal">
              <span className="font-bold">$12</span>
              <span className="font-extralight">
                /month
              </span>
            </h3>

            <div className="w-full px-4 sm:px-[18px]">
              <div className="relative w-full font-sans font-normal text-white text-lg sm:text-xl md:text-2xl tracking-[0] leading-normal">
                <span className="font-bold block mb-6">
                  What&apos;s included:
                </span>
                <ol className="list-decimal list-inside space-y-2">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="font-light">{feature}</li>
                  ))}
                </ol>
              </div>
            </div>

            <Button
              onClick={() => setShowEmailPopup(true)}
              className="px-6 sm:px-[50px] py-2 sm:py-[9.98px] bg-[#06d6a0] hover:bg-[#06d6a0] rounded-[4.99px] overflow-hidden border-4 border-solid border-[#fbfcff] shadow-[0px_3.99px_0px_1px_#ffffff80] font-medium text-[#1e212b] text-lg sm:text-xl md:text-2xl transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              Start free trial today!
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="flex h-[38px] items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full bg-[#fbfcff] border-none">
        <p className="relative w-fit mt-[-6.50px] mb-[-4.50px] font-sans font-light text-black text-base sm:text-xl md:text-2xl text-center tracking-[0] leading-normal">
          MealMama © 2025 | All rights reserved.
        </p>
      </footer>

      {/* Email Collection Popup */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-[#1e212b] mb-4">
              Join the Waitlist
            </h2>
            <p className="text-[#1e212b] mb-6">
              Be the first to know when MealMama launches. Enter your email below.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
                required
              />
              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-[#06d6a0] text-white hover:bg-[#05c090]"
                >
                  Join Waitlist
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowEmailPopup(false)}
                  className="flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 