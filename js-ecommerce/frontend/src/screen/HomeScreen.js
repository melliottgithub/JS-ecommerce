import axios from "axios";
import { APIINITIAL } from "../config.js";

const HomeScreen = {
  render: async () => {

    let response = await axios({
      url:`${APIINITIAL}`,
      headers: { "Content-Type": "application/json" },
    });
    if (!response || response.statusText !== 'OK') {
      return `<div>Error in getting data</div>`;
    }
    let items = response.data.results;

    return `
        <ul class='products'>
        ${items
          .map(
            (items) => `
        <li>
              <div class="product">
                <a href="/#/product/${items.sku}"
                  ><img
                    src="${items.thumbnailImageUrl}"
                    alt="${items.keywords}"
                /></a>
                <div class="product-brand">
                  ${items.name}
                </div>
                <div class="prices">
                  <span class="product-regular">$${items.msrp}.00</span>
                  <span class="product-sale">$${items.price}.00</span>
                </div>
              </div>
            </li>
        `
          )
          .join("\n")}
        `;
  },
};
export default HomeScreen;
