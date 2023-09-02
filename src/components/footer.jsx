import { PageLink,SocialLinks } from '../data'

export const Footer = () => {
  return (
    <div>
        
    <footer className="section footer">
    <ul className="footer-links">
          {PageLink.map((link) => {
            return(
          <li key={link.id}>
            <a href={link.href} className="footer-link">{link.text}</a>
          </li>
            );
          })}
        </ul>
      <ul className="footer-icons">
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
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    </div>
  )
}
