import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button {...props} className={`${styles['button']} ${props.className}`}>
      {props.children}
    </button>
  )
}

export default Button
