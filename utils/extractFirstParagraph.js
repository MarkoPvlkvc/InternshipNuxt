export default (content) => {
  const match = content.match(/<p>(.*?)<\/p>/);
  return match ? match[1] : "";
};
