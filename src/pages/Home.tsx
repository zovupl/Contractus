import { Link } from "react-router-dom";
import Calculator from "../components/Calculator";
import { Stats, ServicesGrid, Steps, Reviews, FinalCta, Team, PeopleStrip, TrustSection } from "../components/Sections";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { advisor } from "../data";

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
              <span className="g"><Icon name="lock" className="mini-ic" /> Bez opłat z góry</span>
            </div>
            <div className="badges">
              <span className="badge"><span className="ic">✓</span> Analiza bezpłatna</span>
              <span className="badge"><span className="ic">✓</span> Wynagrodzenie od sukcesu</span>
              <span className="badge"><span className="ic">✓</span> Prowadzi radca prawny</span>
            </div>
          </div>

          <Calculator />
        </div>
      </section>

      <Stats />

      <div id="uslugi" />
      <ServicesGrid />

      <div className="why">
        <div className="wrap">
          <Reveal className="advisor">
            <img className="photo" src={advisor.photo} alt={advisor.name} />
            <div className="b">
              <div className="name">{advisor.name}</div>
              <div className="role">{advisor.role} · prowadzi Twoją sprawę</div>
              <div className="quote">„{advisor.quote}"</div>
              <div className="cred"><span className="b"><Icon name="scale" /></span> {advisor.license}</div>
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
            <div style={{ marginTop: 24 }}><PeopleStrip /></div>
          </Reveal>
        </div>
      </div>

      <Team />
      <Steps />
      <TrustSection />
      <Reviews />
      <FinalCta />
    </>
  );
}
