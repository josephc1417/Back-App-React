import logo from '../images/logo.svg'
import { PageLink,SocialLinks } from '../data'


export const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      
        <ul className="nav-links" id="nav-links">
          {PageLink.map((link) => {
            return(
          <li key={link.id}>
            <a href={link.href} className="nav-link">{link.text}</a>
          </li>

            );
          })}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map((slink) => {
            const {id,href,target,i} = slink
           return(
           <li key={id}>
            <a href={href} target={target} rel='noreferrer' className="nav-icon"
              ><i className={i}></i
            ></a>
          </li>
           )
          })}
        </ul>
      </div>
    </nav>
    </div>
  )
}
