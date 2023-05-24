import { styled } from "@stitches/react";

export const ContainerInput = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  "& label": {
    color: "#e2e8f0",
  },

  "& input": {
    height: "2.25rem",
    borderRadius: "0.35rem",
    padding: "0.35rem",
    border: "none",
  },
});
