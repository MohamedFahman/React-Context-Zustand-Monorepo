import { StoreProvider, useStore } from "./stores/store-context";
import { Box, RenderCounter, TodoTitle, TodoList } from "@repo/ui";

const TodoAppContent = () => {
  const {
    todoTitle,
    todoItems,
    updateTitle,
    addItem,
    toggleItem,
    deleteItem,
    editItem,
  } = useStore();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Context API Todo App</h1>
      <Box>
        <RenderCounter name="App" />
        <TodoTitle title={todoTitle} onUpdateTitle={updateTitle} />
        <TodoList
          items={todoItems}
          onAddItem={addItem}
          onToggleItem={toggleItem}
          onDeleteItem={deleteItem}
          onEditItem={editItem}
        />
      </Box>
    </div>
  );
};

function ContextApp() {
  return (
    <StoreProvider>
      <TodoAppContent />
    </StoreProvider>
  );
}

export default ContextApp;
