# neuverbinden.de – Projektgedächtnis

Stand: 21.11.2026. Website von Maximilian Wettschereck (Faszienmanöver-Coach, Mannheim).
Sprache mit dem Betreiber: Deutsch, Du-Form. Texte auf der Website: Du-Form, Ich-Form für Maximilian.

> Social-Media-Grafiken liegen in einem eigenen Projekt (`D:\daten\claude\Social Media`).
> Die Workshop-Landingpage mit anderen Coaches ist ein Schwesterprojekt (`D:\daten\claude\Landing`).

## Ordner und Umgebungen

| Was | Wo | Zweck |
| --- | --- | --- |
| Entwurf (Quelle der Wahrheit) | `D:\daten\claude\Neuverbinden` | Git-Repo `github.com/neuverbinden/neuverbinden`, Branch `main` |
| Testseite | `https://neuverbinden.github.io/neuverbinden/` | GitHub Pages aus `main`, nur Vorschau |
| Upload-Ordner Live | `D:\daten\claude\Neuverbinden-Upload-NEU` | 1:1 Kopie für FTP auf all-inkl, plus `.htaccess` |
| Live-Seite | `https://www.neuverbinden.de` | all-inkl (Apache), Upload per FTP durch Maximilian |
| Zweitdomain | `D:\daten\claude\Faszienmanoever-Upload` | nur `.htaccess` für faszienmanöver.de / faszienmanoever.de |
| Alt | `D:\daten\claude\Neuverbinden-Upload` | Stand vor dem Relaunch (Okt 2026), nicht mehr pflegen |
| Alt-Snapshot | Branch `live-vorher` im Repo | alte Live-Seite zum Vergleich |

**Ablauf bei Änderungen:** Erst im Entwurf ändern → committen und pushen → auf GitHub Pages prüfen →
geänderte Dateien in `Neuverbinden-Upload-NEU` kopieren → Maximilian lädt per FTP hoch → live per `curl` prüfen.
Neue Großvorhaben laufen „erst nur auf GitHub", bis Maximilian die Freigabe gibt.

**Upload-Ordner neu erzeugen** (wenn viel geändert wurde):
```
git archive main -- agb assets begleitung datenschutz einzelarbeit faszienmanoever images index.html kontakt kurse robots.txt sitemap.xml ueber-mich wie-ich-arbeite workshop workshop-danke | tar -x -C "/d/daten/claude/Neuverbinden-Upload-NEU"
```
Nicht hochladen: `qrkurs/`, `landing/` (nur GitHub-Pages-Ersatz, live übernimmt das die `.htaccess`), `CLAUDE.md`, `.gitignore`, `Dokumente/`.
Bei großen Updates: Maximilian löscht alles auf dem Server und lädt den ganzen Ordner hoch (versteckte Dateien anzeigen wegen `.htaccess`).

## Technik

- Reines HTML/CSS/JS, kein Framework, kein Build. Interne Links immer mit `index.html` (z. B. `../kurse/index.html`).
- Design-Tokens in `assets/css/style.css` (`:root`): Cream, Waldgrün (`--forest`), Ocker-Buttons, dunkle `.night`-Sektionen, Sage-`.band`-Sektionen. Keine Flyer-Farben (Gelb) übernehmen.
- **Cache-Busting:** Alle Seiten laden `style.css?v=NN` und `embeds.js?v=NN`. Bei jeder CSS-Änderung die Nummer in allen HTML-Dateien hochzählen (aktuell `v=26`, embeds `v=2`). Ohne das sehen Wiederkehrer alte Styles.
- Komponenten: `.promo-card` (Text + grünes Band, Kurse-Seite), `.kurse-grid` (zwei Boxen nebeneinander, gleich hoch per Grid-Stretch), `.cards`/`.card` mit `.card-price` (Preise auf gleicher Höhe), `.testimonials`, `.faq-item` (details), `.photo-strip`, `.zigzag`.
- Gleich hohe Boxen: über CSS-Grid-Stretch lösen, nicht über verschachteltes Flexbox. Das ist schon zweimal schiefgegangen.
- WhatsApp-Links werden nie statisch ins HTML geschrieben, sondern per JS beim Klick gebaut (`openDirect()` / `revealLink()` in `assets/js/embeds.js`). Nummer `+4917641461085`.
- Kontaktformular forms.app `https://lx2cqpcb.forms.app/kontaktformular-1`, Kennenlerngespräch meetergo `https://cal.meetergo.com/neuverbinden/discovery` (eingebettet auf `/einzelarbeit/#kennenlerngespraech`).
- Prüfen: Browser-Screenshots mit Hard-Reload (Strg+Umschalt+R). GitHub Pages cacht auch HTML kurz, daher nach Push mit `until curl ... | grep ...` warten.

## Seiten und Inhalt (Stand Relaunch 11.11.2026)

Hauptmenü: Startseite · Einzelarbeit · Workshops & Kurse · Faszienmanöver · Über mich.
Footer: Impressum (extern) · Datenschutz · AGB · Kontakt · Wie ich arbeite · Instagram · YouTube, rechts „Maximilian Wettschereck · Mannheim".

- **Leitsatz:** „Beweglicher. Ruhiger im Kopf. Leichter." Unterzeile: „Loslassen braucht Halt. Ich halte. Du lässt los."
- **Startseite:** drei Kacheln („Erkennst du dich wieder?"), „So sehe ich es", „Drei Wege" (Erleben ab 20 € / Einzeln 180 € / Dranbleiben = Begleitung im Kennenlerngespräch), Bewertungen, Kurz-Bio, Hinweis zur ärztlichen Behandlung. Hero-Video `images/Kreis.mp4`.
- **Einzelarbeit:** eine Einzelsession, 90 Min, 180 €, Tullastraße 14. Auch online per Zoom (nur Faszienmanöver). Begleitung als Abschnitt `#begleitung`. `/begleitung/` leitet dorthin weiter (live per 301 in `.htaccess`).
- **Workshops & Kurse:** Workshop-Box + Montagsabend-Box nebeneinander, Kurse im Verein (Edingen, Seckenheim), Für Vereine/Praxen/Gruppen.
  - Montagskurs heißt weiter „Loslassen & Runterfahren", jeden Montag 18:30–19:30, 20 €, Anmeldung über Fyndery mit `?ref=website` (volle Slug-URL).
- **Workshop `/workshop/`:** Sa 05.12.2026, 11–13 Uhr, Tullastraße 14, 68161 Mannheim. Seit 21.11. nur noch reguläre Preise: Allein 49 €, **Bring a Friend** 79 € (nicht „Zu zweit", weil man auch zwei Einzeltickets kaufen kann). Stripe-Link `https://buy.stripe.com/4gM9AT0wW6EMagRgaM5ZC01`. Einzelsession danach 30 Min 59 €. Keine maximale Teilnehmerzahl.
- **`/workshop-danke/`:** Ziel der Stripe-Weiterleitung, `noindex`, nicht in Navigation/Sitemap. Klingel bei der Chiropraktikmanufaktur Kaufmann, Innenhof rechts die Treppe runter.
- **Faszienmanöver:** SEO-Seite für „Human Garage deutsch". Hinweis, dass Neuverbinden kein Teil von Human Garage ist.
- **Über mich:** inkl. „Wozu ich heute stehe" (Energiearbeit) und QAT in der Ausbildung – bleibt so.
- **Wie ich arbeite:** nicht im Hauptmenü, verlinkt aus Footer und Einzelarbeit-FAQ.
- Alexandras QAT-Zitat ist beschriftet mit „nach einer Einzelsession".

## Rechtliches

- Maximilian ist (noch) kein Heilpraktiker. Keine Heil-/Behandlungsversprechen in eigenen Texten. Echte Bewertungen bleiben vollständig, das ist eine bewusste Entscheidung.
- NRT: „ausgebildet in", nie „zertifiziert". Human Garage: „einer der ersten zertifizierten Coaches in Deutschland" ist geprüft. Nur das kleine Certified-Coach-Logo verwenden.
- AGB (`/agb/`) und Datenschutz (`/datenschutz/`) sind von Maximilian freigegeben, Texte nur nach seiner Vorlage ändern. Kein „Entwurf"-Hinweis.
- AGB: Bring-a-Friend-Regel (§7.4), Workshop-Storno 48 h bzw. Frühbucherfrist (§7.3), Kurse 24 h (§7.2), Kleinunternehmer § 19 UStG.
- Datenschutz: meetergo, forms.app, Fyndery, WhatsApp, Zoom (§8), Stripe inkl. Foto-Abfrage, Fotos/Videos bei Kursen.
- Bei neuen Diensten (z. B. neues Tool) immer an die Datenschutzerklärung denken und darauf hinweisen.

## Weiterleitungen

**neuverbinden.de** (`Neuverbinden-Upload-NEU/.htaccess`):
- `/landing` → `https://linktr.ee/neuverbinden` (301, Visitenkarte)
- `/qrkurs` → Fyndery-Kurs mit `?ref=qr` (302, Flyer)
- `/begleitung` → `/einzelarbeit/#begleitung` (301, per RewriteRule mit `NE`)

**faszienmanöver.de / faszienmanoever.de** (`Faszienmanoever-Upload/.htaccess`, all-inkl, Domain auf Webspace-Verzeichnis gestellt):
- `/reset`, `/coach`, `/programs` → Human-Garage-Affiliate-Links mit Ref-Code `MAXWET20BB4D`
- `/abendkurs` → Fyndery-Kurs mit `?ref=whatsapp`
- alles andere → `https://neuverbinden.de/kurse/index.html`

Prüfen mit `curl -sI "https://www.faszienmanöver.de/reset"`.

## Arbeitsweise mit Maximilian

- Bei größeren Vorlagen (Briefing-Dokumente): erst zusammenfassen, was sich ändert, offene Punkte und Widersprüche als nummerierte Liste klären, dann umsetzen.
- Bei Fragen wie „Wie würdest du …?" erst einen kurzen Vorschlag machen, nicht sofort umsetzen.
- Nach Änderungen immer selbst im Browser oder per `curl` prüfen, bevor „fertig" gemeldet wird.
- Wenn Maximilian sagt „hat nicht geklappt", zuerst Cache als Ursache ausschließen (Server-Stand per `curl` prüfen), dann echte Fehlersuche.
- Commits mit aussagekräftiger deutscher Nachricht, kleine Schritte.

## Offen / Wiederkehrend

- Nach dem Workshop am 05.12.2026: Workshop-Box auf `/kurse/`, Startseiten-Hinweise und `/workshop/` aktualisieren oder abbauen.
- Google-Unternehmensprofil pflegt Maximilian selbst (Texte stehen in seinem Dokument „neuverbinden-texte.md").
- Stripe-Produktnamen und -Preise ändert Maximilian selbst.
