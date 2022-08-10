import React from "react";
import "./Cloudplan.css";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";

const Cloudplan = () => {
  return (
    <>
      <div class="flex-container">
        <div>
          <div className="Grid_system">
              <span className="icon"><FaAws /></span>
              <span className="text">AWS</span>
          </div>
        </div>
        <div>
        <span className="icon"><SiGooglecloud /></span>
          <span className="text">GCP</span>
        </div>
        <div>
        <span className="icon"><SiMicrosoftazure /></span>
          <span className="text">AZURE</span>
        </div>
      </div>
    </>
  );
};

export default Cloudplan;
