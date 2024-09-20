document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            title: "NeuralSharp",
            description: "C# Deep Learning Library From Scratch",
            imageUrl: "assets/img/Mnist.png",
            accomplishments: [
                "Created a C# neural network library from scratch with optimizers, SGD, backpropagation and data encoding.",
                "Implemented feedforward and Generative - Adversarial Networks for handwritten digits."
            ],
            tools: "C#",
            date: "2021-08-05"
        },
        {
            title: "Studdy Buddy",
            description: "Hack the North Finalist 2021",
            imageUrl: "/assets/img/Studdy Buddy.png",
            accomplishments: [
                "Created a Chrome extension that automatically takes lecture notes and allows users to select and copy text seen in videos.",
                "selected as a finalist in a hackathon of over 400 teams."
            ],
            tools: "Node.js, React, Flask, HTML, CSS",
            link: "https://devpost.com/software/studdybuddy-wvsny2",
            date: "2021-09-15"
        },
        {
            title: "Covid-19 Misinformation on Twitter",
            description: "National Undergraduate Big Data Challenge Winner",
            imageUrl: "/assets/img/Big Data 2021.png",
            accomplishments: [
                "Co-wrote scientific research paper analyzing communities and the spread of COVID-19 misinformation on Twitter.",
                "Processed and analyzed 300,000 Tweets using Python data pipeline and won the Outstanding Science Communication Award."
            ],
            tools: "Python, Scikit-learn, XGBoost",
            link: "https://drive.google.com/file/d/1Gcn6M--Tuux-_HxfGHaQ62rcw4GyrT68/view",
            date: "2021-03-10"
        },
        {
            title: "Hurricanes and Ocean Temperatures",
            description: "National High School Big Data Challenge Finalist",
            imageUrl: "/assets/img/Big Data News.png",
            accomplishments: [
                "Performed data analysis on sea temperature and hurricane statistics dataset and co-wrote a paper detailing results.",
                "Selected as a finalist and invited to present to panel in a competition of hundreds of teams."
            ],
            tools: "Node.js, React, Flask, HTML, CSS",
            link: "https://live.stemfellowship.org/portfolio-items/high-school-big-data-challenge-2019-2020/",
            date: "2020-02-08"
        },


        // ... more projects
    ];
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    let currentIndex = 0;
    const projectsPerPage = 3; // Display one project at a time

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

