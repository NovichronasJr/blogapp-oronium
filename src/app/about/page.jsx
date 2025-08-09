import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="max-w-[1180px] w-full h-full mx-auto px-4 flex flex-col gap-12">
      
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-start gap-6 md:w-3/5">
          <h3 className="text-[#8b5cf6] text-2xl">Welcome</h3>
          <h1 className="text-4xl font-semibold">Welcome to Beyond UI</h1>
          <p className="text-xl leading-relaxed text-gray-700">
            Greetings and thank you for choosing our design system. Beyond UI is
            crafted to simplify and speed up your design process by 100 times.
            We spent a couple of months researching and crafting this design
            system to provide you with modern, smart, premium, and easy-to-use
            components and elements.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative md:w-2/5 w-full h-64 md:h-auto">
          <Image
            width={800}
            height={200}
            src="/Beyond_section.jpg"
            alt="Beyond UI"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image */}
        <div className="relative md:w-2/5 w-full h-64 md:h-auto">
          <Image
            width={800}
            height={200}
            src="/inspiration.jpg"
            alt="Inspiration"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 md:w-3/5">
          <h2 className="text-2xl font-semibold">About Beyond UI</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Beyond UI is a premium slot UI kit and design system for Figma. It
            offers advanced high-quality components and customizable templates
            for websites and web applications. Beyond UI stands out by using
            slots as the main method for organizing website sections.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Page;
