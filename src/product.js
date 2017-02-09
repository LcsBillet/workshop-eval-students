var chalk = require('chalk');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString(currency, rateCurrency) {
        var currency = currency || '$';
        var rateCurrency = rateCurrency || 1;
        return `${chalk.yellow(this.name)} cost ${chalk.red(this.price * rateCurrency)}${currency}`;
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
      constructor(name, price, isbn) {
        super(name, price);
        this.isbn = isbn;
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
      constructor(name, price, moovie) {
        super(name, price);
        this.moovie = moovie;
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
      constructor(name, price, platform) {
        super(name, price);
        this.platform = platform;
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