import List from "./List1";
import YearlyPublications from "./YearlyPublications";
const submenu1 = () => {
  return <>
      <img src="https://static.wixstatic.com/media/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg/v1/fill/w_1699,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg" />
      <div className="title">
        <h1>Journal Articles</h1>
      </div>
      <div className="list">
          {(List.map((item, index) => (
            <YearlyPublications
              key={index}
              year={item.year}
              publications={item.publications}
            />
          ))
        )}
      </div>
  </>
}

export default submenu1