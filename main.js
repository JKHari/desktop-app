const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;

require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
    awaitWriteFinish: true,
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})



app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 355,
        height: 580,
        icon: path.join(__dirname, 'images', 'icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            worldSafeExecuteJavaScript: true,
            allowRunningInsecureContent: true,
        }
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.setMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

})

