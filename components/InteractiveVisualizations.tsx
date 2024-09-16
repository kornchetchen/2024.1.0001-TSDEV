"use client";
import dynamic from "next/dynamic";
const Image = dynamic(() => import("next/image"), { ssr: false });

interface Visualization {
  title: string;
  description: string;
  imageSrc: string;
  action: string;
}

const visualizations: Visualization[] = [
  {
    title: "Phuket Tourism Overview",
    description:
      "Explore comprehensive data on tourism in Phuket, including visitor demographics, popular destinations, cultural insights, and economic impact. Dive into trends over time and understand the dynamics that shape tourism in this tropical paradise.",
    imageSrc: "/images/phuket-beach.jpeg",
    action: "Explore Data",
  },
  {
    title: "Phuket Tourist Arrivals",
    description:
      "Track arrivals of tourists to Phuket and their origins, explore seasonal trends, and analyze factors influencing visitor numbers. Gain insights into the effectiveness of marketing campaigns and policies aimed at promoting tourism.",
    imageSrc: "/images/phuketeco.jpeg",
    action: "Explore Data",
  },
  {
    title: "Phuket Hotel Occupancy Rates",
    description:
      "Analyze occupancy rates of hotels across Phuket, understand peak seasons, and explore factors affecting demand. Use historical data to predict future trends and optimize resource allocation within the hospitality sector.",
    imageSrc: "/images/pklogo.png",
    action: "Explore Data",
  },
  {
    title: "Phuket Beach Conservation",
    description:
      "Monitor efforts to conserve Phuket's pristine beaches and marine life. Explore data on environmental initiatives, pollution levels, and community engagement. Learn about ongoing projects and their impact on sustainable tourism.",
    imageSrc: "/images/pknight.jpeg",
    action: "Explore Data",
  },
  {
    title: "Phuket Economic Impact",
    description:
      "Assess the economic impact of tourism on Phuket's economy, including revenue generation, job creation, and infrastructure development. Dive into economic indicators and analyze the broader implications for local businesses and communities.",
    imageSrc: "/images/th (2).jpeg",
    action: "Explore Data",
  },
  {
    title: "Phuket Economic Impact",
    description:
      "Assess the economic impact of tourism on Phuket's economy, including revenue generation, job creation, and infrastructure development. Dive into economic indicators and analyze the broader implications for local businesses and communities.",
    imageSrc: "/images/th (3).jpeg",
    action: "Explore Data",
  },
];

const InteractiveVisualizations: React.FC = () => {
  return (
    <div className="bg-gray-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Interactive Data Narratives</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visualizations.map((vis, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                style={{ position: "relative", width: "100%", height: "200px" }}
              >
                <Image
                  src={vis.imageSrc}
                  alt={vis.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{vis.title}</h3>
                <p className="text-gray-600 mb-4">{vis.description}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                  {vis.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveVisualizations;
