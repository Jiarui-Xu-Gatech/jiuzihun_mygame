const electron = require('electron');
// const {app} = electron;
// const {BrowserWindow} = electron;
// const {Menu} = electron;
const { app, BrowserWindow, Menu } = electron;

let win;

function createWindow() {
    win = new BrowserWindow({width: 960, height: 618, title:'九子魂',webPreferences: {
    nodeIntegration: true,
  }});
    Menu.setApplicationMenu(null);
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});