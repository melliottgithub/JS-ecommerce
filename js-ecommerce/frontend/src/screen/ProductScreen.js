import { parseRequestUrl } from "../utils";

const ProductScreen = {
  render: () => {
    render: async () => {
      const request = parseRequestUrl();
      const product = await getProduct(request.id);
    };
  },
};
export default ProductScreen;
