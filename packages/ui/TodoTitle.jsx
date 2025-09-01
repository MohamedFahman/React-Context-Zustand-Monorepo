import { useRef } from "react";
import { RenderCounter } from "./RenderCounter";

export const TodoTitle = ({ title, onUpdateTitle }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = inputRef.current.value;
    if (newTitle.trim()) {
      onUpdateTitle(newTitle);
      inputRef.current.value = "";
    }
  };

  return (
    <div
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        border: "2px dashed #ccc",
      }}
    >
      <h2>Todo List: {title}</h2>
      <RenderCounter name="TodoTitle" />
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Change list title..."
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit">Update Title</button>
      </form>
    </div>
  );
};
