document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "Big Data Challenge",
            description: "Winner of National Undergraduate Big Data Challenge",
            imageUrl: "/assets/img/project-quizup-logo-1.png",
            accomplishments: [
                "Co-wrote scientific research paper analyzing communities and the spread of COVID-19 misinformation on Twitter.",
                "Processed and analyzed 300,000 Tweets using Python data pipeline and won the Outstanding Science Communication Award."
            ],
            tools: "Python, Scikit-learn, XGBoost",
            link: "https://drive.google.com/file/d/1Gcn6M--Tuux-_HxfGHaQ62rcw4GyrT68/view"
        },
        // Add more projects here
        {
            title: "AI Development Platform",
            description: "Developed an AI-powered platform for automating software development.",
            imageUrl: "/assets/img/ai-platform.png",
            accomplishments: [
                "Automated test writing and PR creation.",
                "Used machine learning models to streamline code reviews."
            ],
            tools: "JavaScript, Python, GPT-4 API",
            link: "#"
        },
        // ... more projects
    ];

    let currentIndex = 0;
    const projectsPerPage = 1; // Display one project at a time

    // Function to create a project card HTML structure
    function createProjectCard(project) {
        return `
        <div class="col s12 m6 l4">
          <div class="card medium">
            <div class="card-image waves-effect waves-block waves-light">
              <img alt="${project.title}" src="${project.imageUrl}" style="height: 100%; width: 100%" class="activator">
            </div>
            <div class="card-content">
              <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
              <p>${project.description}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
              <ul>
                <li><b>Tools:</b> ${project.tools}</li>
                ${project.accomplishments.map(item => `<li>${item}</li>`).join('')}
              </ul>
              <div class="card-action">
                <a aria-label="Visit" href="${project.link}" target="_blank" data-position="top" data-tooltip="View Paper" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Function to load projects dynamically
    function loadProjects() {
        const recentProjectsDiv = document.getElementById('recent-projects');
        const end = Math.min(currentIndex + projectsPerPage, projects.length);

        for (let i = currentIndex; i < end; i++) {
            recentProjectsDiv.innerHTML += createProjectCard(projects[i]);
        }

        currentIndex = end;

        // Hide the "Load More" button if all projects are displayed
        if (currentIndex >= projects.length) {
            document.getElementById('load-more-btn').style.display = 'none';
        }
    }

    // Event listener for the "Load More" button
    document.getElementById('load-more-btn').addEventListener('click', loadProjects);

    // Load the first project initially
    loadProjects();
});

