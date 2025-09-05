
const BookCard = ({img, title, Editors, Publisher, Year, Pages, Print_ISBN, Print_ISBN_suffix, eBook_ISBN, eBook_ISBN_suffix, DOI}) => {
  return (
    <div className="book-card">
        <div className="book-image">
            <img src={img}></img>
        </div>
        <div className="book-details">
            <a className="blue">{title}</a> <br/>
            <a className="red">Editors: </a>{Editors}<br/>
            <a className="red">Publisher: </a>{Publisher}<br/> 
            <a className="red">Year: </a>{Year}<br/>
            <a className="red">Pages: </a>{Pages}<br/>
            <a className="red">Print ISBN{Print_ISBN_suffix ? `-${Print_ISBN_suffix}` : ""}: </a>{Print_ISBN}<br/>
            <a className="red">eBook ISBN{eBook_ISBN_suffix ? `-${eBook_ISBN_suffix}` : ""}: </a>{eBook_ISBN}<br/>
            <a className="red">DOI: </a><a href={DOI} style={{color:"blue"}} target="_blank">{DOI}</a><br/>
        </div>
    </div>
  )
}

export default BookCard