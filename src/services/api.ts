import type { ProductsResponse } from "../types/product";

const BASE_URL =
  "/api/produtos.json";

export async function getProducts() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data: ProductsResponse = await response.json();

  return data.products;
}