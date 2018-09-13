const Munros = require('./models/munros.js')
const AllMunrosView = require('./views/all_munros_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const pageElement = document.querySelector('#all-munros');

  const munros = new Munros();
  munros.getData();

  const allMunrosView = new AllMunrosView(pageElement);
  allMunrosView.bindEvents();
})
