import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.homeContent}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <br /> <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br /> <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image width="350px" height="550px" objectFit="cover" src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JFf7tEjDtqq7QmQv1B3nnKU");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
