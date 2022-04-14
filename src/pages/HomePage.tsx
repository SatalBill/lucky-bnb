import React, { useEffect, useState } from "react";
import Web3 from 'web3'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import PageLoader from "components/Loader/PageLoader"
import styles from "./HomePage.module.css";
import { Fade } from "react-awesome-reveal";
import luckyBnbAbi from "abi/luckyBnbAbi.json"

const LuckyBnbAddress = "0x18ec883176b8809a807c7ba14ac09f5ef18fdf04"
declare var window: any

function HomePage(props: any) {
  const [isLoading, setIsLoading] = useState(false)
  const [prizePool, setPrizePool] = useState('0')
  const [contractObj, setContractObj] = useState(null)

  useEffect(() => {
    const start = async () => {
      try {
        setIsLoading(true)
        window.web3 = new Web3("https://bsc-dataseed.binance.org/")
        // await window.ethereum.enable()
        const web3 = window.web3
        const luckyBnbContracts = new web3.eth.Contract(luckyBnbAbi, LuckyBnbAddress);
        setContractObj(luckyBnbContracts)

        // contract balance
        const prizePoolInWei = await web3.eth.getBalance(LuckyBnbAddress)
        const prizePoolTemp = web3.utils.fromWei(prizePoolInWei);
        console.log('prizePoolTemp==>>', prizePoolTemp)
        setPrizePool(prizePoolTemp)

        // check network
        // const chainId = 56 // BSC Mainnet
        // if (window.ethereum.networkVersion !== chainId) {
        //   try {
        //     await window.ethereum.request({
        //       method: 'wallet_switchEthereumChain',
        //       params: [{ chainId: web3.utils.toHex(chainId) }],
        //     });
        //   } catch (err: any) {
        //     // This error code indicates that the chain has not been added to MetaMask.
        //     if (err.code === 4902) {
        //       await window.ethereum.request({
        //         method: 'wallet_addEthereumChain',
        //         params: [
        //           {
        //             chainName: 'BSC Mainnet',
        //             chainId: web3.utils.toHex(chainId),
        //             nativeCurrency: { name: 'BNB', decimals: 18, symbol: 'BNB' },
        //             rpcUrls: ['https://bsc-dataseed.binance.org/'],
        //           },
        //         ],
        //       });
        //     }
        //   }
        // }

        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log('err==>>', error)
        // toast('Please check your internet connection.', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }

    }
    start()
  }, [])

  const showToast = (obj: any) => {
    const option: any = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
    if (obj.type === 'info') toast.info(`${obj.msg}`, option);
    else if (obj.type === 'warning') toast.warn(`${obj.msg}`, option);
    else if (obj.type === 'success') toast.success(`${obj.msg}`, option);
    else if (obj.type === 'error') toast.error(`${obj.msg}`, option);
  }

  return (
    <div className={styles.home}>
      {isLoading && <PageLoader />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar
        connect={props.connect}
        connected={props.connected}
        address={props.address}
        chainId={props.chainId}
        killSession={props.killSession}
      />
      <div className="mb-100px" id="home">
        <Hero
          prizePool={prizePool}
          address={props.address}
          contractObj={contractObj}
          isLoading={(e: boolean) => setIsLoading(e)}
          toast={(e: any) => showToast(e)}
        />
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
