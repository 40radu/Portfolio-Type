import React from 'react'
import styles from './_text-Area.module.scss'
import { ITextArea } from './textAreaType'

function TextArea({onChange} : ITextArea) {
  return (
    <textarea name="message" id="" placeholder='Message' className={styles.text_area} onChange={onChange}>
    </textarea>
  )
}

export default TextArea