
const ProjectCard = ({title, pi, co_pi, funding_agency, grant_amount, status}) => {
  return (
    <div className="project-card">
        <h1><a>Title : </a>{title}</h1>
        {pi?
        <h1><a>PI : </a>{pi}</h1>:
        <h1><a>Co-PI : </a>{co_pi}</h1>
        }
        <h1><a>Funding Agency : </a>{funding_agency}</h1>
        <h1><a>Grant Amount : </a>{grant_amount}</h1>
        <h1><a>Status : </a>{status}</h1>
    </div>
  )
}

export default ProjectCard