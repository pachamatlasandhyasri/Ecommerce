import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

const products = [
  {
    id: 1,
    title: 'Womens Wear',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HXIosZfsVYVKJaSTuCZR6zzRJr1Q_fA2AQ&s',
    description: ' quality ',
    price: 150,
  },
  {
    id: 2,
    title: 'Mens Wear',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzxizl2LKoytgmociR5M-81LYgdeP2nV8_A&s',
    description: 'Latest model ',
    price: 110,
  },
  {
    id: 3,
    title: 'Kids Wear',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNzkbopyIh8FsXElYpUuEEGkwr1JiXRauAQ&s',
    description: '',
    price: 90,
  },
  {
    id: 4,
    title: 'Kids Wear',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaB_wLRMA5fTfHm8iTS6geBad2VDRRcMdLyw&s',
    description: 'Track your fitness and manage notifications with this smart watch.',
    price: 90,
  },
  {
    id: 5,
    title: 'Laptop',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR60r7h1zsjEK3lTey3wIQvJW6LRfMhc1b9TL8pXjrNOABSHGfbjV7aedL7m6Uu9odWAXezhJCdVny86wyukGlr755c2RnzTJ-dm8ToUOQOqtVNzmXwdDGJsgmzQmKBVutoOLukPxw&usqp=CAc',
    description: 'Fast and powerful laptop with high storage capacity.',
    price: 1000,
  },
  {
    id: 6,
    title: 'Smartphone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCR2eyezSGg16PJ7z_YQgYQWyMkkCrtYvEw&s',
    description: 'Latest model with powerful features.',
    price: 599,
  },
  {
    id: 7,
    title: 'Wireless Head Phone',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTiT11EqWLslkXBmB1WScVEISrLU4_I8eCo0QSq3vSplOMl1u6L24twJX8n_t0SfED5HGPHp7m9as1E_ensCpZPv27Fj9GTh9NaJHuOMeQByKzih3s9KTEXWFReEoGFJDr5I7xMA&usqp=CAc',
    description: 'High quality wireless headphones with noise cancellation.',
    price: 100,
  },
  {
    id: 8,
    title: 'Smart Watch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3o7yUXw2l_eV9Cvxy17StDXJ4p_42xVvujA&s',
    description: 'Track your fitness and manage notifications with this smart watch.',
    price: 150,
  }
];

export default Products;


