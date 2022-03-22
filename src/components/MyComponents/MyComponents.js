import Section from '../ui/Section'
import Button from '../ui/Button'
import InputForm from './InputForm/InputForm'
import styles from './MyComponents.module.css'

const MyComponents = () => {
  return (
    <Section className={`${styles['my-components-section']}`}>
      <h2 className={styles['my-components-heading']}>Reusuable Components</h2>
      <article className={`${styles['buttons-container']}`}>
        <h3 className={`${styles['my-components-subheading']}`}>Buttons</h3>
        <Button className={`${styles['this-btn']}`}>This Button</Button>
        <Button className={`${styles['that-btn']}`}>That Button</Button>
      </article>
      <h3 className={`${styles['my-components-subheading']}`}>Custom Inputs</h3>
      <InputForm />
    </Section>
  )
}

export default MyComponents
