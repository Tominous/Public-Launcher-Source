async function launchClient1() {
    document.getElementById('launchButton').innerHTML = "Updating Patch"
    document.querySelector('.launch-button').className += " clicked";
  
    console.log("[Aero Client] Launching Stable Branch");
    client.launch({ 
      authorization: Authenticator.getAuth("User"),
      clientPackage: "https://clientupdate.aeroclient.net",
      removePackage: "clientPackage.zip",
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

async function launchClient2() {
     document.querySelector('.launch-button').className += " clicked";
     document.getElementById('launchButton').innerHTML = "Updating Patch"
   
     console.log("[Aero Client] Launching Stable Branch");
     client.launch({ 
       authorization: Authenticator.getAuth("User"),
       clientPackage: "https://clientupdate.aeroclient.net/1.8.zip", // Unavailable at the time of posting this code since 1.8 is unreleased.
       removePackage: "clientPackage.zip",
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