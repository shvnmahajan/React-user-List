import React, { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = (props) => {

  const [formData, setFormData] = useState({name:"",age:""});

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitUserForm(formData);
  };
  const nameInputChangeHandler = (event) =>{
    setFormData({...formData,name: event.target.value});
  };
  const ageInputChangeHandler = (event) =>{
    setFormData({...formData,age: event.target.value});
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <label>Username</label>
          <input type="text" value = {formData.name} onChange={nameInputChangeHandler}></input>
        </div>
        <div className={styles["form-control"]}>
          <label>Age (Years)</label>
          <input type="number" value = {formData.age} onChange={ageInputChangeHandler}></input>
        </div>
        <div>
          <button type="submit"> Add User </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
