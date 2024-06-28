export default (content) => {
  const maxLength = 150;
  if (content.length <= maxLength) {
    return content;
  } else {
    return content.slice(0, maxLength) + "...";
  }
};
