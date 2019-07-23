import moment from "moment";

import "./assets/css/index.css";

const divApp = document.querySelector("#app");
setInterval(() => {
  divApp.innerHTML = moment().format("YYYY-MM-DD HH:mm:ss");
}, 1000);
