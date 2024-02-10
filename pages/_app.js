import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
