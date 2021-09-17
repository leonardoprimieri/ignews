import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import ActiveLink from "../ActiveLink";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoAndLinks}>
          <Image
            height="130px"
            width="130px"
            objectFit="contain"
            src="/images/logo.svg"
            alt="ig.news"
          />

          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/posts">
              <a>Posts</a>
            </ActiveLink>
          </nav>
        </div>

        <SignInButton />
      </div>
    </header>
  );
}
