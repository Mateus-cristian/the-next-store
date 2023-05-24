import { styled } from "@stitches/react";

export const HomeContainer = styled("div", {
  display: "flex",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  background:
    "linear-gradient(0deg, rgba(206,174,36,0.99002849002849) 0%, rgba(92,86,195,1) 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  zIndex: 2,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25em",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0,0,0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.3s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$grey100",
    },

    span: {
      fontSize: "$lg",
      fontWeight: "bold",
      color: "$primary",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
