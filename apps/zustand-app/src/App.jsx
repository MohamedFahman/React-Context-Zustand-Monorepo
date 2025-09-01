import { Box, RenderCounter } from "@repo/ui";
import ZustandTodoTitle from "./components/ZustandTodoTitle";
import ZustandTodoList from "./components/ZustandTodoList";

export default function ZustandApp() {
  return (
    <div className="app" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Zustand Todo App</h1>
      <Box>
        <RenderCounter name="App" />
        <ZustandTodoTitle />
        <ZustandTodoList />
      </Box>
    </div>
  );
}
