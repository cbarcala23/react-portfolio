import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import workday from "../assets/images/workday.png";
import weatherapi from "../assets/images/weatherapi.png";
import notetaker from "../assets/images/Note Taker.gif";
import teamdev from "../assets/images/teamdevprofile.png";
import devgenerator from "../assets/images/profiledeveloper.png";
import emptracker from "../assets/images/employeeTracker.gif";
import project1 from "../assets/images/hostingapp.png";
import project2 from "../assets/images/thelounge.png";

function Portfolio() {
  return (
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="wrapper">
          <h1 class="h1">Portfolio</h1>
          <hr color="#b3b3b3" />

          {/* column1 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={workday} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Work Day Scheduler</h5>
                  <p class="card-text">
                    All elements created using jquery, including the ability to
                    save data to local storage. Color coded for past, present
                    and future dates using CSS.
                  </p>
                  <a
                    href="https://cbarcala23.github.io/homework5/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework5"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={weatherapi} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Weather API</h5>
                  <p class="card-text">
                    Built using jquery and calling a weather API to get the
                    current forecast as well as the 5 day forecast. Each city
                    you search is saved in the history so you can return to it
                    as needed.
                  </p>
                  <a
                    href="https://cbarcala23.github.io/homework6/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework6"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* column 2 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={notetaker} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Note Taker</h5>
                  <p class="card-text">
                    User Story: As a user, I want to be able to write and save
                    notes. I want to be able to delete notes I've written
                    before. So that I can organize my thoughts and keep track of
                    tasks I need to complete
                  </p>
                  <a
                    href="https://cbhomework11.herokuapp.com/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework11"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={teamdev} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Software Dev Team Generator</h5>
                  <p class="card-text">
                    The user is prompted with options to generate a team by
                    picking a Manager, Engineer, or Intern. Depending on the
                    role chosen, the user is prompted with certain questions
                    such as name, id, email, github account for Engineer, office
                    number for Manager, school for Intern. The information is
                    then processed and appended to an HTML file to display the
                    team.
                  </p>
                  <a
                    href="https://cbarcala23.github.io/homework10/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework10"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* column 3 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={devgenerator} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Developer Profile Generator</h5>
                  <p class="card-text">
                    The user is prompted for their github username and favorite
                    color. It takes the values and makes a call to Github's API
                    to get the user data such as Bio, number of public repos,
                    followers, following and github stars data. It generates an
                    HTML page using the favorite color as the color scheme and
                    also creates a PDF of the HTML file into the same directory.
                  </p>
                  <a
                    href="https://cbarcala23.github.io/homework9/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework9"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={emptracker} class="card-img-top" />
                  <br />
                  <h5 class="card-title">Software Dev Team Generator</h5>
                  <p class="card-text">
                    The user is prompted with options to generate a team by
                    picking a Manager, Engineer, or Intern. Depending on the
                    role chosen, the user is prompted with certain questions
                    such as name, id, email, github account for Engineer, office
                    number for Manager, school for Intern. The information is
                    then processed and appended to an HTML file to display the
                    team.
                  </p>
                  <a
                    href="https://cbarcala23.github.io/homework10/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework10"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* column 4 */}
          <div class="row">
            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={project1} class="card-img-top" />
                  <br />
                  <h5 class="card-title">UW Bootcamp Project 1</h5>
                  <p class="card-text">
                    This was our first project with collaboration from a group
                    using Git to branch, commit, create pull requests, review
                    and merge data. This project consists of two API's
                    (Spoonacular, Cocktail DB) to gather user input for
                    ingredients and get reciples that include all ingredients.
                    The history is saved so you can toggle back and forth with
                    the recipes.
                  </p>
                  <a
                    href="https://atdiep.github.io/Hosting-App/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/atdiep/Hosting-App"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="card-deck">
                <div class="card-body">
                  <img src={project2} class="card-img-top" />
                  <br />
                  <h5 class="card-title">UW Bootcamp Project 2</h5>
                  <p class="card-text">
                    This was our second project with collaboration from a group
                    using Git to branch, commit, create pull requests, review
                    and merge data. This project consists of two API's (Deezer
                    Music API, Sockets.io API). The idea was to create a
                    chat/lounge area for people to share similiar interest in
                    music. You can search for a song/artist and their album is
                    displayed in the chat room for all to hear.
                  </p>
                  <a
                    href="https://serene-headland-87883.herokuapp.com/"
                    target="_blank"
                    class="btn btn-dark"
                  >
                    Click to see
                  </a>
                  <br />
                  <a
                    href="https://github.com/cbarcala23/homework10"
                    target="_blank"
                    class="card-link"
                  >
                    Click here to go to the Github Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
