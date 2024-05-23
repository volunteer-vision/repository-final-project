import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './YourStyles.module.css'; // Adjust the path to your styles file

const YourComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/contact') {
        // Scroll to the bottom after a short delay to ensure the page is fully loaded
        setTimeout(() => {
          window.scrollTo(0, document.body.scrollHeight);
        }, 1000); // Adjust the delay as needed
      }
    };

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const goToContact = () => {
    router.push('/contact');
  };

  return (
    <div>
      <Link href="/contact" className={styles.navLink} onClick={goToContact}>
        CONTACT
      </Link>
      {/* Rest of your page content */}
    </div>
  );
};

export default YourComponent;
