import { styled } from "@stitches/react";

export const Button = styled("button", {
  marginTop: "auto",
  backgroundColor: "$primary",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",
  transition: "all .2s",
  width: "100%",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$primaryLight",
  },
});
