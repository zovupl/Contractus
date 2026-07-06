import { useState } from "react";
import { topics } from "../data";

type Props = { context?: string; defaultTopic?: string };

export default function LeadForm({ context = "Kontakt ogólny", defaultTopic = "" }: Props) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: podłączyć wysyłkę (Formspree / API / e-mail). Na razie tylko UI.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-ok">
        <b>Dziękujemy! Zgłoszenie zostało przyjęte.</b>
        <p style={{ margin: "6px 0 0", fontSize: 14 }}>
          Nasz radca prawny oddzwoni w ciągu 24 godzin z bezpłatną analizą sprawy.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <input type="hidden" name="context" value={context} />
      <div className="row2">
        <input required name="imie" placeholder="Imię *" autoComplete="given-name" />
        <input required name="nazwisko" placeholder="Nazwisko *" autoComplete="family-name" />
      </div>
      <div className="row2">
        <input required name="telefon" type="tel" placeholder="Telefon *" autoComplete="tel" />
        <input required name="email" type="email" placeholder="E-mail *" autoComplete="email" />
      </div>
      <select required name="temat" defaultValue={defaultTopic}>
        <option value="" disabled>Wybierz temat rozmowy *</option>
        {topics.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <textarea name="opis" rows={3} placeholder="Krótko opisz swoją sprawę (opcjonalnie)" />
      <label className="consent">
        <input required type="checkbox" />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych w celu kontaktu, zgodnie z
          polityką prywatności.
        </span>
      </label>
      <button type="submit" className="btn btn-blue" style={{ justifyContent: "center" }}>
        Zamów bezpłatną konsultację
      </button>
    </form>
  );
}
