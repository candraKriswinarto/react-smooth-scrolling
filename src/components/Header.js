import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import styles from '../styles/Header.module.css'

const Header = () => {
  const { activeLinkId } = useContext(NavContext);

  const navLinks = ["Home", "Destinations", "Hotels", "Flights", "Bookings"];
  const handleClickLogo = () => {
    document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" })
  }

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <ul key={content}>
        <li>
          <button
            onClick={handleClickNav}
            className={activeLinkId === content ? styles.activeClass : ""}
          >{content}</button>
        </li>
      </ul>
    )
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <h1 onClick={handleClickLogo}>Jadoo</h1>
          <nav>
            {navLinks.map(nav => renderNavLink(nav))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header