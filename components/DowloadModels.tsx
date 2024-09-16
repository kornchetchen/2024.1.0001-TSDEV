import React from "react";

interface Model {
  name: string;
  format: string;
  size: string;
}

const models: Model[] = [
  { name: "Phuket Island", format: "JSON", size: "34.05 MB" },
  { name: "Phuket Tourist Dashboard", format: "CSV", size: "8.76 MB" },
  { name: "Phuket Tourism Insights", format: "XML", size: "21.32 MB" },
  { name: "Phuket Curiosity", format: "YAML", size: "11.31 MB" },
];

const DownloadModels: React.FC = () => {
  return (
    <div className="bg-slate-300">
      <div className=" max-w-2xl mx-auto p-4">
        <h2 className="text-xl font-semibold mb-8">
          Downloading Phuket Tourism Dashboard Files{" "}
        </h2>
        <div className="mb-10 space-y-2">
          {models.map((model, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-200"
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
                <div>
                  <p className="font-medium text-sm">{model.name}</p>
                  <p className="text-xs text-gray-500">
                    ({model.format}) ({model.size})
                  </p>
                </div>
              </div>
              <button className="text-blue-500 hover:text-blue-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadModels;
