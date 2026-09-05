# Plezier in Muziek Maken

Interactieve leeromgeving voor muziekonderwijs met lessen voor klokkenspel, trommel en pBuzz.

Deze applicatie combineert:
- lesinhoud per instrument en lesnummer
- ondersteunende videos en oefenopdrachten
- een login- en toegangssysteem voor leerlingen en docent
- een notenvanger-spel met gedeeld scorebord

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 + eigen themastyles
- ESLint 9

## Kernfunctionaliteit

### 1. Lespagina's per instrument

- Instrumenten: klokkenspel, trommel, pBuzz
- Elke instrumentroute bevat lessen 1 t/m 10
- Lesinhoud (intro, highlights, tips, oefenopdrachten, videoblokken) wordt centraal beheerd

Belangrijk bestand:
- [src/components/LessonPage.js](src/components/LessonPage.js)

In dit bestand staat de centrale contentstructuur `HANDBOOK_CONTENT`. Door die structuur te wijzigen, pas je in een keer alle lespagina's aan.

### 2. Login en toegangscontrole

- Gebruikers loggen in via de loginpagina
- Les-toegang (bijv. tot welke les is vrijgegeven) is gekoppeld aan gebruikersdata
- Navigatie en pagina's reageren op de ingelogde status

Belangrijke bestanden:
- [src/app/login/page.js](src/app/login/page.js)
- [src/components/Navbar.js](src/components/Navbar.js)
- [src/app/agenda/page.js](src/app/agenda/page.js)

### 3. Notenvanger-spel

- Los spelonderdeel waar noten gevangen worden
- Puntentelling op basis van noottype
- Rust-noten beinvloeden game-over gedrag
- Inloggen vereist voor score-opslag

Belangrijke bestanden:
- [src/app/notenvanger/page.js](src/app/notenvanger/page.js)
- [src/app/api/note-catcher-scores/route.js](src/app/api/note-catcher-scores/route.js)
- [src/data/note-catcher-scores.json](src/data/note-catcher-scores.json)

## Data-opslag

Deze app gebruikt twee typen opslag:

1. Browseropslag (localStorage)
- gebruikersgegevens en inlogsessie
- leerlingspecifieke instellingen zoals vrijgegeven lessen

2. Server-side JSON-opslag
- gedeeld notenvanger-scorebord in [src/data/note-catcher-scores.json](src/data/note-catcher-scores.json)

Let op: JSON-bestandsopslag is prima voor kleine omgevingen en demos, maar voor productie op grotere schaal is een database aan te raden.

## Belangrijkste routes

- Home: `/`
- Login: `/login`
- Ouders: `/ouders`
- Agenda: `/agenda`
- Instrument-oefening: `/instrument`
- Notenvanger: `/notenvanger`
- Instrumentlessen:
	- `/klokkenspel`
	- `/trommel`
	- `/pbuzz`

## Projectstructuur (globaal)

- [src/app](src/app): routes en pagina's (App Router)
- [src/components](src/components): herbruikbare UI en lesrendering
- [src/data](src/data): JSON-opslag voor scoredata
- [public](public): statische assets

## Onderhoudstips

1. Lesinhoud aanpassen? Begin in [src/components/LessonPage.js](src/components/LessonPage.js).
2. Navigatie- of login-gedrag aanpassen? Kijk in [src/components/Navbar.js](src/components/Navbar.js) en [src/app/login/page.js](src/app/login/page.js).
3. Spelgedrag of scorebord aanpassen? Werk in [src/app/notenvanger/page.js](src/app/notenvanger/page.js) en [src/app/api/note-catcher-scores/route.js](src/app/api/note-catcher-scores/route.js).
4. Draai na wijzigingen altijd lint:

```bash
npm run lint
```

## Known Limitations

- Gebruikersbeheer op basis van localStorage is niet geschikt als volwaardig accountsysteem.
- Score-opslag via JSON-bestand is simpel maar beperkt voor multi-server deployments.
