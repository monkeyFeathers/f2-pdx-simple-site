var course = require('./courseInfo');
var yodaQuotes = require('./yodaQuotes');

var helpers = {
  getRandomItem: function () {
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return this.selectRandomItem(course.lectures);
        case 1:
            return this.selectRandomItem(course.labs);
        case 2:
            return this.selectRandomItem(yodaQuotes);
    }
  },
  selectRandomItem:function (array) {
      return array[Math.floor(Math.random()*array.length)]
  },

  getRandomThingy: function (thingiesArray) {
      return thingiesArray[Math.floor(Math.random() * thingiesArray.length)]
  }
}
module.exports = helpers;
