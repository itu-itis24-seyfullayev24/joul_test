import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "./img/logoDark.png";
import Link from "next/link";
const antithesis = localFont({ src: "./fonts/Antithesis.otf" });

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.leftFooter}>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logoImage} />
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightP}>
            &copy; 2024 Joul. All rights reserved
          </p>
          <Link href="/privacy">
            <p className={styles.privacy}>Privacy and Policy</p>
          </Link>
        </div>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.socialMedia}></div>
      </div>
    </div>
  );
}

export default Footer;
