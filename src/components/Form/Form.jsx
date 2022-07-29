import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit,formState: { errors },reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    reset()};

//   console.log(watch("name")); // watch input value by passing the name of it
//   console.log(watch("exampleRequired")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
          <input {...register("name", { required: true, minLength: 2, maxLength: 30 })} />
            {errors.name?.type === 'required' && "name is required"}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  {...register("country", { required:true ,minLength:2,maxLength:30})} />
      {/* errors will return when field validation fails  */}
      {errors.country?.type === 'required' && "country is required"}
      
      <input type="submit" />
    </form>
  );
}
