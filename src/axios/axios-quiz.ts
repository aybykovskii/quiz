import axios from "axios";

export default axios.create({
  baseURL: "https://quiz-d1337-default-rtdb.europe-west1.firebasedatabase.app",
});
