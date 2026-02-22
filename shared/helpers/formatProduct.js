// shared/helpers/formatProduct.js

export const formatProduct = (rawProduct, source) => {
  return {
    name: rawProduct.name || "Unknown Product",
    price: Number(rawProduct.price) || 0,
    rating: Number(rawProduct.rating) || 0,
    reviews: Number(rawProduct.reviews) || 0,
    productUrl: rawProduct.productUrl || "",
    source,
    scrapedAt: new Date(),
  };
};