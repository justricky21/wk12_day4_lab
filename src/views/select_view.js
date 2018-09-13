const SelectView = function (selectElement, munros) {
    this.selectElement = selectElement;
    this.munros = munros;
    this.populate(this.munros);
}

SelectView.prototype.bindEvents = function () {
    this.populate(this.munros);
    this.selectElement.addEventListener('change', event => {
        this.selectElement.value = event.target.value;
    })
}

SelectView.prototype.populate = function () {
    const allRegions = this.getRegions(this.munros)
    allRegions.forEach((region) => {
        const regionOption = this.createOption(region);
        this.selectElement.appendChild(regionOption);
    })
}

SelectView.prototype.getRegions = function () {
    const allRegions = [];
    this.munros.forEach((munro) => {
        allRegions.push(munro.region);
    })

    const uniqueRegions = this.removeDuplicates(allRegions);

    return uniqueRegions;
}

SelectView.prototype.removeDuplicates = function (regions) {
    const uniqueRegions = [];
    
    regions.forEach((region) =>{
        if (!uniqueRegions.includes(region)){
            uniqueRegions.push(region);        }
    })

    return uniqueRegions;
}

SelectView.prototype.createOption = function (regionName) {
    const option = document.createElement('option');
    option.textContent = regionName;
    return option;
}

module.exports = SelectView;