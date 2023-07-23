import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const SocialMediaLinkItem = () => {
  return (
    <>
      <div className="social-media-link d-flex algin-items-center gap-4">
        <a href="#" target="_blank">
          <FaFacebookF />
        </a>
        <a href="#" target="_blank">
          <FaInstagram />
        </a>
        <a href="#" target="_blank">
          <FaTwitter />
        </a>
      </div>
    </>
  );
};

export default SocialMediaLinkItem;
