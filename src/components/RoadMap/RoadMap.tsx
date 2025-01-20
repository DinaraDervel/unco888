import Image from "next/image";
import styles from "./roadMap.module.scss";
import { useTranslations } from "next-intl";
import { RoadMapData } from "@/constants/RoadMapData";

const RoadMap = () => {
    const t = useTranslations('textRoadMap');
    return (
        <div className={styles.container_main}>
            <h2 className={styles.title}>ROAD MAP</h2>
            {RoadMapData.map((item, index) => (
                <div key={index} className={`${styles.container_wrapper_content} ${item.style === 'reverse' ? styles.container_wrapper_content_reverse : ''}`}>
                    <div className={styles.text}>
                        {t(item.text)}
                    </div>
                    <div className={`${styles.container_year} ${item.style === 'reverse' ? styles.container_year_reverse : ''}`}>
                        <Image src="/images/RoadMap/circle.svg" className={`${styles.circle_of_year} ${item.style === 'reverse' ? styles.circle_of_year_reverse : ''}`} alt="circle" width={50} height={50} />
                        <p className={`${styles.line_of_year} ${item.style === 'reverse' ? styles.line_of_year_reverse : ''}`}></p>
                        <div className={`${styles.flare_wrapper} ${RoadMapData?.length - 1 === index ? styles.hide : ''}`}>
                            <div className={`${styles.flare} ${item.style === 'reverse' ? styles.flare_reverse : styles.flare_non_reverse}`}></div>
                        </div>
                        <p className={`${styles.name_year} ${item.style === 'reverse' ? styles.name_year_reverse : ''}`}>{item.year}</p>
                    </div>
                    <div className={`${styles.container_wrapper_instagram} ${item.style === 'reverse' ? styles.container_wrapper_instagram_reverse : ''}`}>
                        <Image className={styles.photo} src={item.img} alt="photo" width={370} height={268} />
                        <Image className={styles.icon_instagram} src="/images/RoadMap/instagram.svg" alt="Instagram" width={40} height={40} />
                    </div>
                </div>
            ))}
        </div>
    );
}


export default RoadMap;
