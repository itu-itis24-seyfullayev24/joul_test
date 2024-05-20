"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import LogoDark from "./img/logoDark.png";
import LogoWhite from "./img/logoWhite.png";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [LogoLink, setLogoLink] = useState(LogoWhite);
  const [menuOpen, setMenuOpen] = useState(false);
  const checkScroll = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScroll();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      setLogoLink(LogoDark);
    } else {
      setLogoLink(LogoWhite);
    }
  }, [isScrolled]);

  return (
    <div className={styles.main}>
      <nav className={`${styles.nav} ${isScrolled ? styles.navScroll : ""}`}>
        <div className={styles.leftPartNav}>
          <Image src={LogoLink} alt="Logo" id={styles.logo} />
        </div>
        <div className={styles.rightPartNav}>
          <ul className={menuOpen ? styles.ulOpen : styles.ulClose}>
            <Link href="./">
              <li
                className={
                  isScrolled ? styles.navLiScroll : styles.navLiScroolMob
                }
                style={{
                  cursor: "pointer",
                }}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={
                  isScrolled ? styles.navLiScroll : styles.navLiScroolMob
                }
                style={{
                  cursor: "pointer",
                }}
              >
                About
              </li>
            </Link>

            <button
              className={isScrolled ? styles.navButtonScroll : styles.navButton}
            >
              Request Demo
            </button>
          </ul>
          <div
            className={isScrolled ? styles.burgerMenu : styles.burgerMenuBlack}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={
                isScrolled ? styles.burgerLine : styles.burgerLineBlack
              }
            ></div>
            <div
              className={
                isScrolled ? styles.burgerLine : styles.burgerLineBlack
              }
            ></div>
            <div
              className={
                isScrolled ? styles.burgerLine : styles.burgerLineBlack
              }
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
