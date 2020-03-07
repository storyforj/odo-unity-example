mergeInto(LibraryManager.library, {
  ODOTrigger: function(triggerName) {
    window.odo.trigger(window.ODO.Triggers[Pointer_stringify(triggerName)]);
  },

  ODOTrack: function(eventName, data) {
    window.odo.track(Pointer_stringify(eventName), JSON.parse(Pointer_stringify(data)));
  },

  ODOSave: function(key, jsonData, callbackName) {
    console.log('save', window.ODOSaveData, key, jsonData, callbackName);
    window.ODOSaveData(Pointer_stringify(key), Pointer_stringify(jsonData), Pointer_stringify(callbackName));
  },

  ODOSaveForPlayer: function(key, jsonData, callbackName) {
    window.ODOSaveForPlayerData(Pointer_stringify(key), Pointer_stringify(jsonData), Pointer_stringify(callbackName));
  },

  ODOGet: function(key, callbackName) {
    window.ODOGetData(Pointer_stringify(key), Pointer_stringify(callbackName));
  },

  ODOGetForPlayer: function(key, callback) {
    window.ODOGetForPlayerData(Pointer_stringify(key), Pointer_stringify(callbackName));
  },
});
