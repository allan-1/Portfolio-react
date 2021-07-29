import React from 'react'
import movies from '../images/moviedb.png';
import oyawi from '../images/oyawiorgs.png';
import boran from '../images/boranafrica.png';
import recipe from '../images/recipe.png';
import calculator from '../images/calculator.png';
import ipadress from '../images/ipaddress.png';
import BottomAbout from '../BottomAbout'
import {FaGithub} from 'react-icons/fa'

function Project() {
    return (
        <div className="Project">
            <div className="head">
                My Projects
                <div className="projectsIntro">
                    <div>Here are some of the projects that I have done</div>
                </div>
            </div>
            <div className="container">
                <div className="projs">
                    <div className="img">
                        <img src={movies} alt="movies" />
                    </div>
                    <div className="title">
                        Movies
                    </div>
                    <div className="projinfo">
                        A movie listing app made with Reactjs and tmdb api.
                    </div>
                    <div className="projlinks">
                        <a href="https://allanmovies.vercel.app/">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={oyawi} alt="oyawi" />
                    </div>
                    <div className="title">Oyawi Org</div>
                    <div className="projinfo">
                        A non-governmental organization website built with wordpress and php
                    </div>
                    <div className="links">
                        <a href="https://oyawi.org/" target='_blank' rel="noreferrer">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={boran} alt="" />
                    </div>
                    <div className="title">
                        Boran Africa Tours
                    </div>
                    <div className="projinfo">
                        A tours website made with wordpress and php
                    </div>
                    <div className="links">
                    <a href="https://boranafricatours.co.ke/" target='_blank' rel="noreferrer">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={recipe} alt="recipe" />
                    </div>
                    <div className="title">Recipe</div>
                    <div className="projinfo">
                        A recipe app built with reactjs and Api
                    </div>
                    <div className="links">
                        <a href="https://dazzling-curran-1e6b67.netlify.app/">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={calculator} alt="calculator" />
                    </div>
                    <div className="title">
                        Calculator
                    </div>
                    <div className="projinfo">
                        A calculator app made with Html, Css, Javascript
                    </div>
                    <div className="links">
                        <a href="https://allan-calculator.vercel.app/">Live</a>
                    </div>
                </div>
                <div className="projs">
                    <div className="img">
                        <img src={ipadress} alt="ipadress" />
                    </div>
                    <div className="title">
                        Ip Adress Tracker
                    </div>
                    <div className="projinfo">
                        It tracks the location and isp of an ip adress
                    </div>
                    <div className="links">
                        <a href="https://allanipadress.vercel.app/">Live</a>
                    </div>
                </div>
            </div>
            <div className="moreprojs">
                <div>For more You can view my github</div>
                <div><a href="https://github.com/Allan-1"><FaGithub /> Github</a></div>
            </div>
            <BottomAbout/>
        </div>
    )
}

export default Project
