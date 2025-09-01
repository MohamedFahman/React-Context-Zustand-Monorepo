import { useRef, useState } from "react";
import { RenderCounter, Button } from "@repo/ui";
import { useStore } from "../stores/store-zustand";

export default function ZustandTodoItem({ item }) {
  const toggleItem = useStore((state) => state.toggleItem);
  const deleteItem = useStore((state) => state.deleteItem);
  const editItem = useStore((state) => state.editItem);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);
  const inputRef = useRef();

  const handleSave = () => {
    if (editText.trim()) {
      editItem(item.id, editText);
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
        border: "1px solid #007bff",
        backgroundColor: item.completed ? "#f0f0f0" : "white",
      }}
    >
      <RenderCounter name={`ZustandTodoItem-${item.id}`} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleItem(item.id)}
        />

        {isEditing ? (
          <>
            <input
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ flex: 1, padding: "0.25rem" }}
            />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
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
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={() => deleteItem(item.id)}>Delete</Button>{" "}
          </>
        )}
      </div>
    </div>
  );
};
