import React from 'react'
import styles from './Input.module.css'

const Input = (props) => {
  return (
    <div className={styles[`input-${props.type}-container`]}>
      <label
        htmlFor={props.for}
        className={styles[`input-${props.type}-label`]}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.for}
        id={props.for}
        className={`${styles.input} ${props.className}`}
      />
    </div>
  )
}

export default Input
