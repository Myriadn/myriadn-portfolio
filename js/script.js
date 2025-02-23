document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("fa-times");
  });

  // Project Generator bentuk array
  const projects = [
    {
      title: "Sphere of Destiny",
      image: "assets/game1.png",
      links: [
        { icon: "youtube", url: "https://youtu.be/QSIVDNAe43w" },
        {
          icon: "github",
          url: "https://github.com/Myriadn/sphereofdestiny_ggj2025",
        },
      ],
    },
    {
      title: "Tb Revision",
      image: "assets/game-2.png",
      links: [
        { icon: "youtube", url: "https://youtu.be/L_7-4qIRujc" },
        {
          icon: "github",
          url: "https://github.com/Myriadn/TbRevision_project",
        },
      ],
    },
    {
      title: "Circle Chaser",
      image: "assets/game-3.png",
      links: [
        { icon: "youtube", url: "#" },
        {
          icon: "github",
          url: "https://github.com/Myriadn/Circle-Chaser",
        },
      ],
    },
    {
      title: "Mazeball",
      image: "assets/game-4.png",
      links: [
        { icon: "youtube", url: "#" },
        {
          icon: "github",
          url: "https://github.com/Myriadn/pbk_gamedev_mazeball",
        },
      ],
    },
    // bisa tambahin lagi
  ];

  const projectContainer = document.querySelector(".project-container");

  projects.forEach((project) => {
    const links = project.links
      .map(
        (link) => `
            <a href="${link.url}" target="_blank" class="project-icon">
                <i class="fab ${link.icon === "github" ? "s" : "ab"} fa-${
          link.icon
        }"></i>
            </a>
            
        `
      )
      .join("");

    projectContainer.innerHTML += `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <h3>${project.title}</h3>
                <div class="project-links">${links}</div>
            </div>
        `;
  });
});
