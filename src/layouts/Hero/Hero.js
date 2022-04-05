import React from "react";
import styled from 'styled-components'
import styles from "./Hero.module.css";
import luckyBnbHeroBanner from "assets/images/luckyBnbHeroBanner.png";
import { Fade } from "react-awesome-reveal";
import Web3 from 'web3'
import Button from "components/Button/Button";
import luckyBnbAbi from "abi/luckyBnbAbi.json"

const LuckyBnbAddress = "0x18ec883176b8809a807c7ba14ac09f5ef18fdf04"

const DrawButton = styled.div`
  padding: 10px 1rem;
  background: linear-gradient(90deg, #8D0C0B 0%, #FF5E28 107.58%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 1em;
  color: white;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    transform: translateY(1px);
  }
`
const CheckButton = styled(DrawButton)`
  border: 2px solid transparent;

  background: linear-gradient(black, black) padding-box,
    linear-gradient(
        130deg,
        rgba(232, 178, 53, 0.68),
        transparent,
        rgba(232, 178, 53, 0.68)
      )
      border-box;
  &:hover {
    background: linear-gradient(black, black) padding-box,
    linear-gradient(
        -20deg,
        rgba(232, 178, 53, 0.68),
        transparent,
        rgba(232, 178, 53, 0.68)
      )
      border-box;
  }
`

function Hero(props) {
  const [val, setVal] = React.useState("")
  const cutDigits = (num) => {
    return num.toString().substring(0, 5)
  }
  let sendObj
  const loadAddress = () => {
    if (props.address == "") {
      sendObj = {
        type: 'info',
        msg: "Please connect wallet."
      }
      props.toast(sendObj)
    } else {
      console.log(props.address)
      setVal(props.address)
    }
  }
  const handleCheckIsInPool = async () => {
    try {
      if (val == "") {
        sendObj = {
          type: 'info',
          msg: "Please load your wallet address."
        }
        props.toast(sendObj)
      } else {
        const web3 = window.web3
        const isValidAddress = web3.utils.isAddress(val)
        if (!isValidAddress) {
          sendObj = {
            type: 'warning',
            msg: "Please input correct address."
          }
          props.toast(sendObj)
          console.log('val', val)
          console.log('val2', props.address)
        } else {
          props.isLoading(true)
          // const luckyContract = props.contractObj
          window.web3 = new Web3("https://bsc-dataseed.binance.org/")
          await window.ethereum.enable()
          const web3 = window.web3
          const luckyBnbContracts = new web3.eth.Contract(luckyBnbAbi, LuckyBnbAddress);
          const isListed = await luckyBnbContracts.methods.isInThePool(props.address).call()

          console.log('isListed=>', isListed)
          props.isLoading(false)
          if (isListed) {
            sendObj = {
              type: 'success',
              msg: "You have already listed."
            }
          }
          else {
            sendObj = {
              type: 'warning',
              msg: "Your address is not listed on the pool yet."
            }
          }
          props.toast(sendObj)
        }
        console.log('isValidAddress', isValidAddress)
      }
    } catch (error) {
      props.isLoading(false)
      sendObj = {
        type: 'warning',
        msg: "Something went wrong. Please refresh the website."
      }
      props.toast(sendObj)
      console.log('==>>', error)
    }

  }

  const handleDraw = async () => {
    try {
      if (props.address === "") {
        sendObj = {
          type: 'warning',
          msg: "Please connect your wallet."
        }
        props.toast(sendObj)
      } else {
        console.log("props.address=>", props.address)
        props.isLoading(true)
        // const luckyContract = props.contractObj
        window.web3 = new Web3("https://bsc-dataseed.binance.org/")
        await window.ethereum.enable()
        const web3 = window.web3
        web3.eth.setProvider(Web3.givenProvider);  // this is very important
        const luckyBnbContracts = new web3.eth.Contract(luckyBnbAbi, LuckyBnbAddress);
        const res = await luckyBnbContracts.methods.draw().send({ from: props.address })
        console.log('res=>>', res)
        props.isLoading(false)
        if (res) {
          sendObj = {
            type: 'success',
            msg: "Success"
          }
          props.toast(sendObj)
        }
      }
    } catch (error) {
      props.isLoading(false)
      sendObj = {
        type: 'error',
        msg: "Please wait for draw time expiry"
      }
      props.toast(sendObj)
      console.log('draw error=>', error)
    }
  }
  return (
    <div className={styles.hero}>
      <Fade delay={500} duration={1000} cascade triggerOnce>
        <div className={styles.heroContent}>
          <div className="container-wrapper">
            <div className={styles.luckyBnbHeroBanner_parent}>
              <img
                src={luckyBnbHeroBanner}
                className={styles.luckyBnbHeroBanner}
                alt=""
              />

              <div className={styles.luckyBnbHeroBanner_content}>
                <span className="weight-6">{cutDigits(parseFloat(props.prizePool).toFixed(4))}</span>
                {/* <span className="weight-7">8</span>
                <span className="weight-7">8</span> */}
              </div>
            </div>
            <div className={styles.input_wrapper}>
              <input
                className={styles.wallet_input}
                value={val}
                onChange={(e) => setVal(e.target.value)}
                placeholder="Your wallet address..."
              />
              <Button title="Load" onClick={loadAddress} />
            </div>
            <div className={styles.input_wrapper}>
              <CheckButton onClick={handleCheckIsInPool}>Check my address</CheckButton>
              <DrawButton onClick={handleDraw}>Draw</DrawButton>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Hero;
