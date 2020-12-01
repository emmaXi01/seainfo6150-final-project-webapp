import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RegisterForm.module.css";

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('N/A');
  const [education, setEducation] = useState('N/A');
  const [school, setSchool] = useState('N/A');
  const [certificate, setCertificate] = useState('N/A');
  const [registerReason, setRegisterReason] = useState('N/A');
  const [value, setValue] = useState('');
 
  const registerCourse = (event) => {
    event.preventDefault();
    setValue('Congratulations! Register Successfully!');
  }

  const back = () => {
    props.onBack()
  }

  let displayContent;
  if (value) {
    displayContent = (
      <div>
        <div className={styles.congras}>{value}</div>
        <div className={styles.confirmContainer}>
          <h4 className={styles.head}>confirmation</h4>
          <div>
            <div><strong>Course: &ensp;</strong> {props.course.title}</div>
            <div><strong>First Name: &ensp;</strong>{firstName}</div>
            <div><strong>Last Name: &ensp;</strong>{lastName}</div>
            <div><strong>Email: &ensp;</strong>{email}</div>
            <div><strong>Telephone: &ensp;</strong>{telephone}</div>
            <div><strong>Education Level: &ensp;</strong>{education}</div>
            <div><strong>College/School: &ensp;</strong>{school}</div>
            <div><strong>Certiificate Type: &ensp;</strong>{certificate}</div>
            <div><strong>Why do you want to register: &ensp;</strong>{registerReason}</div>
          </div>
        </div>
      </div>  
    )
  } else {
    displayContent = (
      <form className={styles.form} onSubmit={registerCourse}>
        <fieldset>
          <legend><h2>Registeration Form</h2></legend>
          <div>
            <label htmlFor="first-name">
              First name<sup>*</sup>:
              <input
                className={styles.name}
                type="text"
                id="first-name"
                name="first-name"
                onChange={(e)=>{setFirstName(e.target.value)}}
                required
              />
            </label>
            <label htmlFor="last-name">
              Last name<sup>*</sup>:
              <input
                className={styles.name}
                type="text"
                id="last-name"
                name="last-name"
                onChange={(e)=>{setLastName(e.target.value)}}
                required
              />
            </label>
          </div> 
          <div>
            <label htmlFor="email">
              Email<sup>*</sup>:
              <input
                className={styles.email}
                type="email"
                id="email"
                name="email"
                placeholder="ex: myname@example.com"
                onChange={(e)=>{setEmail(e.target.value)}}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="telephone">
              Telephone:
              <input
                className={styles.phone}
                type="tel"
                id="telephone"
                name="telephone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e)=>{setTelephone(e.target.value)}}
              />
              <small>format: 123-456-7890</small>
            </label>
          </div>
          <div>
            <label htmlFor="education">
              Education Level:
              <select id="education" className={styles.education} onChange={(e)=>{setEducation(e.target.value)}}>
                <option>please select one</option>
                <option value="Doctoral Degree">Doctoral Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="High School Diploma">High School Diploma</option>
                <option value="Less Than a High School">Less Than a High School</option>
              </select>
            </label>
            <label htmlFor="college">
              School/College:
              <input
                className={styles.college}
                type="text"
                id="college"
                name="tcollege" 
                onChange={(e)=>{setSchool(e.target.value)}}
              />
            </label>
          </div>
          <div>
            <label>Certificate Type:</label>
            <input className={styles.certificate} type="radio" value="digit" name="digit" onClick={(e)=>{setCertificate(e.target.value)}} /><label>digit</label>
            <input className={styles.certificate} type="radio" value="paper" name="paper" onClick={(e)=>{setCertificate(e.target.value)}} /><label>paper</label>
            <input className={styles.certificate} type="radio" value="both digit and paper" name="both" onClick={(e)=>{setCertificate(e.target.value)}} /><label>both digit and paper</label>
          </div>
          <div>
            <label htmlFor="reason">
              Why do you want to register:
              <select id="reason" className={styles.reason} onChange={(e)=>{setRegisterReason(e.target.value)}}>
                <option value>please select one</option>
                <option value="Interesting">Interesting</option>
                <option value="Get a course certificate">Get a course certification</option>
                <option value="Find a job">Find a job</option>
              </select>
            </label>
          </div>
          <div>
            <input className={styles.registerButton} type="submit" value="Register" />
            <button className={styles.cancelButton} onClick={back}>Cancel</button> 
          </div> 
        </fieldset>
      </form> 
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topWrapper}>
          <h1>{props.course.title}</h1>  
          <p>{props.course.shortText}</p>
        </div>
      </div>  
      {displayContent}
    </div>  
  );
};

RegisterForm.propTypes = {
  course: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired
};

export default RegisterForm;