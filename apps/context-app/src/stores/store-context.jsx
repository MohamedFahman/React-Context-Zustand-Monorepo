import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  const [todoTitle, setTodoTitle] = useState("My Todo List");
  const [todoItems, setTodoItems] = useState([]);

  // Todo Title actions
  const updateTitle = (newTitle) => {
    setTodoTitle(newTitle);
  };

  // Todo Items actions
  const addItem = (text) => {
    const newItem = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodoItems((prev) => [...prev, newItem]);
  };

  const toggleItem = (id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  const editItem = (id, newText) => {
    setTodoItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  const value = {
    todoTitle,
    todoItems,
    updateTitle,
    addItem,
    toggleItem,
    deleteItem,
    editItem,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
