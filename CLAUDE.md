# neuverbinden.de – Neuaufbau

> Dieses Projekt/Verzeichnis ist **ausschließlich für die Website**.
> Instagram-Vorlagen & Social-Media-Grafiken liegen in einem eigenen,
> getrennten Projekt: `D:\daten\claude\Social Media` (eigene CLAUDE.md
> dort). Bei Anfragen zu Social-Media-Content dorthin verweisen statt hier
> zu arbeiten.

Statische Website (kein Build-Tool, kein Framework, kein Backend) als Ersatz für die
bisherige WordPress/Elementor-Seite auf all-inkl. Praxis für Faszienmanöver (Human
Garage) und Körperarbeit (u. a. Neural Reset Therapy® nach Lawrence Woods) von
Maximilian Wettschereck, Mannheim/Eisenberg.

## Architektur-Entscheidungen (bewusst, nicht ändern ohne Rücksprache)

- Reines HTML/CSS/JS, kein Framework, kein npm/Build-Schritt – gleiche bewusste
  Entscheidung wie beim Schwester-Projekt (Faszienmanöver-Workshop-Landingpage,
  `D:\daten\claude\landing`, Repo `github.com/neuverbinden/faszienmanoever`). Betreiber
  ist von WordPress/Elementor bewusst weg, u. a. wegen der Editier-Umständlichkeit.
- Repo: `https://github.com/neuverbinden/neuverbinden.git`.
- **Hosting-Strategie unterscheidet sich vom Workshop-Projekt:** GitHub Pages ist hier
  nur eine **Test-/Vorschau-Umgebung**, kein Ziel-Hosting. Der eigentliche Livegang
  erfolgt später per Datei-Upload (FTP/SFTP) auf den bestehenden all-inkl-Webspace,
  wo aktuell noch WordPress läuft (wird dabei abgelöst, nicht ergänzt). Deshalb: keine
  Custom-Domain-Anbindung an GitHub Pages, keine CNAME-Datei nötig – die Domain
  neuverbinden.de bleibt ausschließlich bei all-inkl.
- **Beta-Modus aktiv:** Alle Seiten haben `<meta name="robots" content="noindex,
  nofollow">`, `robots.txt` sperrt global. Vor echtem Livegang auf all-inkl entfernen.
- Interne Links sind bewusst **volle relative Pfade inkl. `index.html`**
  (z. B. `../kurse/index.html`, nicht `../kurse/`), nicht die "schönen" Verzeichnis-URLs.
  Grund: funktioniert dadurch identisch per Doppelklick/`file://`, über GitHub Pages
  und später auf all-inkl, ohne serverseitige Verzeichnis-Index-Auflösung vorauszusetzen.
- Informationsarchitektur ist bewusst **mehrseitig statt Ein-Seiten-Scroll** (Gegensatz
  zur alten WordPress-Seite, die faktisch nur Anker-Navigation auf einer Seite hatte) –
  Ziel: mehr indexierbare Inhalte für Google. Seiten: `/`, `/faszienmanoever/`,
  `/einzelarbeit/`, `/kurse/`, `/ueber-mich/`, `/kontakt/` (nur Footer, nicht Hauptnav),
  `/datenschutz/`.
- Design-System bewusst **eigenständig**, nicht vom Workshop-Projekt übernommen (das
  Cream/Navy/Orange-System dort gehört zur Zusammenarbeit mit anderen Coaches, nicht
  Maximilians eigener Marke). Hier: Cream/Waldgrün/Ocker, Serif-Überschriften
  (Iowan Old Style/Palatino-Stack), System-Sans für Fließtext. Tokens in
  `assets/css/style.css` (`:root`), inkl. Schatten-/Radius-System für Tiefe
  (`--shadow-sm/--shadow/--shadow-hover`, `--radius: 10px`).
- **"Nachtruhe"-Zusatz:** Hero-Sektionen (`.hero`/`.page-hero`), Testimonial-Abschnitte
  und der QAT-Abschluss auf `/einzelarbeit/` tragen zusätzlich die Klasse `.night` –
  dunkler Waldnacht-Hintergrund (`--night`/`--night-deep`) mit Kupfer-Akzent
  (`--copper`/`--copper-bright`) statt Cream/Ochre. Bewusster Kontrast zum sonst
  hellen Cream-Grundton, soll die 200€-Preisklasse hochwertiger transportieren als
  reines Sage-Grün. Restliche Textabschnitte und `.band`-Sektionen (Sage) bleiben
  unverändert hell. Neue Sektionen mit Hero-/Testimonial-/Bonus-Charakter sollten
  ebenfalls `.night` bekommen, damit das Muster konsistent bleibt.
- Terminbuchung (kostenloses Kennenlerngespräch): **meetergo**
  (`https://cal.meetergo.com/neuverbinden/discovery`), deutsches Unternehmen, Server
  Frankfurt, AVV vorhanden. Eingebunden als Click-to-Load-iframe auf
  `/einzelarbeit/#kennenlerngespraech` ("Inline Embed"-Typ im meetergo-Dashboard wählen,
  nicht Popup/Sidebar/Video).
- Kontaktformular: forms.app (`https://lx2cqpcb.forms.app/kontaktformular-1`, eigenes
  Formular, nicht das vom Workshop-Projekt). **Bewusste Abweichung vom
  Workshop-Click-to-Load-Muster:** Auf `/kontakt/` ist es direkt eingebettet (lädt mit
  der Seite, kein Klick nötig – expliziter Wunsch des Betreibers, Datenschutz-Text
  beschreibt das ehrlich). Auf `/einzelarbeit/` bleibt es Click-to-Load, dort aber als
  Inline-Reveal auf derselben Seite (kein Seitenwechsel zu Kontakt mehr).
- Bezahlung der 1:1-Sessions läuft **nicht** über einen Online-Checkout auf der Seite,
  sondern persönlich nach dem Termin (bar/SumUp/Zahlungslink) – bewusst, da der Betreiber
  Termine ohnehin persönlich abstimmt ("wir vereinbaren sowieso einen Termin").
- Keine Google Fonts CDN (System-Font-Stack), keine Analytics/Tracker – gleiche
  DSGVO-Grundhaltung wie beim Workshop-Projekt.
- Impressum extern verlinkt (`https://www.mein.online-impressum.de/neuverbinden-de/`,
  bestehender Account, nicht neu angelegt). `datenschutz/index.html` ist ein
  **Entwurf** (Kennzeichnung im HTML-Kommentar) – Betreiber prüft selbst/mit Anwalt vor
  Livegang, kein Ersatz für Rechtsberatung.

## Rechtlicher Kontext (wichtig für zukünftige Text-Änderungen)

- Betreiber ist **noch nicht** Heilpraktiker (fehlt noch ca. 10 Monate ab 26.07.2026) –
  keine Heilungs-/Behandlungs-Sprache für eigene Werbetexte ("behandeln", "heilen",
  "Schmerzen lindern" als Versprechen). Safe-Sprache: Anspannung, Beweglichkeit,
  Wohlbefinden, Leichtigkeit, Ruhe.
- **Neural Reset Therapy® (NRT)**: Betreiber ist ausgebildet, aber **nicht** in der
  fortgeschrittenen Zertifizierung – Formulierung immer "ausgebildet in", nie
  "zertifiziert" oder Alleinstellungs-/Seltenheits-Behauptungen ("einer von X").
- **Human Garage Faszienmanöver**: hier ist er tatsächlich zertifiziert – diese Aussage
  ("einer der ersten von Human Garage ausgebildeten und zertifizierten Coaches in
  Deutschland") ist geprüft und darf stehen bleiben.
- Testimonials: Betreiber hat sich bewusst für **vollständige Übernahme statt
  Selektion** entschieden (eigene rechtliche Einschätzung: "Reviews sind freie
  Meinungsäußerung"), inkl. einiger Zitate mit recht direkter Schmerz-/
  Behandlungssprache (z. B. Andrea, Ute, Margarete auf `/einzelarbeit/`). Das ist eine
  bewusste Risikoentscheidung des Betreibers, nicht versehentlich stehen gelassen.
- **QAT (Quantum Alignment Technique)** ist bewusst nicht Teil der drei Haupt-Tiers,
  sondern ein eigener, spät platzierter Abschnitt am Ende von `/einzelarbeit/` (nach
  FAQ, vor Footer) – kein Preis, kein Buchungsbutton, nur "im Kennenlerngespräch
  ansprechen". Sprache bewusst nervensystem-/erfahrungsbasiert, keine konkrete
  neurologische Wirkmechanismus-Behauptung.

## Bilder

- `images/` enthält echte Fotos (eigenes Shooting + Human-Garage-Summit Berlin).
  Betreiber hat explizit bestätigt, an allen Fotos mit anderen Personen die Rechte zu
  haben. `Overhead-elbow-torque.png` wurde aus einem Video-Screenshot manuell
  zugeschnitten (Decke/Fuß im Vordergrund entfernt) – bei Bedarf Original in der
  Bild-Historie/beim Betreiber erfragen, falls ein anderer Ausschnitt gewünscht ist.
- `Logos/HG-FascialManeuversCertifiedCoach*.png` sind Maximilians eigenes Zertifikats-
  Badge (kopiert aus dem Workshop-Projekt) – zulässig, da es seine eigene Zertifizierung
  dokumentiert, nicht die Workshop-Kooperation.
- `Neuverbinden - Logo.png` / `Neuverbinden (12).png`: offizielle Wortmarken-Dateien
  (Cream/Waldgrün/Gold, mit Tagline) – aktuell **nicht** im Header verwendet (dort
  reiner CSS-Text-Logo für Lesbarkeit in Nav-Größe), liegen aber bereit falls doch
  gewünscht.

## Workflow

- Texte werden vom Betreiber in `Dokumente\Texte.txt` gepflegt (nicht in Git, siehe
  `.gitignore`). `Dokumente\Inhaltsplan.md` ist die Planungs-/Entscheidungs-Historie
  (ebenfalls nicht in Git) – bei Rückfragen zu "warum ist das so" dort nachschauen,
  bevor im Chat neu gefragt wird.
- `git init`/`git push`/Login-pflichtige Git-Befehle führt der Nutzer selbst aus
  (kein `gh` CLI auf diesem Rechner verfügbar, kein `git` im PATH dieser Shell).

## Offen (nächste Schritte)

- Preise auf `/einzelarbeit/` (aktuell 140€/200€/500€) sind laut Betreiber **nicht
  dauerhaft haltbar** – eine Erhöhung ist angekündigt, aber Betrag/Zeitpunkt noch
  offen (Stand 26.07.2026). Nicht selbstständig ändern, sondern auf Ansage warten;
  bei Änderung auch das 3er-Paket ("3 × 200€ einzeln – du sparst 100€") neu
  durchrechnen.
- Migrations-/Cutover-Plan für den Wechsel von WordPress (all-inkl) auf diese statische
  Seite (Redirects, DNS/Hosting-Umstellung, WordPress-Abschaltung) – noch nicht
  ausgearbeitet.
- Zwei Foto-Slots auf `/faszienmanoever/` waren offen, sind inzwischen gefüllt; ggf.
  weitere Bildwünsche des Betreibers offen.
- `/kurse/` Mannheim-Warteliste-Button verlinkt bewusst extern auf Fyndery (nicht auf
  `/kontakt/`) – hält das Fyndery-Profil "warm"/sichtbar, solange `neuverbinden.de`
  noch `noindex` ist. Kostet nichts (Warteliste ist keine Bezahl-Buchung, keine
  10%-Gebühr). Sobald die eigene Seite live+indexiert ist und sich als Sichtbarkeits-
  Kanal bewährt hat: Fyndery-Frage neu bewerten (kündigen vs. weiterlaufen lassen).
  Eisenberg lief nie über Fyndery, sondern direkt über den Klub.
