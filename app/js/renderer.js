const { ipcRenderer } = require('electron');

let lnkAbout = document.querySelector('#lnkAbout');
lnkAbout.addEventListener('click', function(){
    ipcRenderer.send('open-window-about');
});