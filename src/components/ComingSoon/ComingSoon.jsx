"use client"
import React, { useEffect, useState } from 'react'; 
import PropTypes from 'prop-types';
import styles from './ComingSoon.module.scss';
import LottieAnimation from '@/components/LottieAnimation/LottieAnimation';
import TextInput from '@/components/TextInput/TextInput'; 
import Button from '@/components/Button/Button';
import { z } from 'zod';
import { LinearProgress, Alert } from '@mui/material';


const ComingSoon = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('')
  const [subscriberName, setSubscriberName] = useState('')
  const [error, setError] = useState('') 
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {   
      setSuccess(false)
    }, 7000);
    return () => clearTimeout()
  }, [success,setSuccess])
  

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const emailSchema = z.string().email({ message: "Please enter a valid email address." });
    const nameSchema = z.string().min(3, { message: "Name must be 3 or more characters long" });
    let data = {
      email:'',
      name:''
    }
    try {
      emailSchema.parse(subscriberEmail)
      data.email = subscriberEmail
      nameSchema.parse(subscriberName)
      data.name = subscriberName
    } catch (error) {
      setError(error.errors[0].message)
      setLoading(false)
      return 0
    }    
    const response = await fetch("api/submit",{
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

  return(
    <div className={styles.ComingSoon} data-testid="ComingSoon">
      <div className={styles.logo_animation}>
        <LottieAnimation/>
      </div>
      <div className={styles.prompt}>
        <h2>COMING SOON</h2>
        <h3>Sign Up for a Heads Up</h3>
      </div>
      <div className={`${styles.success_alert} ${success? styles.show : styles.hide}` }>
        <Alert severity="success">Your Email has been received <b>Succesfully</b></Alert>
      </div> 
      {loading ? <div className={styles.loading}>
        <LinearProgress />
      </div> : null}
      <div className={styles.form_field}>
        <form onSubmit={handleSubmit}>
          <div className={styles.text_inputs}>
            <TextInput 
              textValue={subscriberName}
              setTextValue={setSubscriberName}
              key="name" 
              label= "Full Name"
              name={"name"} 
              placeholder={"Joe Po"} />
            <TextInput 
              textValue={subscriberEmail}
              setTextValue={setSubscriberEmail}
              key="email" 
              label= "E-mail Address"
              name={"email"} 
              type="email"
              placeholder={"joe@person.com"} />
          </div>
          <Button text="Hit me Up" clickHandler={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

ComingSoon.propTypes = {};

export default ComingSoon;
