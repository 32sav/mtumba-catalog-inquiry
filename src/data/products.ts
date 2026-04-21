export type Category = "men-clothes" | "women-clothes" | "kids-clothes" | "shoes";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: string;
  condition: "Brand New" | "Like New" | "Gently Used" | "Well Worn";
  image_url: string;
  description: string;
  size?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Men's Cotton Button-Down Shirt",
    category: "men-clothes",
    price: "1,500 KES",
    condition: "Like New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/men-s-button-down-shirt-923c4fd3-1776778945423.webp",
    description: "Crisp white cotton shirt, perfect for formal or smart-casual wear. Premium quality fabric.",
    size: "Large"
  },
  {
    id: "2",
    name: "Women's Floral Maxi Dress",
    category: "women-clothes",
    price: "2,200 KES",
    condition: "Brand New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/women-s-maxi-dress-2951d169-1776778946219.webp",
    description: "Beautiful flowing maxi dress with vibrant floral patterns. Ideal for summer outings.",
    size: "Medium"
  },
  {
    id: "3",
    name: "Classic White Leather Sneakers",
    category: "shoes",
    price: "3,500 KES",
    condition: "Brand New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/classic-white-sneakers-9dc05d5c-1776778945569.webp",
    description: "Sleek and minimalist white sneakers. Versatile design that pairs well with any outfit.",
    size: "42 EU"
  },
  {
    id: "4",
    name: "Premium Slim-Fit Denim Jeans",
    category: "men-clothes",
    price: "2,800 KES",
    condition: "Like New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/premium-denim-jeans-ee9e2462-1776778949151.webp",
    description: "High-quality blue denim with excellent stitching. Durable and stylish.",
    size: "32W / 34L"
  },
  {
    id: "5",
    name: "High-Performance Running Shoes",
    category: "shoes",
    price: "4,200 KES",
    condition: "Brand New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/running-sports-shoes-9cb65f8e-1776778945962.webp",
    description: "Breathable and lightweight running shoes with superior cushioning for maximum comfort.",
    size: "44 EU"
  },
  {
    id: "6",
    name: "Children's Cotton T-Shirt Set",
    category: "kids-clothes",
    price: "1,200 KES",
    condition: "Brand New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/children-s-cotton-t-shirt-d64ab7e0-1776778945758.webp",
    description: "Soft and colorful cotton t-shirts for kids. Gentle on skin and easy to wash.",
    size: "6-8 Years"
  },
  {
    id: "7",
    name: "Handcrafted Leather Loafers",
    category: "shoes",
    price: "5,000 KES",
    condition: "Like New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/leather-loafers-9a765a5c-1776778945857.webp",
    description: "Elegant brown leather loafers with a polished finish. Perfect for formal occasions.",
    size: "43 EU"
  },
  {
    id: "8",
    name: "Insulated Winter Puffer Jacket",
    category: "men-clothes",
    price: "4,500 KES",
    condition: "Gently Used",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/winter-puffer-jacket-cb44d29e-1776778948029.webp",
    description: "Warm and stylish navy blue puffer jacket. Wind-resistant and highly durable.",
    size: "Medium"
  },
  {
    id: "9",
    name: "Stylish Suede Ankle Boots",
    category: "shoes",
    price: "3,800 KES",
    condition: "Brand New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/ankle-boots-01e69a8a-1776778949265.webp",
    description: "Fashionable tan suede boots with a comfortable heel. Elegant addition to any wardrobe.",
    size: "39 EU"
  },
  {
    id: "10",
    name: "Classic Casual Cotton Chinos",
    category: "men-clothes",
    price: "1,800 KES",
    condition: "Like New",
    image_url: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/5dae9a1a-763e-48f1-8530-d1cd259431ae/casual-cotton-chinos-70e30843-1776778949341.webp",
    description: "Versatile khaki chinos with a comfortable fit. Great for casual Fridays or daily wear.",
    size: "34W / 32L"
  }
];