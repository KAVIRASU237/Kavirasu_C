import React from 'react'
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1>contact</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="54202941-eaf6-4ccb-b977-0b1a447473b1"
        ></input>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>

          <textarea
            type="text"
            id="Message"
            name="Message"
            placeholder="Message"
            required
          />
        </div>
        <input className="hover-btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact
