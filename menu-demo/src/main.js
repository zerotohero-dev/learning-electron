const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

app.on('ready', () => {
  new BrowserWindow();

  const appName = electron.app.getName();

  const template = [
    {
      label: appName,
      submenu: [
        {
          label: `About ${appName}`,
          click: () => {},
          role: 'about'
        },
        { type: 'separator' },
        {
          label: `Quit`,
          click: () => { app.quit(); },
          accelerator: 'Cmd+Q'
        },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});
