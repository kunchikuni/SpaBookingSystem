import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/main.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
