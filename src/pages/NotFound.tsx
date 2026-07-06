import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="block">
      <div className="wrap" style={{ textAlign: "center", padding: "60px 26px" }}>
        <div style={{ fontSize: 64, fontWeight: 800, color: "var(--navy)" }}>404</div>
        <h1 style={{ color: "var(--navy)", marginTop: 8 }}>Strony nie znaleziono</h1>
        <p style={{ color: "var(--muted)", margin: "12px 0 24px" }}>
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link to="/" className="btn btn-blue">Wróć na stronę główną</Link>
      </div>
    </section>
  );
}
