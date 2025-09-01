import { useRef, useState } from "react";
import { RenderCounter } from "@repo/ui";

// We need a wrapper for TodoItem to make it "smart"
export const ZustandTodoItem = ({ item, onToggle, onDelete, onEdit }) => {
  // This component will only re-render if ITS specific item changes
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const inputRef = useRef();

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(item.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(item.text);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        padding: "0.5rem",
        margin: "0.5rem 0",
        border: "1px solid #ddd",
        backgroundColor: item.completed ? "#f0f0f0" : "white",
      }}
    >
      <RenderCounter name={`ZustandTodoItem-${item.id}`} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
        />

        {isEditing ? (
          <>
            <input
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ flex: 1, padding: "0.25rem" }}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <span
              style={{
                flex: 1,
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};
