import React, { useState, useEffect } from "react";

const Header = () => {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");
  const [dRoleVal, setDRoleVal] = useState("");
  const [blurbVal, setBlurbVal] = useState("");

  //submits header info
  useEffect(() => {
    const subHead = (e) => {
      const form = document.querySelector(".headForm");
      const subBtn = document.querySelector(".headSub");
      const edBtn = document.querySelector(".editHead");

      const nameInput = document.querySelector("#Name");
      const emailInput = document.querySelector("#Email");
      const phoneInput = document.querySelector("#Phone");
      const roleInput = document.querySelector("#DesRole");
      const blurbInput = document.querySelector("#Blurb");

      setNameVal(nameInput.value);
      setEmailVal(emailInput.value);
      setPhoneVal(phoneInput.value);
      setDRoleVal(roleInput.value);
      setBlurbVal(blurbInput.value);

      form.style.display = "none";
      subBtn.style.display = "none";
      edBtn.style.display = "block";
    };

    const btn = document.querySelector(".headSub");
    btn.addEventListener("click", () => {
      subHead(this);
    });
  });

  //handles editing
  useEffect(() => {
    //grabs form
    const headForm = document.querySelector(".headForm");
    const subBtn = document.querySelector(".headSub");
    const editHead = document.querySelector(".editHead");
    editHead.addEventListener("click", () => {
      handleEdit();
    });

    const handleEdit = () => {
      editHead.style.display = "none";
      headForm.style.display = "block";
      subBtn.style.display = "block";
    };
  });

  return (
    <div>
      <form className="headForm">
        <div>
          <input type="text" className="input" id="Name" required />
          <label htmlFor="Name">Full Name</label>
        </div>

        <div>
          <input type="email" className="input" id="Email" required />
          <label htmlFor="Email">name@email.com</label>
        </div>

        <div>
          <input
            type="tel"
            className="input"
            id="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <label htmlFor="Phone">Ph. xxx-xxx-xxxx </label>
        </div>

        <div>
          <input type="text" className="input" id="DesRole" required />
          <label htmlFor="DesRole">Desired Role </label>
        </div>

        <div>
          <textarea type="text" className="input" id="Blurb" required />
          <label htmlFor="Blurb">Tell us about yourself... </label>
        </div>
      </form>

      <button className="headSub">Submit</button>

      <button className="editHead">Edit Header</button>

      <div className="header">
        <span id="name">{nameVal}</span>
        <div id="headerSide">
          <span id="email">{emailVal}</span>
          <span id="phone">{phoneVal}</span>
        </div>
        <span id="desRole">{dRoleVal}</span>
        <span id="blurb">{blurbVal}</span>
      </div>
    </div>
  );
};

export default Header;
