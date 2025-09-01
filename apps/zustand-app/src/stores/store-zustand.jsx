import { create } from "zustand";

export const useStore = create((set) => ({
  // State
  todoTitle: "My Todo List",
  todoItems: [],

  // Actions
  updateTitle: (newTitle) => set({ todoTitle: newTitle }),

  addItem: (text) =>
    set((state) => ({
      todoItems: [
        ...state.todoItems,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),

  toggleItem: (id) =>
    set((state) => ({
      todoItems: state.todoItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    })),

  deleteItem: (id) =>
    set((state) => ({
      todoItems: state.todoItems.filter((item) => item.id !== id),
    })),

  editItem: (id, newText) =>
    set((state) => ({
      todoItems: state.todoItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      ),
    })),
}));
