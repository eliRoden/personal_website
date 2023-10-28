import React from "react";
import Button from "../Button";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import yourData from "../../data/portfolio.json";

const style = { fontSize: '30px'}

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title == "Github" && <FaGithub style={style} />}
          {social.title == "LinkedIn" && <FaLinkedin style={style}/>}
          {social.title == "Email" && <FaEnvelope style={style}/>}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
