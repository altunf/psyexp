interface PositionPreviewProps {
  position: "left" | "right" | "top" | "bottom" | "center";
}

export default function PositionPreview({ position }: PositionPreviewProps) {
  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "left-0 top-1/2 -translate-y-1/2";
      case "right":
        return "right-0 top-1/2 -translate-y-1/2";
      case "top":
        return "top-0 left-1/2 -translate-x-1/2";
      case "bottom":
        return "bottom-0 left-1/2 -translate-x-1/2";
      case "center":
      default:
        return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  return (
    <div className="relative w-36 h-36 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
      <div
        className={`absolute rounded-md bg-blue-500 flex items-center justify-center text-white text-xs font-bold ${getPositionClasses()}`}
        style={{ width: `50px`, height: `50px` }}
      >
        {position}
      </div>
    </div>
  );
}
