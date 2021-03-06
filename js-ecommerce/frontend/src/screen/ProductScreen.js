import { parseRequestUrl } from "../utils.js";
import { getProduct } from "../api.js";

const ProductScreen = {
  render: async () => {
    //return  `<div>ProductScreen</div>`;
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    return `
    <div class="content">
      <div class="back-to-result">
        <a href="/#/">Back to results</a>
      </div>
      <div class="details">
        <div class="details-image">
          <img src="${product.imageUrl}" alt="${product.name}" srcset=""/>
        </div>
        <div class="details-info">
          <ul>
            <li>
              <h1>${product.name}</h1>
            </li>
            <li>
              <span class="product-regular">$${product.msrp}.00</span>
              <span class="product-sale">$${product.price}.00</span>
            </li>
            <li>
                  ${
                    product.quantity_available > 0
                      ? `
                      <button id="add-button" class="primary">
                        Add to Cart
                      </button>                    
                      `
                      : `
                      <button disabled id="add-button" class="primary">
                        Unavailable
                      </button>
                    `
                  }
            <li>
              <div>${product.description}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
  },
};
export default ProductScreen;
