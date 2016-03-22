const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var client = require('electron-connect').client;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
        mainWindow = new BrowserWindow({width: 500, height: 450});
        mainWindow.setMaximizable(false);
        mainWindow.setMenu(null);
        mainWindow.loadURL('file://' + __dirname + '/index.html');
        mainWindow.setResizable(false);    
        mainWindow.on('closed', function() {
       mainWindow = null;
    });

    // Connect to server process
    var devel = undefined;
    if (devel != undefined) client.create(mainWindow); 
});
