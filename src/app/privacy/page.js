"use client";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css"; // Import the CSS file for react-dropdown
import styles from "./page.module.css";
import az from "./lang/az.json";
import en from "./lang/en.json";
import ru from "./lang/ru.json";
import logo from "../img/logoDark.png";
import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
const tektur = localFont({ src: "../fonts/Tektur.ttf" });
function Privacy() {
  const router = useRouter();
  const options = [
    { value: "az", label: "Azerbaijani" },
    { value: "ru", label: "Russian" },
    { value: "en", label: "English" },
  ];
  const [lang, setLang] = useState(az);
  const [defaultOption, setDefaultOption] = useState(options[0]);

  const onSelect = (selectedOption) => {
    setDefaultOption(selectedOption); // Update default option for the dropdown
    switch (selectedOption.value) {
      case "az":
        setLang(az);
        break;
      case "ru":
        setLang(ru);
        break;
      case "en":
        setLang(en);
        break;
      default:
        setLang(en);
        break;
    }
  };

  return (
    <main>
      <div className={styles.logoDiv}>
        <Image src={logo} className={styles.logo} />

        <button className={styles.goBack} onClick={() => router.push("/")}>
          Go Back
        </button>
      </div>
      <div className={styles.privacyText}>
        <h1 className={tektur.className} style={{ fontWeight: "300" }}>
          Privacy Policy
        </h1>
        <Dropdown
          options={options}
          onChange={onSelect}
          value={defaultOption}
          placeholder="Select an option"
          className={styles.dropdown}
        />
      </div>
      <div className={styles.privacyMain}>
        <ul>
          <li>{lang.first}</li>
          <li>{lang.second}</li>
          <li>{lang.third}</li>
          <li>{lang.fourth}</li>
          <li>{lang.fifth}</li>
          <li>{lang.sixth}</li>
          <li>{lang.seventh}</li>
        </ul>
      </div>
    </main>
  );
}

export default Privacy;
