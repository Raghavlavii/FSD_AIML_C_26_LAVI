const div=document.getElementById('container')
const button=document.getElementById('btn')
console.log(div);
async function display(){
// div.innerHTML='<h2>Hello Using DOM</h2>';
try {
    const serverdata = await fetch('https://fakestoreapi.com/products');
    if (!serverdata.ok) {
        throw new Error(`Request failed: ${serverdata.status}`);
    }

    const jsonData = await serverdata.json();
    div.innerHTML = jsonData.map((product) => `
        <article>
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
        </article>
    `).join('');
} catch (error) {
    div.textContent = 'Unable to load products.';
    console.error(error);
}

}
button.addEventListener('click',display);