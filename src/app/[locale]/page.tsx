import Banner1 from '@/components/Banner1/Banner1';
import Banner2 from '@/components/Banner2/Banner2';
import CLevel from '@/components/C-Level/CLevel';
import Header from '@/components/Header/Header';
import News from '@/components/News/News';
import styles from './page.module.scss';
import Investors from '@/components/Investors/Investors';
import Contact_Component from '@/components/СontactСomponent/СontactСomponent';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner1 />
      <Banner2 />
      <News />
      <CLevel />
      <Investors />
      <Contact_Component />
    </div>
  );
}
