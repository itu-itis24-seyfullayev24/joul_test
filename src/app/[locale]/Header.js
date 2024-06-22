"use client";
import React from "react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import LogoDark from "./img/logoDark.png";
import LogoWhite from "./img/logoWhite.png";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/dropdown";
function Header({ scrollToDiv, scrollToDiv2, visibility }) {
  const [def, setDef] = useState("EN");
  const options = [
    { value: "az", label: "AZ" },
    { value: "en", label: "EN" },
  ];
  const router = useRouter();
  const changeLang = (changedValue) => {
    setDef(changedValue.value);
    switch (changedValue.value) {
      case "az":
        router.push("/az");
        break;
      case "en":
        router.push("/en");
        break;
      default:
        router.push("/en");
        break;
    }
  };
  const t = useTranslations("Header");
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
            <li>
              <div
                className={isScrolled ? styles.dropdownOpen : styles.dropdown}
              >
                <span onClick={() => router.push("/az")}>AZ</span>
                <span onClick={() => router.push("/en")}>EN</span>
              </div>
            </li>
            <li
              onClick={scrollToDiv}
              className={
                isScrolled ? styles.navLiScroll : styles.navLiScroolMob
              }
              style={{
                cursor: "pointer",
                display: visibility,
              }}
            >
              {t("ourValue")}
            </li>

            <li
              onClick={scrollToDiv2}
              className={
                isScrolled ? styles.navLiScroll : styles.navLiScroolMob
              }
              style={{
                cursor: "pointer",
                display: visibility,
              }}
            >
              {t("howItWorks")}
            </li>

            <button
              className={isScrolled ? styles.navButtonScroll : styles.navButton}
            >
              {t("getDemo")}
            </button>
          </ul>
          <div
            className={`${
              isScrolled ? styles.burgerMenu : styles.burgerMenuBlack
            } ${!menuOpen ? styles.burgerMenu : styles.burgerMenuOpen}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`${
                isScrolled ? styles.burgerLine : styles.burgerLineBlack
              } ${!menuOpen ? styles.burgerLine : styles.burgerLineOpenFirst}`}
            ></div>
            <div
              className={`${
                isScrolled ? styles.burgerLine : styles.burgerLineBlack
              } ${!menuOpen ? styles.burgerLine : styles.burgerLineOpenSecond}`}
            ></div>
            <div
              className={`${
                isScrolled ? styles.burgerLine : styles.burgerLineBlack
              } ${!menuOpen ? styles.burgerLine : styles.burgerLineOpenThird}`}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
