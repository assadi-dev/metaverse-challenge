import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import "emoji-mart/css/emoji-mart.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Component {...pageProps} />{" "}
    </MoralisProvider>
  );
}

export default MyApp;
