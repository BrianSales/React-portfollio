import React from "react";
import Doc from "../Assests/images/Resume`.pdf"


export default function Contact() {


  

 


  return (
    <section id="contact" className="relative">
      <section id="contact-info">
            <h2>Contact Info</h2>
                <div>

                <a href="https://github.com/BrianSales/" target="_blank">GITHUB</a>
                <a href="https://www.linkedin.com/in/brian-sales-283911202" target="_blank"> <p>Linkedin</p></a>
                <embed src={Doc} type="application/pdf" width="100%" height="600px" />
                </div>
        </section>

    
    </section>
  );
}










