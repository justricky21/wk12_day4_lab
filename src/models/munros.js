const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Munros = function(){
    this.munros = [];
}

Munros.prototype.getData = function () {
    //Gimme the url
    const url = `https://munroapi.herokuapp.com/api/munros`;
    //Gimme the colossal string of munros
    const request = new Request(url);
    //then make that string into a json file
    request.get()
    //data is banana, parse colossal json file into model
    .then(data => {
        
        PubSub.publish('Munros:all-munros-ready', data);
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = Munros;