import { useRef } from "react";
import { Button, RenderCounter } from "@repo/ui";
import { useStore } from "../stores/store-context";
import ContextTodoItem from "./ContextTodoItem";

export default function ContextTodoList() {
  const { todoItems, addItem } = useStore();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text.trim()) {
      addItem(text);
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ padding: "1rem", border: "2px solid #007bff" }}>
      <h3>
        Todo Items ({todoItems.filter((item) => !item.completed).length}{" "}
        remaining)
      </h3>
      <RenderCounter name="ContextTodoList" />

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add new todo item..."
          style={{
            padding: "0.5rem",
            marginRight: "0.5rem",
            width: "300px",
            border: "1px solid #007bff",
          }}
        />
        <Button type="submit">Add Item</Button>
      </form>

      <div>
        {todoItems.map((item) => (
          <ContextTodoItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
