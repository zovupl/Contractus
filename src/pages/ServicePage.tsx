import { Link } from "react-router-dom";
import { services } from "../data";
import { ConsultAside, Stats, Reviews, FinalCta } from "../components/Sections";
import Reveal from "../components/Reveal";

export default function ServicePage({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug)!;

  return (
    <>
      <section className="phero">
        <div className="wrap">
          <div className="crumb">
            <Link to="/">Strona główna</Link> / {s.navTitle}
          </div>
          <h1>{s.title}</h1>
          <p>{s.lead}</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap two">
          <div className="prose">
            {s.intro.map((p, i) => (
              <p key={i} style={{ fontSize: 17 }}>{p}</p>
            ))}

            <h2>Co możesz zyskać</h2>
            <ul>
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>

            <h2>Najczęstsze pytania</h2>
            <div className="faq" style={{ margin: 0 }}>
              {s.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <Reveal><ConsultAside context={s.navTitle} /></Reveal>
        </div>
      </section>

      <Stats />
      <Reviews />
      <FinalCta />
    </>
  );
}
