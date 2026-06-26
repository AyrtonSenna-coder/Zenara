
  // @ts-ignore: missing declaration for react-dom/client
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
// @ts-ignore: side-effect import of CSS module
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
  