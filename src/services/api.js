import Axios from "axios";
const endpoint =
  "https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep";

export function getBooks() {
  return Axios.get(endpoint);
}