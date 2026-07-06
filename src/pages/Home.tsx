import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import { MediaStrip, Stats, ServicesGrid, Steps, Reviews, FinalCta } from "../components/Sections";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Centrum Odszkodowań</span>
            <h1>Odzyskaj odszkodowanie, <span className="u">które Ci się należy</span></h1>
            <p className="sub">
              Słupy na polu, zaniżona wypłata po wypadku, wadliwy kredyt.
              Sprawdzamy Twoją sprawę bezpłatnie i walczymy o maksymalną kwotę —
              płacisz dopiero, gdy wygramy.
            </p>
            <div className="row">
              <Link to="/kontakt" className="btn btn-blue">Umów bezpłatną konsultację</Link>
              <a href="#uslugi" className="btn btn-ghost">W czym pomagamy</a>
            </div>
            <div className="trustmini">
              <span className="g"><span className="stars">★★★★★</span> 4,9 / 5</span>
              <span>ponad <b style={{ color: "var(--ink)" }}>312 opinii</b> Google</span>
              <span className="g">🔒 Bez opłat z góry</span>
            </div>
            <div className="badges">
              <span className="badge"><span className="ic">✓</span> Analiza bezpłatna</span>
              <span className="badge"><span className="ic">✓</span> Wynagrodzenie od sukcesu</span>
              <span className="badge"><span className="ic">✓</span> Prowadzi radca prawny</span>
            </div>
          </div>

          <div className="consult" id="konsultacja">
            <span className="tag">✓ Pierwsza konsultacja gratis</span>
            <h3>Zamów bezpłatną konsultację</h3>
            <p className="ld">Oddzwaniamy w 24 godziny i mówimy, ile możesz odzyskać.</p>
            <div className="free"><b>0 zł</b><span>za analizę i wycenę Twojej sprawy</span></div>
            <LeadForm context="Formularz główny — strona główna" showTopic />
          </div>
        </div>
      </section>

      <MediaStrip />
      <Stats />

      <div id="uslugi" />
      <ServicesGrid />

      <div className="why">
        <div className="wrap">
          <Reveal className="advisor">
            <div className="ph">[ zdjęcie: radca prawny ]</div>
            <div className="b">
              <div className="name">mec. Anna Kowalczyk</div>
              <div className="role">Radca prawny · prowadzi Twoją sprawę</div>
              <div className="quote">
                „Nie musisz znać się na prawie — od tego jestem ja. A Ty płacisz
                dopiero wtedy, gdy wywalczymy pieniądze."
              </div>
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Dlaczego Contractus</span>
            <h2>Duże kontory są bezimienne. U nas wiesz, kto walczy za Ciebie.</h2>
            <ul>
              <li><span className="ck">✓</span><div><b>Zero ryzyka.</b><p>Nie pobieramy żadnych opłat z góry. Wynagrodzenie tylko od wywalczonej kwoty.</p></div></li>
              <li><span className="ck">✓</span><div><b>Konkretna osoba, nie infolinia.</b><p>Twoją sprawę prowadzi radca prawny, do którego masz bezpośredni kontakt.</p></div></li>
              <li><span className="ck">✓</span><div><b>Bez formalności po Twojej stronie.</b><p>Dokumenty, mapy, pisma i negocjacje z ubezpieczycielem bierzemy na siebie.</p></div></li>
            </ul>
          </Reveal>
        </div>
      </div>

      <Steps />
      <Reviews />
      <FinalCta />
    </>
  );
}
