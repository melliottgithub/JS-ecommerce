import axios from "axios";

const HomeScreen = {
  render: async () => {

    let response = await axios({
      //"http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=jeans&resultsFormat=native&page=2"
      url:
        "http://api.searchspring.net/api/search/search.json?ajaxCatalog=v3&resultsFormat=native&siteId=scmq7n&domain=http%3A%2F%2Ftry.searchspring.com%2Fnew-arrivals&q=&userId=V3-4C313EC5-FE8F-4384-9F35-59C99F2BDD47&tracking=true&disableRedirects=1&bgfilter.days_since_published.low=*&bgfilter.days_since_published.high=30&collateDym=0",
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
