'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './header.module.scss';

function Header() {
  const t = useTranslations('header');
  return (
    <header className={styles.header}>
      <Image src='/images/Header/logo-apple.png' alt='logo' width={153} height={144} />{' '}
      <h1>{t('title')}</h1>
    </header>
  );
}
export default Header;
