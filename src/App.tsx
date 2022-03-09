import Helmet from "react-helmet";
import GlobalStyles from "./layout/GlobalStyles";
import Home from "./views/home/home";

export default function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Home />
      <GlobalStyles />
    </>
  );
}
