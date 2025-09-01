import { useRef } from "react";
import { RenderCounter, TodoItem } from "@repo/ui";
import { useStore } from "../stores/store-zustand";
import { ZustandTodoItem } from "./ZustandTodoItem";

// This is a "smart" component that knows about the store
export const ZustandTodoList = () => {
  // This component only subscribes to the items array
  const items = useStore((state) => state.todoItems);
  const addItem = useStore((state) => state.addItem);
  const toggleItem = useStore((state) => state.toggleItem);
  const deleteItem = useStore((state) => state.deleteItem);
  const editItem = useStore((state) => state.editItem);

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
    <div style={{ padding: "1rem", border: "2px solid #eee" }}>
      <h3>
        Todo Items ({items.filter((item) => !item.completed).length} remaining)
      </h3>
      <RenderCounter name="ZustandTodoList" />

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add new todo item..."
          style={{ padding: "0.5rem", marginRight: "0.5rem", width: "300px" }}
        />
        <button type="submit">Add Item</button>
      </form>

      <div>
        {items.map((item) => (
          <ZustandTodoItem
            key={item.id}
            item={item}
            onToggle={toggleItem}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        ))}
      </div>
    </div>
  );
};
