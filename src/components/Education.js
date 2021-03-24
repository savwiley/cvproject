import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      schoolVal: "",
      cityVal: "",
      degreeVal: "",
      startVal: "",
      endVal: "",
      edu1: [],
      edu2: [],
      edu3: [],
    };

    this.changeEduSchool = this.handleChange.bind(this, "schoolVal");
    this.changeEduCity = this.handleChange.bind(this, "cityVal");
    this.changeEduDegree = this.handleChange.bind(this, "degreeVal");
    this.changeEduStart = this.handleChange.bind(this, "startVal");
    this.changeEduEnd = this.handleChange.bind(this, "endVal");
    this.handleEduEdit = this.handleEdit.bind(this, "edu");
    this.addMoreEdu = this.addMore.bind(this, "edu");
  }

  //handles input change
  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
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

  //handles editing
  handleEdit = (type, e) => {
    //grabs submit, edit, & add buttons on form
    const subBtnEdu = document.querySelector(".submitEduButton");
    const editFormBtnEdu = document.getElementById("editEduButton");
    const addEduBtn = document.querySelector("#addEdu");

    //grabs form
    const eduForm = document.querySelector(".eduForm");

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
    }
  };

  //add more info
  addMore = (type, e) => {
    //grabs form
    const eduForm = document.querySelector(".eduForm");

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
    }
  };

  render() {
    const { edu1, edu2, edu3 } = this.state;
    return (
      <div>
        <EducationDiv edu1={edu1} edu2={edu2} edu3={edu3} />

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
      </div>
    );
  }
}

function EducationDiv(props) {
  const { edu1, edu2, edu3 } = props;

  return (
    <div className="education">
      <div className="sectHead">Education</div>

      <div id="firstEdu" className="block">
        <span id="degree">{edu1[2]}</span>
        <span id="school">{edu1[0]}</span> {edu1[1]}
        <div id="dates">
          <span>{edu1[3]}</span>
          <span>{edu1[4]}</span>
        </div>
      </div>

      <div id="secondEdu" className="block">
        <span id="degree">{edu2[2]}</span>
        <span id="school">{edu2[0]}</span> {edu2[1]}
        <div id="dates">
          <span>{edu2[3]}</span>
          <span>{edu2[4]}</span>
        </div>
      </div>

      <div id="thirdEdu" className="block">
        <span id="degree">{edu3[2]}</span>
        <span id="school">{edu3[0]}</span> {edu3[1]}
        <div id="dates">
          <span>{edu3[3]}</span>
          <span>{edu3[4]}</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
