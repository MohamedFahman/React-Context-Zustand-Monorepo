import { useRef } from "react";
import { RenderCounter, Button } from "@repo/ui";
import { useStore } from "../stores/store-context";

export default function ContextTodoTitle() {
  const { todoTitle, updateTitle } = useStore();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = inputRef.current.value;
    if (newTitle.trim()) {
      updateTitle(newTitle);
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
      <h2>{todoTitle}</h2>
      <RenderCounter name="ContextTodoTitle" />
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Change list title..."
          style={{ padding: "0.5rem", marginRight: "0.5rem", border: "1px solid #007bff" }}
        />
        <Button type="submit">Update Title</Button>
      </form>
    </div>
  );
}
