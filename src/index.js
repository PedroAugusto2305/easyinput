import prompt from "syncprompt";
import convertTextToNumber from "./conversor.js";

function input(question) {
  let response = prompt(question);
  let number = convertTextToNumber(response);
  if (!isNaN(number)) {
    return number;
  }

  return response;
}
export default input;
