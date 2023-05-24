import { styled } from "@stitches/react";

export const ContainerLogin = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ContentLogin = styled("div", {
  width: "100%",
  maxWidth: "450px",
  display: "flex",
  padding: "2rem",
  background: "#222",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "12px",
  gap: "1rem",

  "& .logo": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
});
