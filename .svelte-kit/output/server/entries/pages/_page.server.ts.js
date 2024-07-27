import { request } from "@octokit/request";
import * as dotenv from "dotenv";
dotenv.config();
console.log("token" + process.env.GITHUB_TOKEN);
request.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`
  }
});
const load = async () => {
};
export {
  load
};
