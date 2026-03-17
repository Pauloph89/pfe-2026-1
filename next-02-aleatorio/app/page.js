import GeradorAleatorio from "@/components/GeradorAleatorio";
import GeradorTextoAleatorio from "@/components/GeradorTextoAleatorio";
//import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <GeradorAleatorio />
      <hr />
      <GeradorAleatorio />
      <hr />
      <GeradorTextoAleatorio>Gerador Texto 1</GeradorTextoAleatorio>
      <hr />
      <GeradorTextoAleatorio>Gerador Texto 2</GeradorTextoAleatorio>
    </div>
  );
}
