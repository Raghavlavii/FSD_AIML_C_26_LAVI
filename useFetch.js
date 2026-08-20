const div = document.getElementById('container');
const button = document.getElementById('btn');

if (!div || !button) {
  console.error('Container or button not found');
} else {
  const h2 = document.createElement('h2');
  h2.innerText = 'Data is loading...';

  async function display() {
    try {
      div.appendChild(h2);

      const serverData = await fetch('https://fakestoreapi.com/products');
      const jsonData = await serverData.json();

      const table = `
        <table border="4">
          <tr>
            <th>Image</th>
            <th>Item_Id</th>
            <th>Item_Title</th>
            <th>Item_Price</th>
          </tr>
          ${jsonData.map((ele) => `
            <tr>
              <td><img src="${ele.image}" alt="${ele.title}" width="200" height="200"></td>
              <td>${ele.id}</td>
              <td>${ele.title}</td>
              <td>${ele.price}</td>
            </tr>
          `).join('')}
        </table>
      `;

      div.innerHTML = table;
    } catch (e) {
      console.log('error is: ' + e);
    } finally {
      if (h2.parentNode) {
        div.removeChild(h2);
      }
    }
  }

  button.addEventListener('click', display);
}