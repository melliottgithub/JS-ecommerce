import axios from "axios";

const HomeScreen = {
  render: async () => {
    //const { results } = data;
    // console.log(item[0].name);
    let response = await axios({
      //"http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=jeans&resultsFormat=native&page=2"
      url:
        "http://api.searchspring.net/api/search/search.json?ajaxCatalog=v3&resultsFormat=native&siteId=scmq7n&domain=http%3A%2F%2Ftry.searchspring.com%2Fnew-arrivals&q=&userId=V3-4C313EC5-FE8F-4384-9F35-59C99F2BDD47&tracking=true&disableRedirects=1&bgfilter.days_since_published.low=*&bgfilter.days_since_published.high=30&collateDym=0",
      headers: { "Content-Type": "application/json" },
    });
    if (!response || response.statusText !== 'OK') {
      return `<div>Error in getting data</div>`;
    }
    let data = response.data;
    console.log(data);
    let item = data.results;

    return `
        <ul class='products'>
        ${item
          .map(
            (item) => `
        <li>
              <div class="product">
                <a href="/product/${item.uid}"
                  ><img
                    src="${item.thumbnailImageUrl}"
                    alt="${item.keywords}"
                /></a>
                <div class="product-brand">
                  ${item.name}
                </div>
                <div class="prices">
                  <span class="product-regular">$${item.msrp}.00</span>
                  <span class="product-sale">$${item.price}.00</span>
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
