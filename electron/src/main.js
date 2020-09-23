const electron = require("electron");
const { app, Tray, Menu } = electron;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");

let mainWindow;

app.on("ready", () => {
  /* mainWindow section */
  mainWindow = new BrowserWindow({
    height: 1000,
    width: 1000,
  });

  mainWindow.on("closed", () => {
    console.log("closed");
    mainWindow = null;
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  /* tray section */
  const tray = new Tray(path.join("src", "./electron-assets/demo-image.png"));

  /* menu section */
  const menuTemplate = [
    {
      label: "Quit",
      click: () => {
        app.quit();
      },
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});
