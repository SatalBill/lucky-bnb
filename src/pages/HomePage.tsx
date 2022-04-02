import React, { useEffect, useState } from "react";
import Web3 from 'web3'
import Coins from "layouts/Coins/Coins";
import Contact from "layouts/Contact/Contact";
import Features from "layouts/Features/Features";
import Footer from "layouts/Footer/Footer";
import FortuneMap from "layouts/FortuneMap/FortuneMap";
import Hero from "layouts/Hero/Hero";
import HowDoesItWork from "layouts/HowDoesItWork/HowDoesItWork";
import Introducing from "layouts/Introducing/Introducing";
import Navbar from "layouts/Navbar/Navbar";
import Tokenomics from "layouts/Tokenomics/Tokenomics";
import UntilNextDraw from "layouts/UntilNextDraw/UntilNextDraw";
import styles from "./HomePage.module.css";
import { Fade } from "react-awesome-reveal";
import luckyBnbAbi from "abi/luckyBnbAbi.json"

const LuckyBnbAddress = "0x18ec883176b8809a807c7ba14ac09f5ef18fdf04"

function HomePage(props: any) {
  const [isLoading, setIsLoading] = useState(false)
  const [prizePool, setPrizePool] = useState('0')

  useEffect(() => {
    const start = async () => {
      console.log('start====');

      try {
        setIsLoading(true)
        window.web3 = new Web3("https://bsc-dataseed.binance.org/")
        await window.ethereum.enable()
        const web3 = window.web3
        const luckyBnbContracts = new web3.eth.Contract(luckyBnbAbi, LuckyBnbAddress);

        // contract balance
        const prizePoolInWei = await web3.eth.getBalance(LuckyBnbAddress)
        const prizePoolTemp = web3.utils.fromWei(prizePoolInWei);
        console.log('prizePoolTemp==>>', prizePoolTemp)
        console.log('typeof_prizePoolTemp==>>', typeof(prizePoolTemp))
        setPrizePool(prizePoolTemp)

      } catch (error) {
        console.log('err==>>', error)
      }

    }
    start()
  }, [])

  return (
    <div className={styles.home}>
      <Navbar
        connect={props.connect}
        connected={props.connected}
        address={props.address}
        chainId={props.chainId}
        killSession={props.killSession}
      />
      <div className="mb-100px" id="home">
        <Hero prizePool={prizePool} />
      </div>
      <div className="mb-100px">
        <Fade delay={500} duration={1000} cascade triggerOnce direction="right">
          <Introducing />
        </Fade>
      </div>
      <div className="mb-150px">
        <Fade delay={500} duration={1000} cascade triggerOnce direction="down">
          <UntilNextDraw prizePool={prizePool} />
        </Fade>
      </div>
      <div className="mb-100px">
        <HowDoesItWork />
      </div>
      <div className="mb-100px" id="token">
        <Fade delay={500} duration={1000} cascade triggerOnce direction="left">
          <Tokenomics />
        </Fade>
      </div>
      <div className="mb-150px">
        <Features />
      </div>
      <div className="mb-200px" id="roadmap">
        <FortuneMap />
      </div>
      <div className="mb-200px">
        <Coins />
      </div>
      <div className="mb-100px" id="contact">
        <Contact />
      </div>
      <div className="mb-100px">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
