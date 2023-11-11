import { ProductProps } from "../interfaces/ProductProps";

export const products: ProductProps[] = [
  {
    flavour: 'Margherita',
    images: [
    {url: 'src/assets/images/first-flavour--4.jpg'},
    {url: 'src/assets/images/first-flavour--1.jpg'},
    {url: 'src/assets/images/first-flavour--2.jpg'},
    {url: 'src/assets/images/first-flavour--3.jpg'},
    ],
    price: 89.9,
    description: 'Crosta fina, molho de tomate fresco, queijo mozzarella derretido e manjericão aromático, uma combinação clássica e irresistível.',
    productTotalReview: 42
  },

  {
    flavour: 'Pepperoni',
    images: [
    {url: 'src/assets/images/first-flavour--3.jpg'},
    {url: 'src/assets/images/first-flavour--2.jpg'},
    {url: 'src/assets/images/first-flavour--4.jpg'},
    {url: 'src/assets/images/first-flavour--1.jpg'},
    ],
    price: 79,
    description: 'Crosta fina, molho de tomate fresco, queijo mozzarella derretido e rodelas finas de pepperoni, uma combinação clássica e irresistível.',
    productTotalReview: 67
  },

  {
    flavour: 'Portuguesa',
    images: [
    {url: 'src/assets/images/sec-flavour--1.jpg'},
    {url: 'src/assets/images/sec-flavour--2.jpg'},
    {url: 'src/assets/images/sec-flavour--2.jpg'},
    {url: 'src/assets/images/sec-flavour--1.jpg'},
    ],
    price: 109.9,
    description: 'Borda recheada, molho de tomate fresco, queijo mozzarella derretido, ovos cozidos e rodelas finas de calabresa, uma combinação clássica e irresistível.',
    productTotalReview: 105
  },
]