client.on('debug', (e) => {

    var launcherlogs = fs.createWriteStream(getAppDataPath('aeroclient/launcher_logs.txt'), {
      flags: 'a'
    })
    
    launcherlogs.write(e)
})
  
client.on('data', (e) => {
    hideLauncher();
  
  var clientlogs = fs.createWriteStream(getAppDataPath('aeroclient/client_logs.txt'), {
    flags: 'a'
  })
  
  clientlogs.write(e)
  })
  
  client.on('close', (e) => {
    showLauncher();
})