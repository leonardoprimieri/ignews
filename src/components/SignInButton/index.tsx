import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub size={24} fill="#04d361" />
      {session.user.name}
      <FiX size={24} color="#737380" onClick={() => signOut()} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub size={24} fill="#eba417" />
      Sign in with GitHub
    </button>
  );
}
