import { Link } from "react-router-dom";
import { FinalCta } from "../components/Sections";
import Reveal from "../components/Reveal";

// Docelowo zasilane z CMS — klient sam dodaje artykuły. Na start dane statyczne.
const posts = [
  { date: "2026-06-28", tag: "Służebność przesyłu", title: "Ile można odzyskać za słupy energetyczne na działce?", excerpt: "Wysokość wynagrodzenia zależy od powierzchni pod linią, napięcia i okresu korzystania. Wyjaśniamy, jak liczymy roszczenie." },
  { date: "2026-06-14", tag: "Kredyty", title: "Sankcja kredytu darmowego — kiedy bank musi oddać odsetki?", excerpt: "Najczęstsze błędy w umowach kredytu konsumenckiego, które pozwalają spłacać wyłącznie kapitał." },
  { date: "2026-05-30", tag: "Szkody komunikacyjne", title: "Zaniżone odszkodowanie z OC — co możesz zrobić?", excerpt: "Ubezpieczyciel wypłacił mniej niż realna szkoda? Masz prawo do dopłaty. Sprawdź, jak działamy." },
  { date: "2026-05-12", tag: "Służebność przesyłu", title: "Słup na działce a sprzedaż gruntu — jak to wpływa na cenę?", excerpt: "Urządzenia przesyłowe obniżają wartość nieruchomości. Można dochodzić odszkodowania z tego tytułu." },
];

export default function Wiedza() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / Wiedza</div>
          <h1>Wiedza, która pomaga odzyskać pieniądze</h1>
          <p>Praktyczne artykuły o odszkodowaniach — bez prawniczego bełkotu.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="cards">
            {posts.map((p) => (
              <Reveal key={p.title} className="svc" as="article">
                <div style={{ height: 150, borderRadius: 12, marginBottom: 16, background: "linear-gradient(160deg,var(--navy),var(--navy-2))" }} />
                <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 12, color: "var(--muted)", marginBottom: 8 }}>
                  <span className="pill" style={{ margin: 0, background: "var(--soft-2)", color: "var(--blue)" }}>{p.tag}</span>
                  <time>{p.date}</time>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="go">Czytaj dalej →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
