$(function () {
  let params = new URL(document.location).searchParams;
  let memberName = params.get("member");
  const jsonData = require("./data.json");
  console.log(jsonData);
  document.getElementById("testArea").innerHTML =
    jsonData["members"][memberName];
});
