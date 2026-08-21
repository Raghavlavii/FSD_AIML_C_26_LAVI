const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <main style="font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 40px 20px; text-align: center; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <h1>Welcome to My Resume</h1>
      <button id="openResumeButton" type="button" style="padding: 12px 24px; background: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer;">Open Resume</button>
    </main>
  `;

  document.getElementById('openResumeButton').addEventListener('click', () => {
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
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science specialization in artificial intelligence and machine learning.</p>
        <h2>Experience</h2>
        <p>Worked on various web development projects, focusing on front-end and back-end technologies.</p>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: E-commerce website using React and Node.js</li>
          <li>Project 2: AN opportunity aggregator named Argus </li>
          <li>Project 3: An internship project named AatmanirbharNari</li>
        </ul>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:lavi.raghav@example.com">laviraghav@example.com</a></p>
        <p>Phone: 9927226271</p>


      </section>
    </main>
    `;
  });
} else {
  console.error('Element with id="root" was not found.');
}