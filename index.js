const { app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 1200,
    height: 600,
    icon:__dirname +'/asset/img/icon.ico',
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.setMenuBarVisibility(false);
  win.loadFile('landing.html')
}

app.on('ready', createWindow)