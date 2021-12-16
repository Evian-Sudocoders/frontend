import React from "react";

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";

import { IMaskInput } from "react-imask";

const StyledInput = styled(TextField)({
  "& label": {
    fontSize: "var(--font-16)",
    fontWeight: 400,
    color: "var(--ter-black)",
  },
  "& .MuiInput-input": {
    fontSize: "var(--font-16)",
    fontWeight: 500,
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
    },
  },

  "& label.Mui-focused": {
    color: "var(--primary-blue)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "var(--primary-blue)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--primary-blue)",
    },
    "&:hover fieldset": {
      borderColor: "var(--primary-blue)",
    },
    "&.Mui-focused fieldset": {
      borderColor:"var(--primary-blue)",
    },
  },
});

const MobileNumberTextMask = React.forwardRef(function TextMaskCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="#000000000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

function CustomisedRadio(props) {
  return (
    <Radio
      sx={{
        color:"var(--primary-blue)",
        "&.Mui-checked": {
          color:"var(--primary-blue)",
        },
        "& .MuiSvgIcon-root": {
          fontSize: "var(--font-22)",
        },
      }}
      {...props}
    />
  );
}

const selectColorStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: "var(--font-16)",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: "var(--font-16)",
      transition: "background-color 0.1s ease",
      ":active": {
        ...styles[":active"],
        backgroundColor: "var(--orange-tertiary)",
      },
      ":hover": {
        ...styles[":hover"],
        backgroundColor: "var(--orange-tertiary)",
      },
      ":visited": {
        ...styles[":visited"],
        backgroundColor: "var(--orange-tertiary)",
      },
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    fontSize: "var(--font-16)",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: "var(--ter-black)",
      cursor: "pointer",
      fontSize: "var(--font-16)",
    },
  }),
};

export default StyledInput;
export {
  MobileNumberTextMask,
  CustomisedRadio,
  selectColorStyles as colourStyles,
};
