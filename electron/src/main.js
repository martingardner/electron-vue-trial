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
    icon: __dirname + "/electron-assets/demo-image.ico",
  });

  mainWindow.on("closed", () => {
    console.log("closed");
    mainWindow = null;
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  /* tray section */
  //need dirname over path.join src for it to be read correctly by both electron and electron-packager
  const tray = new Tray(`${__dirname}/electron-assets/demo-image.png`);
  const trayMenu = Menu.buildFromTemplate([
    {
      label: "Quit",
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(trayMenu);
  tray.setToolTip("this is the demo app");

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
