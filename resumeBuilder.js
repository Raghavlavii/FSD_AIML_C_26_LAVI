const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <main style="font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <h1 style="margin-bottom: 10px;">Lavi Raghav</h1>
      <p style="margin: 5px 0; color: #555;">Full Stack Developer</p>
      <hr>
      <section>
        <h2>Profile</h2>
        <p>Motivated developer focused on building clean, responsive web applications.</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>
    </main>
  `;
} else {
  console.error('Element with id="root" was not found.');
}