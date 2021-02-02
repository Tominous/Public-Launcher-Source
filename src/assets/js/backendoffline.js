function banUser() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Banned";
  document.querySelector('.launch-button').className += " banned";
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

  
function notWhitelisted() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Unauthorized";
  document.querySelector('.launch-button').className += " banned";
  console.log("[ACP]: Not whitelisted!");
}
  
function startupChecksMain() {
  checkPatch();
}