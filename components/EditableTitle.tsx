import { NodeHeaderTitle } from "@/components/reactflow-ui/node-header";
import { useState } from "react";

interface EditableTitleProps {
  initialTitle: string;
}

export const EditableTitle = ({ initialTitle }: EditableTitleProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState<string>(initialTitle);

  const handleTitleClick = () => setIsEditing(true);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const handleTitleBlur = () => setIsEditing(false);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  return (
    <div onClick={handleTitleClick}>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none focus:ring-1 focus:ring-blue-500 px-1 rounded"
          autoFocus
        />
      ) : (
        <NodeHeaderTitle>{String(title)}</NodeHeaderTitle>
      )}
    </div>
  );
};