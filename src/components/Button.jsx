import React, { Children } from 'react'
import styles from '../styles/Button.module.css'

const Button = ({children}) => {
  return (
    <button className={styles.buyButton}>{children}</button>
  )
}

export default Button
