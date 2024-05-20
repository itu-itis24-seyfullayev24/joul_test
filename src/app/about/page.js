import React from "react";
import Header from "../Header";
import styles from "./page.module.css";
import Image from "next/image";
import imgSrc from "../img/Unknown.jpeg";
import localFont from "next/font/local";
const antithesis = localFont({ src: "../fonts/Antithesis.otf" });

function About() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.aboutUs}>
        <h1 className={antithesis.className}>About Us</h1>
        <p>
          Fugiat eiusmod proident consectetur consectetur in quis laboris
          laboris. Occaecat ea cillum incididunt ex ad commodo Lorem. Pariatur
          amet ipsum labore commodo ea eu culpa quis quis. Velit proident amet
          eiusmod non. Commodo ea eu adipisicing ex labore duis mollit do veniam
          deserunt.
        </p>
      </div>
      <div className={styles.team}>
        <h1 className={antithesis.className}>Our Team</h1>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <Image src={imgSrc} className={styles.teamMemberImage} />
            <h1>Nadir Humbataliyev</h1>
          </div>
          <div className={styles.teamMember}>
            <Image src={imgSrc} className={styles.teamMemberImage} />
            <h1>Nicat Mammadov</h1>
          </div>
          <div className={styles.teamMember}>
            <Image src={imgSrc} className={styles.teamMemberImage} />
            <h1>Ravan Seyfullayev</h1>
          </div>
          <div className={styles.teamMember}>
            <Image src={imgSrc} className={styles.teamMemberImage} />
            <h1>Miradil Mammadov</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
