import EmailIcon from "@mui/icons-material/Email";

export default function Card(props) {
  const className = `card-container ${props.vertical ? "vertical" : ""}`.trim();

  return (
    <div className={className}>
      <div className="img-container">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="about">
        <div className="name-box">
          <h1>{props.name}</h1>
          <h3>{props.designation}</h3>
        </div>
        <div className="ORC-box">
          <h2>
            <b>{props.ORCid}:</b>{" "}
            <a
              className="orc-link"
              href={props.orcUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.ORCvalue}
            </a>
          </h2>
          <h2>
            <b>{props.lhs}:</b> {props.rhs}
          </h2>
        </div>

        <div className="mail-box">
          <EmailIcon className="mail" />
          <a
            href={`mailto:${props.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.email}
          </a>
        </div>
      </div>
    </div>
  );
}