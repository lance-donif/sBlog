'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors.firstName);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="firstName" {...register("firstName", {required: true, maxLength: 3})}
      aria-invalid={errors.firstName ? "true" : "false"}
      
              />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
        {errors.firstName?.type === "maxLength" && (
        <p role="alert">First name maxLength</p>
      )}
      <input type="submit" />
    </form>
  );
}