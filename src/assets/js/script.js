const { Authenticator, Client } = require("minecraft-launcher-core");
const { getAppDataPath } = require('appdata-path');
const fs = require('fs');
const client = new Client();
const clientPatch = require("sha1-file");

/* The code below is used to block Control + R, Control + Shift + I, and anything else that could be used to ruin the launcher experience */

document.addEventListener("keydown", e => {
  if(e.key == "F11") e.preventDefault();
});

document.addEventListener("keydown", e => {
  if(e.key == "SHIFT") e.preventDefault();
});

document.addEventListener("keydown", e => {
  if(e.ctrlKey) {
    e.preventDefault();
  }
});

/* The code above is used to block Control + R, Control + Shift + I, and anything else that could be used to ruin the launcher experience */

function closeLauncher() {
  const remote = require("electron").remote;
  var window = remote.getCurrentWindow()
  window.close()
}

function minimizeLauncher() {
  const remote = require("electron").remote;
  var window = remote.getCurrentWindow()
  window.minimize()
}

function startupChecksMain() {
  document.querySelector('.launch-button').className += " clicked";
  checkPatch();
}

function checkPatch() { // This Method fixes the client from downloading itself everytime.
  var version1 = document.querySelector('.version-button1').innerHTML
  var version2 = document.querySelector('.version-button2').innerHTML
  var version3 = document.querySelector('.version-button3').innerHTML

  if (version2 == "✔️1.8.9") {
    checkSecondPatch();
  } else if(version3 == "✔️1.16") {
    alert("Aero Client 1.16 is not released, we will announce when it is though!");
    showLauncher();
  } else if (version1 == "✔️1.7.10 (Default)") {
    checkFirstPatch();
  }

}

function checkFirstPatch() {
  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch')))) { // If the client doesn't exist it will download the client.
  launchClient1();
  }

    var hash = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch'));
    console.log("Current Client Hash - " + hash)
    if (hash == "[Redacted for security reasons]") { // Checks the SHA1 Hash to see if it's outdated or not.
      launchOffline1();
    } else {
      launchClient1(); // If the SHA1 Hash is different then it will download the client.
    }

}

function checkSecondPatch() {

  if (!(fs.existsSync(getAppDataPath('.minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch')))) {
    launchClient1();
  }
  
    var hash2 = clientPatch.sync(getAppDataPath('.minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch'));
    console.log("Current Client Hash - " + hash2)
    if (hash2 == "[Redacted for security reasons]") {
      launchOffline2();
    } else {
      launchClient2();
    }
}


function checkBranch2() {
  var branch2 = document.querySelector('.branch-button2').innerHTML
  var branch3 = document.querySelector('.branch-button3').innerHTML

 if(branch2 == "✔️Beta") {
    console.log("[Aero Client] Checked Beta Branch");
    launchClient2();
  } else if(branch3 == "✔️Dev") {
    console.log("[Aero Client] Checked Dev Branch");
    launchClient3();
  }
}

function showLauncher() {
  var version1 = document.querySelector('.version-button1').innerHTML
  var version2 = document.querySelector('.version-button2').innerHTML
  var version3 = document.querySelector('.version-button3').innerHTML

  if(version1 == "✔️1.7.10 (Default)") {
    document.querySelector('.launch-button').innerHTML = "Launch 1.7.10";
  } else if(version2 == "✔️1.8.9") {
    document.querySelector('.launch-button').innerHTML = "Launch 1.8.9";
  } else if(version3 == "✔️1.16") {
    document.querySelector('.launch-button').innerHTML = "Launch 1.16";
  }
  document.querySelector('.launch-button').className += " reset";

  const remote = require("electron").remote;
  var window = remote.getCurrentWindow()
  window.show()
}

function openClientLogs() {
  var exec = require('child_process').exec;
  exec('notepad ' + getAppDataPath("aeroclient/client_logs.txt"), function (error, stdOut, stdErr) {});
}

function openLauncherLogs() {
  var exec = require('child_process').exec;
  exec('notepad ' + getAppDataPath("aeroclient/launcher_logs.txt"), function (error, stdOut, stdErr) {});
}

function openUpdates() {
    const { shell } = require('electron')
    shell.openExternal('https://aeroclient.net/updates')
}

function openDiscord() {
  const { shell } = require('electron')
  shell.openExternal('https://discord.aeroclient.net')
}

function openTelegram() {
  const { shell } = require('electron')
  shell.openExternal('https://t.me/AeroClient')
}

function launchError() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Error";
  document.querySelector('.launch-button').className += " banned";
  console.log("[ACP]: ACP_LAUNCH_ERROR");
}

function openWebsite() {
  const { shell } = require('electron')
  shell.openExternal('https://aeroclient.net')
}

function openTwitter() {
  const { shell } = require('electron')
  shell.openExternal('https://twitter.com/AeroClient')
}

function hideLauncher() {
  const remote = require("electron").remote;
  var window = remote.getCurrentWindow()
  window.hide()
}

function notAllowed() {
  alert("This feature is not available at this time.");
}