import BookCard from "./BookCard";
import List from "./BookList";
const submenu1 = () => {
  return <>
      <img src="https://static.wixstatic.com/media/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg/v1/fill/w_1699,h_539,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad420a_f98d68876fc145f595d999cec41dda12~mv2.jpg" />
      <div className="title">
        <h1>Books</h1>
      </div>
      <div className="book-container">
          {List.map((item, index) => (
            <BookCard 
              key={index}
              img={item.img}
              title={item.title}
              Editors={item.Editors}
              Publisher={item.Publisher}
              Year={item.Year}
              Pages={item.Pages}
              Print_ISBN={item.Print_ISBN}
              Print_ISBN_prefix={item.Print_ISBN_suffix}
              eBook_ISBN={item.eBook_ISBN}
              eBook_ISBN_suffix={item.eBook_ISBN_suffix}
              DOI={item.DOI}            
            />
          ))}
      </div>
  </>
}

export default submenu1