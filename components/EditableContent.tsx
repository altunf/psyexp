import { useState } from "react";

interface EditableContentProps {
  initialContent: string;
}

export const EditableContent = ({ initialContent }: EditableContentProps) => {
  const [isContentEditing, setIsContentEditing] = useState(false);
  const [content, setContent] = useState<string>(initialContent);

  const handleContentClick = () => setIsContentEditing(true);
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const handleContentBlur = () => setIsContentEditing(false);
  const handleContentKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) setIsContentEditing(false);
  };

  return (
    <div className="mt-2" onClick={handleContentClick}>
      {isContentEditing ? (
        <textarea
          value={content}
          onChange={handleContentChange}
          onBlur={handleContentBlur}
          onKeyDown={handleContentKeyDown}
          className="w-full min-h-[100px] bg-transparent border-none outline-none focus:ring-1 focus:ring-blue-500 px-1 rounded resize-none"
          autoFocus
          placeholder="Enter content..."
        />
      ) : (
        <div className="min-h-[24px] whitespace-pre-wrap">{String(content)}</div>
      )}
    </div>
  );
};