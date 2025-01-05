import Banner1 from "@/components/Banner1/Banner1";
import Banner2 from "@/components/Banner2/Banner2";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner1 />
      <Banner2 />
    </div>
  );
}
