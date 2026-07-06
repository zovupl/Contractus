import { Link } from "react-router-dom";
import { contact } from "../data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="brand">CONTRACTUS</div>
            <p style={{ margin: 0, maxWidth: "22em" }}>
              Centrum Odszkodowań. Odzyskujemy pieniądze, które należą się naszym
              klientom — bez opłat z góry, wynagrodzenie tylko od sukcesu.
            </p>
          </div>
          <div>
            <h4>Usługi</h4>
            <Link to="/sluzebnosc-przesylu">Służebność przesyłu</Link>
            <Link to="/szkody-komunikacyjne">Szkody komunikacyjne</Link>
            <Link to="/sankcja-kredytu-darmowego">Sankcja kredytu darmowego</Link>
          </div>
          <div>
            <h4>Kancelaria</h4>
            <Link to="/o-kancelarii">O kancelarii</Link>
            <Link to="/nasze-wygrane">Nasze wygrane</Link>
            <Link to="/wiedza">Wiedza</Link>
            <Link to="/kariera">Kariera</Link>
          </div>
          <div>
            <h4>Kontakt</h4>
            <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span style={{ display: "block", padding: "5px 0" }}>{contact.hours}</span>
          </div>
        </div>
        <div className="bottom">
          <div>© 2026 Contractus — Centrum Odszkodowań</div>
          <div>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
