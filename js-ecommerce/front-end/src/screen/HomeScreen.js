import data from "../data.js";

const HomeScreen = {
  render: () => {
        const { results } = data;
        let item = data.results
        console.log(item[0].name);
    return `
        <ul class='products'>
        ${item.map(
          (item) => `
        <li>
              <div class="product">
                <a href="/#/product/1"
                  ><img
                    src="${item.thumbnailImageUrl}"
                    alt="img-1"
                /></a>
                <div class="product-brand">
                  ${item.name}
                </div>
                <div class="prices">
                  <span class="product-regular">$200</span>
                  <span class="product-sale">$100</span>
                </div>
              </div>
            </li>
        `
        )}
        `;
  },
};
export default HomeScreen;