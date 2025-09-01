export const Box = ({ children, bgColor = "transparent" }) => {
  const style = {
    border: "2px solid #007bff",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem 0",
    backgroundColor: bgColor,
  };

  return <div style={style}>{children}</div>;
};
