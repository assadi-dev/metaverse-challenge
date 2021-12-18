import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title> Metaverse Challenge </title>{" "}
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className="">
        <div className="max-w-screen-2xl mx-auto">
          {/* header*/}
          <Header />
          {/* Message*/}
          <button onClick={logout}> Logout </button>
        </div>
      </main>
    </div>
  );
}
