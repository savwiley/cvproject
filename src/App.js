import React, { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

class App extends Component {
  constructor() {
    super();

    this.state = {
      nameVal: "",
      emailVal: "",
      phoneVal: "",
      dRoleVal: "",
      blurbVal: "",
      head: [],

      schoolVal: "",
      cityVal: "",
      degreeVal: "",
      startVal: "",
      endVal: "",
      edu1: [],
      edu2: [],
      edu3: [],

      jobVal: "",
      localVal: "",
      roleVal: "",
      fromVal: "",
      toVal: "",
      descVal: "",
      exp1: [],
      exp2: [],
      exp3: [],
    };

    this.changeHeadName = this.handleChange.bind(this, "nameVal");
    this.changeHeadEmail = this.handleChange.bind(this, "emailVal");
    this.changeHeadPhone = this.handleChange.bind(this, "phoneVal");
    this.changeHeadRole = this.handleChange.bind(this, "dRoleVal");
    this.changeHeadBlurb = this.handleChange.bind(this, "blurbVal");

    this.changeEduSchool = this.handleChange.bind(this, "schoolVal");
    this.changeEduCity = this.handleChange.bind(this, "cityVal");
    this.changeEduDegree = this.handleChange.bind(this, "degreeVal");
    this.changeEduStart = this.handleChange.bind(this, "startVal");
    this.changeEduEnd = this.handleChange.bind(this, "endVal");

    this.changeExpJob = this.handleChange.bind(this, "jobVal");
    this.changeExpLocal = this.handleChange.bind(this, "localVal");
    this.changeExpRole = this.handleChange.bind(this, "roleVal");
    this.changeExpFrom = this.handleChange.bind(this, "fromVal");
    this.changeExpTo = this.handleChange.bind(this, "toVal");
    this.changeExpDesc = this.handleChange.bind(this, "descVal");

    this.handleHeadEdit = this.handleEdit.bind(this, "head");
    this.handleEduEdit = this.handleEdit.bind(this, "edu");
    this.handleExpEdit = this.handleEdit.bind(this, "exp");

    this.addMoreEdu = this.addMore.bind(this, "edu");
    this.addMoreExp = this.addMore.bind(this, "exp");
  }

  //handles input change
  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
  };

  //handles editing
  handleEdit = (type, e) => {
    //grabs submit, edit, & add buttons on form
    const subBtnEdu = document.querySelector(".submitEduButton");
    const editFormBtnEdu = document.getElementById("editEduButton");
    const subBtnExp = document.querySelector(".submitExpButton");
    const editFormBtnExp = document.getElementById("editExpButton");
    const addEduBtn = document.querySelector("#addEdu");
    const addExpBtn = document.querySelector("#addExp");

    //grabs forms
    const eduForm = document.querySelector(".eduForm");
    const expForm = document.querySelector(".expForm");
    const headForm = document.querySelector(".headForm");

    const eClass = e.target.className;

    //edits education
    if (type === "edu") {
      this.setState(
        {
          [eClass]: [],
        },
        () => {
          this.setState({
            [eClass]: this.state[eClass].concat(
              this.state.schoolVal,
              this.state.cityVal,
              this.state.degreeVal,
              this.state.startVal,
              this.state.endVal
            ),
            schoolVal: "",
            cityVal: "",
            degreeVal: "",
            startVal: "",
            endVal: "",
          });
        }
      );
      subBtnEdu.style.display = "block";
      editFormBtnEdu.classList.toggle(eClass);
      editFormBtnEdu.style.display = "none";
      eduForm.style.display = "none";
      addEduBtn.style.display = "block";

      //edits experience
    } else if (type === "exp") {
      this.setState(
        {
          [eClass]: [],
        },
        () => {
          this.setState({
            [eClass]: this.state[eClass].concat(
              this.state.jobVal,
              this.state.localVal,
              this.state.roleVal,
              this.state.fromVal,
              this.state.toVal,
              this.state.descVal
            ),
            jobVal: "",
            localVal: "",
            roleVal: "",
            fromVal: "",
            toVal: "",
            descVal: "",
          });
        }
      );
      subBtnExp.style.display = "block";
      editFormBtnExp.classList.toggle(eClass);
      editFormBtnExp.style.display = "none";
      expForm.style.display = "none";
      addExpBtn.style.display = "block";

      //brings up header form
    } else if (type === "head") {
      e.target.style.display = "none";
      headForm.style.display = "block";
    }
  };

  //submits header info
  subHead = (e) => {
    e.preventDefault();

    const form = document.querySelector(".headForm");
    const edBtn = document.querySelector(".editHead");

    this.setState(
      {
        head: [],
      },
      () => {
        this.setState({
          head: this.state.head.concat(
            this.state.nameVal,
            this.state.emailVal,
            this.state.phoneVal,
            this.state.dRoleVal,
            this.state.blurbVal,
          ),
        });
      }
    );

    form.style.display = "none";
    edBtn.style.display = "block";
  };

  //submits education info
  subEdu = (e) => {
    e.preventDefault();

    //creates edit btns for each edu block
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "editBtn");
    editBtn.textContent = "Edit";

    //creates delete btns for each edu block
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delete");
    delBtn.textContent = "Delete";

    //grabs edu blocks
    const firstEdu = document.getElementById("firstEdu");
    const secondEdu = document.getElementById("secondEdu");
    const thirdEdu = document.getElementById("thirdEdu");

    //grabs submit & edit buttons on form
    const subBtn = document.querySelector(".submitEduButton");
    const editFormBtn = document.getElementById("editEduButton");

    //grabs form & add button
    const form = document.querySelector(".eduForm");
    const addBtn = document.querySelector("#addEdu");

    if (this.state.edu1.length === 0) {
      //adds info
      this.setState({
        edu1: this.state.edu1.concat(
          this.state.schoolVal,
          this.state.cityVal,
          this.state.degreeVal,
          this.state.startVal,
          this.state.endVal
        ),
        schoolVal: "",
        cityVal: "",
        degreeVal: "",
        startVal: "",
        endVal: "",
      });
      //hides form & shows add button
      form.style.display = "none";
      addBtn.style.display = "block";
      //adds edit btn
      firstEdu.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        form.style.display = "block";
        addBtn.style.display = "none";
        this.setState({
          schoolVal: this.state.edu1[0],
          cityVal: this.state.edu1[1],
          degreeVal: this.state.edu1[2],
          startVal: this.state.edu1[3],
          endVal: this.state.edu1[4],
        });
        subBtn.style.display = "none";
        editFormBtn.style.display = "block";
        editFormBtn.classList.toggle("edu1");
      });
      //adds del btn
      firstEdu.appendChild(delBtn);
      delBtn.addEventListener("click", () => {
        this.setState({
          edu1: [],
        });
        editBtn.remove();
        delBtn.remove();
      });
    } else if (this.state.edu2.length === 0) {
      this.setState({
        edu2: this.state.edu2.concat(
          this.state.schoolVal,
          this.state.cityVal,
          this.state.degreeVal,
          this.state.startVal,
          this.state.endVal
        ),
        schoolVal: "",
        cityVal: "",
        degreeVal: "",
        startVal: "",
        endVal: "",
      });
      form.style.display = "none";
      addBtn.style.display = "block";
      secondEdu.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        form.style.display = "block";
        addBtn.style.display = "none";
        this.setState({
          schoolVal: this.state.edu2[0],
          cityVal: this.state.edu2[1],
          degreeVal: this.state.edu2[2],
          startVal: this.state.edu2[3],
          endVal: this.state.edu2[4],
        });
        subBtn.style.display = "none";
        editFormBtn.style.display = "block";
        editFormBtn.classList.toggle("edu2");
      });
      secondEdu.appendChild(delBtn);
      delBtn.addEventListener("click", () => {
        this.setState({
          edu2: [],
        });
        editBtn.remove();
        delBtn.remove();
      });
    } else if (this.state.edu3.length === 0) {
      this.setState({
        edu3: this.state.edu3.concat(
          this.state.schoolVal,
          this.state.cityVal,
          this.state.degreeVal,
          this.state.startVal,
          this.state.endVal
        ),
        schoolVal: "",
        cityVal: "",
        degreeVal: "",
        startVal: "",
        endVal: "",
      });
      form.style.display = "none";
      addBtn.style.display = "block";
      thirdEdu.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        form.style.display = "block";
        addBtn.style.display = "none";
        this.setState({
          schoolVal: this.state.edu3[0],
          cityVal: this.state.edu3[1],
          degreeVal: this.state.edu3[2],
          startVal: this.state.edu3[3],
          endVal: this.state.edu3[4],
        });
        subBtn.style.display = "none";
        editFormBtn.style.display = "block";
        editFormBtn.classList.toggle("edu3");
      });
      thirdEdu.appendChild(delBtn);
      delBtn.addEventListener("click", () => {
        this.setState({
          edu3: [],
        });
        editBtn.remove();
        delBtn.remove();
      });
    }
  };

  //submits experience info
  subExp = (e) => {
    e.preventDefault();

    //creates edit btns for each edu block
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "editBtn");
    editBtn.textContent = "Edit";

    //creates delete btns for each edu block
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "delete");
    delBtn.textContent = "Delete";

    //grabs edu blocks
    const firstExp = document.getElementById("firstExp");
    const secondExp = document.getElementById("secondExp");
    const thirdExp = document.getElementById("thirdExp");

    //grabs submit & edit buttons on form
    const subBtn = document.querySelector(".submitExpButton");
    const editFormBtn = document.getElementById("editExpButton");

    //grabs form & add button
    const form = document.querySelector(".expForm");
    const addBtn = document.querySelector("#addExp");

    if (this.state.exp1.length === 0) {
      this.setState({
        exp1: this.state.exp1.concat(
          this.state.jobVal,
          this.state.localVal,
          this.state.roleVal,
          this.state.fromVal,
          this.state.toVal,
          this.state.descVal
        ),
        jobVal: "",
        localVal: "",
        roleVal: "",
        fromVal: "",
        toVal: "",
        descVal: "",
      });
      form.style.display = "none";
      addBtn.style.display = "block";
      firstExp.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        form.style.display = "block";
        addBtn.style.display = "none";
        this.setState({
          jobVal: this.state.exp1[0],
          localVal: this.state.exp1[1],
          roleVal: this.state.exp1[2],
          fromVal: this.state.exp1[3],
          toVal: this.state.exp1[4],
          descVal: this.state.exp1[5],
        });
        subBtn.style.display = "none";
        editFormBtn.style.display = "block";
        editFormBtn.classList.toggle("exp1");
      });
      firstExp.appendChild(delBtn);
      delBtn.addEventListener("click", () => {
        this.setState({
          exp1: [],
        });
        editBtn.remove();
        delBtn.remove();
      });
    } else if (this.state.exp2.length === 0) {
      this.setState({
        exp2: this.state.exp2.concat(
          this.state.jobVal,
          this.state.localVal,
          this.state.roleVal,
          this.state.fromVal,
          this.state.toVal,
          this.state.descVal
        ),
        jobVal: "",
        localVal: "",
        roleVal: "",
        fromVal: "",
        toVal: "",
        descVal: "",
      });
      form.style.display = "none";
      addBtn.style.display = "block";
      secondExp.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        form.style.display = "block";
        addBtn.style.display = "none";
        this.setState({
          jobVal: this.state.exp2[0],
          localVal: this.state.exp2[1],
          roleVal: this.state.exp2[2],
          fromVal: this.state.exp2[3],
          toVal: this.state.exp2[4],
          descVal: this.state.exp2[5],
        });
        subBtn.style.display = "none";
        editFormBtn.style.display = "block";
        editFormBtn.classList.toggle("exp2");
      });
      secondExp.appendChild(delBtn);
      delBtn.addEventListener("click", () => {
        this.setState({
          exp2: [],
        });
        editBtn.remove();
        delBtn.remove();
      });
    } else if (this.state.exp3.length === 0) {
      this.setState({
        exp3: this.state.exp3.concat(
          this.state.jobVal,
          this.state.localVal,
          this.state.roleVal,
          this.state.fromVal,
          this.state.toVal,
          this.state.descVal
        ),
        jobVal: "",
        localVal: "",
        roleVal: "",
        fromVal: "",
        toVal: "",
        descVal: "",
      });
      form.style.display = "none";
      addBtn.style.display = "block";
      thirdExp.appendChild(editBtn);
      editBtn.addEventListener("click", () => {
        form.style.display = "block";
        addBtn.style.display = "none";
        this.setState({
          jobVal: this.state.exp3[0],
          localVal: this.state.exp3[1],
          roleVal: this.state.exp3[2],
          fromVal: this.state.exp3[3],
          toVal: this.state.exp3[4],
          descVal: this.state.exp3[5],
        });
        subBtn.style.display = "none";
        editFormBtn.style.display = "block";
        editFormBtn.classList.toggle("exp3");
      });
      thirdExp.appendChild(delBtn);
      delBtn.addEventListener("click", () => {
        this.setState({
          exp3: [],
        });
        editBtn.remove();
        delBtn.remove();
      });
    }
  };

  //add more info
  addMore = (type, e) => {
    //grabs forms
    const eduForm = document.querySelector(".eduForm");
    const expForm = document.querySelector(".expForm");

    e.target.style.display = "none";

    if (type === "edu") {
      if (
        this.state.edu1.length > 0 &&
        this.state.edu2.length > 0 &&
        this.state.edu3.length > 0
      ) {
        alert("Only a maximum of three is allowed.");
        e.target.style.display = "block";
      } else {
        eduForm.style.display = "block";
      }
    } else if (type === "exp") {
      if (
        this.state.exp1.length > 0 &&
        this.state.exp2.length > 0 &&
        this.state.exp3.length > 0
      ) {
        alert("Only a maximum of three is allowed.");
        e.target.style.display = "block";
      } else {
        expForm.style.display = "block";
      }
    }
  };

  render() {
    const { head, edu1, edu2, edu3, exp1, exp2, exp3 } = this.state;
    return (
      <div className="resume">

        <div className="faAtom">
          <FontAwesomeIcon icon={faAtom} className="faAtom" />
        </div>

        {/* header form */}
        <form onSubmit={this.subHead} className="headForm">
          <div>
            <input
              type="text"
              id="Name"
              onChange={this.changeHeadName}
              value={this.state.nameVal}
              required
            />
            <label htmlFor="Name">Full Name</label>
          </div>

          <div>
            <input
              type="email"
              id="Email"
              onChange={this.changeHeadEmail}
              value={this.state.emailVal}
              required
            />
            <label htmlFor="Email">name@email.com</label>
          </div>

          <div>
            <input
              type="tel"
              id="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={this.changeHeadPhone}
              value={this.state.phoneVal}
              required
            />
            <label htmlFor="Phone">Ph. xxx-xxx-xxxx </label>
          </div>

          <div>
            <input
              type="text"
              id="DesRole"
              onChange={this.changeHeadRole}
              value={this.state.dRoleVal}
              required
            />
            <label htmlFor="DesRole">Desired Role </label>
          </div>

          <div>
            <textarea
              type="text"
              id="Blurb"
              onChange={this.changeHeadBlurb}
              value={this.state.blurbVal}
              required
            />
            <label htmlFor="Blurb">Tell us about yourself... </label>
          </div>

          <button type="submit">Submit</button>
        </form>

        <button className="editHead" onClick={this.handleHeadEdit}>
          Edit Header
        </button>

        <Header head={head} />

        {/* education form */}
        <Education edu1={edu1} edu2={edu2} edu3={edu3} />

        <form onSubmit={this.subEdu} className="eduForm">
          <div>
            <input
              type="text"
              id="School"
              onChange={this.changeEduSchool}
              value={this.state.schoolVal}
              required
            />
            <label htmlFor="School">School</label>
          </div>

          <div>
            <input
              type="text"
              id="City"
              onChange={this.changeEduCity}
              value={this.state.cityVal}
              required
            />
            <label htmlFor="City">Location</label>
          </div>

          <div>
            <input
              type="text"
              id="Degree"
              onChange={this.changeEduDegree}
              value={this.state.degreeVal}
              required
            />
            <label htmlFor="Degree">Degree</label>
          </div>

          <div>
            <input
              type="date"
              id="TimeStart"
              onChange={this.changeEduStart}
              value={this.state.startVal}
              required
            />
            <label htmlFor="TimeStart">From</label>
          </div>

          <div>
            <input
              type="date"
              id="TimeEnd"
              onChange={this.changeEduEnd}
              value={this.state.endVal}
              required
            />
            <label htmlFor="TimeEnd">To</label>
          </div>

          <button type="submit" className="submitEduButton">
            Submit
          </button>

          <button id="editEduButton" className="" onClick={this.handleEduEdit}>
            Save
          </button>
        </form>

        <button className="addBtn" id="addEdu" onClick={this.addMoreEdu}>
          Add Education+
        </button>

        {/* experience form */}
        <Experience exp1={exp1} exp2={exp2} exp3={exp3} />

        <form onSubmit={this.subExp} className="expForm">
          <div>
            <input
              type="text"
              id="Job"
              onChange={this.changeExpJob}
              value={this.state.jobVal}
              required
            />
            <label htmlFor="Job">Employer</label>
          </div>

          <div>
            <input
              type="text"
              id="CityEx"
              onChange={this.changeExpLocal}
              value={this.state.localVal}
              required
            />
            <label htmlFor="CityEx">Location</label>
          </div>

          <div>
            <input
              type="text"
              id="Role"
              onChange={this.changeExpRole}
              value={this.state.roleVal}
              required
            />
            <label htmlFor="Role">Role</label>
          </div>

          <div>
            <input
              type="date"
              id="TimeStartEx"
              onChange={this.changeExpFrom}
              value={this.state.fromVal}
              required
            />
            <label htmlFor="TimeStartEx">From</label>
          </div>

          <div>
            <input
              type="date"
              id="TimeEndEx"
              onChange={this.changeExpTo}
              value={this.state.toVal}
              required
            />
            <label htmlFor="TimeEndEx">To</label>
          </div>

          <div>
            <textarea
              type="text"
              id="Desc"
              onChange={this.changeExpDesc}
              value={this.state.descVal}
              required
            />
            <label htmlFor="Desc">Description</label>
          </div>

          <button type="submit" className="submitExpButton">
            Submit
          </button>

          <button id="editExpButton" className="" onClick={this.handleExpEdit}>
            Save
          </button>
        </form>

        <button className="addBtn" id="addExp" onClick={this.addMoreExp}>
          Add Experience+
        </button>


        <a href="https://github.com/savwiley/cv-project" className="faGithub"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    );
  }
}

export default App;

/*
https://theodinproject.com/courses/javascript/lessons/cv-application


Be sure to include an edit and submit button for each section or for the whole CV, your preference. The submit button should submit your form and display the value of your input fields in HTML elements. 

The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.



-- be able to delete portions
-- be able to edit portions
-- be able to add more items to edu/exp but not header (only edit?)
CONSIDER adding social media
-- import css (export it, too?)
-- fix phone number format
-- uninstall uniqid
-- run prettier
-- add license
-- edit readme
-- turn desc in exp into textarea
-- separate forms better
-- fix form formatting
CSS like no tomorrow
CONSIDER adding a "print" version of the cv
-- bring fontawesome back for cred & main image
-- do the tab?
-- HEADER add job title & optional blurb
HEADER add address? with linkedin?
SKILLS?








refuses to deploy with npm run deploy. using git remote -v to check on remote urls shows the correct one. I don't know what's wrong.

*/
