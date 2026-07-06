import { useState } from "react";
import { services } from "../data";

type Props = { context?: string; showTopic?: boolean };

export default function LeadForm({ context = "Kontakt ogólny", showTopic }: Props) {
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
      <input type="hidden" name="temat" value={context} />
      <input required name="imie" placeholder="Imię i nazwisko" />
      <input required name="telefon" type="tel" placeholder="Telefon" />
      <input name="email" type="email" placeholder="E-mail (opcjonalnie)" />
      {showTopic && (
        <select name="sprawa" defaultValue="">
          <option value="" disabled>Wybierz sprawę…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.navTitle}>{s.navTitle}</option>
          ))}
        </select>
      )}
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
