
import { useRouter } from "next/router";
import styles from "../styles/sucssessSubmit.module.css"

export default function Confirmation() {
    const router = useRouter()
  return (
    <div>
      <main className= { styles.main}>
      <div class={styles.container }>
        <h1 class={styles.header}>Application Confirmation</h1>
        <p class={styles.text}>Your application has been successfully submitted!</p>
        <p class={styles.text}>Thank you for your interest in the position. We will contact you shortly.</p>
        <button class={styles.okBtn} onClick={() => router.push('/')}>OK</button>
    </div>
      </main>
    </div>
  );
}