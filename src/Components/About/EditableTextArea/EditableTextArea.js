import React, { useEffect, useRef } from "react";

import Styles from "./EditableTextArea.module.css";

import { updateTextareaHeight } from "../helpers";

import useMediaQuery from "../../../Utils/helper/useMediaQuery";

function EditableTextArea({
  inputValue,
  isEditable,
  keyindex,
  dataChangeFun,
  focusIndex,
  inputClass
}) {
  const textAreaRef = useRef(123);

  const [windowWidth] = useMediaQuery();

  useEffect(() => {
    updateTextareaHeight(textAreaRef.current);
  }, [windowWidth]);

  useEffect(() => {
    textAreaRef.current.value = inputValue;
    updateTextareaHeight(textAreaRef.current);
  }, [inputValue]);

  useEffect(() => {
    if (isEditable && keyindex === focusIndex) {
      textAreaRef.current.focus();
    }
  }, [isEditable]);

  function handleDataChange() {
    dataChangeFun(textAreaRef.current.value);
  }

  return (
    <div className={Styles.Wrapper}>
      <textarea
        onChange={(e) => {
          updateTextareaHeight(e.target);
          handleDataChange();
        }}
        className={Styles.TextArea + " " + inputClass}
        disabled={!isEditable}
        ref={textAreaRef}
        defaultValue={inputValue}
      />
    </div>
  );
}

export default EditableTextArea;
