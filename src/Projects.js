import blogImage from './images/c-blog.png';
import soonImage from './images/soon.png';

const Projects = () => {
    return ( 
        <div className="projects">
            <h2 className="project-title">Projects</h2>
            <div className="projects-list">
                <a href="https://github.com/CristianisTrying" target="_blank"><div className="project">
                    <img src={blogImage} alt="first-project" />
                </div></a>
                <div className="project">
                    <a><img src={soonImage} alt="second-project" /></a>
                </div>
                <div className="project">
                    
                    <a><img src={soonImage} alt="third-project" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;