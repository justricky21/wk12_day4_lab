const PubSub = require('../helpers/pub_sub.js')
const MunroView = require('./munro_view.js')

const AllMunrosView = function (pageContainer){    
    this.pageContainer = pageContainer;
    this.munros = [];
}

AllMunrosView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-munros-ready', (event) => {
        console.log(event.detail);
        
        this.munros = event.detail;
        this.render();
    })
}

AllMunrosView.prototype.render = function(){
    this.munros.forEach((munro) => {
        const munroView = new MunroView(this.pageContainer, munro);
        munroView.render();
    });
}




module.exports = AllMunrosView;