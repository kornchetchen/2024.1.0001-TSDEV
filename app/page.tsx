import VideoHeader from "@/components/VideoHeader";
import CoolThings from "@/components/Coolthings";
import DownloadModels from "@/components/DowloadModels";
import InteractiveVisualizations from "@/components/InteractiveVisualizations";
export default function Home() {
  return (
    <div>
      {" "}
      <VideoHeader />
      <CoolThings />
      <DownloadModels />
      <VideoHeader />
      <InteractiveVisualizations />
    </div>
  );
}
