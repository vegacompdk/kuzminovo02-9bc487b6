import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mountain,
  Footprints,
  Bike,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  CalendarDays,
  ArrowRight,
  TrendingUp,
  Trees,
  Users,
} from "lucide-react";

import heroAsset from "@/assets/hero-kuzminovo.jpg.asset.json";
import runnerAsset from "@/assets/runner.jpg.asset.json";
import bikeAsset from "@/assets/bike.jpg.asset.json";
import hikersAsset from "@/assets/hikers.jpg.asset.json";
import teamAsset from "@/assets/team.jpg.asset.json";
import benchAsset from "@/assets/bench.png.asset.json";
import viewpointAsset from "@/assets/viewpoint.jpg.asset.json";
import cellarAsset from "@/assets/cellar.jpg.asset.json";
import nightAsset from "@/assets/night.png.asset.json";
import trailworkAsset from "@/assets/trailwork.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naše Kuzmínovo — beh do kopca, cyklotrial a turistika" },
      {
        name: "description",
        content:
          "Miesto pre pohyb, prírodu a výzvy. Kopec Kuzmínovo nad Dolným Kubínom — preteky do kopca, cyklotrial, turistické chodníky a vyhliadka.",
      },
      { property: "og:title", content: "Naše Kuzmínovo — miesto pre pohyb, prírodu a výzvy" },
      {
        property: "og:description",
        content:
          "Beh do kopca, cyklotrial a turistika na kopci Kuzmínovo. Termíny podujatí a online registrácia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const activities = [
  {
    icon: Footprints,
    title: "Beh do kopca",
    text: "Ostrý výbeh z brehu Oravy až na vyhliadku. 1,4 km, 210 výškových metrov a sklon, ktorý prinúti dýchať naplno.",
  },
  {
    icon: Bike,
    title: "Cyklotrial a MTB",
    text: "Technické lesné sekcie, korene, klopenky a zjazd späť do mesta. Trate pre začiatočníkov aj skúsených jazdcov.",
  },
  {
    icon: Trees,
    title: "Turistika",
    text: "Značený okruh s lavičkami, altánkom a panoramatickým výhľadom na Oravu. Zvládne ho aj rodina s deťmi.",
  },
];

const events = [
  {
    date: "20. 9. 2026",
    name: "Kuzmínovský výbeh",
    type: "Beh do kopca",
    level: "Náročné",
    text: "Časovka jednotlivcov na vrchol. Štart po vlnách, meranie čipom.",
  },
  {
    date: "11. 10. 2026",
    name: "Trial Cup Kuzmínovo",
    type: "Cyklotrial",
    level: "Stredné",
    text: "Technické sekcie v lese pod vyhliadkou, kategórie hobby aj open.",
  },
  {
    date: "1. 11. 2026",
    name: "Rodinný výstup",
    type: "Turistika",
    level: "Ľahké",
    text: "Komunitná vychádzka na vyhliadku s opekačkou v altánku.",
  },
];

const gallery = [
  { src: runnerAsset.url, alt: "Bežec stúpa do kopca Kuzmínovo nad Dolným Kubínom", span: "row-span-2" },
  { src: viewpointAsset.url, alt: "Vyhliadka s dreveným zábradlím nad štadiónom", span: "" },
  { src: bikeAsset.url, alt: "Horský cyklista na lesnom chodníku", span: "" },
  { src: benchAsset.url, alt: "Vyrezávaná lavička s orlími hlavami na vyhliadke", span: "" },
  { src: hikersAsset.url, alt: "Turisti stúpajúci na Kuzmínovo", span: "row-span-2" },
  { src: cellarAsset.url, alt: "Kamenná pivnica s dreveným šindľom v lese", span: "" },
  { src: nightAsset.url, alt: "Nasvietená vyhliadka nad riekou Orava v noci", span: "" },
  { src: trailworkAsset.url, alt: "Budovanie chodníkov a spevnenej plochy na kopci", span: "" },
];

function Index() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (name.length < 3 || name.length > 100) {
      setError("Zadaj celé meno a priezvisko.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255) {
      setError("Zadaj platnú e-mailovú adresu.");
      return;
    }
    setError(null);
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-primary-foreground">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <Mountain className="h-6 w-6 shrink-0" />
            <span className="truncate font-display text-2xl tracking-wide">Naše Kuzmínovo</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-widest md:flex">
            <a href="#o-mieste" className="hover:text-accent">O mieste</a>
            <a href="#aktivity" className="hover:text-accent">Aktivity</a>
            <a href="#galeria" className="hover:text-accent">Galéria</a>
            <a href="#podujatia" className="hover:text-accent">Podujatia</a>
            <a href="#registracia" className="btn-ghost">Registrácia</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Lúka na kopci Kuzmínovo s výhľadom na mesto v údolí a hory"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />
        <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-16 text-primary-foreground">
          <p className="eyebrow">Dolný Kubín · Orava</p>
          <h1 className="mt-3 max-w-4xl text-[clamp(3rem,11vw,8rem)] leading-[0.9]">
            Naše Kuzmínovo
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85 sm:text-xl">
            Miesto pre pohyb, prírodu a výzvy.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#registracia" className="btn-primary">
              Zaregistruj sa na preteky <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#aktivity" className="btn-ghost">Pozri aktivity</a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary-foreground/25 pt-6">
            {[
              ["210 m", "prevýšenie"],
              ["1,4 km", "výbehová trať"],
              ["3", "okruhy a chodníky"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-3xl sm:text-4xl">{v}</dt>
                <dd className="text-xs uppercase tracking-widest text-primary-foreground/70">{k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* O MIESTE */}
      <section id="o-mieste" className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="eyebrow">O mieste</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Kopec, ktorý vidíš z celého mesta</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Kuzmínovo sa dvíha priamo nad riekou Orava v Dolnom Kubíne. Za pár minút od
              posledného paneláku si v hustom smrekovom lese, na koreňoch a strmých serpentínach.
              Hore ťa čaká vyhliadka s vyrezávanými lavičkami a panoráma Oravskej Magury.
            </p>
            <p className="mt-4 text-muted-foreground">
              Chodníky, altánok aj spevnené plochy budujeme svojpomocne s partiou dobrovoľníkov.
              Kopec žije celý rok — v lete preteky a brigády, v zime nasvietená vyhliadka nad
              riekou.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [TrendingUp, "Náročný terén", "Sklon až 30 %"],
                [MapPin, "5 minút z centra", "Dostupné pešo"],
                [Users, "Komunita", "Brigády a podujatia"],
              ].map(([Icon, t, s]) => {
                const I = Icon as typeof MapPin;
                return (
                  <li key={t as string} className="rounded-xl border bg-card p-4">
                    <I className="h-5 w-5 text-primary" />
                    <p className="mt-2 font-semibold">{t as string}</p>
                    <p className="text-sm text-muted-foreground">{s as string}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={viewpointAsset.url}
              alt="Vyhliadka na Kuzmínove s výhľadom na štadión a mesto"
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-2xl object-cover sm:h-80"
            />
            <img
              src={benchAsset.url}
              alt="Drevená lavička s orlími hlavami na vyhliadke"
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover sm:h-52"
            />
            <img
              src={teamAsset.url}
              alt="Dobrovoľníci v červených tričkách pri altánku"
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover sm:h-52"
            />
          </div>
        </div>
      </section>

      {/* AKTIVITY */}
      <section id="aktivity" className="section-pad bg-secondary">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Aktivity</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Vyber si svoje tempo</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {activities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border bg-card p-7 transition-transform hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section id="galeria" className="section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Galéria</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Les, lúka a výhľady</h2>
          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`h-full w-full rounded-xl object-cover ${g.span}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PODUJATIA */}
      <section id="podujatia" className="section-pad bg-secondary">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Podujatia</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Pripravované preteky</h2>
          <div className="mt-10 grid gap-5">
            {events.map((e) => (
              <article
                key={e.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border bg-card p-6 sm:flex sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    {e.date} · {e.type}
                  </p>
                  <h3 className="mt-1 truncate text-2xl">{e.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.text}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                    {e.level}
                  </span>
                  <a href="#registracia" className="text-sm font-semibold underline underline-offset-4">
                    Registrovať
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRÁCIA */}
      <section id="registracia" className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Registrácia</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Prihlás sa na preteky</h2>
            <p className="mt-5 text-muted-foreground">
              Vyplň formulár a ozveme sa ti s pokynmi k štartu, prezentácii a štartovnému.
              Registrácia je nezáväzná.
            </p>
            <img
              src={runnerAsset.url}
              alt="Pretekár s palicami stúpa strmým svahom na Kuzmínovo"
              loading="lazy"
              className="mt-8 hidden h-80 w-full rounded-2xl object-cover lg:block"
            />
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border bg-card p-6 sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Meno a priezvisko</span>
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Ján Novák"
                  className="rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={255}
                    placeholder="jan@email.sk"
                    className="rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Telefón</span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={20}
                    placeholder="+421 900 000 000"
                    className="rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Aktivita</span>
                <select
                  name="activity"
                  className="rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Beh do kopca</option>
                  <option>Cyklotrial / MTB</option>
                  <option>Turistika</option>
                </select>
              </label>
              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[var(--primary)]" />
                <span>Súhlasím so spracovaním osobných údajov na účely organizácie podujatia.</span>
              </label>
              {error && <p className="text-sm font-semibold text-accent">{error}</p>}
              {sent && (
                <p className="rounded-lg bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                  Ďakujeme! Registráciu sme prijali, ozveme sa e-mailom.
                </p>
              )}
              <button type="submit" className="btn-primary w-full">
                Registrovať sa
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl">
              <Mountain className="h-6 w-6" /> Naše Kuzmínovo
            </p>
            <p className="mt-3 text-sm text-primary-foreground/75">
              Komunita, ktorá stavia chodníky a organizuje preteky na kopci nad Dolným Kubínom.
            </p>
          </div>
          <div className="text-sm">
            <h3 className="text-xl">Kontakt</h3>
            <p className="mt-3 flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@kuzminovo.sk
            </p>
            <p className="mt-2 flex items-center gap-2">
              <Phone className="h-4 w-4" /> +421 900 123 456
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="text-sm">
            <h3 className="text-xl">Lokalita</h3>
            <p className="mt-3 text-primary-foreground/75">Kuzmínovo, Dolný Kubín, Orava</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kuzm%C3%ADnovo%20Doln%C3%BD%20Kub%C3%ADn"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 underline underline-offset-4"
            >
              <MapPin className="h-4 w-4" /> Otvoriť v mapách
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Naše Kuzmínovo
        </div>
      </footer>
    </div>
  );
}
