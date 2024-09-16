import Image from "next/image";
import React from "react";

interface CoolThing {
  id: string;
  title: string;
  description: string;
  viewLink: string;
}

const coolThings: CoolThing[] = [
  {
    id: "01",
    title: "Data Visualization",
    description:
      "Data Visualization: Describe how dashboards present complex data in a visually appealing and easy-to-understand format.",
    viewLink: "Readign more ",
  },
  {
    id: "02",
    title: "Real-Time Insights",
    description:
      "Highlight the advantage of accessing up-to-date information quickly.",
    viewLink: "Readign more ",
  },
  {
    id: "03",
    title: "Decision Making",
    description:
      "Discuss how dashboards aid in making informed decisions based on data trends and patterns.",
    viewLink: "Readign more ",
  },
  {
    id: "04",
    title: "Tourism Metrics",
    description:
      "Display trends in tourist arrivals, hotel occupancy rates, and popular attractions.",
    viewLink: "Readign more ",
  },
  {
    id: "05",
    title: "Weather and Climate Data",
    description: "Showcase weather patterns and seasonal trends.",
    viewLink: "Readign more ",
  },
];

const CoolThingsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">
          Introduction to Data Dashboards
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-2/3 lg:pr-8">
            {coolThings.map((thing) => (
              <div key={thing.id} className="mb-6">
                <h2 className="text-xl font-semibold mb-1 flex items-center">
                  <span className="text-gray-400 mr-3 text-lg">{thing.id}</span>
                  {thing.title}
                </h2>
                <p className="text-gray-600 mb-2">{thing.description}</p>
                <a
                  href="#"
                  className="inline-block text-red-500 text-sm hover:underline"
                >
                  {thing.viewLink}
                </a>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <Image
              src="/images/pklogo.png"
              alt="Space probe near Saturn"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolThingsPage;
