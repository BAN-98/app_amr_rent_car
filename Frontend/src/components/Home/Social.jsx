import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Component } from "react";

export class Social extends Component {
    render() {
        return (
            <div className="flex space-x-8 max-[738px]:hidden">
                <a href=""><FontAwesomeIcon icon={faFacebook} color="white" className="hover:text-red-600 transition duration-500 hover:scale-125"/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter} color="white" className="hover:text-red-600 transition duration-500 hover:scale-125"/></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} color="white" className="hover:text-red-600 transition duration-500 hover:scale-125"/></a>
            </div>
        )
    }
}