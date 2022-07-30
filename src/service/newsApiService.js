const API_KEY = '3f7e1c33050647a89bcaa58110946b47';
const BASE_URL = `https://newsapi.org/v2/everything?q=cat&from=2022-07-30&sortBy=popularity&apiKey=${API_KEY}`;

export default async function fetchNews() {
  const respons = await fetch(BASE_URL);
  const data = await respons.json();
  return data;
}
