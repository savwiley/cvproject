import React from "react";

function Education(props) {
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

/*
school name
city
degree
years
honors?
desc?
(IF GRADUATED)
*/
