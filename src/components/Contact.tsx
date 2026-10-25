import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name === '' || email === '' || message === '') {
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    setStatus('sending');
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
      templateParams,
      { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '' }
    ).then(
      () => {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
        console.error('Failed to send message:', error);
        setStatus('error');
      },
    );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen! You can also email me at <a href="mailto:johnlloydenciomacalino07@gmail.com">johnlloydenciomacalino07@gmail.com</a>.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                variant="filled"
                InputProps={{ disableUnderline: true }}
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                variant="filled"
                InputProps={{ disableUnderline: true }}
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              variant="filled"
              InputProps={{ disableUnderline: true }}
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {status === 'success' && (
              <Alert severity="success" className="form-status">Thanks for reaching out! Your message has been sent.</Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" className="form-status">Sorry, your message couldn't be sent. Please email me directly instead.</Alert>
            )}
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;