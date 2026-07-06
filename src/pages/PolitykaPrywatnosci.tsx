import { Link } from "react-router-dom";

export default function PolitykaPrywatnosci() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / Polityka prywatności</div>
          <h1>Polityka prywatności</h1>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="prose">
            <p><em>Poniższy tekst jest szablonem i wymaga uzupełnienia danymi firmy oraz weryfikacji prawnej przed publikacją.</em></p>
            <h2>1. Administrator danych</h2>
            <p>Administratorem danych osobowych jest Contractus [pełna nazwa, adres, NIP]. Kontakt: kontakt@contractus.pl.</p>
            <h2>2. Cel przetwarzania</h2>
            <p>Dane podane w formularzach przetwarzamy wyłącznie w celu kontaktu i przedstawienia bezpłatnej analizy sprawy.</p>
            <h2>3. Podstawa prawna</h2>
            <p>Przetwarzanie odbywa się na podstawie zgody (art. 6 ust. 1 lit. a RODO) oraz prawnie uzasadnionego interesu administratora.</p>
            <h2>4. Twoje prawa</h2>
            <ul>
              <li>Prawo dostępu do danych i ich sprostowania</li>
              <li>Prawo do usunięcia danych i ograniczenia przetwarzania</li>
              <li>Prawo do wycofania zgody w dowolnym momencie</li>
              <li>Prawo wniesienia skargi do Prezesa UODO</li>
            </ul>
            <h2>5. Pliki cookies</h2>
            <p>Serwis może wykorzystywać pliki cookies w celach statystycznych i funkcjonalnych.</p>
          </div>
        </div>
      </section>
    </>
  );
}
