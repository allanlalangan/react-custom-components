import styles from './MainHeader.module.css'

const MainHeader = (props) => {
  return (
    <header className={`${styles['main-header']}`}>
      <h1 className={`${styles['main-title']}`}>reactBoilerplate</h1>
    </header>
  )
}

export default MainHeader
