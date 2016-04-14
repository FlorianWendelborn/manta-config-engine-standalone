var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function () {
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true
	});
	mainWindow.maximize();
	mainWindow.loadURL('file:///' + __dirname + '/../node_modules/dota2-manta-config-engine-app/build/index.html');
});
