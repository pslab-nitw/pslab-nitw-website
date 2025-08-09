import Card from "./Card";
import AlumniList from "./List";
import PGList from "./PGList";
import UGList from "./UGList";
function Alumni() {
  return (
    <div className="alumni">
      <div className="title">
        <h1>Alumni</h1>
      </div>
      <div className="flex-container">
        {AlumniList.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            event={item.event}
            current={item.current}
          />
        ))}
      </div>
      <div className="title">
        <h1>Post Graduates</h1>
      </div>
      <div className="flex-container-2">
        {PGList.map((item, index) => (
          <p key={index}>{item.name} - {item.branch} - batch of {item.year}</p>
        ))}
      </div>
      <div className="title">
        <h1>Under Graduates</h1>
      </div>
      <div className="flex-container-2">
        {UGList.map((item, index) => (
          <p key={index}>{item.name} - {item.branch} - batch of {item.year}</p>
        ))}
      </div>
    </div>
  );
}
export default Alumni;
