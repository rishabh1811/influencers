/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
    {/* Till Medium */}
      <div className="container py-5 text-center md:text-left text-white bg-[#17214F]">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="">
            <img
              className="w-[70px] mx-auto md:ml-0 mb-8"
              src="/footer/footer-logo.png"
              alt=""
            />
            <p className="text-lg mb-5">
              Arabia E-Advertising helps brands engage and activate audiences
              worldwide through top Arabic influencers.
            </p>
            <div className="flex flex-row justify-center space-x-8 text-2xl mb-5">
              <a className="" href="#">
                <FaFacebookSquare className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaTwitter className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaInstagram className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaLinkedin className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaYoutube className="text-[#7f93f8]" />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="heading mb-2">Get In Touch</h3>
            <p className="mb-5">
              DUBAI OFFICE.
              <br /> 163 Shiekh Zayed Road,
              <br /> TECOM, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Useful Links */}

        <div className="hidden md:block">
          <h1 className="heading mb-7">Useful Links</h1>
          <div className="grid grid-cols-2 gap-7 mb-10">
              <a href="#" className="hover:text-orange">
                  <p className="">Home</p>
              </a>
              
              <a href="#" className="hover:text-orange">
                  <p className="">Services</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Influencer Services</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Influencers</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Esport Services</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Our Comentators</p>
              </a>
              <a href="#" className="hover:text-orange">
                  <p className="">Case Studies</p>
              </a>
              <a href="#" className="hover:text-orange">
                  <p className="">About Us</p>
              </a>
             

          </div>
        </div>


        {/* Copyright */}
        <p className="mb-5 text-center"> Arabia E-Advertising © 2006-2021</p>
      </div>









      {/* On Desktop */}
      <div className="container py-5 text-center md:text-left text-white bg-[#17214F]">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="">
            <img
              className="w-[70px] mx-auto md:ml-0 mb-8"
              src="/footer/footer-logo.png"
              alt=""
            />
            <p className="text-lg mb-5">
              Arabia E-Advertising helps brands engage and activate audiences
              worldwide through top Arabic influencers.
            </p>
            <div className="flex flex-row justify-center space-x-8 text-2xl mb-5">
              <a className="" href="#">
                <FaFacebookSquare className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaTwitter className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaInstagram className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaLinkedin className="text-[#7f93f8]" />
              </a>
              <a className="" href="#">
                <FaYoutube className="text-[#7f93f8]" />
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="heading mb-2">Get In Touch</h3>
            <p className="mb-5">
              DUBAI OFFICE.
              <br /> 163 Shiekh Zayed Road,
              <br /> TECOM, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Useful Links */}

        <div className="hidden md:block">
          <h1 className="heading mb-7">Useful Links</h1>
          <div className="grid grid-cols-2 gap-7 mb-10">
              <a href="#" className="hover:text-orange">
                  <p className="">Home</p>
              </a>
              
              <a href="#" className="hover:text-orange">
                  <p className="">Services</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Influencer Services</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Influencers</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Esport Services</p>
              </a>

              <a href="#" className="hover:text-orange">
                  <p className="">Our Comentators</p>
              </a>
              <a href="#" className="hover:text-orange">
                  <p className="">Case Studies</p>
              </a>
              <a href="#" className="hover:text-orange">
                  <p className="">About Us</p>
              </a>
             

          </div>
        </div>


        {/* Copyright */}
        <p className="mb-5 text-center"> Arabia E-Advertising © 2006-2021</p>
      </div>
    </>
  );
}
