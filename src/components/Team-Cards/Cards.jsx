import React from "react";
import "./Cards.scss";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function Cards({ name, image, role, insta, linkedin, email }) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img src={image} alt={name} />
                <div className="card-text">
                    <h6>{name}</h6>
                    <p>{role}</p>
                </div>
                <div className="social-media">
                    <EmailIcon className="email-icon" inline="true" style={{ fontSize: "3rem" }} />
                    <LinkedInIcon
                        className="linkedin-icon"
                        inline="true"
                        style={{ fontSize: "3rem" }}
                    />
                    <InstagramIcon
                        className="instagram-icon"
                        inline="true"
                        style={{ fontSize: "3rem" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
