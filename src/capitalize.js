export default function capitalize(input) {
  if (input == null) {
    return "";
  }
  return String(input[0]).toUpperCase() + input.slice(1);
}
