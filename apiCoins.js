const fetchCoins = async () => {
  const endpoint1 = 'https://api.coincap.io/v2/assets';
  const request = await fetch(endpoint1);
  const json = await request.json();
  return json.data;
};
fetchCoins();

const makeList = async () => {
 const coinsArr = await fetchCoins();
 const list = document.getElementById('coins-list');
 coinsArr.map((coin) => {
  const createLi = document.createElement('li');
  createLi.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
  list.appendChild(createLi);
  console.log(createLi);
  return undefined;
 });
};
makeList();
