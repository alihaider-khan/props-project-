import React from 'react'
import styles from './Header.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
      <h1>this is a header</h1>
      <button className={styles.btn}>login</button>
    </div>
  )
}
