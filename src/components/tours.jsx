import { Cards } from "../data"
import Title from "./title"


export const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subtitle='tours'/>

    <div className="section-center featured-center">
      {Cards.map((card) => {
      const {id,img, date, title,text, icon,ft,ft1,ft2} = card 
      return(
      <article key={id} className="tour-card">
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
          {text}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className={icon}></i></span>{ft}
            </p>
            <p>{ft1}</p>
            <p>{ft2}</p>
          </div>
        </div>
      </article>
      )
      })}
    </div>
  </section>
  )
}
