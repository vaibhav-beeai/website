// src/components/Contact.js
import React from 'react';
import { useForm } from 'react-hook-form';
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    // You can handle the form data here, for example, send it to your server.
    // For this example, let's log the data.
    console.log(data);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>

        <label>
          Email:
          <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>

        <label>
          Message:
          <textarea {...register('message', { required: 'Message is required' })} />
          {errors.message && <p>{errors.message.message}</p>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
