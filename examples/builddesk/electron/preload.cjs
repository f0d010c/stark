const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("builddesk", {
  platform: process.platform
});
