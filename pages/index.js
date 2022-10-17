import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import axios from "axios";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // const [data, setData] = useState([])
  // const formatUrl = (path = `https://api.github.com/repos/AdnaneSaber/kalopsium/contents/`) => {
  //   return path
  // }
  // const findContent = async (url = formatUrl()) => {
  //   const { data } = await axios.get(url, {
  //     headers: {
  //       Authorization: 'Bearer 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'
  //     }
  //   })
  //   data.map(el => {
  //     setData(e => [...e, el.name])
  //     if (el.type === "dir") {
  //       // findContent(el.url)
  //     }
  //   })
  // }
  // useEffect(() => {
  //   findContent()
  // }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Adnane Saber - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">AdnaneSaber</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  target={"_blank"}
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://kalopsium-s3.s3.eu-west-3.amazonaws.com/cv/Adnane+2.pdf"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Adnane Saber
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
              Pationated by Tech in general, I love creating and collaborate on beautiful things.<br />
              Got an idea ? Reach out to me and let&apos;s get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/AdnaneSaber/" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/adnane-saber-399810198/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://dev.kalopsium.store/landingPage" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover object-top"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={"https://kalopsium-s3.s3.eu-west-3.amazonaws.com/portfolio_images/screencapture-dev-kalopsium-store-landingPage-2022-10-17-14_47_33.jpg"} alt=""
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://kalopsium-s3.s3.eu-west-3.amazonaws.com/portfolio_images/screencapture-file-C-Users-a-saber-Downloads-myphone63-fr-myphone63-fr-index-html-2022-10-17-15_41_29.jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded-lg object-cover object-top"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={"https://kalopsium-s3.s3.eu-west-3.amazonaws.com/portfolio_images/screencapture-file-C-Users-a-saber-Downloads-myphone63-fr-myphone63-fr-index-html-2022-10-17-15_41_29.jpg"} alt=""
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover object-top"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3} alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover object-top"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4} alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover object-top"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5} alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover object-top"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6} alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
