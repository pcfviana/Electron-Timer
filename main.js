const { app, BrowserWindow } = require('electron');


app.on('ready', () => {
    console.log('App started');

    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    
});