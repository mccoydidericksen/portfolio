import projects from "../data/projects";
import ProjectItem from "./projectItem";

function project() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {projects.map((project, index) => (
              <ProjectItem
                 imgUrl={project.imgUrl}
                 title={project.title}
                 stack={project.stack}
                 link={project.link}
                 key={index}
              />
           ))}
        </div>
     </div>
    )
}

export default project;