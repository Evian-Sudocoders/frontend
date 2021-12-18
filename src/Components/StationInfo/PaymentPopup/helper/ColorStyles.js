export const selectColorStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: "var(--font-17)",
    maxWidth: "35rem",
    minWidth: "20rem",
    fontWeight: "600",
    border: "2px solid var(--sec-grey)",
    outline: "none",
    boxShadow: "none",
    ":visited": {
      border: "2px solid var(--sec-grey)",
    },
    ":active": {
      border: "2px solid var(--sec-grey)",
    },
    ":hover": {
      border: "2px solid var(--sec-grey)",
    },
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: "var(--font-17)",
      transition: "background-color 0.1s ease",
      ":active": {
        ...styles[":active"],
        backgroundColor: "var(--sec-aqua)",
      },
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "var(--sec-aqua)",
      },
      ":visited": {
        ...styles[":visited"],
        backgroundColor: "var(--sec-aqua)",
      },
      "@media only screen and (max-width: 440px)": {
        ...styles["@media only screen and (max-width: 440px)"],
        fontSize: "var(--font-16)",
      },
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: "var(--font-17)",
    backgroundColor: "var(--sec-aqua)",
    "@media only screen and (max-width: 440px)": {
      ...styles["@media only screen and (max-width: 440px)"],
      fontSize: "var(--font-16)",
    },
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    transition: "all 0.2s",
    backgroundColor: "var(--sec-aqua)",

    ":hover": {
      backgroundColor: "var(--aqua)",
      cursor: "pointer",
      fontSize: "var(--font-16)",
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "var(--sec-grey)",
    transition: "all 0.1s",

    ":hover": {
      color: "var(--ter-black)",
    },
  }),
};
