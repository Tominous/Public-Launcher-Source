let splash
const { app, BrowserWindow, dialog } = require('electron')
const { autoUpdater } = require("electron-updater")
let mainWindow;
const url = "https://github.com/Aero-Client/Launcher"
autoUpdater.setFeedURL(
  
  {     provider: "github", url, repo: "Launcher", owner: "Aero-Client"})

setInterval(() => {
  autoUpdater.checkForUpdates()
}, 60000)
app.on('ready', () => {
  
  mainWindow = new BrowserWindow({
    width: 1275,
    height: 800,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
    },
    center: true,
    maximizable: false,
    titleBarStyle: false,
    frame: false,
    show: false,
    resizable: false,
    transparent: true,
    fullscreen: false,
    icon: "./src/img/icons/logo.png",
    title: "Aero Client",
      show: false
  });
  splash = new BrowserWindow({width: 350, height: 450, resizable: false, transparent: true, frame: false, alwaysOnTop: true});
  splash.loadURL(`file://${__dirname}/splash.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', () => {
    splash.destroy();
    mainWindow.show();
  });
});

const sendStatusToWindow = (text) => {
  if (mainWindow) {
    mainWindow.webContents.send('message', text);
  }
};

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Launcher Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the launcher to apply the updates.'
  }

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall()
  })
})
autoUpdater.on('error', message => {
  console.error('There was a problem updating the launcher')
  console.error()
})
