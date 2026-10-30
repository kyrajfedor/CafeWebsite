const featureMenu = [
    {name: 'Banana Pudding Latte', desc:'Creamy banana latte with dulce de leche, topped with banana pudding cold foam and a cookie crumble.', image: './images/bananaPuddingLatte.jpg' },
    {name: 'Sparkling Pear Refresher', desc: 'Light, crisp and refreshing with lemonade, pear juice and sparkling water, finished with rosemary and lemon.', image: './images/sparklingPearRefresher.jpg'} ,
    {name: 'Caramel Apple Pie Latte', desc: 'Chai topped with pumpkin cream cold foam. A fall favourite for a reason.', image: './images/capl.jpg'},
    {name: 'Brown Butter Latte', desc: 'Buttery, sweet and made with brown butter, maple syrup and cinnamon. Basically fall in a cup.', image: './images/brownButterLatte.jpg'}, 
    {name: 'Pumpkin Cream Chai', desc:'Chai topped with pumpkin cream cold foam. A fall favourite for a reason.', image: './images/pumpkinCreamChai.jpg'}, 
    {name: 'Pumpking Spice Latte', desc: 'The fall classic. Hot or iced with all those warm, cozy spices we wait all year for.', image: './images/psl.jpg'}
];

const coffeeItems = [
    { name: 'Drip Coffee' },
    { name: 'Espresso' },
    { name: 'Americano' },
    { name: 'Latte' },
    { name: 'Cappuccino' },
    { name: 'Macchiato' },
    { name: 'Mocha' }
];

const teaItems = [
    { name: 'Tea' },
    { name: 'London Fog' },
    { name: 'Chai Latte' }
];

const flavours = [
    'Vanilla',
    'Hazelnut',
    'Caramel',
    'Lavender'
];

const milkOptions = [
    'Almond',
    'Soy',
    'Oat'
];

const croissants = [
    'Pistachio',
    'Almond',
    'Chocolate'
];

const danishes = [
    'Lemon',
    'Strawberry',
    'Blueberry'
];

const bakeryItems = [
    'Donuts',
    'Cinnamon Buns',
    'Apple Fritters',
    'Pastel de Natas',
    'Cake Slices',
    'Assorted Cookies',
    'Oatmeal Sandwich Cookies'
];




// const drinkItems = [
//     { category: 'Coffee', name: 'Drip Coffee', price: 1.50, description: '', variants: [] },
//     { category: 'Coffee', name: 'Espresso', price: 3.50, description: '', variants: [] },
//     { category: 'Coffee', name: 'Americano', price: 3.50, description: '', variants: [] },
//     { category: 'Coffee', name: 'Latte', price: 3.50, description: '', variants: [] },
//     { category: 'Coffee', name: 'Cappuccino', price: 3.50, description: '', variants: [] },
//     { category: 'Coffee', name: 'Macchiato', price: 3.50, description: '', variants: [] },
//     { category: 'Coffee', name: 'Mocha', price: 3.50, description: '', variants: [] },
//     { category: 'Tea', name: 'Tea', price: 3.50, description: '', variants: [] },
//     { category: 'Tea', name: 'London Fog', price: 3.50, description: '', variants: [] },
//     { category: 'Tea', name: 'Chai Latte', price: 3.50, description: '', variants: [] },
//     { category: 'Flavours', name: 'Syrup Options', price: null, description: '', variants: ['Vanilla', 'Hazelnut', 'Caramel', 'Lavender'] }, 
//     { category: 'Milk Options', name: 'Milk Options', price: null, description: '', variants: ['Almond', 'Soy', 'Oat'] }
// ];


// const bakeryItems = [
//     { category: 'Bakery', name: 'Croissants', price: null, description: '', variants: ['Pistachio', 'Almond', 'Chocolate'] }, 
//     { category: 'Bakery', name: 'Danishes', price: null, description: '', variants: ['Lemon', 'Strawberry', 'Blueberry'] }, 
//     { category: 'Bakery', name: 'Donuts', price: null, description: '', variants: [] }, 
//     { category: 'Bakery', name: 'Cinnamon Buns', price: null, description: '', variants: [] },
//     { category: 'Bakery', name: 'Apple Fritters', price: null, description: '', variants: [] },
//     { category: 'Bakery', name: 'Pastel de Natas', price: null, description: '', variants: [] },
//     { category: 'Bakery', name: 'Cake Slices', price: null, description: '', variants: [] },
//     { category: 'Bakery', name: 'Assorted Cookies', price: null, description: '', variants: [] },
//     { category: 'Bakery', name: 'Oatmeal Sandwich Cookies', price: null, description: '', variants: [] }
// ];

// const sandwichItems = [
//     { category: 'Sandwiches', name: 'The Italian Stallion', price: null, description: 'Capocollo, mortadella, proscuitto cotto, provolone with lettuce', variants: [] }, 
//     { category: 'Sandwiches', name: 'The Kick', price: null, description: 'Soppressata, mortadello, prosciutto, havarti with basil pesto', variants: [] },
//     { category: 'Sandwiches', name: 'Egg Salad', price: null, description: '', variants: [] }, 
//     { category: 'Sandwiches', name: 'Roast Beef', price: null, description: '', variants: [] }
// ];





// const drinkItems = [
//     {category: 'Coffee', name:'Drip Coffee', price: 1.50},
//     {category: 'Coffee', name:'Espresso', price: 3.50},
//     {category: 'Coffee', name:'Americano', price: 3.50},
//     {category: 'Coffee', name:'Latte', price: 3.50},
//     {category: 'Coffee', name:'Cappuccino', price: 3.50},
//     {category: 'Coffee', name:'Macchiato', price: 3.50},
//     {category: 'Coffee', name:'Mocha', price: 3.50},
//     {category: 'Tea', name:'Tea', price: 3.50},
//     {category: 'Tea', name:'London Fog', price: 3.50},
//     {category: 'Tea', name:'Chai Latte', price: 3.50},
//     {category: 'Flavours', name:['Vanilla', 'Hazelnut', 'Caramel', 'Lavender']},
// ];
// const bakeryItems = [
//     {name: 'Croissants', flavours: ['Pistachio', 'Almond', 'Chocolate']}, 
//     {name: 'Danishes', flavours:['Lemon', 'Strawberry', 'Blueberry']}, 
//     {name: 'Donuts'}, 
//     {name: 'Cinnamon Buns'},
//     {name: 'Apple Fritters'},
//     {name: 'Pastel de Natas'},
//     {name: 'Cake Slices'},
//     {name: 'Assorted Cookies'},
//     {name: 'Oatmeal Sandwich Cookies'},
// ];

// const sandwichItems = [
//     {name: 'The Italian Stallion', desc:'Capocollo, mortadella, proscuitto cotto, provolone with lettuce'}, 
//     {name: 'The Kick', desc:'Soppressata, mortadello, prosciutto, havarti with basil pesto' },
//     {name: 'Egg Salad'}, 
//     {name: 'Roast Beef'}
// ];