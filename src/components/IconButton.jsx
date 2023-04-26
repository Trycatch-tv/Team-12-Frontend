import { styled } from "@nextui-org/react";

// IconButton component will be available as part of the core library soon
export const IconButton = styled("button", {
  dflex: "center",
  border: "none",
  outline: "none",
  cursor: "default",
  padding: "0",
  margin: "0",
  bg: "transparent",
  transition: "$default",
  "&:hover": {
    opacity: "0.8",
    transform: "scale(1.2)",
    cursor: "pointer",
  },
  "&:active": {
    opacity: "0.6",
    cursor: "default",
  },
});
