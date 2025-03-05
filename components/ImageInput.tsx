import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

export function ImageInput() {
  const { selectedItem, setNodeImage, getNodeImage } = useStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const existingImage: any = getNodeImage(selectedItem.itemId);
    setSelectedImage(existingImage);
  }, [selectedItem.itemId, setSelectedImage]);

  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setSelectedImage(imageUrl);
        setNodeImage(selectedItem.itemId, imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Image</Label>
      <Input
        id="picture"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div className="mt-2">
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full h-auto rounded-lg"
            style={{ maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
}
