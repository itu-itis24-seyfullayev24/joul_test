import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import Top from "./img/top.svg";
import blockFirst from "./img/blockFirst.svg";
import contactUs from "./img/contactUs.svg";
import apple from "./img/apple.png";
import android from "./img/android.svg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Footer from "./Footer";
import localFont from "next/font/local";
const antithesis = localFont({ src: "./fonts/Antithesis.otf" });

const roboto = localFont({ src: "./fonts/Roboto-Regular.ttf" });

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.topPage}>
        <div className={styles.topPageLeft}>
          <h1 className={antithesis.className}>
            Lorem ipsum dolor sit amet,
            <span className={styles.spanForTopText}>consectetur</span> elit
          </h1>
        </div>
        <div className={styles.topPageRight}>
          <Image src={Top} alt="Top" className={styles.topImage} />
        </div>
      </div>
      <div className={styles.tags}>
        <div className={styles.tag}>
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <RiMoneyDollarCircleLine className={styles.tagIcons} />
          </div>
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet sit amet sit amet.</p>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <RiMoneyDollarCircleLine className={styles.tagIcons} />
          </div>
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet sit amet sit amet.</p>
        </div>
        <div className={styles.tag}>
          {" "}
          <div className={styles.tagIcon}>
            <div className={styles.tagBlockIcon}></div>
            <RiMoneyDollarCircleLine className={styles.tagIcons} />
          </div>
          <h2>Lorem Ipsum Dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet sit amet sit amet.</p>
        </div>
      </div>
      <div className={styles.blocksInfo}>
        <div className={styles.blockInfo}>
          <div className={styles.blockInfoRight}>
            <Image src={blockFirst} className={styles.blockImage} />
          </div>
          <div className={styles.blockInfoLeft}>
            <h1>Lorem ipsum dolor amet sit amet sit </h1>
            <p>
              Fugiat eiusmod proident consectetur consectetur in quis laboris
              laboris. Occaecat ea cillum incididunt ex ad commodo Lorem.
              Pariatur amet ipsum labore commodo ea eu culpa quis quis. Velit
              proident amet eiusmod non. Commodo ea eu adipisicing ex labore
              duis mollit do veniam deserunt.
            </p>
          </div>
        </div>
        <div className={styles.blockInfo}>
          <div className={styles.blockInfoRight}>
            {" "}
            <Image src={blockFirst} className={styles.blockImage} />
          </div>
          <div className={styles.blockInfoLeft}>
            {" "}
            <h1>Lorem ipsum dolor amet sit amet sit </h1>
            <p>
              Fugiat eiusmod proident consectetur consectetur in quis laboris
              laboris. Occaecat ea cillum incididunt ex ad commodo Lorem.
              Pariatur amet ipsum labore commodo ea eu culpa quis quis. Velit
              proident amet eiusmod non. Commodo ea eu adipisicing ex labore
              duis mollit do veniam deserunt.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardsInfo}>
        <h1>Caring is the new marketing</h1>
        <div className={styles.cardsMain}>
          <div className={styles.cardInfo}>
            <div className={styles.cardText}>
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            </div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardText}>
              <p>
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
            </div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardText}>
              <p>Revamping the Membership Model with Triathlon Australia</p>
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
      <div className={styles.downloadApp}>
        <h1 className={antithesis.className}>Proqram Təminatını yüklə</h1>
        <p></p>
        <div className={styles.downloadAppForm}>
          <div className={styles.downloadAppButtons}>
            <span>
              <Image src={android} className={styles.phoneLogo} />
              <button>Avaliable in Android</button>
            </span>
            <span>
              <Image src={apple} className={styles.phoneLogo} />
              <button>Avaliable in App Store</button>
            </span>
          </div>
          <div className={styles.downloadAppImage}>
            <Image src={blockFirst} className={styles.imageDownload} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
