import { Link } from "react-router-dom";
import { Stats, FinalCta } from "../components/Sections";
import Reveal from "../components/Reveal";

const team = [
  { name: "mec. Anna Kowalczyk", role: "Radca prawny · służebność przesyłu" },
  { name: "mec. Piotr Zieliński", role: "Radca prawny · szkody komunikacyjne" },
  { name: "Magdalena Nowak", role: "Specjalistka ds. kredytów konsumenckich" },
];

export default function OKancelarii() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / O kancelarii</div>
          <h1>Jesteśmy po Twojej stronie — dosłownie</h1>
          <p>
            Contractus to kancelaria odszkodowawcza, która specjalizuje się w
            sprawach zwykłych ludzi przeciwko dużym instytucjom: firmom
            energetycznym, ubezpieczycielom i bankom.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap two">
          <div className="prose">
            <h2>Kim jesteśmy</h2>
            <p>
              Od ponad dekady pomagamy właścicielom gruntów, poszkodowanym w
              wypadkach i kredytobiorcom odzyskać należne im pieniądze. Nie
              jesteśmy bezimienną infolinią — każdą sprawę prowadzi konkretny
              radca prawny, z którym masz bezpośredni kontakt.
            </p>
            <h2>Jak pracujemy</h2>
            <ul>
              <li>Bezpłatna analiza i wycena każdej sprawy</li>
              <li>Wynagrodzenie wyłącznie od sukcesu — zero opłat z góry</li>
              <li>Całą dokumentację i formalności bierzemy na siebie</li>
              <li>Prowadzimy sprawę do końca — także w sądzie, jeśli trzeba</li>
            </ul>
          </div>
          <aside className="aside">
            <h3>Dlaczego warto nam zaufać</h3>
            <div className="free"><b>4,9 ★</b><span>średnia z 312 opinii Google</span></div>
            <p style={{ color: "var(--muted)", fontSize: 14, margin: 0 }}>
              Reprezentujemy klientów w całej Polsce. Skontaktuj się — pierwsza
              rozmowa jest bezpłatna i do niczego nie zobowiązuje.
            </p>
            <Link to="/kontakt" className="btn btn-blue" style={{ marginTop: 16, justifyContent: "center", width: "100%" }}>
              Umów bezpłatną konsultację
            </Link>
          </aside>
        </div>
      </section>

      <Stats />

      <section className="block soft">
        <div className="wrap">
          <Reveal className="head">
            <span className="eyebrow">Zespół</span>
            <h2>Ludzie, którzy poprowadzą Twoją sprawę</h2>
          </Reveal>
          <div className="cards">
            {team.map((t) => (
              <Reveal key={t.name} className="svc">
                <div className="ph" style={{ height: 180, borderRadius: 12, marginBottom: 16, background: "linear-gradient(160deg,var(--navy),var(--navy-2))", display: "grid", placeItems: "center", color: "rgba(255,255,255,.3)", fontSize: 13 }}>
                  [ zdjęcie ]
                </div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
