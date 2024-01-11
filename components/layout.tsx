import Head from "next/head";
import styles from "./layout.module.css";
import Nav from "./nav";
import Slider from "./slider";
import AboutMe from "./aboutMe";
import Workshops from "./workshops";
import Shop from "./shop";
import Gallery from "./gallery";
import Info from "./info";
import CommentWrapper from "./comment";
import NewsLetter from "./newsLetter";
import Footer from "./footer";

const name = "Kacper Piróg";
export const siteTitle = "Retkane";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Slider />
      <AboutMe />
      <Workshops />
      <Shop />
      <Info />
      <Gallery />
      <CommentWrapper />
      <NewsLetter />
      <Footer />
    </div>
  );
}
