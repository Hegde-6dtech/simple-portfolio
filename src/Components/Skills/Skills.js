import React from 'react'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3, FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import "./Skills.css"

function Skills() {
  const iconStyle={
    fontSize:'35px',
    color:'#052374'
  }
  // const textStyle={
  //   fontSize:'35px',
  //   color:'#052374'
  // }
  // const perStyle={
  //   fontSize:'25px',
  //   color:'#052374'
  // }

  return (
    <div>
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>My Skills</span>
          </div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">Skills Reflects Our Knowledge</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                natus tenetur tempora? Quasi, rem quas omnis. Porro rem
                aspernatur reiciendis ut praesentium minima ad, quos, officia!
                Illo libero, et, distinctio repellat sed nesciunt est modi
                quaerat placeat. Quod molestiae, alias?
              </p>
              
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">HTML <FaHtml5 style={iconStyle}/></div>
                <div className="per" >
                90%
                </div>
              </div>
              <div className="box">
                <div className="topic">CSS <FaCss3 style={iconStyle}/></div>
                <div className="per" >
                80%
                </div>
              </div>
              <div className="box">
                <div className="topic" >JavScript <TbBrandJavascript style={iconStyle}/> </div>
                <div className="per"  >
               70%
                </div>
              </div>
              <div className="box">
                <div className="topic" >React <FaReact style={iconStyle}/></div>
                <div className="per">
                60%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
