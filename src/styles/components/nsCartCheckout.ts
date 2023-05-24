import { styled } from "@stitches/react";

export const ContainerCart = styled("div", {
  position: "absolute",
  right: "-540px",
  backgroundColor: "$gray800",
  width: "540px",
  minHeight: "100vh",
  height: "100%",
  zIndex: 999,
  boxShadow: "-2px 1px 5px -1px rgba(18,17,18,1)",
  transition: "all .5s",
});

export const BodyCart = styled("div", {
  padding: "2rem 4rem",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "4rem",
  overflow: "auto",

  // close button modal
  "& .closeContainer": {
    right: 0,
    fontWeight: 600,
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    marginBottom: "2rem",
  },

  "& .titleCart": {
    fontSize: "$xl",
    fontWeight: "bold",
  },
});

export const ContainerProducts = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxHeight: "420px",
  overflow: "auto",
});

export const ProductCart = styled("div", {
  display: "flex",
  gap: "1rem",
  marginTop: "2rem",

  "& .descriptionProduct": {
    padding: "0.25rem 0",
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",

    "& p": {
      fontSize: "$md",
    },

    "& strong": {
      fontSize: "$lg",
      fontWeight: "bold",
    },

    "& span": {
      color: "$primary",
      display: "flex",
      height: "100%",
      alignItems: "flex-end",
      fontSize: "$md",
      fontWeight: "bold",

      cursor: "pointer",
    },
  },

  "& .quantityProduct": {
    display: "flex",
    alignItems: "end",

    "& p": {
      position: "relative",
      top: "2px",
    },
  },
});

export const ImageCartContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  img: {
    objectFit: "cover",
  },
});

export const ConstainerConfirmSale = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "& .descriptionFooter": {
    display: "flex",
    justifyContent: "space-between",

    "& span": {
      fontSize: "$md",
    },
  },
  "& .descriptionFooterValue": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",

    "& p": {
      fontSize: "$md",
      fontWeight: "bold",
    },

    "& span": {
      fontSize: "$2xl",
      fontWeight: "bold",
    },

    "& ~ button": {
      marginTop: "1.5rem",
    },
  },
});
