import moment from "moment";

import "./assets/css/index.css";
import "./assets/css/less.less";

const divApp = document.querySelector("#app");
setInterval(() => {
  divApp.innerHTML = moment().format("YYYY-MM-DD HH:mm:ss");
}, 1000);
