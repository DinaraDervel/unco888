import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Banner2 from '@/components/Banner2/Banner2';
import News from '@/components/News/News';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner2 />
      <News />
    </div>
  );
}
