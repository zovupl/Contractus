export type Service = {
  slug: string;
  icon: string;
  title: string;
  navTitle: string;
  short: string;
  lead: string;
  intro: string[];
  points: string[];
  faq: { q: string; a: string }[];
  primary?: boolean;
};

export const services: Service[] = [
  {
    slug: "sluzebnosc-przesylu",
    icon: "🗼",
    title: "Służebność przesyłu — odszkodowanie za słupy i linie",
    navTitle: "Słupy na działce",
    short:
      "Słupy, linie SN/WN i gazociągi na Twoim gruncie? Należy Ci się wynagrodzenie — nawet 10 lat wstecz.",
    lead:
      "Przedsiębiorstwo korzysta z Twojej ziemi bez wynagrodzenia? Dochodzimy pieniędzy za bezumowne korzystanie i za spadek wartości działki.",
    intro: [
      "Jeśli na Twojej działce stoją słupy energetyczne, linie wysokiego lub średniego napięcia, transformatory, gazociągi albo inne urządzenia przesyłowe, przedsiębiorstwo faktycznie korzysta z Twojego gruntu — bardzo często od kilkunastu lat i bez żadnego wynagrodzenia.",
      "Polskie prawo pozwala dochodzić wynagrodzenia za bezumowne korzystanie z nieruchomości (nawet do 10 lat wstecz) oraz za ustanowienie służebności przesyłu i obniżenie wartości działki. To realne pieniądze, o których większość właścicieli po prostu nie wie.",
    ],
    points: [
      "Wynagrodzenie za bezumowne korzystanie z gruntu — nawet 10 lat wstecz",
      "Odszkodowanie za obniżenie wartości nieruchomości",
      "Dotyczy linii SN (średnie napięcie), WN i najwyższych napięć",
      "Zajmujemy się mapami, księgami wieczystymi i całą dokumentacją",
      "Bezpłatna analiza i wycena roszczenia",
    ],
    faq: [
      {
        q: "Czy naprawdę należy mi się odszkodowanie za słup na działce?",
        a: "Tak. Jeśli na Twoim gruncie stoją słupy lub linie, przedsiębiorstwo korzysta z Twojej ziemi. Przysługuje Ci wynagrodzenie za bezumowne korzystanie — nawet 10 lat wstecz — oraz za spadek wartości działki.",
      },
      {
        q: "Jakie linie się kwalifikują?",
        a: "Roszczenie ma sens przede wszystkim przy liniach średniego napięcia (SN), wysokiego (WN) i najwyższego. Podczas bezpłatnej analizy sprawdzamy parametry linii na Twojej działce.",
      },
      {
        q: "Czy muszę mieć numer księgi wieczystej i dokumenty?",
        a: "Nie musisz nic zbierać samodzielnie. Mapy, dane z ksiąg wieczystych i pozostałą dokumentację przygotowujemy my.",
      },
    ],
    primary: true,
  },
  {
    slug: "szkody-komunikacyjne",
    icon: "🚗",
    title: "Szkody komunikacyjne — pełne odszkodowanie po wypadku",
    navTitle: "Wypadki",
    short:
      "Ubezpieczyciel zaniżył wypłatę po wypadku lub kolizji? Dochodzimy pełnej kwoty.",
    lead:
      "Po wypadku ubezpieczyciele często zaniżają wypłaty. Walczymy o pełne odszkodowanie, zadośćuczynienie i zwrot kosztów.",
    intro: [
      "Po wypadku lub kolizji ubezpieczyciele rutynowo zaniżają wysokość wypłaty — różnica między pierwszą propozycją a realną szkodą potrafi sięgać kilkudziesięciu tysięcy złotych.",
      "Pomagamy uzyskać pełne odszkodowanie za szkody na pojeździe, koszty leczenia i rehabilitacji, utracone dochody oraz zadośćuczynienie za doznaną krzywdę. Prowadzimy sprawę od zgłoszenia aż po wypłatę.",
    ],
    points: [
      "Dochodzenie zaniżonych wypłat z OC sprawcy",
      "Zadośćuczynienie za uszczerbek na zdrowiu",
      "Zwrot kosztów leczenia i rehabilitacji",
      "Odszkodowanie za utracone dochody",
      "Prowadzimy sprawę od zgłoszenia po wypłatę",
    ],
    faq: [
      {
        q: "Ubezpieczyciel już wypłacił mi pieniądze — czy mogę dostać więcej?",
        a: "Tak, bardzo często. Pierwsza wypłata bywa mocno zaniżona. Bezpłatnie sprawdzimy, ile faktycznie Ci się należy, i dochodzimy różnicy.",
      },
      {
        q: "Ile mam czasu na dochodzenie roszczeń?",
        a: "Roszczenia z wypadków przedawniają się zwykle po kilku latach, ale terminy zależą od okoliczności. Im szybciej się zgłosisz, tym lepiej — sprawdzimy to podczas darmowej analizy.",
      },
    ],
  },
  {
    slug: "sankcja-kredytu-darmowego",
    icon: "🏦",
    title: "Sankcja kredytu darmowego — odzyskaj odsetki i prowizje",
    navTitle: "Kredyty",
    short:
      "Bank naruszył ustawę o kredycie konsumenckim? Możesz spłacać wyłącznie kapitał — bez odsetek i kosztów.",
    lead:
      "Błędy w umowie kredytu konsumenckiego pozwalają odzyskać zapłacone odsetki i prowizje. Analizę umowy robimy bezpłatnie.",
    intro: [
      "Sankcja kredytu darmowego to instytucja z ustawy o kredycie konsumenckim. Jeśli bank popełnił błędy w umowie — np. źle obliczył RRSO, podał nieprawidłowe informacje o kosztach czy oprocentowaniu — kredytobiorca może spłacać wyłącznie kapitał.",
      "W praktyce oznacza to zwrot pobranych odsetek i prowizji oraz kredyt bez dodatkowych kosztów. Bezpłatnie analizujemy Twoją umowę i sprawdzamy, czy kwalifikuje się do sankcji.",
    ],
    points: [
      "Bezpłatna analiza umowy kredytowej",
      "Zwrot zapłaconych odsetek i prowizji",
      "Spłata wyłącznie kapitału — bez kosztów kredytu",
      "Dotyczy kredytów konsumenckich do 255 550 zł",
    ],
    faq: [
      {
        q: "Które kredyty się kwalifikują?",
        a: "Sankcja dotyczy kredytów konsumenckich (do 255 550 zł) zawartych z bankiem lub firmą pożyczkową. Kluczowe są błędy w treści umowy — sprawdzamy je bezpłatnie.",
      },
      {
        q: "Spłaciłem już kredyt — czy nadal mogę coś odzyskać?",
        a: "Często tak. Nawet po spłacie można dochodzić zwrotu zapłaconych odsetek i prowizji. Prześlij nam umowę do bezpłatnej analizy.",
      },
    ],
  },
];

export const stats = [
  { n: "12", unit: "lat", t: "na rynku odszkodowań" },
  { n: "4 200", unit: "+", t: "wygranych spraw" },
  { n: "38", unit: "mln zł", t: "odzyskane dla klientów" },
  { n: "4,9", unit: "★", t: "średnia ocen Google" },
];

export const reviews = [
  {
    src: "Google",
    q: "Słupy stały u mnie 15 lat. Dostałem 54 tysiące i nie wyłożyłem ani grosza z góry.",
    who: "Marek W., rolnik spod Kielc",
  },
  {
    src: "Trustpilot",
    q: "Ubezpieczyciel dał 8 tys. Pani mecenas wywalczyła 31 tys. Polecam każdemu.",
    who: "Katarzyna P., Poznań",
  },
  {
    src: "Facebook",
    q: "Myślałem, że to nie dla mnie. Analiza była darmowa, a kredyt spłacam bez odsetek.",
    who: "Tomasz L., Rzeszów",
  },
];

export const wins = [
  { tag: "Służebność przesyłu", amount: "54 000 zł", desc: "Linia SN na działce rolnej, 15 lat bez wynagrodzenia — woj. świętokrzyskie." },
  { tag: "Szkody komunikacyjne", amount: "31 000 zł", desc: "Dopłata do zaniżonego OC po kolizji — ubezpieczyciel proponował 8 000 zł." },
  { tag: "Sankcja kredytu darmowego", amount: "18 400 zł", desc: "Zwrot odsetek i prowizji przy kredycie konsumenckim z błędnym RRSO." },
  { tag: "Służebność przesyłu", amount: "72 000 zł", desc: "Dwie linie WN przez gospodarstwo — wynagrodzenie i spadek wartości gruntu." },
];

export const contact = {
  phone: "800 000 000",
  phoneRaw: "800000000",
  email: "kontakt@contractus.pl",
  hours: "pon–pt 8:00–18:00",
  address: "Contractus Sp. z o.o., Polska",
};
