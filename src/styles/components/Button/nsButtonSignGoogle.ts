import { styled } from "@stitches/react";

export const Button = styled("button", {
  marginTop: "auto",
  backgroundColor: "#fff",
  border: 0,
  borderRadius: 8,
  //   padding: "0.75rem",
  height: "61px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",
  transition: "all .2s",
  width: "100%",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  color: "$primary",

  "& span": {
    flex: "1",
    position: "relative",
    right: "1.65rem",
  },

  "& svg": {
    padding: "0 1rem",
    boxSizing: "content-box",
    height: "100%",
    borderRight: "1px solid $primaryLight",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$primaryLight",
    color: "$white",
  },
});
