console.log("Hello Electron");

const electron = require('electron');

const countdown = require('./countdown');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

let mainWindow;

app.on('ready', () => {
  console.log('ready');

  mainWindow = new BrowserWindow({
    width: 400,
    height: 400
  });

  mainWindow.loadURL(`file://${__dirname}/countdown.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
    console.log('Main window is closed');
  });
});

ipc.on('countdown-start', () => {
  countdown((count) => {
    mainWindow.webContents.send('countdown', count);
  });
});
