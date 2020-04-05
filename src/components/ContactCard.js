import React from "react";

function ContactCard() {


    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact</h1>
            <div className="contact-form">
                <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />

                    <input type="text" id="name" placeholder="Enter Name" />
                    <input type="email" id="email" placeholder="Enter Email" />
                    <textarea name="message" id="messageBody" cols={30} rows={16} placeholder="Enter message here" defaultValue={""} />
                    <input type="submit" defaultValue="Submit" value="Submit" id="submit" />
                </form>
            </div>
        </div>
    )
}

export default ContactCard;