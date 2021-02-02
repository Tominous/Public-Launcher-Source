async function launchOffline1() {
    document.getElementById('launchButton').innerHTML = "Starting JVM"
    document.querySelector('.launch-button').className += " clicked"
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      root: getAppDataPath(".minecraft"),
      javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
      version: {
        number: "1.7.10",
        custom: "AeroClient-1.7.10"
      },
      memory: {
          max: document.getElementById("ramslider").value,
          min: "1024"
      },
      overrides: {
        minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.7.10/AeroClient-1.7.10.patch"),
      }
  }).catch(e => {
      console.log(e.message);
      launchError();
  })
}

async function launchOffline2() {
  document.querySelector('.launch-button').className += " clicked"
  document.getElementById('launchButton').innerHTML = "Starting JVM"
  
  console.log("[Aero Client] Launching Stable Branch");
  client.launch({ 
    authorization: Authenticator.getAuth("User"),
    root: getAppDataPath(".minecraft"),
    javaPath: getAppDataPath("aeroclient/jre/bin/java.exe"),
    version: {
      number: "1.8.9",
      custom: "AeroClient-1.8.9"
    },
    memory: {
        max: document.getElementById("ramslider").value,
        min: "1024"
    },
    overrides: {
      minecraftJar: getAppDataPath(".minecraft/versions/AeroClient-1.8.9/AeroClient-1.8.9.patch"),
    }
  }).catch(e => {
    console.log(e.message);
    launchError();
  })
}