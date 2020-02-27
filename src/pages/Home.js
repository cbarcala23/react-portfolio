import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import pic from '../assets/images/picholder.JPG'

function Home() {
  return (

    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="wrapper">
        <div class="row1">
          <h1 class="h1">About Me</h1>
          <hr color="#b3b3b3" />
        </div>
        <section id="floatimage">
          <img src={pic} alt="Pic here"/>
        </section>
        <p class="p">
          I am from Queens New York and have been living in Seattle since mid
          2015. After 35 years I got tired of the constant grind of NYC and
          decided I needed a change and challenge. I picked a spot on one the
          globe and chose Seattle. I moved out here without a job or an idea
          of how Seattle was going to be.
        </p>
        <p class="p">
          I graduated with a Computer Science degree and although I’ve always
          had a strong artistic pull, I ended up in IT Support, specifically
          for Macs. Moving out here and finding a job was tough, especially in
          Microsoft town for a non enterprise Mac guy, but I managed to land a
          job that had opportunity to grow. As I developed into a IT Client
          Engineer I took on challenges with Powershell and automated AD and
          365 tasks for my team, as well as special projects. I also ended up
          taking ownership of the then current Ticketing system from Microsoft
          System Center Service Manager. I worked with the vendor to migrate
          to the latest version on new servers and then became the admin for
          it. My duties involved creating and modifying templates as needed as
          well as dealing with HTML notifications. <br /><br />
          With the implementation of ServiceNow as the new ticketing tool to
          the Agency, I was asked to become an official admin for the project
          due to my experience with the old ticketing system. I worked with
          javascript for the first time within its framework and that led me
          to want to grow my skills. That is when I decided to pursue
          development of some kind and signed up for the UW Full Stack
          Bootcamp course. Here I am, looking for new opportunities to grow.
        </p>
        <p class="p">
          Outside of IT, I’ve always enjoyed motorcycling, snowboarding. Those
          two hobbies took up most of my free time in my mid 20's to late
          30’s. These days I prefer traveling and exploring the world.
        </p>
      </div>
    </div>
    <div class="col-md-1"></div>
  </div>
  );
}

export default Home;
