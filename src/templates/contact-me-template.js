// @flow strict
import React, { useState } from 'react';
import { init, send } from 'emailjs-com';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import { isEmpty, isEmail } from '../utils/validators';

const ContactMeTemplate = () => {
  const { title, subtitle, author } = useSiteMetadata();
  // Input fields: fullName, e-mail, message
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  // Form state items
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  // Creates params object to hold items in one container
  const params = {
    fullName,
    email,
    message,
  };

  // Item validation handlers
  const isValid = {
    fullName: (value) => !isEmpty(value),
    email: (value) => !isEmpty(value) && isEmail(value),
    message: (value) => !isEmpty(value),
  };

  const errorMessage = `Oops! couldn't send the email. Please send me a one at - ${author.contacts.email}`;

  const renderButton = () => {
    if (isSent) {
      return <button disabled>Sent</button>;
    }

    if (isSending) {
      return <button disabled>Sending...</button>;
    }

    return <button onClick={sendMessage}>Send Message</button>;
  };

  const validate = () => {
    const items = ['fullName', 'email', 'message'];
    const errors = [];

    for (let i = 0; i < items.length; i += 1) {
      const itemName = items[i];

      if (!isValid[itemName](params[itemName])) {
        errors.push(itemName);
      }
    }

    setErrors(errors);

    return errors;
  };

  function errorClassName(itemName) {
    return isSubmitted && errors.includes(itemName) ? 'has-error' : '';
  }

  const sendMessage = async () => {
    setIsSubmitted(true);

    // Validate form.
    const errors = validate();

    // Terminate execution if errors were found
    if (errors.length) {
      return;
    }

    setIsSending(true);

    // Init emailjs.com SDK
    init('user_vsPR1TroUrLfTA9TiGFcw');

    try {
      // Send e-mail
      await send('gmail', 'personal_blog', params);

      setIsSending(false);
      setIsSent(true);
    } catch {
      setEmailErr(true);
      setIsSending(false);
    }
  };

  return (
    <Layout title={`Contact Me - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Me">
        <p className="error-message">
          { !emailErr ? <span>&nbsp;</span> : errorMessage }
        </p>
        <input
          placeholder="John Doe"
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          className={errorClassName('fullName')}
        />
        <input
          placeholder="foo@bar.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          className={errorClassName('email')}
        />
        <textarea
          placeholder="Hi Arthur! Let's get in touch."
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          className={errorClassName('message')}
        />
        {renderButton()}
      </Page>
    </Layout>
  );
};

export default ContactMeTemplate;
