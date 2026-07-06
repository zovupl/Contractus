import { Link } from "react-router-dom";
import { services, stats, reviews, team } from "../data";
import Reveal from "./Reveal";
import LeadForm from "./LeadForm";

export function MediaStrip() {
  return (
    <div className="media">
      <div className="wrap">
        <span>Jak w mediach:</span>
        <b>Fakt</b><span>·</span><b>Onet</b><span>·</span>
        <b>Business Insider</b><span>·</span><b>Gazeta Prawna</b>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="stats">
      <div className="wrap">
        {stats.map((s) => (
          <div key={s.t}>
            <div className="n">{s.n} <span>{s.unit}</span></div>
            <div className="t">{s.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="block">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow">W czym pomagamy</span>
          <h2>Trzy sprawy, w których odzyskujemy Twoje pieniądze</h2>
          <p>Wybierz swoją sytuację — resztą zajmiemy się my, od A do Z.</p>
        </Reveal>
        <div className="cards">
          {services.map((s) => (
            <Reveal key={s.slug} className="svc">
              {s.primary && <span className="pill">Nasza specjalność</span>}
              <div className="ic">{s.icon}</div>
              <h3>{s.navTitle}</h3>
              <p>{s.short}</p>
              <Link to={`/${s.slug}`} className="go">Dowiedz się więcej →</Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  const steps = [
    { t: "Zostaw kontakt", d: "Wypełniasz krótki formularz albo dzwonisz. Zajmuje to chwilę." },
    { t: "Bezpłatna konsultacja", d: "Oddzwaniamy w 24h, analizujemy sprawę i mówimy, ile możesz odzyskać. Bez opłat." },
    { t: "Wygrywamy — płacisz", d: "Prowadzimy sprawę do wypłaty. Wynagrodzenie pobieramy od wywalczonej kwoty." },
  ];
  return (
    <section className="block">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow">Jak to działa</span>
          <h2>Trzy kroki do Twoich pieniędzy</h2>
        </Reveal>
        <div className="steprow">
          {steps.map((s, i) => (
            <Reveal key={s.t} className="step">
              <div className="num">{i + 1}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="block soft">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow">Opinie klientów</span>
          <h2>Co mówią osoby, którym pomogliśmy</h2>
        </Reveal>
        <div className="revs">
          {reviews.map((r) => (
            <Reveal key={r.who} className="rc">
              <div className="rev-head">
                <img className="avatar" src={r.photo} alt={r.who} width={48} height={48} loading="lazy" />
                <div>
                  <div className="who">{r.who}</div>
                  <div className="place">{r.place}</div>
                </div>
                <span className="src" style={{ marginLeft: "auto" }}>{r.src}</span>
              </div>
              <div className="stars">★★★★★</div>
              <div className="q">„{r.q}"</div>
              <span className="verified">✓ Zweryfikowana opinia</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <div className="final">
      <div className="wrap">
        <span className="eyebrow">Pierwsza konsultacja jest bezpłatna</span>
        <h2>Sprawdźmy razem, ile Ci się należy</h2>
        <p>
          Zostaw numer — oddzwaniamy w 24 godziny z bezpłatną analizą. Bez
          zobowiązań, bez opłat z góry.
        </p>
        <div className="cform">
          <input type="text" placeholder="Imię" aria-label="Imię" />
          <input type="tel" placeholder="Telefon" aria-label="Telefon" />
          <button className="btn btn-gold">Oddzwońcie do mnie</button>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section className="block soft">
      <div className="wrap">
        <Reveal className="head">
          <span className="eyebrow">Poznaj zespół</span>
          <h2>Ludzie, którzy poprowadzą Twoją sprawę</h2>
          <p>Nie infolinia i nie anonimowa kontora — konkretne osoby z imienia i nazwiska.</p>
        </Reveal>
        <div className="cards">
          {team.map((t) => (
            <Reveal key={t.name} className="svc">
              <img className="team-photo" src={t.photo} alt={t.name} loading="lazy" />
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PeopleStrip() {
  return (
    <div className="people">
      <div className="faces">
        {team.map((t) => (
          <img key={t.name} src={t.photo} alt={t.name} loading="lazy" />
        ))}
      </div>
      <div className="txt">
        <b>Prawdziwi ludzie, nie infolinia.</b>
        <p>Twoją sprawę prowadzi konkretny radca prawny — masz z nim bezpośredni kontakt.</p>
      </div>
    </div>
  );
}

export function ConsultAside({ context }: { context: string }) {
  return (
    <aside className="aside">
      <h3>Bezpłatna konsultacja</h3>
      <div className="free">
        <b>0 zł</b><span>za analizę i wycenę sprawy</span>
      </div>
      <LeadForm context={context} />
    </aside>
  );
}
