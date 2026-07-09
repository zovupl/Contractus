export type Service = {
  slug: string;
  icon: string;
  title: string;
  navTitle: string;
  topic: string;
  short: string;
  lead: string;
  intro: string[];
  points: string[];
  faq: { q: string; a: string }[];
  primary?: boolean;
};

// Tematy rozmowy w formularzu (można rozszerzać w miarę usług kancelarii).
export const topics = [
  "Roszczenia przesyłowe – słupy / linie / gazociągi",
  "Wypadek komunikacyjny (mój lub bliskiego)",
  "Sankcja kredytu darmowego",
  "Inna sprawa",
];

export const services: Service[] = [
  {
    slug: "sluzebnosc-przesylu",
    icon: "tower",
    title: "Służebność przesyłu — odszkodowanie za słupy i linie",
    navTitle: "Słupy na działce",
    topic: "Roszczenia przesyłowe – słupy / linie / gazociągi",
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
    icon: "car",
    title: "Szkody komunikacyjne — pełne odszkodowanie po wypadku",
    navTitle: "Wypadki",
    topic: "Wypadek komunikacyjny (mój lub bliskiego)",
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
    icon: "bank",
    title: "Sankcja kredytu darmowego — odzyskaj odsetki i prowizje",
    navTitle: "Kredyty",
    topic: "Sankcja kredytu darmowego",
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

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

// UWAGA: zdjęcia i nazwiska to placeholdery — do podmiany na realny zespół i opinie klienta.
export const advisor = {
  name: "mec. Anna Kowalczyk",
  role: "Radca prawny",
  license: "Wpis na listę radców prawnych OIRP · nr Wa-XXXX",
  photo: asset("img/team-anna.jpg"),
  quote:
    "Nie musisz znać się na prawie — od tego jestem ja. A Ty płacisz dopiero wtedy, gdy wywalczymy pieniądze.",
};

export const team = [
  { name: "mec. Anna Kowalczyk", role: "Radca prawny · służebność przesyłu", photo: asset("img/team-anna.jpg") },
  { name: "mec. Piotr Zieliński", role: "Radca prawny · szkody komunikacyjne", photo: asset("img/team-piotr.jpg") },
  { name: "mec. Tomasz Wójcik", role: "Radca prawny · sankcje kredytowe", photo: asset("img/team-tomasz.jpg") },
  { name: "Magdalena Nowak", role: "Specjalistka ds. kredytów konsumenckich", photo: asset("img/team-magda.jpg") },
  { name: "mec. Katarzyna Lewandowska", role: "Radca prawny · roszczenia przesyłowe", photo: asset("img/team-katarzyna.jpg") },
  { name: "Michał Kaczmarek", role: "Analityk ds. wyceny roszczeń", photo: asset("img/team-michal.jpg") },
];

export const reviews = [
  {
    src: "Google",
    photo: asset("img/rev-marek.jpg"),
    q: "Słupy stały u mnie 15 lat. Dostałem 54 tysiące i nie wyłożyłem ani grosza z góry.",
    who: "Marek W.",
    place: "rolnik spod Kielc",
  },
  {
    src: "Trustpilot",
    photo: asset("img/rev-kasia.jpg"),
    q: "Ubezpieczyciel dał 8 tys. Pani mecenas wywalczyła 31 tys. Polecam każdemu.",
    who: "Katarzyna P.",
    place: "Poznań",
  },
  {
    src: "Facebook",
    photo: asset("img/rev-tomasz.jpg"),
    q: "Myślałem, że to nie dla mnie. Analiza była darmowa, a kredyt spłacam bez odsetek.",
    who: "Tomasz L.",
    place: "Rzeszów",
  },
  {
    src: "Google",
    photo: asset("img/rev-janusz.jpg"),
    q: "Linia wysokiego napięcia szła przez pole od zawsze. Kancelaria wywalczyła 72 tysiące. Konkret, żadnych ukrytych kosztów.",
    who: "Janusz K.",
    place: "rolnik, woj. lubelskie",
  },
  {
    src: "Trustpilot",
    photo: asset("img/rev-agnieszka.jpg"),
    q: "Bałam się formalności, ale wszystko wzięli na siebie. Dzwonili, tłumaczyli, pilnowali terminów. Polecam z całego serca.",
    who: "Agnieszka M.",
    place: "Wrocław",
  },
  {
    src: "Google",
    photo: asset("img/rev-krzysztof.jpg"),
    q: "Sprawa po wypadku ciągnęła się miesiącami u innych. Tu w pół roku było po wszystkim i z dobrą kwotą.",
    who: "Krzysztof D.",
    place: "Katowice",
  },
];

// Sekcja zaufania — dlaczego klienci nam ufają (bez zdjęć, twarde argumenty).
export const trustBadges = [
  { icon: "scale", t: "Radcy prawni z licencją", d: "Sprawy prowadzą wpisani radcy prawni OIRP — nie „doradcy” bez uprawnień." },
  { icon: "lock", t: "Zero opłat z góry", d: "Wynagrodzenie pobieramy wyłącznie od wywalczonej kwoty. Nie wygrasz — nie płacisz." },
  { icon: "shield", t: "Zgodność z RODO", d: "Twoje dane są bezpieczne i przetwarzane wyłącznie w celu prowadzenia sprawy." },
  { icon: "doc", t: "Umowa na piśmie", d: "Jasne warunki, bez gwiazdek i ukrytych kosztów — wszystko czarno na białym." },
  { icon: "clock", t: "Odpowiedź w 24 h", d: "Oddzwaniamy w ciągu jednego dnia roboczego z bezpłatną analizą sprawy." },
  { icon: "handshake", t: "Jeden opiekun sprawy", d: "Masz bezpośredni kontakt z konkretną osobą, nie z anonimową infolinią." },
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
