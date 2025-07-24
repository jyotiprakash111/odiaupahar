// app/coming-soon/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import ThemeToggle from '@/component/ThemeToggle';


export const metadata: Metadata = {
  title: "OdiaUpahar | Coming Soon",
  description: "OdiaUpahar is launching soon!",
};

export default function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* <ThemeToggle /> */}
      <div className="text-center space-y-6 max-w-md">
        {/* 📷 Banner Image */}
        <Image
          src="/odiaupahar.png"
          alt="OdiaUpahar Banner"
          width={300}
          height={160}
          className="banner-img"
          priority
        />
        <h2 className="typing-heading">Odiaupahar.com</h2>
        <h1 className="coming-soon-title">🚀 Coming Soon</h1>
        <p className="coming-soon-text">
          We’re working hard to launch something amazing,<br/>Stay tuned!
        </p>
        <div className="mt-6 flex w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
          />
          <button className="notify-button">
            Notify Me
          </button>
        </div>
        <p className="text-sm text-gray-400 mt-4">We&apos;ll never spam you ✌️</p>
      </div>
    </div>
  );
}
