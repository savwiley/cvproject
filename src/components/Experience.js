import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
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

    this.changeExpJob = this.handleChange.bind(this, "jobVal");
    this.changeExpLocal = this.handleChange.bind(this, "localVal");
    this.changeExpRole = this.handleChange.bind(this, "roleVal");
    this.changeExpFrom = this.handleChange.bind(this, "fromVal");
    this.changeExpTo = this.handleChange.bind(this, "toVal");
    this.changeExpDesc = this.handleChange.bind(this, "descVal");
    this.handleExpEdit = this.handleEdit.bind(this, "exp");
    this.addMoreExp = this.addMore.bind(this, "exp");
  }

  //handles input change
  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
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

  //handles editing
  handleEdit = (type, e) => {
    //grabs submit, edit, & add buttons on form
    const subBtnExp = document.querySelector(".submitExpButton");
    const editFormBtnExp = document.getElementById("editExpButton");
    const addExpBtn = document.querySelector("#addExp");

    //grabs form
    const expForm = document.querySelector(".expForm");

    const eClass = e.target.className;

    //edits experience
    if (type === "exp") {
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
    }
  };

  //add more info
  addMore = (type, e) => {
    //grabs form
    const expForm = document.querySelector(".expForm");

    e.target.style.display = "none";

    if (type === "exp") {
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
    const { exp1, exp2, exp3 } = this.state;
    return (
      <div>
        <ExperienceDiv exp1={exp1} exp2={exp2} exp3={exp3} />

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
      </div>
    );
  }
}

function ExperienceDiv(props) {
  const { exp1, exp2, exp3 } = props;

  return (
    <div className="experience">
      <div className="sectHead">Experience</div>

      <div id="firstExp" className="block">
        <span id="role">{exp1[2]}</span>
        <span id="job">{exp1[0]}</span> {exp1[1]}
        <div id="jobDates">
          <span>{exp1[3]}</span>
          <span>{exp1[4]}</span>
        </div>
        <div id="desc">{exp1[5]}</div>
      </div>

      <div id="secondExp" className="block">
        <span id="role">{exp2[2]}</span>
        <span id="job">{exp2[0]}</span> {exp2[1]}
        <div id="jobDates">
          <span>{exp2[3]}</span>
          <span>{exp2[4]}</span>
        </div>
        <div id="desc">{exp2[5]}</div>
      </div>

      <div id="thirdExp" className="block">
        <span id="role">{exp3[2]}</span>
        <span id="job">{exp3[0]}</span> {exp3[1]}
        <div id="jobDates">
          <span>{exp3[3]}</span>
          <span>{exp3[4]}</span>
        </div>
        <div id="desc">{exp3[5]}</div>
      </div>
    </div>
  );
}

export default Experience;
