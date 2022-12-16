export const fetchProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_products`
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};
