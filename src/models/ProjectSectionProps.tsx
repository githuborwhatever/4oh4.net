class ProjectSectionProps {
    name: string;
    resource: string;
    description: string;

    constructor(name: string, resource: string, description: string) {
        this.name = name;
        this.resource = resource;
        this.description = description;
    }
};

export default ProjectSectionProps;
