import React from 'react';
import CocktailCode from '../assets/images/Projects/CocktailCode.png';
import Puphub from '../assets/images/Projects/Puphub.png';
import ConcertCloud from '../assets/images/Projects/ConcertCloud.png';


const styles = {
    h2: {
        fontSize: '24px',
        margin: '20px 0px 30px',
        fontWeight: 'bold',
        fontFamily: '"Spectral SC", sans-serif'
    },
    h4: {
        fontSize: '19px',
        margin: '10px 0px 30px',
        fontFamily: '"Spectral SC", sans-serif'
    },
    p: {
        fontSize: '14px',
        fontFamily: '"Fauna One", sans-serif'
    },
    link: {
        fontSize: '14px',
        fontFamily: '"Fauna One", sans-serif',
        textDecoration: 'none',
    },
    employeeThumbnail: {
        paddingBottom: '60px'
    }
}
function Projects() {
    return (
       <div id="portfolio" className="container-fluid text-center bg-grey">
           <h2 style={styles.h2}>Portfolio</h2>
           <h4 style={styles.h4}>Recent Projects</h4>
           <div className="row text-center">
               <div className="col-sm-4">
                   <div className="thumbnail pb-3">
                   <a target="_blank" href="https://the-cocktail-code-app.herokuapp.com/" rel="noreferrer"><img src={CocktailCode} alt="Cocktail Code Landing Page" /></a>
                       <p style={styles.p}><strong>Cocktail Code</strong></p>
                       <p style={styles.p}><b>Tools Used</b>: React, GraphQL, Json Web Token, Apollo</p>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail pb-5">
                   <a target="_blank" href="https://desolate-mountain-07284.herokuapp.com/" rel="noreferrer"><img src={Puphub} alt="Puphub Home Page Thumbnail" /></a>
                       <p style={styles.p}><strong>Puphub</strong></p>
                       <p style={styles.p}><b>Tools Used: </b>Sass CSS, JS, Handlebars, MySQL</p>
                   </div>
               </div>
               <div className="col-sm-4">
                   <div className="thumbnail pb-5">
                   <a target="_blank" href="https://tracye1083.github.io/ConcertCloud/" rel="noreferrer"><img src={ConcertCloud} alt="Concert Cloud Landing Page" /></a>
                        <p style={styles.p}><strong>Concert Cloud</strong></p>
                        <p style={styles.p}><b>Tools Used:</b>HTML, Bulma CSS, JS, API</p>
                   </div>
               </div>
           </div>
           <br></br>
           <br></br>
        </div>
    )
}

export default Projects;