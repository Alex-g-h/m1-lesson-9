const coffees = ["Latte", "Cappuccino", "Americano"];

let coffee = prompt('Поиск кофе по названию:')?.trim();

const coffeeIndex = coffees.findIndex((name => name.toLowerCase() === coffee?.toLowerCase()));
if (coffeeIndex === -1) {
  alert('К сожалению, такого вида кофе нет в наличии');
}
else {
  alert(`Держите ваш любимый кофе ${coffees[coffeeIndex]}. Он ${coffeeIndex + 1}-й по популярности в нашей кофейне.`);
}