const BASE_URL = "http://127.0.0.1:8000";
const BASE_API_URL = BASE_URL + "/api";

const ENDPOINTS = {
    list_banners: BASE_API_URL + "/banners",
    list_home_products: BASE_API_URL + "/products/home-products",
    list_product_details: BASE_API_URL + "/products",
    search_product: BASE_API_URL + "/search"
};

export { ENDPOINTS };
