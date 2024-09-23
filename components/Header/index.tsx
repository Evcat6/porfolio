import Link from 'next/link';
import styles from './index.module.css';
import sunFillBlack from '@/public/sun-fill-black.webp';
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.container}>
            <h2 className={styles.left_title}>DR.</h2>
            <nav className={styles.navigation_container} >
                <ul className={styles.navigation_list} >
                    <li><Link href="#">Projects</Link></li>
                    <li><Link href="">Resume</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
                <Image src={sunFillBlack} width={22} height={22} alt="sun fill" />
            </nav>
        </header>
    );
}

export { Header };
