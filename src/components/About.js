import React from "react";
import Brian from "../Assests/images/0612201116a_HDR.jpg"

export default function About() {
  return (
    <section id = "about" >
    <section class="me">

      <h2>Thank You for visiting</h2>
      <img src={Brian} alt="Brian Sales holding his cat Selina"/>

</section>
      <section id="my-story">
        <h2>My Story</h2>
        <div>
          <p>First and foremost I love all 5 of my pets equally. It has been over ten years since undergrad I am finally able to go back to school and learn and new skill.
            I am a current student at Northwestern University coding bootcamp. I spend my days as a driver for Amazon. I love playing video games and have various horticulture projects.</p>
        </div>
      </section>
    </section>
  );
}








