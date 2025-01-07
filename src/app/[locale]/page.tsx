import Banner1 from '@/components/Banner1/Banner1';
import Banner2 from '@/components/Banner2/Banner2';
import CLevel from '@/components/C-Level/CLevel';
import Banner3 from '@/components/Banner3/Banner3';
import Header from '@/components/Header/Header';
import News from '@/components/News/News';
import styles from './page.module.scss';
import Investors from '@/components/Investors/Investors';
import Services from '@/components/Services/Services';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner1 />
      <Banner2 />
      <News />
      <Banner3 />
      <CLevel />
      <Investors />

      <Services />
    </div>
  );
}
