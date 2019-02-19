const apikey='73af27cdceb440e9a296f920a9ce5086';
window.addEventListener('load', e=>{
updateNews();
});
async function updateNews(){
    const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-15&sortBy=publishedAt&apiKey=${apikey}') 
    const json = await res.json();
}