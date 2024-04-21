import { Link, useLocation } from 'react-router-dom';
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul style={{display: 'flex', flexDirection: 'row', listStyleType: 'none'}}>
      <li style={{margin: '5px'}}>
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li style={{margin: '5px'}}>
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link-active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li style={{margin: '5px'}}>
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link-active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li style={{margin: '5px'}}>
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link-active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;