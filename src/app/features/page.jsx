import React from "react";

function Page() {
  return (
    <div className="max-w-[1180px] mx-auto flex flex-col gap-11 px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Our Key Features</h2>
        <p className="max-w-2xl text-lg text-gray-700 leading-relaxed">
          Here, we've listed all the key features of Beyond UI. We're truly
          proud of these features and believe they offer exceptional
          functionality and flexibility, allowing you to effortlessly create
          stunning designs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2 bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-medium">
            Variables, dark mode and responsive
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We use variables for spacing, padding, radius, screen size, and
            screen elements to ensure responsive website sections. Color
            variables are also used for icons, text, background, foreground,
            components, and borders, facilitating smooth transitions between
            light and dark modes.
          </p>
        </div>

        <div className="flex flex-col gap-2 bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-medium">Premium and smart components</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our components are crafted with a smart approach. Most components
            use nested instances, while advanced ones are made from multiple
            parts. This allows for generating numerous instances from a few
            master components, ensuring efficiency and consistency.
          </p>
        </div>

        <div className="flex flex-col gap-2 bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-medium">Slots feature</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Using a technique called "slots", we can swap out components very
            easily from a single component. This gives our teams flexibility to
            create new designs whilst still using the guidelines from our design
            system.
          </p>
        </div>

        <div className="flex flex-col gap-2 bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-medium">Custom product screens</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We've designed various custom SaaS screens tailored to common needs,
            ensuring our product meets diverse requirements effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
