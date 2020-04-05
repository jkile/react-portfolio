import React from "react";

function ContactCard() {


    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact</h1>
            <div className="contact-form">
                <form action="true">
                    <input type="text" id="name" placeholder="Enter Name" />
                    <input type="text" id="email" placeholder="Enter Email" />
                    <textarea name="messageBody" id="messageBody" cols={30} rows={16} placeholder="Enter message here" defaultValue={""} />
                    <input type="submit" defaultValue="Submit" id="submit" />
                </form>
            </div>
        </div>
    )
}

export default ContactCard;