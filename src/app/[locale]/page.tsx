import Banner3 from '@/components/Banner3/Banner3';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner3 />
    </div>
  );
}
