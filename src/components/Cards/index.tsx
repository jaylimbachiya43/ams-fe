'use client'
import styles from '../../../../ams-fe/src/components/Cards/style.module.css';
import LoginForm from '../../../../ams-fe/src/components/LoginForm/index';
import Image from 'next/image';

export default function Card({ cardData }) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Image src={cardData.image} alt="User Image" className={styles.imgshd} />
          <a href="#" className="text-center text-[#3490dc]">
            {cardData.title}
          </a>
        </div>
        <div className={styles.flipCardBack}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
