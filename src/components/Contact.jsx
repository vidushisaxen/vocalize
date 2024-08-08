import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { TbSquareLetterVFilled } from "react-icons/tb";
import { TbSquareLetterSFilled } from "react-icons/tb";

const Contact = () => {
  return (
    <>
    <div class="container">
      <span class="big-circle"></span>
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let&apos;s get in touch</h3>
          <p class="text">
            For any queries, help and suggestions, do ping us once. We will we more than happy to help.
          </p>

          <div class="info">
            <div class="information">
              <i class="fas"><FaLocationDot /></i> 

              <p>Ayodhya, Uttar Pradesh , India</p>
            </div>
            <div class="information">
              <i class="fas "><MdMessage /></i>
              <p>speakic@gmail.com</p>
            </div>
            <div class="information">
              <i class="fas"><IoCall /></i>
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/vidushi-saxena-071786228/">
                <i class="fab">
                <FaLinkedin />
                </i>
              </a>
              <a href="https://vidushisaxena.netlify.app/">
                <i class="fab">
                <TbSquareLetterVFilled />
                </i>
              </a>
              <a href="#">
                <i class="fab">
                <TbSquareLetterSFilled />
                </i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder='Username'/>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input"  placeholder='Email'/>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input"  placeholder='Phone No.'/>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder='Message'></textarea>
             
            </div>
            <p><a href="mailto:vidushisaxenabdn786@gmail.com " className='btn'>Send email</a></p>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact