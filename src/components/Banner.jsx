import React from "react";
import PropTypes from "prop-types";
import bgImg from '../assets/imagebanniere.jpg'



const Banner = ({ heading }) => {
    return(
        <>
        <div className="relative pt-12 md:pt-20 sm:pt-20">
            <img className="w-full h-13" src={bgImg} alt="ERREUR_IMAGE" />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-700 font-montserrat lg:text-5xl sm:text-sm sm:pt-20 md:text-lg">{heading}</h2>
        </div>
        </>
    )
   
}
 Banner.propTypes = {
        heading: PropTypes.string.isRequired,
 };

 export default Banner