"use client"
import Button from '@/components/Button/Button'
import TextInput from '@/components/TextInput/TextInput'
import styles from './contact.module.scss';
import React, { useState } from 'react'


function ContactForm() {
  const [name, setName] = useState('Jake Paul') 
  const [email, setEmail] = useState('jakepaul@mail.com')
  const [subject, setSubject] = useState('This is a dummy')
  const [message, setMessage] = useState('This message is not even real in any stretch of the imagination')

  async function submitForm(e) {
    e.preventDefault();
    console.log("Submit Form");
    console.log({name,email,subject,message});
    
  }

  return (
    <form className={styles.contact_form}>
      <TextInput key={"name"} label='name' placeholder='Joe Do' type='text' setTextValue={setName} textValue={name} />
      <TextInput key={"email"} label='email' placeholder='joedo@gmail.com' type='email' setTextValue={setEmail} textValue={email} />
      <TextInput key={"subject"} label='subject' placeholder='Collaboration ...' type='text' setTextValue={setSubject} textValue={subject} />
      <TextInput key={"message"} label='message' placeholder='The message you want to send' type='textarea' setTextValue={setMessage} textValue={message} />
      <Button type='submit' text='SUBMIT' clickHandler={submitForm}/>
    </form>
  )
}

export default ContactForm