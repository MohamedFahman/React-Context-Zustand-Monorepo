import { useRef, useState } from "react";
import { RenderCounter } from "./RenderCounter";

export const TodoItem = ({ item, onToggle, onDelete, onEdit }) => {
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
      <RenderCounter name={`TodoItem-${item.id}`} />
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
            <button onClick={handleSave} style={{ padding: "0.25rem 0.5rem" }}>
              Save
            </button>
            <button
              onClick={handleCancel}
              style={{ padding: "0.25rem 0.5rem" }}
            >
              Cancel
            </button>
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
            <button
              onClick={() => setIsEditing(true)}
              style={{ padding: "0.25rem 0.5rem" }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(item.id)}
              style={{ padding: "0.25rem 0.5rem" }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};
