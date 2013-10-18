if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        arr.forEach(function(elem){sum = sum + elem;});
        return sum;
    },

    remove : function(arr, item) {
        var newArr = [];
        arr.forEach(function(elem){if(elem !== item)newArr.push(elem);});
        return newArr;
    },
    
    removeWithoutCopy : function(arr, item) {
        while(arr.indexOf(item) !== -1){
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        var slice1 = arr.slice(0, index);
        var slice2 = arr.slice(index, arr.length);
        slice1.push(item);
        return slice1.concat(slice2);
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(elem){if(elem === item) count = count + 1;});
        return count;
    },

    duplicates : function(arr) {
        var dup = [];
        var nonDup = [];
        arr.forEach(function(elem){
            if (nonDup.indexOf(elem) !== -1) 
                dup.push(elem);
            else 
                nonDup.push(elem);});
        return dup;
    },

    square : function(arr) {
        return arr.map(function(elem){return elem * elem;});
    },

    findAllOccurrences : function(arr, target) {
        var occ = [];
        var idx = 0;
        arr.forEach(function(elem){if(elem === target) occ.push(idx); idx++;});
        return occ;
    }
  };
});
