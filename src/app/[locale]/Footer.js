import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import localFont from "next/font/local";
import Image from "next/image";
import logo from "./img/logoDark.png";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
const antithesis = localFont({ src: "./fonts/Antithesis.otf" });

function Footer() {
  const router = useRouter();
  const t = useTranslations("Footer");
  return (
    <div className={styles.footer}>
      <div className={styles.leftFooter}>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logoImage} />
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightP}>&copy; {t("copyright")}</p>
          <p
            className={styles.privacy}
            onClick={() => router.push("/en/privacy")}
          >
            {" "}
            {t("privacyPolicy")}
          </p>
        </div>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.socialMedia}>
          <FaFacebook className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
          <FaTiktok className={styles.socialIcon} />
          <FaLinkedin className={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
