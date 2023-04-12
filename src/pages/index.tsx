import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/shared/components/Header";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };
  return (
    <>
      <Head>
        <title>Coffee shops</title>
        <meta name="description" content="coffee shops app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image src="/static/Thinking.svg" alt="" width={565} height={400} />
        <p className={styles.heading}>Discover coffee shops around you!</p>
      </main>
    </>
  );
}
