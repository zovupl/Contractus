import { Link } from "react-router-dom";
import { wins } from "../data";
import { Reviews, FinalCta } from "../components/Sections";
import Reveal from "../components/Reveal";

export default function NaszeWygrane() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / Nasze wygrane</div>
          <h1>Realne sprawy, realne kwoty</h1>
          <p>
            Poniżej przykłady spraw, które zakończyły się wypłatą dla naszych
            klientów. Każda z nich zaczęła się od jednej bezpłatnej rozmowy.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cards">
            {wins.map((w, i) => (
              <Reveal key={i} className="svc">
                <span className="pill" style={{ background: "var(--soft-2)", color: "var(--blue)" }}>{w.tag}</span>
                <div className="n" style={{ fontSize: 34, fontWeight: 800, color: "var(--green)", margin: "4px 0 10px" }}>{w.amount}</div>
                <p>{w.desc}</p>
              </Reveal>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13, marginTop: 26 }}>
            Przykłady mają charakter poglądowy. Wysokość odszkodowania zależy od
            indywidualnych okoliczności sprawy.
          </p>
        </div>
      </section>

      <Reviews />
      <FinalCta />
    </>
  );
}
