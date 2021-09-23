import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';


function ContactMe() {
    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_94w3zbo', 'template_9oxhqfe', form.current, 'user_vG8xjRVaXvgdSf4Zz7PRZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    };

  return (
            <body>
                <div className="container" style={{ margin: "5% auto 11rem",
                width: "30%",
                backgroundPosition: "center",
                backgroundColor: "#B1A296",
                borderRadius: "5px",
                boxShadow: "0 0 13px 3px rgba(0,0,0,.5)",
                padding: "30px"
                }}>
                    <h1 style={{marginTop: "25px"}}>Say Hi!</h1>
                    <form ref={form} onSubmit={sendEmail} className="row">
                        <label>Name</label>
                        <input type="text" name="user_name" className="form-control" />
                        <label>Email</label>
                        <input type="email" name="user_email" className="form-control" />
                        <label>Message</label>
                        <textarea name="message" rows="4" className="form-control" required />
                        <input type="submit" value="Send" className="form-control" style={{marginTop: "25px"}}/>
                    </form>
                </div>
            </body>
  );
}

export default ContactMe
