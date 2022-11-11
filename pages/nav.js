import styles from '../styles/Nav.module.css'
import Link from 'next/link'

function Nav() {
  return (
    <div className={styles.nav}>
    <ul>
      <li><Link href='/'>About Me</Link></li>
      <li><Link href='#lifeSci' scroll={false}>Life Sciences</Link></li>
      <li><Link href='#ML' scroll={false}>ML/ AI</Link></li>
      <li><Link href='#webDev' scroll={false}>Web Dev</Link></li>
      <li><Link href='#other' scroll={false}>Other</Link></li>
    </ul>
    </div>
  )
}

export default Nav