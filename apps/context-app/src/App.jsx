import { Box, RenderCounter } from "@repo/ui";
import {StoreProvider} from "./stores/store-context";
import ContextTodoTitle from "./components/ContextTodoTitle";
import ContextTodoList from "./components/ContextTodoList";

export default function ContextApp() {
  return (
    <StoreProvider>
      <div
        className="app"
        style={{ padding: "2rem", fontFamily: "sans-serif" }}
      >
        <h1>Context API Todo App</h1>
        <Box>
          <RenderCounter name="App" />
          <ContextTodoTitle />
          <ContextTodoList />
        </Box>
      </div>
    </StoreProvider>
  );
}
