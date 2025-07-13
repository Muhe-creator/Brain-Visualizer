import { useState } from "react";

// Use real brain images (placed in the public folder)
const brainImgSrc = "/brain1.png";

// Use SVG paths to define the actual shape of the hot zone(can be further expanded)
const brainRegions = [
  {
    id: "frontal",
    name: "Frontal Lobe",
    description:
      "Responsible for decision making, problem solving, and motor function.",
    path: "M 60 120 L 60 120 L 60 120 L 80 100 L 80 100 L 100 80 L 160 40 L 200 40 L 200 40 L 200 60 L 200 60 L 180 80 L 180 100 L 160 120 L 160 180 L 180 200 L 180 220 L 140 240 L 120 280 L 80 280 L 40 260 L 20 240 L 20 200 L 20 180 L 40 140 L 60 120 Z",
  },
  {
    id: "parietal",
    name: "Parietal Lobe",
    description:
      "Processes sensory information such as touch, temperature, and pain.",
    path: " M 240 0 L 240 0 L 260 0 L 280 0 L 240 20 L 240 20 L 220 40 L 240 60 L 200 100 L 200 140 L 220 160 L 220 180 L 240 180 L 260 160 L 280 160 L 300 140 L 340 140 L 380 120 L 380 80 L 400 60 L 340 20 L 280 0 Z",
  },
  {
    id: "temporal",
    name: "Temporal Lobe",
    description:
      "Involved in hearing, memory, and understanding language.",
    path: "M 280 170 L 280 170 L 340 170 L 360 190 L 380 210 L 380 250 L 340 270 L 320 290 L 280 290 L 220 330 L 180 350 L 120 330 L 120 290 L 140 270 L 140 250 L 180 230 L 220 230 L 240 210 L 260 210 L 280 190 L 280 170 Z",
  },
  {
    id: "occipital",
    name: "Occipital Lobe",
    description: "Primary visual processing center.",
    path: "M 420 40 L 440 100 L 440 120 L 440 120 L 440 160 L 460 180 L 460 220 L 480 200 L 500 200 L 520 140 L 480 100 L 460 60 L 400 40 Z",
  },
];

export default function BrainVisualizer() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Brain Visualizer</h1>

      {/* Image + SVG Hot Zone */}
      <div className="relative w-[500px] max-w-full">
        {/* Brain background image */}
        <img
          src={brainImgSrc}
          alt="Brain"
          className="w-full rounded-lg shadow-md"
        />

        {/* Hot zone overlay layer: SVG path area */}
        <svg
          viewBox="0 0 500 300"
          className="absolute top-0 left-0 w-full h-full"
        >
          {brainRegions.map((region) => (
            <path
              key={region.id}
              d={region.path}
              fill="transparent"
              stroke="transparent"
              onClick={() => setSelectedRegion(region)}
              onMouseEnter={(e) => (e.target.style.fill = "rgba(59,130,246,0.2)")} // hover: light blue
              onMouseLeave={(e) => (e.target.style.fill = "transparent")}
              style={{
                cursor: "pointer",
                transition: "0.2s",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Display details of the area */}
      {selectedRegion && (
        <div className="mt-6 bg-white p-4 rounded shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold mb-2">
            {selectedRegion.name}
          </h2>
          <p className="text-gray-700">{selectedRegion.description}</p>
        </div>
      )}
    </div>
  );
}
