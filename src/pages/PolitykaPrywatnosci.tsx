import { Link } from "react-router-dom";
import { contact } from "../data";

// UWAGA: dokument oparty na wymogach RODO. Dane w [nawiasach] należy uzupełnić
// danymi kancelarii, a całość zweryfikować z radcą prawnym przed publikacją.
export default function PolitykaPrywatnosci() {
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Strona główna</Link> / Polityka prywatności</div>
          <h1>Polityka prywatności i plików cookies</h1>
          <p>Zasady przetwarzania danych osobowych oraz wykorzystania plików cookies w serwisie Contractus.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="prose">
            <p style={{ fontSize: 14 }}><em>Data ostatniej aktualizacji: [DD.MM.RRRR]</em></p>

            <h2>1. Administrator danych osobowych</h2>
            <p>
              Administratorem Twoich danych osobowych jest [PEŁNA NAZWA FIRMY],
              z siedzibą przy [ADRES], wpisana do [KRS / CEIDG] pod numerem
              [NUMER], NIP [NIP], REGON [REGON] (dalej: „Administrator" lub
              „Contractus").
            </p>
            <p>
              We wszystkich sprawach dotyczących przetwarzania danych osobowych
              możesz skontaktować się z nami:
            </p>
            <ul>
              <li>e-mailem: <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>telefonicznie: <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a></li>
              <li>pisemnie na adres siedziby Administratora</li>
            </ul>

            <h2>2. Inspektor Ochrony Danych</h2>
            <p>
              Administrator [powołał / nie powołał] Inspektora Ochrony Danych.
              Jeśli powołano IOD, kontakt: [e-mail IOD].
            </p>

            <h2>3. Jakie dane przetwarzamy</h2>
            <p>W związku z korzystaniem z serwisu i kontaktem z nami możemy przetwarzać:</p>
            <ul>
              <li>dane podane w formularzu: imię, nazwisko, numer telefonu, adres e-mail, wybrany temat sprawy oraz treść wiadomości,</li>
              <li>dane niezbędne do prowadzenia sprawy odszkodowawczej (jeżeli zdecydujesz się powierzyć nam sprawę),</li>
              <li>dane techniczne: adres IP, typ przeglądarki i informacje z plików cookies (zob. pkt 11).</li>
            </ul>

            <h2>4. Cele i podstawy prawne przetwarzania</h2>
            <ul>
              <li><b>Kontakt i bezpłatna analiza sprawy</b> — na podstawie Twojej zgody oraz w celu podjęcia działań przed zawarciem umowy (art. 6 ust. 1 lit. a i b RODO).</li>
              <li><b>Realizacja umowy</b> o prowadzenie sprawy — art. 6 ust. 1 lit. b RODO.</li>
              <li><b>Obowiązki prawne</b> (np. podatkowe, rachunkowe) — art. 6 ust. 1 lit. c RODO.</li>
              <li><b>Prawnie uzasadniony interes</b> Administratora — dochodzenie roszczeń, zapewnienie bezpieczeństwa i statystyka serwisu (art. 6 ust. 1 lit. f RODO).</li>
            </ul>

            <h2>5. Odbiorcy danych</h2>
            <p>
              Twoje dane mogą być udostępniane wyłącznie podmiotom wspierającym
              nas w działalności, na podstawie umów powierzenia — m.in. dostawcy
              hostingu i IT, biuro rachunkowe, kancelarie współpracujące. Nie
              sprzedajemy Twoich danych osobom trzecim.
            </p>

            <h2>6. Przekazywanie danych poza EOG</h2>
            <p>
              Co do zasady nie przekazujemy danych poza Europejski Obszar
              Gospodarczy. Jeżeli korzystamy z narzędzi, które to umożliwiają,
              odbywa się to z zachowaniem zabezpieczeń wymaganych przez RODO
              (np. standardowe klauzule umowne).
            </p>

            <h2>7. Okres przechowywania danych</h2>
            <ul>
              <li>dane z formularza kontaktowego — do czasu wycofania zgody lub przez okres niezbędny do udzielenia odpowiedzi, nie dłużej niż [okres],</li>
              <li>dane związane z umową — przez czas jej trwania oraz okres przedawnienia roszczeń,</li>
              <li>dane rozliczeniowe — przez okres wymagany przepisami prawa (co do zasady 5 lat).</li>
            </ul>

            <h2>8. Twoje prawa</h2>
            <p>W związku z przetwarzaniem danych przysługuje Ci prawo do:</p>
            <ul>
              <li>dostępu do danych oraz otrzymania ich kopii,</li>
              <li>sprostowania (poprawienia) danych,</li>
              <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania sprzed cofnięcia),</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
            </ul>

            <h2>9. Dobrowolność podania danych</h2>
            <p>
              Podanie danych jest dobrowolne, jednak niezbędne do kontaktu i
              przedstawienia analizy sprawy. Bez podania numeru telefonu lub
              adresu e-mail nie będziemy w stanie odpowiedzieć na zgłoszenie.
            </p>

            <h2>10. Zautomatyzowane decyzje i profilowanie</h2>
            <p>
              Twoje dane nie są wykorzystywane do zautomatyzowanego podejmowania
              decyzji, w tym profilowania wywołującego skutki prawne.
            </p>

            <h2>11. Pliki cookies</h2>
            <p>
              Serwis wykorzystuje pliki cookies (ciasteczka) — niewielkie pliki
              zapisywane na Twoim urządzeniu.
            </p>
            <ul>
              <li><b>Cookies niezbędne</b> — konieczne do prawidłowego działania serwisu.</li>
              <li><b>Cookies analityczne / statystyczne</b> — pomagają zrozumieć, jak korzystasz z serwisu (używane wyłącznie za Twoją zgodą).</li>
            </ul>
            <p>
              Zgodą na cookies analityczne i marketingowe zarządzasz przez baner
              cookies oraz ustawienia przeglądarki. W każdej chwili możesz zmienić
              ustawienia lub usunąć zapisane pliki cookies.
            </p>

            <h2>12. Zmiany polityki prywatności</h2>
            <p>
              Polityka może być aktualizowana. Aktualna wersja jest zawsze
              dostępna na tej stronie, z podaną datą ostatniej aktualizacji.
            </p>

            <h2>13. Kontakt</h2>
            <p>
              W sprawach dotyczących ochrony danych osobowych napisz do nas na
              adres <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
