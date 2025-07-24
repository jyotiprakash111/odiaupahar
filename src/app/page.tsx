// app/coming-soon/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import ThemeToggle from '@/component/ThemeToggle';


export const metadata: Metadata = {
  title: "Coming Soon | OdiaUpahar",
  description: "OdiaUpahar is launching soon!",
};

export default function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      {/* <ThemeToggle /> */}
      <div className="text-center space-y-6 max-w-md">
        {/* 📷 Banner Image */}
        <Image
          src="/odiaupahar.png" // You can use /banner.png or even remote URL
          alt="OdiaUpahar Banner"
          width={300}
          height={160}
          className="mb-6 rounded-full shadow-xl border-4 border-yellow-400 object-cover mx-auto"
          priority
        />
        <h2 className="text-4xl font-semibold text-yellow-400 typing mx-auto w-fit">
          OdiaUpahar.com
        </h2>

        <h1 className="text-5xl font-bold">🚀 Coming Soon</h1>
        <p className="text-gray-300 text-lg">
          We’re working hard to launch something amazing. Stay tuned!
        </p>
        <div className="mt-6 flex w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="
      flex-1 px-4 py-3
      rounded-l-md
      text-black bg-white border border-gray-300
      dark:text-white dark:bg-gray-800 dark:border-gray-600
      focus:outline-none focus:ring-2 focus:ring-blue-500
    "
          />
          <button
            className="
      px-6 py-3
      rounded-r-md
      bg-blue-600 hover:bg-blue-700
      text-white font-medium
    "
          >
            Notify Me
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">We&apos;ll never spam you ✌️</p>
      </div>
    </div>
  );
}
