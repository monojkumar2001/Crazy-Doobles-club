import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialMediaLinkItem = () => {
  return (
    <>
      <div className="social-media-link d-flex algin-items-center gap-4">
        <Link href="#" target="_blank">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/crazy_doodle.nft" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/crazydoodle_nft" target="_blank">
          <FaTwitter />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaLinkItem;
