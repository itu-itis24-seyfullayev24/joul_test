"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";

import contactUs from "./img/contactUs.svg";
import apple from "./img/apple.svg";
import android from "./img/android.svg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdDevices } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import Footer from "./Footer";
import localFont from "next/font/local";
import EvCharge from "./img/ev_charge.png";
import imgSrc from "./img/Unknown.jpeg";
import first from "./img/first.png";
import second from "./img/second.png";
import third from "./img/third.png";
import { useRef } from "react";
const antithesis = localFont({ src: "./fonts/Tektur.ttf" });

export default function Home() {
  const scrollToDiv = useRef(null);
  const scrollToDiv2 = useRef(null);

  const scrollToDivFunction = () => {
    const offset = -200; // Adjust this value to set the offset
    const elementPosition =
      scrollToDiv.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const scrollToDivFunction2 = () => {
    const offset = -200;
    const elementPosition =
      scrollToDiv2.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <main className={styles.main}>
      <Header
        scrollToDiv={scrollToDivFunction}
        scrollToDiv2={scrollToDivFunction2}
      />
      <div className={styles.topPage}>
        <div className={styles.topPageLeft}>
          <div>
            <h1 className={antithesis.className} style={{ fontWeight: "300" }}>
              Making it super easy to become{" "}
              <span className={styles.spanForTopText}>EV Charge</span> Point
              Operator
            </h1>
          </div>
          <div className={styles.downloadIcons}>
            <div className={styles.downloadIconsText}>
              {" "}
              <h1 className={antithesis.className}>Get apps from here</h1>
            </div>
            <div className={styles.downloadIconsSpan}>
              <span>
                <Image src={apple} className={styles.phoneLogo} />
              </span>
              <span>
                <Image src={android} className={styles.phoneLogo} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.topPageRight}>
          <Image src={EvCharge} alt="Top" className={styles.topImage} />
        </div>
      </div>
      <div className={styles.tags} ref={scrollToDiv}>
        <div className={styles.tagText}>
          <div className={styles.tagTextHighlight}></div>
          <p className={antithesis.className}>
            We enable CPOs or those wishing to become one such as restaurant
            chains, retail stores, business centers, municipalities etc. to
            activate and manage chargers as easy & fast as handling home
            appliances
          </p>
        </div>
        <div className={styles.tag}>
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <RiMoneyDollarCircleLine className={styles.tagIcons} />
          </div>
          <h2>Full control over pricing & billing</h2>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <MdDevices className={styles.tagIcons} />
          </div>
          <h2>Device control panel</h2>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <FaRegCreditCard className={styles.tagIcons} />
          </div>
          <h2>Pre-integrated payments</h2>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <FaMobileAlt className={styles.tagIcons} />
          </div>
          <h2>Mobile app for EV drivers</h2>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <IoMdSettings className={styles.tagIcons} />
          </div>
          <h2>Hardware agnostic</h2>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <FaChartPie className={styles.tagIcons} />
          </div>
          <h2>Data analytics tools</h2>
        </div>
      </div>
      <div className={styles.cardsInfo} ref={scrollToDiv2}>
        <h1 className={antithesis.className}>Three simple steps</h1>
        <div className={styles.cardsMain}>
          <div className={styles.cardInfo}>
            <h1>1</h1>
            <div className={styles.cardText}>
              <p>
                Integration of Joul & activation of charging stations by the
                CPO, using our software
              </p>
            </div>
            <div className={styles.cardInfoImageDiv}>
              {" "}
              <Image src={first} className={styles.cardInfoImage} />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h1>2</h1>
            <div className={styles.cardText}>
              <p>
                On the mobile super app EV driver locates the CPO whose station
                he/she wants to use
              </p>
            </div>
            <div className={styles.cardInfoImageDiv}>
              {" "}
              <Image src={first} className={styles.cardInfoImage} />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <h1>3</h1>
            <div className={styles.cardText}>
              <p>
                Charging is activated / deactivated and payments made on the
                app.
              </p>
            </div>
            <div className={styles.cardInfoImageDiv}>
              {" "}
              <Image src={first} className={styles.cardInfoImage} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactUs}>
        <div className={styles.contactUsForm}>
          <h1 className={antithesis.className}>Əlaqə</h1>
          <form>
            <div className={styles.userInfoContactUs}>
              <input
                className={styles.inputNameContactUs}
                placeholder="Full Name"
                type="text"
                name="user_name"
              />
              <input
                className={styles.inputEmailContactUs}
                placeholder="Email"
                type="email"
                name="user_email"
              />
            </div>
            <input
              className={styles.inputContactUs}
              placeholder="Subject"
              type="text"
              name="subject"
            />
            <textarea
              className={styles.inputMessageContactUs}
              placeholder="Message"
              name="message"
            />
            <div className={styles.buttonDiv}>
              {" "}
              <button id={styles.button}>Submit</button>
            </div>
          </form>
        </div>
        <div className={styles.contactUsImage}>
          <Image src={contactUs} className={styles.imageContact} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
