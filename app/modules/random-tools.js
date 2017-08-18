'use strict';

var randomTools = {
  pickFromArray: function(array) {
    var item = array[Math.floor(Math.random() * array.length)];

    return item;
  },
  percentageChance: function(percentage) {
    return (Math.floor(Math.random() > (percentage / 100)) ? false : true);
  }
};

module.exports = randomTools;