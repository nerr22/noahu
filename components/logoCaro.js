import styles from '../styles/LogoCaro.module.css'
import React from 'react'

function LogoCaro(props) {
  return (
    <div className={styles.logoCaro}>
        {props.children}
    </div>
  )
}

export default LogoCaro