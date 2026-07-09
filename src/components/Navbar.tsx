import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contact } from "../data";
import LogoMark from "./LogoMark";
import { Icon } from "./Icons";

const links = [
  { to: "/sluzebnosc-przesylu", label: "Słupy na działce" },
  { to: "/szkody-komunikacyjne", label: "Wypadki" },
  { to: "/sankcja-kredytu-darmowego", label: "Kredyty" },
  { to: "/o-kancelarii", label: "O kancelarii" },
  { to: "/nasze-wygrane", label: "Nasze wygrane" },
  { to: "/wiedza", label: "Wiedza" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="util">
        <div className="wrap">
          <div className="l">
            <span><Icon name="pin" className="util-ic" /> Obsługujemy całą Polskę</span>
            <span><Icon name="clock" className="util-ic" /> {contact.hours}</span>
          </div>
          <div className="r">
            <a href={`tel:${contact.phoneRaw}`}><Icon name="phone" className="util-ic" /> <b>{contact.phone}</b></a>
            <a href="#">Panel klienta</a>
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <LogoMark />
            <span className="logo-wm">
              <b>CONTRACTUS</b>
              <small>Centrum Odszkodowań</small>
            </span>
          </Link>
          <nav>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
            ))}
          </nav>
          <Link to="/kontakt" className="btn btn-blue" style={{ padding: "11px 20px" }}>
            Bezpłatna konsultacja
          </Link>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
        <div className={`mobile ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
          <Link to="/kontakt" className="btn btn-blue" onClick={() => setOpen(false)}>
            Bezpłatna konsultacja
          </Link>
        </div>
      </header>
    </>
  );
}
