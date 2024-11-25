"use client"

import { useForm } from "react-hook-form";
import styles from "../app/form.module.scss";

export interface IForm {
  name: string;
  login: string;
  email: string;
  password: string;
  birthDate: string;
}

function Form() {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      login: '',
      password: '',
      birthDate: ''
    }
  });

  const onSubmit = (data: IForm) =>{
    console.log("submit", data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <section className={styles.form__columb}>
      <div className={styles.form__IT}>
      <p className={styles.form__topic}>Name</p>
      <input type="text" className={styles.form__input}
        {...register('name', {
          required: "Full name is required",
          pattern: {
            value: /^[A-Za-z]{1,19}$/,
            message: 'Invalid name format'
          }
        })}
      />
      {formState.errors.name && <p className={styles.form__errors}>{formState.errors.name.message}</p>}
      </div>

      <div className={styles.form__IT}>
      <p className={styles.form__topic}> Email </p>
        <input type="email" className={styles.form__input}
          {...register('email', {
            required: "Email is required",
            pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
        />
      {formState.errors.email && <p className={styles.form__errors}>{formState.errors.email.message}</p>}
      </div>

      <div className={styles.form__IT}>
      <p className={styles.form__topic}>dd.mm.yy</p>
      <input type="text" className={styles.form__input} placeholder="dd.mm.yy"
      {...register('birthDate', {
        required: 'Date of birth is required',
        pattern: {
          value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)(0[0-9]|10|11|12|13|14|15|16|17|18|19)$/,
          message: 'Date must be in the format dd.mm.yyyy',
        },
      })}
      />
      {formState.errors.birthDate && <p className={styles.form__errors}>{formState.errors.birthDate.message}</p>}
      </div>

      <div className={styles.form__IT}>
      <p className={styles.form__topic}>Login</p>
      <input type="login" className={styles.form__input}
        {...register('login', {
          required: "Login is required",
          minLength: {
            value: 5,
            message: 'Login must contain at least 5 characters'
        }
        })}/>
      {formState.errors.login && <p className={styles.form__errors}>{formState.errors.login.message}</p>}
      </div>

      <div className={styles.form__IT}>
      <p className={styles.form__topic}>Password</p>
      <input type="password" className={styles.form__input}
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*\d).+$/,
            message: 'Contain at least one uppercase letter and one number',
          },
        })}/>
      {formState.errors.password && <p className={styles.form__errors}>{formState.errors.password.message}</p>}
      </div>
      </section>

      <button type="submit" className={styles.form__submit}> Submit</button>
    </form>
  );
}

export default Form;