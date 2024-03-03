import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/css/footer.css";

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-wrap justify-center gap-2">
          <a
            className="footer-link"
            href="https://twitter.com/r0bain"
            target="_blank"
          >
            <FontAwesomeIcon icon={"fab fa-twitter"}></FontAwesomeIcon>
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/robin-neyrinck-192bab263/"
            target="_blank"
          >
            <FontAwesomeIcon icon={"fab fa-linkedin"}></FontAwesomeIcon>
          </a>
          <a
            className="footer-link"
            href="https://github.com/RobinNeyrinck"
            target="_blank"
          >
            <FontAwesomeIcon icon={"fab fa-github"}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <p className="mt-2 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Robin Neyrinck. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
