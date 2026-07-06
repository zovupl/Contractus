import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";
import { contact } from "../data";

export default function Kontakt() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / Kontakt</div>
          <h1>Umów bezpłatną konsultację</h1>
          <p>Zostaw kontakt — oddzwaniamy w 24 godziny z bezpłatną analizą sprawy. Bez zobowiązań, bez opłat z góry.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap two">
          <div>
            <div className="consult" style={{ boxShadow: "var(--shadow)" }}>
              <span className="tag">✓ Pierwsza konsultacja gratis</span>
              <h3>Napisz do nas</h3>
              <p className="ld">Wypełnij formularz — resztą zajmiemy się my.</p>
              <LeadForm context="Strona kontakt" showTopic />
            </div>
          </div>

          <aside className="aside" style={{ position: "static" }}>
            <h3>Dane kontaktowe</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Telefon</div>
                <a href={`tel:${contact.phoneRaw}`} style={{ fontSize: 20, fontWeight: 800, color: "var(--navy)" }}>{contact.phone}</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>E-mail</div>
                <a href={`mailto:${contact.email}`} style={{ fontWeight: 600, color: "var(--blue)" }}>{contact.email}</a>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Godziny pracy</div>
                <div style={{ fontWeight: 600 }}>{contact.hours}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Zasięg</div>
                <div style={{ fontWeight: 600 }}>Obsługujemy całą Polskę</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
