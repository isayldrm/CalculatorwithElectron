const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
//require('electron-reload')(__dirname);
let win;

function createWindows(){
    win = new BrowserWindow({width:365, height: 365});
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes:true
    }));
    win.on('closed',()=>{
        win=null;
    });
    //win.openDevTools();
}

app.on('ready',createWindows)

app.on('window-all-closed',()=>{
    app.quit();
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('active',()=>{
    if(win===null){
        createWindows();
    }
});