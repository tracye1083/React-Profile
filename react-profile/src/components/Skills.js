import React from 'react';
import html from '../assets/skills/HTML.png'
import css from '../assets/skills/CSS.png';
import js from '../assets/skills/JS.png'
import bootstrap from '../assets/skills/bootstrap.png';
import bulma from '../assets/skills/Bulma.png';
import jquery from '../assets/skills/jquery.png';
import git from '../assets/skills/git.png';
import node from '../assets/skills/node.png';
import handlebars from '../assets/skills/handlebars-js.png';
import sql from '../assets/skills/sql.png';
import mongodb from '../assets/skills/mongodb.png';
import heroku from '../assets/skills/heroku.png';
import react from '../assets/skills/react.png';



const styles = {
    h4: {
        fontSize: '19px',
        fontFamily: '"Spectral SC", sans-serif',
        margin: '10px 0px 30px',
        padding: '20px'
    }
}
function Skills() {
    return(
        <section className="skills">
        <h4 style={styles.h4}>Technical Skills</h4>
        <div className="skill-list">
          <ul className="list">
            <li>
              <img src={html} /> 
            </li>
            <li>
              <img src={css} />
            </li>
            <li>
              <img src={js} />
            </li>
            <li>
              <img src={bootstrap} />
            </li>
            <li>
              <img src={bulma} />
            </li>
            <li>
              <img src={jquery} />
            </li>
            <li>
              <img src={git} />
            </li>
            <li>
              <img src={node} />
            </li>
            <li>
              <img src={handlebars} />
            </li>
            <li>
              <img src={sql} />
            </li>
            <li>
              <img src={mongodb} />
            </li>
            <li>
              <img src={heroku} />
            </li>
            <li>
              <img src={react} />
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Skills;