import Section from '../ui/Section'
import Button from '../ui/Button'
import styles from './MyComponents.module.css'

const MyComponents = () => {
  return (
    <Section className={`${styles['my-components-section']}`}>
      <h2 className={styles['my-components-heading']}>Reusuable Components</h2>
      <div className={`${styles['buttons-container']}`}>
        <Button className={`${styles['this-btn']}`}>This Button</Button>
        <Button className={`${styles['that-btn']}`}>That Button</Button>
      </div>
    </Section>
  )
}

export default MyComponents
