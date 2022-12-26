import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque
        dolores nisi ex fugit magni voluptatum ut soluta, temporibus vel vitae
        necessitatibus possimus, tenetur qui eum laborum perspiciatis aspernatur
        quibusdam?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque
        dolores nisi ex fugit magni voluptatum ut soluta, temporibus vel vitae
        necessitatibus possimus, tenetur qui eum laborum perspiciatis aspernatur
        quibusdam?
      </p>
      <Link className={styles.btn} href="/users">See Users Listing</Link>
    </div>
  );
}
