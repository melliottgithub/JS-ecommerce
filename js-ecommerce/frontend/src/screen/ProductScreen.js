import { parseRequestUrl } from "../utils.js";
import { getProduct } from "../api.js";

const ProductScreen = {
  render: async () => {
    //return  `<div>ProductScreen</div>`;
    const request = parseRequestUrl();
    const product = await getProduct(request.id);



    console.log(product, "Hello");
    return `<h1>${product}</h1>`;
  },
};
export default ProductScreen;
