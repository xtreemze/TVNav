import * as OfflinePluginRuntime from "offline-plugin/runtime";

OfflinePluginRuntime.install({
  onInstalled() {
    h1Title.innerText = "Actualizado | TVNav";
  },

  onUpdating() {
    h1Title.innerText = "Actualizando... | TVNav";
  },

  onUpdateReady() {
    h1Title.innerText = "Reiniciando... | TVNav";
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated() {
    h1Title.innerText = "Actualizado | TVNav";
    setTimeout(function() {
      window.location.reload();
    }, 100);
  }
});
