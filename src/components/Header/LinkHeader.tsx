import styles from './header.module.scss';
import Link from 'next/link';
import { ArrProps } from './Header';
type Props = {
  links: ArrProps[];
};

export default function LinkHeader({ links }: Props) {
  return (
    <ul className={styles.navigation}>
      {links.map((item, n) => (
        <li key={n}>
          <Link className={styles.link} href={item.href}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
