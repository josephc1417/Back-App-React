import Title from "./title"
import { Articles } from "../data"


export const Services = () => {
  return (
    <div>
         <section className="section services" id="services">
        <Title title='our' subtitles ='services'/>
      
      <div className="section-center services-center">
        {Articles.map((article) => {
          const {id,icon,title,text}= article
          return(
            <article key={id} className="service">
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">
              {text}
              </p>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>

    </div>
  )
}
