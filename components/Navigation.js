import Link from 'next/link'
import navStyles from '../styles/Navigation.module.css'


export default function Navigation({ children }){
  return(
    <nav className={navStyles.nav}>
      <ul>
        <li> 
          <Link href='/'> Home </Link>
        </li>

        <li> 
          <Link href='/about'> About </Link>
        </li>
      </ul>
    </nav>
  )
  }