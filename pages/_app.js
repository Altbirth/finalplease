// `pages/_app.js`
import { ProfileProvider } from './ProfileContext'; // Updated import path
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  );
}
