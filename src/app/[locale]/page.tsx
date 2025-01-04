import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Banner2 from '@/components/Banner2/Banner2';
import Feedback from '@/components/Feedback/Feedback';

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner2 />
      <Feedback />
    </div>
  );
}
