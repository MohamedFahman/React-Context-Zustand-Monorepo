import { useRef } from "react";

export const RenderCounter = ({ name }) => {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div style={{ marginTop: "0.5rem", fontFamily: "monospace" }}>
      <span style={{ color: "#666" }}>
        {name} rendered:{" "}
        <strong style={{ color: "blue" }}>{renderCount.current}</strong> times
      </span>
    </div>
  );
};
