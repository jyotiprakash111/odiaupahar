// app/coming-soon/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import ThemeToggle from "@/component/ThemeToggle";

export const metadata: Metadata = {
  title: "OdiaUpahar | Coming Soon",
  description: "OdiaUpahar is launching soon!",
};

export default function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* Center Layout with Side Dancers */}
      <div className="flex items-center gap-6 flex-wrap justify-center">
        
        {/* Left Dancer */}
        {/* <Image
          src="/odishi-dancer.jpg"
          alt="Odissi Dancer Left"
          width={120}
          height={250}
          className="hidden sm:block"
        /> */}

        {/* Center Content */}
        <div className="text-center space-y-6 max-w-md">
          {/* <ThemeToggle /> */}
          <Image
            src="/odiaupahar.png"
            alt="OdiaUpahar Banner"
            width={300}
            height={160}
            className="banner-img mx-auto"
            priority
          />
          <h2 className="typing-heading text-xl font-semibold">Odiaupahar.com</h2>
          <h1 className="coming-soon-title coming-soon-glow text-3xl font-bold">
            <span className="rocket-icon launch-style">🚀</span> Coming Soon
          </h1>
          <p className="coming-soon-text text-gray-300">
            We’re working hard to launch something amazing,<br />Stay tuned!
          </p>
          <div className="mt-6 flex w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-1 px-4 py-2 rounded-l-md text-black"
            />
            <button className="notify-button px-4 py-2 bg-yellow-500 text-black rounded-r-md font-medium">
              Notify Me
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">We&apos;ll never spam you ✌️</p>
        </div>

        {/* Right Dancer */}
        {/* <Image
          src="/odishi-dancer.jpg"
          alt="Odissi Dancer Right"
          width={250}
          height={250}
          className="hidden sm:block"
        /> */}
      </div>
    </div>
  );
}
