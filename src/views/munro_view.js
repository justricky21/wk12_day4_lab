const PubSub = require('../helpers/pub_sub.js')

const MunroView = function (pageContainer, munro){
    this.munro = munro;
    this.pageContainer = pageContainer;
}

MunroView.prototype.render = function(){
    const munroContainer = document.createElement('div');
    munroContainer.classList.add('munro');

    const munroName = this.createMunroHeading();
    munroContainer.appendChild(munroName);

    const munroHeight = this.createMunroListElement('height');
    munroContainer.appendChild(munroHeight);

    const munroRegion = this.createMunroListElement('region');
    munroContainer.appendChild(munroRegion);

    const munroMeaning = this.createMunroListElement('meaning');
    munroContainer.appendChild(munroMeaning);

    this.pageContainer.appendChild(munroContainer);

}

MunroView.prototype.createMunroHeading = function (){
    const munroHeading = document.createElement('h2');
    munroHeading.classList.add('munro-name');
    munroHeading.textContent = this.munro.name;
    return munroHeading;
}

MunroView.prototype.createMunroListElement = function (property){
    const propertyValue = this.munro[property];
    const listElement = document.createElement('li');
    listElement.classList.add(property);
    const capitalizedProperty = property.charAt(0).toUpperCase() + property.substr(1);
    listElement.textContent = `${capitalizedProperty}: ${propertyValue}`;
    return listElement;
}

module.exports = MunroView;
