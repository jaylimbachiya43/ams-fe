import React from "react";
import style from "./style.module.css";

const Form = () => {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <h1 className={style.h1}>Login</h1>
        <input type="text" placeholder="Username" required className={style.name} />
        <input type="password" placeholder="Password" required className={style.pass} />
        <button className={style.btn}>Log In</button>
      </form>
    </div>
  );
};

export default Form;
