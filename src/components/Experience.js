import React from "react";

function Experience(props) {
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

/*
job name
city
role
years
desc
*/
