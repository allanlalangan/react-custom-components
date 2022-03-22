import styles from './MainFooter.module.css'

const MainFooter = (props) => {
  return (
    <footer className={`${styles['main-footer']}`}>
      <h1 className={`${styles['footer-title']}`}>footerNav</h1>
    </footer>
  )
}

export default MainFooter
