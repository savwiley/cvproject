import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      nameVal: "",
      emailVal: "",
      phoneVal: "",
      dRoleVal: "",
      blurbVal: "",
      head: [],
    };

    this.changeHeadName = this.handleChange.bind(this, "nameVal");
    this.changeHeadEmail = this.handleChange.bind(this, "emailVal");
    this.changeHeadPhone = this.handleChange.bind(this, "phoneVal");
    this.changeHeadRole = this.handleChange.bind(this, "dRoleVal");
    this.changeHeadBlurb = this.handleChange.bind(this, "blurbVal");
    this.handleHeadEdit = this.handleEdit.bind(this, "head");
  }

  //handles input change
  handleChange = (keyName, e) => {
    this.setState({
      [keyName]: e.target.value,
    });
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
            this.state.blurbVal
          ),
        });
      }
    );

    form.style.display = "none";
    edBtn.style.display = "block";
  };

  //handles editing
  handleEdit = (type, e) => {
    //grabs form
    const headForm = document.querySelector(".headForm");

    //brings up header form
    if (type === "head") {
      e.target.style.display = "none";
      headForm.style.display = "block";
    }
  };

  render() {
    const { head } = this.state;
    return (
      <div>
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

        <HeaderDiv head={head} />
      </div>
    );
  }
}

function HeaderDiv(props) {
  const { head } = props;

  return (
    <div className="header">
      <span id="name">{head[0]}</span>
      <div id="headerSide">
        <span id="email">{head[1]}</span>
        <span id="phone">{head[2]}</span>
      </div>
      <span id="desRole">{head[3]}</span>
      <span id="blurb">{head[4]}</span>
    </div>
  );
}

export default Header;
