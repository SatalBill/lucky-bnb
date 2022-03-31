import React from "react";
import styles from "./HowDoesItWork.module.css";
import howDoesItWorkImage from "assets/images/howDoesItWorkImage.png";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

function HowDoesItWork() {
  const isBellow860px = useMediaQuery("(max-width : 860px)");

  return (
    <div className="container-wrapper">
      <div className={styles.section}>
        <div className={styles.left}>
          <Fade
            delay={500}
            duration={1000}
            cascade
            triggerOnce
            direction="down"
          >
            <img
              src={howDoesItWorkImage}
              className={`${styles.howDoesItWork_Image} `}
              alt=""
            />
          </Fade>
        </div>
        <Fade delay={500} duration={1000} cascade triggerOnce direction="down">
          <div className={styles.right}>
            <h1
              className={`${
                isBellow860px ? "fs-26px" : "fs-44px"
              }  white weight-7 mb-15px`}
            >
              How Does LuckyBNB Work?
            </h1>

            <p
              className={`${
                isBellow860px ? "fs-14px" : "fs-18px"
              } white weight-4 lh-1_6 mb-20px`}
            >
              {" "}
              Our $LBNB Smart Contract tracks buy transactions since the last
              drawing and chooses a winner at random. There’s a new winner every
              six hours!
            </p>

            <p
              className={`${
                isBellow860px ? "fs-14px" : "fs-18px"
              } white weight-4 lh-1_6 mb-20px`}
            >
              {" "}
              Every buy and sell of $LBNB provides 2.4% to our sweepstakes prize
              pool. The winning wallet is randomly chosen by the smart contract
              every six hours. The accumulated prize pool automatically pays out
              in BNB tokens immediately during the draw.
            </p>

            <p
              className={`${
                isBellow860px ? "fs-14px" : "fs-18px"
              } white weight-4 lh-1_6 mb-20px`}
            >
              {" "}
              The contract also transfers 10% of each prize pool to our Mega
              Jackpot wallet for our weekly MegaBNB & monthly PowerBNB
              sweepstakes draws during the drawing process.
            </p>

            <p
              className={`${
                isBellow860px ? "fs-14px" : "fs-18px"
              } white weight-4 lh-1_6 mb-20px`}
            >
              {" "}
              During each six-hour sweepstakes period, each wallet that swaps a
              minimum amount of BNB for $LBNB tokens in a single transaction is
              eligible to win. The minimum amount of $LBNB tokens needed to
              qualify for the next drawing will be published regularly.
            </p>

            <p
              className={`${
                isBellow860px ? "fs-14px" : "fs-18px"
              } white weight-4 lh-1_6 mb-20px`}
            >
              {" "}
              Beware! A sell that follows a buy within a single drawing period
              forfeits that entry, and the entry will be transferred to the
              contract. Your last transaction within a draw period MUST be a buy
              to qualify for the drawing. Holders can enter more than once by
              using multiple wallets.
            </p>

            <p
              className={`${
                isBellow860px ? "fs-14px" : "fs-18px"
              } white weight-4 lh-1_6 mb-20px`}
            >
              {" "}
              If the chosen entry is one that was forfeited to the contract
              because of a sell, the pool will roll over to the next draw,
              yielding a bigger prize for the next drawing! For a complete
              description of the tokenomics, the prize rules, and how to play,
              read more at{" "}
              <a
                href="https://luckylottoworld.gitbook.io"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                https://luckylottoworld.gitbook.io
              </a>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default HowDoesItWork;
