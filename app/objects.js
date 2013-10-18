if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.func = fn;
      return obj.func();
    },

    alterObjects : function(constructor, greeting) {
      
    },

    iterate : function(obj) {

    }
  };
});
