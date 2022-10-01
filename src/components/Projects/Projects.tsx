import ProjectSection from '../ProjectSection/ProjectSection';

function Projects() {
  return (
    <>
        <h2>projects</h2>
        <p>
          here are some of my very cool projects.
        </p>
        
        {/* <ProjectSection
          name={"programs"}
          resource={"/projects/programs"}
          description={"these are some programs that i have written"}
        /> */}

        <ProjectSection
          name={"tabletop"}
          resource={"/projects/tabletop"}
          description={"i have a hobby where i play pretend with friends. these are some programs that help"}
        />

        {/* <ProjectSection
          name={"keyboards"}
          resource={"/projects/keyboards"}
          description={"i can stop any time i want :)"}
        />

        <ProjectSection
          name={"3d models"}
          resource={"/projects/models"}
          description={"sometimes i like to doodle"}
        /> */}
    </>
  );
}

export default Projects;
