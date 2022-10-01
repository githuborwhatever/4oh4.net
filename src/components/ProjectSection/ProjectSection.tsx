import { Link } from "react-router-dom";
import ProjectSectionProps from '../../models/ProjectSectionProps';

function ProjectSection({name, resource, description}: ProjectSectionProps) {
  return (
        <>
            <div>
                <h3><Link to={resource}>{name}</Link></h3>
                
                <p>{description}</p>
            </div>
        </>
    )
}

export default ProjectSection;