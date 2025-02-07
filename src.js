import React from 'react';
import './WelcomePage.css';

const projects = [
    { id: 1, title: 'Project One', link: 'https://ss1618.github.io/1/index.html' },
    { id: 2, title: 'Project Two', link: 'https://ss1618.github.io/2/index.html' },
    { id: 3, title: 'Project Three', link: 'https://ss1618.github.io/3/index.html' },
    { id: 4, title: 'Project Four', link: 'https://ss1618.github.io/4/index.html' },
    { id: 5, title: 'Project Five', link: 'https://ss1618.github.io/5/index.html' },
    { id: 6, title: 'Project Six', link: 'https://ss1618.github.io/Final/index.html' },
];

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <h1>Welcome to My Portfolio</h1>
            <div className="card-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WelcomePage;
