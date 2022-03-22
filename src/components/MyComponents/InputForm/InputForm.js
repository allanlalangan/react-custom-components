import React from 'react'
import styles from './InputForm.module.css'
import Button from '../../ui/Button'
import Input from '../../input/Input'

const InputForm = () => {
  return (
    <form className={`${styles['form-container']}`}>
      <fieldset className={`${styles['text-fieldset']}`}>
        <legend className={`${styles['text-legend']}`}>Text</legend>
        <Input for='username' label='Username' type='text' />
        <Input for='email' label='Email' type='email' />
      </fieldset>

      <fieldset className={`${styles['date-fieldset']}`}>
        <legend className={`${styles['date-legend']}`}>Date</legend>
        <Input for='start-date' label='Start Date' type='date' />
        <Input for='end-date' label='End Date' type='date' />
      </fieldset>

      <fieldset className={`${styles['checkbox-fieldset']}`}>
        <legend className={`${styles['checkbox-legend']}`}>Checkbox</legend>
        <Input
          type='checkbox'
          for='this'
          label='This Checkbox'
          className={`${styles.checkbox}`}
        />
        <Input
          type='checkbox'
          for='that'
          label='That Checkbox'
          className={`${styles.checkbox}`}
        />
      </fieldset>
      <div className={`${styles['form-actions']}`}>
        <Button type='submit' className={`${styles['submit-btn']}`}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default InputForm
