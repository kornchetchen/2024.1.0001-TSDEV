// components/VisualizationCard.tsx
import Image from "next/image";
import Link from "next/link";

interface VisualizationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const VisualizationCard: React.FC<VisualizationCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <a className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            Start Exploring
          </a>
        </Link>
      </div>
    </div>
  );
};

export default VisualizationCard;
