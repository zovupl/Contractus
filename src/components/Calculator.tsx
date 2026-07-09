import { useState } from "react";
import { Icon } from "./Icons";

const VOLT = [
  { v: 1, label: "niskie" },
  { v: 1.6, label: "średnie" },
  { v: 2.4, label: "wysokie" },
  { v: 3.2, label: "najwyż." },
];

const money = (n: number) =>
  (Math.round(n / 1000) * 1000).toLocaleString("pl-PL");

const yearsLabel = (y: number) =>
  y === 1 ? "1 rok" : y < 5 ? `${y} lata` : `${y} lat`;

export default function Calculator() {
  const [area, setArea] = useState(800);
  const [vf, setVf] = useState(1.6);
  const [years, setYears] = useState(12);
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const base = area * vf;
  const yf = 1 + Math.min(years, 10) * 0.045;
  const low = money(base * 15 * yf);
  const high = money(base * 40 * yf);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    // TODO: podłączyć realną wysyłkę (e-mail / CRM). Kontekst: kalkulator słupów.
    setSent(true);
  };

  return (
    <div className="calc" id="kalkulator">
      <span className="tag"><Icon name="tower" className="mini-ic" /> Kalkulator odszkodowania</span>
      <h3>Ile możesz odzyskać za słup?</h3>
      <p className="ld">Szacunek orientacyjny — dokładną wycenę podamy przez telefon.</p>

      <div className="field">
        <label>Powierzchnia pod linią <span className="val">{area.toLocaleString("pl-PL")} m²</span></label>
        <input type="range" min={100} max={3000} step={50} value={area}
          onChange={(e) => setArea(+e.target.value)} />
      </div>

      <div className="field">
        <label>Rodzaj linii</label>
        <div className="seg">
          {VOLT.map((o) => (
            <button type="button" key={o.v}
              className={vf === o.v ? "active" : ""}
              onClick={() => setVf(o.v)}>{o.label}</button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Od ilu lat stoi <span className="val">{yearsLabel(years)}</span></label>
        <input type="range" min={1} max={20} step={1} value={years}
          onChange={(e) => setYears(+e.target.value)} />
      </div>

      <div className="result">
        <div className="lbl">Szacunkowe odszkodowanie</div>
        <div className="amount">{low} – {high} zł</div>
        <small>na podstawie podanych danych</small>
      </div>

      {sent ? (
        <div className="form-ok" style={{ marginTop: 14 }}>
          Dziękujemy! Oddzwonimy w ciągu 24 godzin z dokładną wyceną.
        </div>
      ) : (
        <form className="capture" onSubmit={submit}>
          <input type="tel" required placeholder="Twój numer telefonu"
            value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button className="btn btn-blue" style={{ padding: "13px 18px" }}>Oddzwońcie</button>
        </form>
      )}

      <p className="disc">Kalkulator ma charakter poglądowy i nie stanowi oferty w rozumieniu prawa.</p>
    </div>
  );
}
