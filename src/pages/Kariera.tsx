import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";

const offers = [
  { title: "Specjalista ds. odszkodowań", type: "Pełny etat · praca hybrydowa", desc: "Prowadzenie spraw klientów od zgłoszenia do wypłaty odszkodowania." },
  { title: "Przedstawiciel terenowy", type: "B2B · praca w terenie", desc: "Pozyskiwanie i obsługa klientów — rolników i właścicieli gruntów." },
  { title: "Radca prawny / aplikant", type: "Pełny etat", desc: "Reprezentacja klientów w sprawach cywilnych i negocjacjach z ubezpieczycielami." },
];

export default function Kariera() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / Kariera</div>
          <h1>Dołącz do zespołu Contractus</h1>
          <p>Budujemy zespół ludzi, którzy skutecznie walczą o prawa klientów. Sprawdź oferty lub wyślij nam CV.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cards">
            {offers.map((o) => (
              <Reveal key={o.title} className="svc">
                <div className="ic"><Icon name="briefcase" /></div>
                <span style={{ color: "var(--blue)", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{o.type}</span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <a href="mailto:kariera@contractus.pl" className="go">Aplikuj →</a>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 34 }}>
            <p style={{ color: "var(--muted)" }}>Nie ma oferty dla Ciebie? Wyślij CV — chętnie poznamy dobrych ludzi.</p>
            <a href="mailto:kariera@contractus.pl" className="btn btn-blue">Wyślij CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
