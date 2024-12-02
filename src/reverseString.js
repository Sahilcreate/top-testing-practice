export default function reverseString(input) {
  if (input == null || input == "") {
    return "";
  }
  return String(input).split("").reverse().join("");
}
