import React from "react";

function Header(props) {
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

/*
Name (first,last)
email
ph. numb
socials??
*/
