function updateTextareaHeight(textAreaElement) {
  textAreaElement.style.height = "";
  textAreaElement.style.height = textAreaElement.scrollHeight + "px";
}

export default updateTextareaHeight;
