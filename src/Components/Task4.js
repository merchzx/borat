import React from 'react';

const products = [
  { title: 'Капуста', isFruit: false, id: 1 },
  { title: 'Чеснок', isFruit: false, id: 2 },
  { title: 'Яблоко', isFruit: true, id: 3 },
  { title: 'Киви', isFruit: true, id: 4 },
  { title: 'Лук', isFruit: false, id: 5 },
  { title: 'morkva', isFruit: false, id: 6 },
];

export function ShoppingList() {
  // Преобразование массива products  в массив элементов <li> с помощью функции map()
  const listItems = products.map(product =>
    <li
      style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }} >
      {product.title} - {product.id}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}