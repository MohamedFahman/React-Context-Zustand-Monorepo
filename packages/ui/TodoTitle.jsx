import { useRef } from "react";
import { RenderCounter } from "./RenderCounter";
import { Button } from "./Button";

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
        border: "2px solid #007bff",
      }}
    >
      <h2>{title}</h2>
      <RenderCounter name="TodoTitle" />
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Change list title..."
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <Button type="submit">Update Title</Button>
      </form>
    </div>
  );
};
