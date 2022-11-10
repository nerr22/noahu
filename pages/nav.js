import styles from '../styles/Nav.module.css'
import Link from 'next/link'

function Nav() {
  return (
    <div className={styles.nav}>
    <ul>
      <li><Link href='/'>About Me</Link></li>
      <li><Link href='#technology' scroll={false}>Technology</Link></li>
      <li><Link href='#healthcare' scroll={false}>Healthcare</Link></li>
      <li><Link href='#biology' scroll={false}>Biology</Link></li>
      <li><Link href='#hobbies' scroll={false}>Hobbies</Link></li>
    </ul>
    </div>
  )
}

export default Nav