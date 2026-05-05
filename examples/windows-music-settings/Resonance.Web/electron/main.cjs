const { app, BrowserWindow, nativeTheme } = require("electron");
const path = require("node:path");

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 920,
    minWidth: 1100,
    minHeight: 720,
    backgroundColor: "#0a0907",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#00000000",
      symbolColor: "#a8a39a",
      height: 48
    },
    // Mica on Win11 — Electron 23+ supports it via this option
    backgroundMaterial: "mica",
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  // Make sure dark mode is forced so Mica picks dark variant
  nativeTheme.themeSource = "dark";

  if (isDev) {
    win.loadURL("http://127.0.0.1:1420");
    // win.webContents.openDevTools({ mode: "detach" });
  } else {
    win.loadFile(path.join(__dirname, "..", "dist", "index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
