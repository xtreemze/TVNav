import * as OfflinePluginRuntime from "offline-plugin/runtime";

OfflinePluginRuntime.install({
  onInstalled: function() {
    h1Title.innerText = "Actualizado | TVNav";
  },

  onUpdating: function() {
    h1Title.innerText = "Actualizando... | TVNav";
  },

  onUpdateReady: function() {
    h1Title.innerText = "Reiniciando... | TVNav";
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function() {
    h1Title.innerText = "Actualizado | TVNav";
    setTimeout(function() {
      window.location.reload();
    }, 3000);
  }
});
