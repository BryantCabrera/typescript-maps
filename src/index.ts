// console.log("hi there");

// Anytime we export with just export keyword, import it with {}
// When you use export default keyword, you don’t need {}
  // Convention with TypeScript statements is to never use default keyword so we don’t have to worry about using {} or not
import { User } from './User';

const user = new User();
console.log(user);