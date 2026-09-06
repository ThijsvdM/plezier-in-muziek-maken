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
- Les-toegang (bijv. tot welke les is vrijgegeven) is gekoppeld aan server-side gebruikersdata
- Navigatie en pagina's reageren op de ingelogde status via sessiecontrole op de server

Belangrijke bestanden:
- [src/app/login/page.js](src/app/login/page.js)
- [src/components/Navbar.js](src/components/Navbar.js)
- [src/app/agenda/page.js](src/app/agenda/page.js)
- [src/app/api/session/route.js](src/app/api/session/route.js)
- [src/app/api/auth/login/route.js](src/app/api/auth/login/route.js)
- [src/app/api/auth/logout/route.js](src/app/api/auth/logout/route.js)

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

Deze app gebruikt server-side JSON-opslag voor gedeelde gegevens tussen devices:

1. Accounts en sessies
- gebruikersgegevens in [src/data/users.json](src/data/users.json)
- sessie via HttpOnly cookie `music_session`
- serverlogica in [src/lib/account-data.js](src/lib/account-data.js)

2. Agenda-afspraken
- gedeelde agenda-events in [src/data/agenda-events.json](src/data/agenda-events.json)
- rolgebaseerde toegang via API-routes onder [src/app/api/agenda-events](src/app/api/agenda-events)

3. Notenvanger-scorebord
- gedeeld scorebord in [src/data/note-catcher-scores.json](src/data/note-catcher-scores.json)

Let op: JSON-bestandsopslag is prima voor kleine omgevingen en demos, maar voor productie op grotere schaal is een database aan te raden.

## API-overzicht

- [src/app/api/session/route.js](src/app/api/session/route.js): huidige sessie ophalen
- [src/app/api/auth/login/route.js](src/app/api/auth/login/route.js): inloggen en sessie-cookie zetten
- [src/app/api/auth/logout/route.js](src/app/api/auth/logout/route.js): uitloggen en cookie verwijderen
- [src/app/api/users/route.js](src/app/api/users/route.js): gebruikerslijst ophalen en leerling aanmaken (docent)
- [src/app/api/users/[username]/route.js](src/app/api/users/[username]/route.js): leerling bijwerken/verwijderen (docent)
- [src/app/api/agenda-events/route.js](src/app/api/agenda-events/route.js): agenda-events ophalen en aanmaken
- [src/app/api/agenda-events/[id]/route.js](src/app/api/agenda-events/[id]/route.js): agenda-events bijwerken/verwijderen
- [src/app/api/note-catcher-scores/route.js](src/app/api/note-catcher-scores/route.js): scorebord ophalen en score toevoegen

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
- [src/app/api](src/app/api): route handlers voor sessie, auth, users, agenda en scores
- [src/components](src/components): herbruikbare UI en lesrendering
- [src/data](src/data): JSON-opslag voor users, agenda-events en scoredata
- [src/lib](src/lib): gedeelde server-helpers voor account- en agendadata
- [public](public): statische assets

## Onderhoudstips

1. Lesinhoud aanpassen? Begin in [src/components/LessonPage.js](src/components/LessonPage.js).
2. Navigatie- of login-gedrag aanpassen? Kijk in [src/components/Navbar.js](src/components/Navbar.js) en [src/app/login/page.js](src/app/login/page.js).
3. Account- of sessiegedrag aanpassen? Gebruik [src/lib/account-data.js](src/lib/account-data.js) en de routes onder [src/app/api/auth](src/app/api/auth) en [src/app/api/session](src/app/api/session).
4. Agenda- of gebruikersbeheer aanpassen? Werk in [src/app/agenda/page.js](src/app/agenda/page.js), [src/app/api/users](src/app/api/users) en [src/app/api/agenda-events](src/app/api/agenda-events).
5. Spelgedrag of scorebord aanpassen? Werk in [src/app/notenvanger/page.js](src/app/notenvanger/page.js) en [src/app/api/note-catcher-scores/route.js](src/app/api/note-catcher-scores/route.js).
6. Draai na wijzigingen altijd lint:

```bash
npm run lint
```

## Known Limitations

- Accounts, agenda en scores gebruiken JSON-bestanden; dit is niet geschikt voor hoge schaal of meerdere gelijktijdige schrijvers.
- Wachtwoorden staan nu als plain text in JSON voor eenvoud in deze leeromgeving; voor productie is hashing verplicht.
- Score-opslag via JSON-bestand is simpel maar beperkt voor multi-server deployments.
