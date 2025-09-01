import { useRef } from "react";
import { RenderCounter } from "./RenderCounter";
import {TodoItem} from "./TodoItem";

export const TodoList = ({
  items,
  onAddItem,
  onToggleItem,
  onDeleteItem,
  onEditItem,
}) =>{
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text.trim()) {
      onAddItem(text);
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ padding: "1rem", border: "2px solid #eee" }}>
      <h3>
        Todo Items ({items.filter((item) => !item.completed).length} remaining)
      </h3>
      <RenderCounter name="TodoList" />

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
          <TodoItem
            key={item.id}
            item={item}
            onToggle={onToggleItem}
            onDelete={onDeleteItem}
            onEdit={onEditItem}
          />
        ))}
      </div>
    </div>
  );
}
