const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 1000,
    width: 1000,
  });

  mainWindow.on("closed", () => {
    console.log("closed");
    mainWindow = null;
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
});
