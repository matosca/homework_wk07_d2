const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');
// const instrumentObjectsData = require('./data/instrument_family_data.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');

  const instrumentsFamiliesDropdown = new SelectView(selectElement);
  instrumentsFamiliesDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-info');

  const instrumentInfo = new InstrumentInfoView(infoDiv);
  instrumentInfo.bindEvents();

  const instrumentFamilySource = new InstrumentFamilies();
  instrumentFamilySource.bindEvents();
});
