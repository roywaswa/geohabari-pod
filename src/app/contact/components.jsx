"use client"
import Button from '@/components/Button/Button'
import TextInput from '@/components/TextInput/TextInput'
import styles from './contact.module.scss';
import React, { useEffect, useState } from 'react'


function ContactForm() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [error, setError] = useState('') 
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  // const { isDarkMode } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {   
      setSuccess(false)
    }, 7000);
    return () => clearTimeout()
  }, [success,setSuccess])

  const submitForm = async (e) => {
    setLoading(true)
    e.preventDefault(); 
    const emailSchema = z.string().email({ message: "Please enter a valid email address." });
    const nameSchema = z.string().min(3, { message: "Name must be 3 or more characters long" });
    let data = {
      email:'',
      fname:'',
      lname:''
    }
    try {
      emailSchema.parse(email)
      data.email = email
      nameSchema.parse(fName)
      nameSchema.parse(lName)
      data.fname = fName
      data.lname = lName
    } catch (error) {
      setError(error.errors[0].message)
      setLoading(false)
      return 0
    }    
    const response = await fetch("api/subscribe",{
      method: "POST",
      header:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    response.json().then(res => {
      if (res.message == "Success"){
        setSuccess(true)
        setSubscriberEmail('')
        setSubscriberName('')
      }
      setLoading(false)
    }).catch(err => {
      setLoading(false)
    })
  };

  // async function submitForm(e) {
  //   e.preventDefault();
  //   console.log("Submit Form");
  //   console.log({name,email,subject,message});
    
  // }

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