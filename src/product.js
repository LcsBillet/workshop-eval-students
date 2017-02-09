var chalk = require('chalk');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString(currency, rateCurrency) {
        var currency = currency || '$';
        var rateCurrency = rateCurrency || 1;
        return `${chalk.yellow(this.name)} cost ${chalk.red(this.price * rateCurrency)}${currency}, duration: ${this.getDuration()} minutes`;
    }
};

/*function Product(name, price) {
  this.name = name;
  this.price = price;
  this.toString = (currency, rateCurrency) => {
    var currency = currency || '$';
    var rateCurrency = rateCurrency || 1;
    return `${chalk.yellow(this.name)} cost ${chalk.red(this.price * rateCurrency)}${currency}`;
  }
}*/

class Book extends Product {
      constructor(name, price, isbn, minDuration, maxDuration) {
        super(name, price);
        this.isbn = isbn;
        this.minDuration = minDuration;
        this.maxDuration = maxDuration;
      }
      getDuration() {
        return (this.minDuration+this.maxDuration)/2;
      }
}

/*function Book(name, price, isbn) {
  Product.apply(this, [name, price]);
  this.isbn = isbn;
}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});*/

class DVD extends Product {
      constructor(name, price, moovie, runningTime) {
        super(name, price);
        this.moovie = moovie;
        this.runningTime = runningTime;
      }
      getDuration() {
        return this.runningTime;
      }
}

/*function DVD(name, price, moovie) {
  Product.apply(this, [name, price]);
  this.moovie = moovie;
}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});*/

class VideoGame extends Product {
      constructor(name, price, platform, minDuration, maxDuration) {
        super(name, price);
        this.platform = platform;
        this.minDuration = minDuration;
        this.maxDuration = maxDuration;
      }
      getDuration() {
        return (this.minDuration+this.maxDuration)/2;
      }
}

/*function VideoGame(name, price, platform) {
  Product.apply(this, [name, price]);
  this.platform = platform;
}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});*/

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};