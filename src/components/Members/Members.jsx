import Card from "./Card";
import PhD from "./PhD";
import Professor from "./Professor";
function Members() {
  return (
    <div className="members">
      <h1 className="title">Lab Head</h1>
      <h3 className="underscore">___</h3>
      <div className="alignment-box">
        <Card
          img={Professor.img}
          name={Professor.name}
          designation={Professor.designation}
          ORCid={Professor.ORCid}
          orcUrl={Professor.orcUrl}
          ORCvalue={Professor.ORCvalue}
          lhs={Professor.lhs}
          rhs={Professor.rhs}
          email={Professor.email}
        />
      </div>
      <h1 className="title">Lab Members</h1>
      <h3 className="underscore">___</h3>
      <div className="flex-container">
        {PhD.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            designation={item.designation}
            ORCid={item.ORCid}
            orcUrl={item.orcUrl}
            ORCvalue={item.ORCvalue}
            lhs={item.lhs}
            rhs={item.rhs}
            email={item.email}
          />
        ))}
      </div>
    </div>
  );
}
export default Members;
