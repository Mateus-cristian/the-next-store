import { styled } from "@stitches/react";

export const Header = styled("header", {
  padding: "2em 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& .containerCart": {
    position: "relative",

    "& .containerIconCart": {
      backgroundColor: "#444",
      padding: 12,
      borderRadius: 8,
      cursor: "pointer",
      opacity: 0.5,
    },
    "& span": {
      position: "absolute",
      top: "-5px",
      transform: "translateX(35px)",
      color: "$white",
      backgroundColor: "$primary",
      width: 20,
      height: 20,
      borderRadius: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
    },
  },
});
