const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function (container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function (instrumentFamily) {
  const infoHeading = document.createElement('h2');
  infoHeading.textContent = instrumentFamily.name;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamily.description;

  const instrumentsIncluded = document.createElement('h3');
  instrumentsIncluded.textContent = 'Instruments include:';

  const instrumentList = document.createElement('ul');
  const listItems = instrumentFamily.instruments;

  for (var i = 0; i < listItems.length; i++) {
    instrumentItem = document.createElement('li');

    instrumentItem.appendChild(document.createTextNode(listItems[i]));

    instrumentList.appendChild(instrumentItem);
  };

  this.container.innerHTML = '';
  this.container.appendChild(infoHeading);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(instrumentsIncluded);
  this.container.appendChild(instrumentList);

};

module.exports = InstrumentInfoView;
