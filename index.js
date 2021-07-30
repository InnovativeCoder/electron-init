const { app, BrowserWindow } = require("electron");
const url = require("url");

let win = null;

function boot() {
  win = new BrowserWindow({
    width: 1000,
    height: 500,
  });
  win.loadURL(
    // url.format({
    //   pathname: "./index.html",
    //   slashes: true,
    // })
    // `file://${__dirname}/index.html`
    `https://app.innovativelabs.co.in/signin`
  );
}

app.on("ready", boot);
