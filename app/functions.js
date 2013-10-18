if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {
        var sum = 0;
        var len = arguments.length;
        for(var i = 0; i < len; i++)
            sum = sum + arguments[i];
        return sum;
    },

    callIt : function(fn) {
        
    },

    curryIt : function(fn) {

    }
  };
});
