import styles from '../styles/Nav.module.css'
import Link from 'next/link'


function Nav() {
  return (
    <div className={styles.nav}>
    <ul>
      <li><Link href='/'>About Me</Link></li>
      <li><Link href='#lifeSci' scroll={false}>Life Sciences</Link></li>
      <li><Link href='#software' scroll={false}>Software</Link></li>
      <li><Link href='#healthcare' scroll={false}>Healthcare</Link></li>
      <li><Link href='#other' scroll={false}>Business & Other</Link></li>
      <li className={styles.contact}><Link  href='mailto:noah.u22@gmail.com' target="_blank" rel="noopener noreferrer">Contact</Link></li>
      
    </ul>
    </div>
  )
}

export default Nav