import Banner1 from '@/components/Banner1/Banner1';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Banner2 from '@/components/Banner2/Banner2';
import CLevel from '@/components/C-Level/CLevel';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner1 />
      <Banner2 />

      <CLevel />
    </div>
  );
}
