'use client';

import styles from './banner1.module.scss';
import { useState } from 'react';
import Image from 'next/image';

type Props = {
  onClick: () => void;
};

function Banner1({ onClick }: Props) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          NFT UNCO<span>888</span>
        </h1>
        <h3 className={styles.subtitle}>
          Bearer option contract for stock of “UNCO Corp.” with NFT avatar
        </h3>
        <div className={styles.wrapper}>
          <div className={styles.card_left}>
            <h4 className={styles.card_title}>C-Level</h4>
            <p className={styles.card_text}>
              SPECIAL OFFER for “c-level” in Finance or Food Retail/ production/distribution.
              Profitable innovation, a seat on the Board and income with “UNCO Food Futures”
              products
            </p>
            <div className={styles.card_links}>
              <a className={styles.card_link} href=''>
                More details
              </a>
              <button
                className={styles.card_button}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {isHovering ? (
                  <Image
                    className={styles.card_arrow}
                    src='/images/Banner1/arrow-hover.svg'
                    alt='arrow'
                    width={14}
                    height={14}
                  />
                ) : (
                  <Image
                    className={styles.card_arrow}
                    src='/images/Banner1/arrow.svg'
                    alt='arrow'
                    width={14}
                    height={14}
                  />
                )}
              </button>
            </div>
          </div>
          <div className={styles.card_right}>
            <h4 className={styles.card_title}>Pree - seed</h4>
            <p className={styles.card_text}>PreSeed. 4X+ in the next round*. </p>
            <p className={styles.card_text}>
              RWA Fintech: service for micro-investments in retail food.
            </p>
            <div className={styles.card_links}>
              <a className={styles.card_link} href=''>
                More details
              </a>
              <button
                className={styles.card_button}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {isHovering ? (
                  <Image
                    className={styles.card_arrow}
                    src='/images/Banner1/arrow-hover.svg'
                    alt='arrow'
                    width={14}
                    height={14}
                  />
                ) : (
                  <Image
                    className={styles.card_arrow}
                    src='/images/Banner1/arrow-black.svg'
                    alt='arrow'
                    width={14}
                    height={14}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <p className={styles.text}>
          NFT "UNCO888" and this website and all information there are for marketing purposes
          only.This website does not constitute a public offer. When exchanging for company shares,
          KYC is a mandatory procedure. UNCO Corp. and the UNCO Board have the right to refuse
          anyone and at any time the opportunity to become the owner of NFT "UNCO888" without giving
          any reason. All details are specified in the contract, which is an integral part of the
          NFT. If you have any questions feel free to contact the support service. This website is
          under development, the texts are being refined and corrected. Under no circumstances can
          this website be considered as investment advice, decision-making information, etc.
        </p>
      </div>
    </section>
  );
}

export default Banner1;
