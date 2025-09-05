import ProjectCard from "./ProjectCard";
import List from "./ProjectList";
function Projects() {
  return (
    <div className="project">
      <div className="project-page-title">
        <img src="https://static.wixstatic.com/media/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg/v1/fill/w_1699,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg"></img>
        <h1>Project</h1>
      </div>
      <div className="project-container">
        {List.map((item, index) => (
          <ProjectCard 
            key = {index}
            title = {item.title}
            pi = {item.pi}
            co_pi = {item.co_pi}
            funding_agency = {item.funding_agency}
            grant_amount = {item.grant_amount}
            status = {item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
