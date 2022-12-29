const tech = [
    { label: 'Roma'},
    { label: 'Rostsk'},
    { label: 'Olha'},
    { label: 'Gleb'},
    { label: 'Aleksander'},
    { label: 'Galina'},
    { label: 'Ivan'},
    { label: 'Sergey'},
    { label: 'Viktor'},
    { label: 'Vitaliy'},
    { label: 'Petr'},
    { label: 'Sidor'},
];

const list = document.querySelector(".js-list");
const input = document.querySelector('#filter');

const listItemMarkup = createListItemMarkup(tech);
console.log(listItemMarkup);

function createListItemMarkup(items) {
      return items.map(item => `<li>${item.label}</li>`).join ('');
}
