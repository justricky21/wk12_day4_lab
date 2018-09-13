const PubSub = require('../helpers/pub_sub.js')
const MunroView = require('./munro_view.js')
const SelectView = require('./select_view.js')

const AllMunrosView = function (pageContainer) {
    this.pageContainer = pageContainer;
    this.munros = [];
}

AllMunrosView.prototype.bindEvents = function () {

    PubSub.subscribe('Munros:all-munros-ready', (event) => {
        console.log(event.detail);

        this.munros = event.detail;
        this.render();

        const selectView = new SelectView(this.selectElement, this.munros);
        selectView.bindEvents();
    

    })
}

AllMunrosView.prototype.render = function () {
    this.munros.forEach((munro) => {
        if (this.selectElement.value === 'All regions') {
            const munroView = new MunroView(this.pageContainer, munro);
            munroView.render();
        } else if (munro.region === this.selectElement.value) {
            const munroView = new MunroView(this.pageContainer, munro);
            munroView.render();
        }
    });
}




module.exports = AllMunrosView;