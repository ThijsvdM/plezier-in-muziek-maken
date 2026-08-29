import Link from "next/link";
import Lesson4VideoAssignment from "./Lesson4VideoAssignment";

const HANDBOOK_CONTENT = {
  Klokkenspel: {
    1: {
      subtitle: "Kennismaken met je klokkenspel en je eerste noten spelen.",
      introTitle: "Welkom bij Team Melodie",
      introParagraphs: [
        "Vandaag ontdek je hoe je met stokken muziek maakt op het klokkenspel. Kijk eerst goed naar de kleuren van de staafjes.",
        "We starten rustig: eerst zelf oefenen, daarna samen tellen en samen spelen. Foutjes mogen, want daar leer je van.",
      ],
      highlights: [
        "Je koppelt kleuren uit het lesboek aan de juiste noten op je klokkenspel.",
        "Je hoort het verschil tussen lage en hoge noten.",
        "Je speelt met de hele klas op een tel van 1-2-3-4.",
      ],
      tips: [
        "Houd je stokken laag voor meer controle.",
        "Kijk eerst naar de kleur, sla daarna pas.",
        "Speel zacht door als je twijfelt, stop niet meteen.",
      ],
      musicParts: [
        { title: "Kleurennoten C-D-E-F-G", embedUrl: "" },
        { title: "Eerste samenspel: startstuk", embedUrl: "" },
      ],
      practiceParagraph: "Pak les 1 erbij en speel de noten op kleur. Herhaal dit rustig tot je zonder haast kunt doorspelen.",
      practiceBullets: [
        "Speel de kleurvolgorde 3 keer achter elkaar.",
        "Tel bij elke noot hardop mee.",
        "Laat thuis 1 keer horen hoe laag en hoog klinken.",
        "Bonus: maak je eigen korte melodie van 4 noten.",
      ],
      closingText: "Top gedaan. Je bent begonnen als echte melodiemaker.",
    },
    2: {
      subtitle: "Noten langer of korter spelen en samen strakker in de maat komen.",
      introTitle: "Melodieen oefenen",
      introParagraphs: [
        "In deze les oefen je met noten die 1, 2 of 4 tellen duren. Daardoor klinkt je muziek veel duidelijker.",
        "Daarna speel je opnieuw Eye of the Tiger en start je met We Will Rock You.",
      ],
      highlights: [
        "Je leert verschillende nootlengtes tellen.",
        "Je houdt de tel vast terwijl noten langer worden.",
        "Je bouwt verder aan Eye of the Tiger en We Will Rock You.",
      ],
      tips: [
        "Wijs met je stok mee op de tel als dat helpt.",
        "Speel lastige stukjes eerst super langzaam.",
        "Kijk naar je docent bij elke nieuwe start.",
      ],
      musicParts: [
        { title: "Nootlengtes 1-2-4 tellen", embedUrl: "" },
        { title: "We Will Rock You melodiedeel", embedUrl: "" },
      ],
      practiceParagraph: "Oefen in korte rondes van 5 minuten: eerst nootlengtes, daarna een stukje uit het lied.",
      practiceBullets: [
        "Speel 1 regel met tellen, 1 regel zonder tellen.",
        "Gebruik een rustig tempo en maak het pas later sneller.",
        "Kies een lastig stukje en oefen dat 4 keer apart.",
        "Bonus: verzin een ritme-klapspel dat bij je melodie past.",
      ],
      closingText: "Sterk gewerkt. Je melodie klinkt al veel zekerder.",
    },
    3: {
      subtitle: "Nieuwe noten ontdekken en voor het eerst samenspelen met video.",
      introTitle: "Nieuwe noten, nieuw niveau",
      introParagraphs: [
        "Je leert vandaag het hele rijtje van laag naar hoog spelen. Zo train je je oren en je stokcontrole.",
        "Daarna ga je met je team richting I Feel Good en oefen je op tellen bij rusten.",
      ],
      highlights: [
        "Je speelt een volledige toonladder op je klokkenspel.",
        "Je wisselt sneller tussen lage en hoge noten.",
        "Je oefent met inzetten na rusten.",
      ],
      tips: [
        "Zeg de nootnamen zachtjes mee tijdens het spelen.",
        "Blijf je stokken ontspannen vasthouden.",
        "Luister of elke noot even duidelijk klinkt.",
      ],
      musicParts: [
        { title: "Toonladder C t/m hoge C", embedUrl: "" },
        { title: "I Feel Good: eerste 30 maten", embedUrl: "" },
      ],
      practiceParagraph: "Speel eerst de toonladder, daarna een kort stuk uit I Feel Good. Herhaal vooral de overgangen die lastig zijn.",
      practiceBullets: [
        "Toonladder 2 keer omhoog en 2 keer omlaag.",
        "Klap de eerste 5 rustmaten voordat je speelt.",
        "Oefen met de video en let op het instapmoment.",
        "Bonus: maak een vraag-en-antwoord melodie met 2 maten.",
      ],
      closingText: "Knap gedaan. Je kunt al goed schakelen tussen noten.",
    },
    4: {
      subtitle: "Spelen met tempo en hard-zacht voor meer kracht in je muziek.",
      introTitle: "Tempo en dynamiek",
      introParagraphs: [
        "Muziek is meer dan juiste noten: hoe snel en hoe hard je speelt maakt veel uit.",
        "Je oefent vandaag langzaam, normaal en snel, en ook zacht naar hard (crescendo).",
      ],
      highlights: [
        "Je ervaart verschil tussen langzaam, normaal en snel tempo.",
        "Je oefent piano (zacht) en forte (hard).",
        "Je telt lange rusten in I Feel Good en zet daarna samen in.",
        "Je past tempo en dynamiek toe in bekende stukken.",
      ],
      tips: [
        "Gebruik kleine stokbewegingen voor zacht spel.",
        "Maak grotere bewegingen voor hard spel.",
        "Teken p en f in je boek waar dat past.",
      ],
      musicParts: [
        { title: "Tempo-oefening: 3 snelheden", embedUrl: "" },
        { title: "Dynamiek: zacht naar hard", embedUrl: "" },
      ],
      practiceParagraph: "Kies een kort stukje en speel het 3 keer: langzaam, normaal en snel. Herhaal daarna met zacht en hard.",
      practiceBullets: [
        "Zet een timer van 6 minuten en oefen in tempo-blokjes.",
        "Markeer 2 plekken waar je zacht speelt.",
        "Markeer 2 plekken waar je hard speelt.",
        "Bonus: maak thuis een mini-concert voor iemand van 1 minuut.",
      ],
      closingText: "Mooi gewerkt. Jij laat je muziek nu echt leven.",
    },
    5: {
      subtitle: "Repeteren voor het optreden met focus op samen starten en afronden.",
      introTitle: "Herhalen voor het optreden",
      introParagraphs: [
        "Vandaag doe je bijna een echt optreden: meerdere stukken achter elkaar.",
        "Je oefent op rustig klaarstaan, goed kijken naar je docent en samen afsluiten.",
      ],
      highlights: [
        "Je speelt een volledige repetitie met je team.",
        "Je oefent overgangen tussen nummers.",
        "Je leert omgaan met gezonde zenuwen.",
      ],
      tips: [
        "Kijk voor elke start naar je docent.",
        "Adem rustig in als je zenuwachtig bent.",
        "Blijf in de maat, ook als je een noot mist.",
      ],
      musicParts: [],
      practiceParagraph: "Doe thuis een mini-optreden: speel 2 stukken na elkaar zonder stoppen.",
      practiceBullets: [
        "Start elke keer met 4 tellen aftellen.",
        "Oefen je buiging of slotmoment met een glimlach.",
        "Schrijf op welk stukje je nog extra wilt oefenen.",
        "Bonus: maak een teamnaam voor jullie optreden.",
      ],
      closingText: "Je bent bijna podiumklaar. Vertrouw op jezelf en je team.",
    },
    6: {
      subtitle: "Muziek wordt rijker: je speelt verschillende partijen tegelijk.",
      introTitle: "Samen klinkt het groter",
      introParagraphs: [
        "In deze les ontdek je dat verschillende partijen samen mooier klinken dan allemaal hetzelfde.",
        "Je oefent met verschillende partijen tegelijk en daarna met Happy Birthday.",
      ],
      highlights: [
        "Je luistert beter naar andere teams terwijl jij je eigen partij speelt.",
        "Je ervaart hoe lagen in muziek elkaar aanvullen.",
        "Je speelt Happy Birthday met meer muzikaal gevoel.",
      ],
      tips: [
        "Speel niet harder dan nodig, zodat je elkaar blijft horen.",
        "Focus op je eigen taak en tel intern door.",
        "Kijk regelmatig op naar je docent.",
      ],
      musicParts: [
        { title: "Oefening met verschillende partijen", embedUrl: "" },
        { title: "Happy Birthday samenspel", embedUrl: "" },
      ],
      practiceParagraph: "Speel jouw stukje met een opname of met iemand anders. Het doel is samen netjes in de maat blijven.",
      practiceBullets: [
        "Speel 1 keer solo en 1 keer met begeleiding.",
        "Luister of je nog steeds in de maat bent.",
        "Oefen een rustige start en rustige afsluiting.",
        "Bonus: speel Happy Birthday voor een familielid.",
      ],
      closingText: "Sterk samengespeeld. Jullie klinken als een echt team.",
    },
    7: {
      subtitle: "Filmmuziek spelen en sfeer maken met zacht en hard.",
      introTitle: "Filmmuziek: Jurassic Park",
      introParagraphs: [
        "Vandaag ga je aan de slag met filmmuziek. Denk na over gevoel: spannend, groots of rustig.",
        "Je leert dat dynamiek helpt om dat gevoel in muziek te laten horen.",
      ],
      highlights: [
        "Je speelt herkenbare filmmuziek met je team.",
        "Je gebruikt zacht en hard om opbouw te maken.",
        "Je leert beter luisteren naar sfeer in muziek.",
      ],
      tips: [
        "Begin extra zacht waar het stuk rustig opent.",
        "Bouw per regel een beetje meer volume op.",
        "Hou je tempo stabiel terwijl je harder speelt.",
      ],
      musicParts: [
        { title: "Jurassic Park thema", embedUrl: "" },
        { title: "Dynamiek-opbouw oefening", embedUrl: "" },
      ],
      practiceParagraph: "Kies 1 deel van Jurassic Park en maak daar een zachte start met een sterke opbouw.",
      practiceBullets: [
        "Teken in je boek waar je piano en forte speelt.",
        "Oefen het stuk eerst zonder haast.",
        "Speel daarna nog 1 keer met meer energie.",
        "Bonus: bedenk een filmscene die bij jouw klank past.",
      ],
      closingText: "Jouw spel klinkt nu echt als filmmuziek.",
    },
    8: {
      subtitle: "Nieuwe nootlengte leren: de punt achter de noot.",
      introTitle: "Noot met een punt",
      introParagraphs: [
        "Een punt achter een noot maakt de noot langer. Dat geeft een ander ritmegevoel.",
        "Je oefent dit in Oh When the Saints en combineert het met tempo en dynamiek.",
      ],
      highlights: [
        "Je past puntnoten toe in een nieuw muziekstuk.",
        "Je houdt de tel vast bij langere noten.",
        "Je werkt verder aan zacht/hard en langzaam/snel.",
      ],
      tips: [
        "Klap het ritme eerst voordat je speelt.",
        "Tel hardop mee bij langere noten.",
        "Gebruik potloodtekens in je boek als geheugensteun.",
      ],
      musicParts: [
        { title: "Oh When the Saints basis", embedUrl: "" },
        { title: "Puntnoot ritme-oefening", embedUrl: "" },
      ],
      practiceParagraph: "Oefen 1 regel met puntnoten en herhaal die tot je niet meer hoeft te gokken op de tel.",
      practiceBullets: [
        "Klap eerst het ritme, speel daarna pas.",
        "Speel langzaam en houd noten echt lang genoeg aan.",
        "Herhaal met een iets sneller tempo.",
        "Bonus: maak een eigen ritme met 1 puntnoot erin.",
      ],
      closingText: "Knap. Je kunt nu met een nieuwe nootlengte werken.",
    },
    9: {
      subtitle: "Herhalingstekens snappen en toepassen in Happy.",
      introTitle: "Herhalen in muziek",
      introParagraphs: [
        "Je leert hoe herhalingstekens werken: terug naar het juiste punt en opnieuw spelen.",
        "Daarna oefen je Happy met rusten en goede inzetten, ook met video.",
      ],
      highlights: [
        "Je herkent herhalingstekens in je bladmuziek.",
        "Je blijft tellen tijdens langere rusten.",
        "Je speelt een langer stuk met meer focus.",
      ],
      tips: [
        "Zet een klein pijltje bij je herhaalpunt in potlood.",
        "Tel rustmaten met je vingers mee.",
        "Laat je niet opjagen als het tempo stijgt.",
      ],
      musicParts: [
        { title: "Happy: deel A", embedUrl: "" },
        { title: "Happy: herhaling + inzetten", embedUrl: "" },
      ],
      practiceParagraph: "Speel Happy in kleine stukken. Plak daarna de delen aan elkaar zonder te stoppen.",
      practiceBullets: [
        "Oefen eerst de maten rond het herhalingsteken.",
        "Tel alle rusten hardop mee.",
        "Speel 1 keer met video en 1 keer zonder.",
        "Bonus: kies je favoriete stukje en geef het een titel.",
      ],
      closingText: "Goed volgehouden. Lange stukken gaan je steeds beter af.",
    },
    10: {
      subtitle: "Feestelijke afsluiting: alles wat je hebt geleerd laten horen.",
      introTitle: "Laatste les, groot applaus",
      introParagraphs: [
        "Vandaag sluit je het programma af met muziek, plezier en teamwork.",
        "Je speelt Happy nog eens sterk door en kijkt terug op wat je allemaal hebt geleerd.",
      ],
      highlights: [
        "Je laat zien hoeveel je bent gegroeid als muzikant.",
        "Je speelt met meer zelfvertrouwen en rust.",
        "Je ontdekt welke muziek je hierna nog wilt leren.",
      ],
      tips: [
        "Speel met een glimlach en rechte houding.",
        "Focus op samen starten en samen stoppen.",
        "Geniet van het moment, muziek maken is leuk.",
      ],
      musicParts: [
        { title: "Happy: volledige versie", embedUrl: "" },
        { title: "Finale met dynamiek", embedUrl: "" },
      ],
      practiceParagraph: "Kies je favoriete stuk van alle lessen en speel het alsof je op een podium staat.",
      practiceBullets: [
        "Speel Happy 2 keer: rustig en daarna met meer energie.",
        "Kies 1 oud stuk en speel dat ook nog eens.",
        "Vertel thuis wat je moeilijk vond en wat nu lukt.",
        "Bonus: schrijf 3 dingen op waar je trots op bent.",
      ],
      closingText: "Fantastisch gewerkt. Blijf muziek maken, want jij kunt dit.",
    },
  },
  pBuzz: {
    1: {
      subtitle: "Kennismaken met de pBuzz en je eerste toon laten klinken.",
      introTitle: "Welkom bij Team Blaas",
      introParagraphs: [
        "Je leert hoe je met je lippen en adem een toon maakt op de pBuzz. Dat kost soms even tijd, en dat is helemaal normaal.",
        "Daarna oefen je de schuifkleuren en speel je de eerste noten op de tel.",
      ],
      highlights: [
        "Je leert toon maken met mondstuk, liptrilling en lucht.",
        "Je koppelt schuifstanden aan kleuren in het lesboek.",
        "Je speelt losse noten en daarna een korte volgorde.",
      ],
      tips: [
        "Houd je schouders laag en ontspannen.",
        "Probeer kleine korte luchtstootjes als start.",
        "Schuif pas als je toon stabiel klinkt.",
      ],
      musicParts: [
        {
          title: "Video: toonladder voorspelen",
          embedUrl: "https://www.youtube.com/embed/XB_Gi7zPDgo",
          description: "Toonladder voorspelen.",
        },
      ],
      extraMusicPartsTitle: "Extra videos voor les 1",
      extraMusicParts: [
        {
          title: "Video: oefening 1 voorspelen",
          embedUrl: "https://www.youtube.com/embed/gpi_s170wI0",
          description: "Oefening 1 voorspelen.",
        },
        {
          title: "Video: Eye of the tiger voorspelen",
          embedUrl: "https://www.youtube.com/embed/T7ZYzKcHNPU",
          description: "Eye of the tiger voorspelen.",
        },
      ],
      practiceParagraph: "Oefen in korte blokjes: toon maken, schuif kiezen, toon weer netjes afronden.",
      practiceBullets: [
        "Maak 5 korte tonen met dezelfde klank.",
        "Speel 3 kleuren achter elkaar zonder haast.",
        "Pauzeer tussendoor om je lippen te ontspannen.",
        "Bonus: maak een blaas-groet van 3 noten.",
      ],
      closingText: "Super start. Je eerste pBuzz-tonen zijn binnen.",
    },
    2: {
      subtitle: "Leren tellen met nootlengtes en strakker samenspelen.",
      introTitle: "Meer grip op je pBuzz",
      introParagraphs: [
        "Je oefent met noten van 1, 2 en 4 tellen. Zo klinkt je partij rustiger en duidelijker.",
        "Daarna speel je opnieuw Eye of the Tiger en werk je aan We Will Rock You.",
      ],
      highlights: [
        "Je gebruikt nootlengtes met een vaste tel.",
        "Je ademt slimmer tussen de zinnen.",
        "Je partij in Eye of the Tiger wordt zekerder.",
      ],
      tips: [
        "Adem laag in voordat je start.",
        "Blaas met constante luchtstroom.",
        "Wissel schuif rustig op de tel.",
      ],
      musicParts: [
        {
          title: "Video: verschillende nootlengtes oefenen",
          embedUrl: "https://www.youtube.com/embed/9r0ZQrCvna8",
          description: "Verschillende nootlengtes oefening voorspelen.",
        },
      ],
      extraMusicPartsTitle: "Extra videos: oefeningen uit het boek",
      extraMusicParts: [
        {
          title: "Video: voorspelen oefening 1",
          embedUrl: "https://www.youtube.com/embed/HdHj6ZENP_M",
          description: "Voorspelen oefening 1.",
        },
        {
          title: "Video: voorspelen oefening 2",
          embedUrl: "https://www.youtube.com/embed/88plWy9QMWk",
          description: "Voorspelen oefening 2.",
        },
      ],
      finalMusicPartsTitle: "Extra video: We will rock you",
      finalMusicParts: [
        {
          title: "Video: voorspelen We will rock you",
          embedUrl: "https://www.youtube.com/embed/rqLb0TSwOI4",
          description: "Voorspelen We will rock you.",
        },
      ],
      practiceParagraph: "Werk in rondes: eerst lange tonen, dan korte patronen. Let op rustige adem en duidelijke start.",
      practiceBullets: [
        "Speel een F 4 tellen lang, 4 keer.",
        "Oefen 2 lastige maatjes extra langzaam.",
        "Adem op dezelfde plekken in elke herhaling.",
        "Bonus: verzin een cheer op 2 tonen voor je team.",
      ],
      closingText: "Sterk geblazen. Je maatgevoel wordt steeds beter.",
    },
    3: {
      subtitle: "Nieuwe noten en oefenen met video-inzetten.",
      introTitle: "Nieuwe tonen en doorblazen",
      introParagraphs: [
        "Je herhaalt alle kleuren en oefent daarna met gebonden noten: doorblazen terwijl je schuift.",
        "Vervolgens werk je aan I Feel Good en let je op rustmaten en instappen.",
      ],
      highlights: [
        "Je speelt alle pBuzz-noten met meer zekerheid.",
        "Je oefent legato: noten aan elkaar binden.",
        "Je start op tijd na rusten in het stuk.",
      ],
      tips: [
        "Hou je lucht constant tijdens schuiven.",
        "Oefen in korte lusjes van 2 maten.",
        "Laat je toon niet wegvallen bij wissels.",
      ],
      musicParts: [
        {
          title: "Video: voorspelen I got you t/m maat 30",
          embedUrl: "https://www.youtube.com/embed/poo48C2iaWE",
          description: "Voorspelen I got you t/m maat 30.",
        },
        {
          title: "Video: meespeeltrack voor I got you",
          embedUrl: "https://www.youtube.com/embed/wMOa1lKpFNQ",
          description: "De meespeeltrack voor I got you.",
        },
      ],
      practiceParagraph: "Speel eerst kleuren op rij, daarna 1 stukje met rusten. Oefen vooral het moment van inzetten.",
      practiceBullets: [
        "Speel 2 keer alle kleuren op volgorde.",
        "Tel 5 rustmaten hardop mee.",
        "Herhaal het startmoment 4 keer.",
        "Bonus: maak een glij-effect van laag naar hoog en terug.",
      ],
      closingText: "Mooi werk. Je pBuzz-klank wordt steeds muzikaler.",
    },
    4: {
      subtitle: "Tempo en dynamiek gebruiken zonder toonverlies.",
      introTitle: "Snel, langzaam, zacht en hard",
      introParagraphs: [
        "Vandaag ontdek je hoe tempo en dynamiek je muziek spannend maken.",
        "Je oefent met verschillende snelheden en met piano/forte in bekende stukken.",
      ],
      highlights: [
        "Je speelt op verschillende tempi met controle.",
        "Je gebruikt zachte en harde klank op de juiste plek.",
        "Je telt lange rusten in I Feel Good en zet daarna samen in.",
        "Je rondt I Feel Good verder af.",
      ],
      tips: [
        "Houd je mondstand stabiel als tempo wijzigt.",
        "Maak kleinere luchtstroom voor zacht spel.",
        "Teken p en f in je boek.",
      ],
      musicParts: [
        {
          title: "Video: verschillende tempi, oefening 1 uit les 2",
          embedUrl: "https://www.youtube.com/embed/bRoV7foX8V8",
          description: "Voorspelen van verschillende tempi oefening 1 les 2.",
        },
      ],
      extraMusicPartsTitle: "Extra videos: I got you",
      extraMusicParts: [
        {
          title: "Video: I got you vanaf maat 43",
          embedUrl: "https://www.youtube.com/embed/v0yoiaoK-iA",
          description: "Voorspelen van I got you vanaf maat 43.",
        },
        {
          title: "Video: meespeeltrack voor I got you",
          embedUrl: "https://www.youtube.com/embed/wMOa1lKpFNQ",
          description: "De meespeel track voor I got you.",
        },
      ],
      practiceParagraph: "Kies 1 regel en speel die langzaam, normaal en snel. Doe daarna hetzelfde met zacht en hard.",
      practiceBullets: [
        "Oefen met een rustige aftel van 4.",
        "Speel 1 keer heel zacht, 1 keer stevig.",
        "Tel rustmaten mee met je vingers.",
        "Bonus: maak een eigen startsignaal van 2 noten.",
      ],
      closingText: "Knap. Jij bestuurt nu echt je klank.",
    },
    5: {
      subtitle: "Repeteren voor het optreden met stevige inzet en ademcontrole.",
      introTitle: "Klaar voor het podium",
      introParagraphs: [
        "Je oefent vandaag een volledige doorloop zoals bij het optreden.",
        "Daarbij let je op houding, ademen, kijken naar je docent en samen afronden.",
      ],
      highlights: [
        "Je speelt meerdere stukken achter elkaar.",
        "Je maakt duidelijke starts met goede adem.",
        "Je leert rustig omgaan met zenuwen.",
      ],
      tips: [
        "Plan je ademmomenten vooraf in je boek.",
        "Kijk op bij elke nieuwe inzet.",
        "Blijf doorspelen ook als iets niet perfect gaat.",
      ],
      musicParts: [],
      practiceParagraph: "Speel thuis 2 nummers achter elkaar zonder pauze. Dit traint je adem en focus voor het optreden.",
      practiceBullets: [
        "Start elke keer met 4 tellen.",
        "Markeer 2 vaste ademplekken.",
        "Oefen je slotnoot extra netjes.",
        "Bonus: stel jezelf voor als presentator van jullie optreden.",
      ],
      closingText: "Je bent er bijna. Team Blaas kan dit.",
    },
    6: {
      subtitle: "Meer lagen in muziek: jouw partij aanvullen met de groep.",
      introTitle: "Samen in verschillende partijen",
      introParagraphs: [
        "Vandaag leer je dat niet iedereen hetzelfde hoeft te spelen om samen goed te klinken.",
        "Jouw pBuzz-stukje vult andere teams aan in stukken met verschillende lagen en in Happy Birthday.",
      ],
      highlights: [
        "Je speelt je eigen partij terwijl anderen iets anders doen.",
        "Je luistert beter naar de groep en past je volume goed aan.",
        "Je combineert toonvast spelen met samenspel.",
      ],
      tips: [
        "Speel rond en niet te hard, zodat lagen hoorbaar blijven.",
        "Blijf doorademen, ook in rustige stukken.",
        "Kijk op bij overgangen.",
      ],
      musicParts: [
        { title: "Blaaspartij met verschillende lagen", embedUrl: "" },
        { title: "Happy Birthday met teamtaken", embedUrl: "" },
      ],
      practiceParagraph: "Oefen je stukje met een rustige toon en een vaste maat. Het doel is samen mooi klinken.",
      practiceBullets: [
        "Speel met zachte toon en luister naar anderen.",
        "Herhaal je lastigste overgang 5 keer.",
        "Speel 1 keer mee met een opname.",
        "Bonus: bedenk een tweede stem op 2 noten.",
      ],
      closingText: "Mooi samenspel. Jouw stukje geeft kleur aan het orkest.",
    },
    7: {
      subtitle: "Filmmuziek met sfeer, opbouw en duidelijke klank.",
      introTitle: "Jurassic Park op pBuzz",
      introParagraphs: [
        "In filmmuziek gaat het om gevoel. Je bouwt spanning op door rustig te starten en sterker te eindigen.",
        "Vandaag oefen je dat in Jurassic Park met aandacht voor klank en maat.",
      ],
      highlights: [
        "Je speelt een herkenbare filmmelodie.",
        "Je gebruikt dynamiek voor opbouw.",
        "Je houdt je toon stabiel bij langere lijnen.",
      ],
      tips: [
        "Begin met kleine lucht en bouw uit.",
        "Hou je schuifwissels rustig en precies.",
        "Speel niet te hard in het begin.",
      ],
      musicParts: [
        { title: "Jurassic Park hoofdthema", embedUrl: "" },
        { title: "Dynamiek-opbouw in blaaslijn", embedUrl: "" },
      ],
      practiceParagraph: "Oefen 1 stukje met zachte start en grote finale. Herhaal tot je het verschil goed hoort.",
      practiceBullets: [
        "Speel het thema eerst traag en zuiver.",
        "Voeg daarna geleidelijk meer volume toe.",
        "Bewaar lucht voor de lange noten.",
        "Bonus: verzin een dinosaurus-roep met 3 noten.",
      ],
      closingText: "Krachtig gedaan. Je pBuzz klinkt filmwaardig.",
    },
    8: {
      subtitle: "Nieuwe nootlengte toepassen in Oh When the Saints.",
      introTitle: "Puntnoot en blaasflow",
      introParagraphs: [
        "Je leert vandaag hoe een punt achter een noot de lengte vergroot.",
        "Bij pBuzz oefen je ook een mooi glij-effect door gebonden noten met schuifbeweging.",
      ],
      highlights: [
        "Je speelt puntnoten met juiste lengte.",
        "Je oefent glij-effecten met doorlopende lucht.",
        "Je combineert tempo en dynamiek in een nieuw stuk.",
      ],
      tips: [
        "Tel extra goed bij puntnoten.",
        "Blaas door tijdens het schuiven voor het effect.",
        "Oefen eerst langzaam, daarna iets sneller.",
      ],
      musicParts: [
        { title: "Oh When the Saints blaaspartij", embedUrl: "" },
        { title: "Gebonden noot-effect", embedUrl: "" },
      ],
      practiceParagraph: "Oefen 1 regel met puntnoten en 1 regel met gebonden noten. Laat beide helder en rustig klinken.",
      practiceBullets: [
        "Speel puntnoten met hardop tellen.",
        "Oefen een glij van C naar F en terug.",
        "Herhaal met een rustige toon zonder haperen.",
        "Bonus: maak een mini-glissando als intro.",
      ],
      closingText: "Sterk gespeeld. Je beheerst nu een nieuwe nootlengte en effect.",
    },
    9: {
      subtitle: "Herhalingstekens lezen en Happy met focus spelen.",
      introTitle: "Happy met herhaling",
      introParagraphs: [
        "Je leert herhalingstekens herkennen en precies terug te springen in de muziek.",
        "Daarna speel je Happy met rusten, tellen en inzetten, ook met YouTube-begeleiding.",
      ],
      highlights: [
        "Je begrijpt hoe herhaaltekens werken.",
        "Je houdt je adem rustig bij langere stukken.",
        "Je speelt langer achter elkaar en blijft goed opletten.",
      ],
      tips: [
        "Markeer herhaalpunten met potlood.",
        "Adem klein en snel in tijdens korte rust.",
        "Blijf intern tellen, ook als jij niet speelt.",
      ],
      musicParts: [
        { title: "Happy: basislijn", embedUrl: "" },
        { title: "Happy: herhaling en rusten", embedUrl: "" },
      ],
      practiceParagraph: "Breek Happy op in stukjes. Oefen vooral de delen met rusten en herhaling tot je zeker bent.",
      practiceBullets: [
        "Speel eerst alleen de maten met herhaling.",
        "Tel alle rusten hardop.",
        "Speel 1 keer met video op rustig volume.",
        "Bonus: bedenk een eigen eindnoot voor je team.",
      ],
      closingText: "Goed volgehouden. Je speelt nu langere muziek met meer rust.",
    },
    10: {
      subtitle: "Feestelijke afsluiting met Happy en terugblik op je groei.",
      introTitle: "Finale van Team Blaas",
      introParagraphs: [
        "Vandaag vier je wat je hebt geleerd. Je speelt Happy nog eens met dynamiek en zelfvertrouwen.",
        "Je denkt ook na over welke instrumenten of muziek je hierna wilt ontdekken.",
      ],
      highlights: [
        "Je laat horen dat je toonvorming sterk is gegroeid.",
        "Je combineert maat, adem en zacht-hard spelen.",
        "Je sluit het programma positief af.",
      ],
      tips: [
        "Start rustig, bouw daarna kracht op.",
        "Kijk naar je docent bij elke overgang.",
        "Geniet van het spelen, dat hoor je terug.",
      ],
      musicParts: [
        { title: "Happy volledige blaaspartij", embedUrl: "" },
        { title: "Finale met dynamiek", embedUrl: "" },
      ],
      practiceParagraph: "Speel je favoriete stuk uit de afgelopen lessen en laat horen wat jij het beste kunt op pBuzz.",
      practiceBullets: [
        "Speel Happy met 2 verschillende dynamieken.",
        "Kies 1 oud stuk en speel dat vloeiend.",
        "Vertel welke les jij het leukst vond.",
        "Bonus: bedenk een nieuwe teamgroet met toon en ritme.",
      ],
      closingText: "Fantastisch werk. Blijf blazen en blijf plezier maken.",
    },
  },
  Trommel: {
    1: {
      subtitle: "Kennismaken met trommelen en je eerste ritmes spelen.",
      introTitle: "Welkom bij Team Ritme",
      introParagraphs: [
        "Je leert hoe je stokken goed vasthoudt en hoe je speelt op de trommel en met stokken tegen elkaar.",
        "Daarna speel je een eerste ritmepatroon op de tel met je groep.",
      ],
      highlights: [
        "Je gebruikt de juiste stokgreep voor controle.",
        "Je leert twee soorten slagen in de lesmuziek.",
        "Je speelt samen met een duidelijke tel.",
      ],
      tips: [
        "Houd je polsen los en ontspannen.",
        "Speel klein en precies, niet meteen hard.",
        "Tel hardop mee terwijl je slaat.",
      ],
      musicParts: [
        {
          title: "Video: zo houd je de trommelstokken goed vast (les 1)",
          embedUrl: "https://www.youtube.com/embed/YnyaKLtjFXo",
          description: "In deze video zie je stap voor stap hoe je de stokken vasthoudt voor controle en ontspanning.",
        },
      ],
      extraMusicParts: [
        {
          title: "Video: extra uitleg over stokhouding (les 1)",
          embedUrl: "https://www.youtube.com/embed/erehBkZbSLQ",
          description: "In deze video wordt het eerste gezamenlijke stuk uit het boek voorgespeeld.",
        },
        {
          title: "Video: basisbewegingen en meespelen (les 1)",
          embedUrl: "https://www.youtube.com/embed/wOb0Hik0d0c",
          description: "In deze video wordt het nummer Eye of the Tiger voorgespeeld.",
        },
      ],
      practiceParagraph: "Oefen de stokgreep eerst zonder te slaan. Speel daarna rustig het eerste ritme.",
      practiceBullets: [
        "Doe 20 seconden grip-check per hand.",
        "Speel het patroon 3 keer langzaam.",
        "Houd de stokhoogte laag en gelijk.",
        "Bonus: maak een naamritme met je voornaam.",
      ],
      closingText: "Topstart. Je bent officieel ritmemaker.",
    },
    2: {
      subtitle: "Meer ritmegevoel met nootlengtes en vaste tel.",
      introTitle: "Ritmes met 1, 2 en 4 tellen",
      introParagraphs: [
        "Je leert dat sommige slagen langer tellen dan andere. Zo klinkt je ritme meteen strakker.",
        "Daarna oefen je Eye of the Tiger opnieuw en begin je aan We Will Rock You.",
      ],
      highlights: [
        "Je past nootlengtes toe in je ritmes.",
        "Je houdt een vast ritme.",
        "Je versterkt bekende stukken met strakke maat.",
      ],
      tips: [
        "Gebruik een vaste tel in je hoofd.",
        "Begin langzaam en versnel pas als het strak blijft.",
        "Laat elke slag even hoog terugkomen.",
      ],
      musicParts: [
        {
          title: "Video: verschillende nootlengtes spelen",
          embedUrl: "https://www.youtube.com/embed/FsWcMAj4Fls",
          description: "Voordoen oefening van het spelen van verschillende nootlengtes.",
        },
      ],
      extraMusicPartsTitle: "Extra videos: oefeningen uit het boek",
      extraMusicParts: [
        {
          title: "Video: voorspelen van oefening 1",
          embedUrl: "https://www.youtube.com/embed/7cN2fPL6jUw",
          description: "Voorspelen van oefening 1.",
        },
        {
          title: "Video: voorspelen van oefening 2",
          embedUrl: "https://www.youtube.com/embed/P3T9Yo9Uczw",
          description: "Voorspelen van oefening 2.",
        },
      ],
      finalMusicPartsTitle: "Extra video: We Will Rock You",
      finalMusicParts: [
        {
          title: "Video: We Will Rock You",
          embedUrl: "https://www.youtube.com/embed/7lyfvNgFMhI",
          description: "Voorspelen van We will Rock you!",
        },
      ],
      practiceParagraph: "Klap eerst je ritme, speel daarna op de trommel. Zo voel je sneller of je maat klopt.",
      practiceBullets: [
        "Tel 4 tellen in voor elke start.",
        "Herhaal 1 lastig maatje 5 keer.",
        "Speel 1 keer zacht en 1 keer normaal hard.",
        "Bonus: maak een bodypercussie-versie van je ritme.",
      ],
      closingText: "Lekker strak. Jij houdt de motor van het orkest draaiend.",
    },
    3: {
      subtitle: "Nieuwe variatie en tellen tijdens rusten.",
      introTitle: "Ritme + rust = strak spelen",
      introParagraphs: [
        "Je herhaalt eerst vorige patronen en oefent daarna nieuwe variaties.",
        "In deze les is rust net zo belangrijk als slaan: je blijft tellen ook als je niet speelt.",
      ],
      highlights: [
        "Je telt rusten mee zonder uit de maat te raken.",
        "Je speelt strakker samen met andere teams.",
        "Je werkt toe naar I Feel Good met video.",
      ],
      tips: [
        "Beweeg je stok licht mee tijdens rusten.",
        "Gebruik korte, gecontroleerde slagen.",
        "Kijk op bij het instapmoment.",
      ],
      musicParts: [
        {
          title: "Video: I Got You tot en met maat 30",
          embedUrl: "https://www.youtube.com/embed/vpNQuDk5EGE",
          description: "In deze video wordt I got you voorgespeeld tot maat 30.",
        },
        {
          title: "Video: meespelen met de leerlingenpartij",
          embedUrl: "https://www.youtube.com/embed/wMOa1lKpFNQ",
          description: "Dit is de muziek waarbij meegespeeld kan worden met de partij van de leerlingen.",
        },
      ],
      practiceParagraph: "Oefen je ritme met rusten op een vaste tel. Stop niet als je een fout maakt, maar pak de volgende tel.",
      practiceBullets: [
        "Klap 5 rustmaten en stap daarna in.",
        "Speel de overgang naar je inzet 4 keer.",
        "Houd je slagen klein en gelijkmatig.",
        "Bonus: maak een stop-start ritmespel met een vriend.",
      ],
      closingText: "Goed gedaan. Je maatgevoel tijdens rusten wordt sterk.",
    },
    4: {
      subtitle: "Tempo en zacht-hard gebruiken voor meer energie in je ritme.",
      introTitle: "Ritme met karakter",
      introParagraphs: [
        "Je ontdekt het verschil tussen langzaam, normaal en snel tempo.",
        "Daarna oefen je zacht en hard spelen, en pas je dat toe in bekende stukken.",
      ],
      highlights: [
        "Je leert tempo wisselen zonder je ritme kwijt te raken.",
        "Je speelt met duidelijke verschillen tussen zacht en hard.",
        "Je telt lange rusten in I Feel Good en zet op tijd weer in.",
        "Je maakt opbouw in je ritme met crescendo.",
      ],
      tips: [
        "Gebruik polscontrole in plaats van alleen kracht.",
        "Oefen eerst zacht, voeg daarna volume toe.",
        "Blijf op de tel terwijl je harder speelt.",
      ],
      musicParts: [
        {
          title: "Video: oefening 1 van les 2 in verschillende tempi",
          embedUrl: "https://www.youtube.com/embed/8kBytBY0tXQ",
          description: "Hierin wordt voorgespeeld hoe je oefening 1 van les 2 in verschillende tempi kunt spelen.",
        },
      ],
      extraMusicPartsTitle: "Extra videos: I got you",
      extraMusicParts: [
        {
          title: "Video: I got you vanaf maat 43",
          embedUrl: "https://www.youtube.com/embed/1C82QUBdCaI",
          description: "Hierin spelen we I got you vanaf maat 43 voor.",
        },
        {
          title: "Video: meespelen met I got you (leerlingenpartij)",
          embedUrl: "https://www.youtube.com/embed/wMOa1lKpFNQ",
          description: "Dit is de video voor de leerlingen om I got you mee te kunnen spelen.",
        },
      ],
      practiceParagraph: "Speel hetzelfde ritme in 3 tempo's en daarna zacht en hard. Zo train je controle.",
      practiceBullets: [
        "Speel 30 seconden langzaam en strak.",
        "Speel 30 seconden normaal tempo.",
        "Speel 30 seconden snel zonder te jagen.",
        "Bonus: maak een crescendo van 4 tellen in je ritme.",
      ],
      closingText: "Sterk gespeeld. Jij geeft het orkest energie.",
    },
    5: {
      subtitle: "Repeteren voor het optreden en overgangen oefenen.",
      introTitle: "Podiumrepetitie",
      introParagraphs: [
        "Je speelt vandaag een bijna complete set, net als bij een echt optreden.",
        "Daarbij oefen je starten, wisselen tussen stukken en strak eindigen.",
      ],
      highlights: [
        "Je draagt het tempo voor de hele groep.",
        "Je oefent overgangen tussen nummers.",
        "Je bouwt zelfvertrouwen op voor het optreden.",
      ],
      tips: [
        "Houd je tel rustig en betrouwbaar.",
        "Kijk naar je docent bij elke start.",
        "Blijf in je ritme als iets misgaat.",
      ],
      musicParts: [],
      practiceParagraph: "Doe thuis een mini-repetitie: speel twee stukken achter elkaar met korte wissel.",
      practiceBullets: [
        "Tel altijd eerst 4 tellen in.",
        "Oefen 2 overgangen tussen stukken.",
        "Sluit elk stuk af op een duidelijke laatste slag.",
        "Bonus: bedenk een coole podiumhouding voor je team.",
      ],
      closingText: "Je bent klaar voor het podium. Ritmeteam staat sterk.",
    },
    6: {
      subtitle: "Jouw ritme past als puzzelstuk in de groep.",
      introTitle: "Ritmelaag in het orkest",
      introParagraphs: [
        "Vandaag ontdek je dat verschillende partijen samen een voller geluid maken.",
        "Jouw ritme moet stevig blijven terwijl anderen een andere partij spelen.",
      ],
      highlights: [
        "Je houdt een vast ritme terwijl andere teams iets anders spelen.",
        "Je luistert tegelijk naar de rest van de groep.",
        "Je speelt Happy Birthday met duidelijke teamtaken.",
      ],
      tips: [
        "Speel duidelijk, maar niet te hard.",
        "Herhaal je basispatroon tot het automatisch voelt.",
        "Blijf tellen, ook bij stille momenten.",
      ],
      musicParts: [
        { title: "Ritmelaag in samenspel", embedUrl: "" },
        { title: "Happy Birthday ritme", embedUrl: "" },
      ],
      practiceParagraph: "Speel je patroon alsof jij de ritme-motor bent. Het doel is stabiel tempo voor iedereen.",
      practiceBullets: [
        "Speel 1 minuut door zonder stoppen.",
        "Wissel tussen zacht en normaal hard.",
        "Luister of je tempo gelijk blijft.",
        "Bonus: maak een tweede ritme als variatie.",
      ],
      closingText: "Mooi. Jij houdt het geheel bij elkaar.",
    },
    7: {
      subtitle: "Filmmuziek spelen met spanning, opbouw en controle.",
      introTitle: "Jurassic Park ritmes",
      introParagraphs: [
        "Filmmuziek vertelt een verhaal. Met ritme kun jij spanning en kracht laten voelen.",
        "Je oefent vandaag Jurassic Park en gebruikt dynamiek voor de opbouw.",
      ],
      highlights: [
        "Je speelt een filmritme met sfeer.",
        "Je bouwt op van zacht naar hard.",
        "Je houdt het tempo strak tijdens de opbouw.",
      ],
      tips: [
        "Begin klein en rustig.",
        "Vergroot je slagen stap voor stap.",
        "Blijf gelijkmatig tikken met beide handen.",
      ],
      musicParts: [
        { title: "Jurassic Park ritmepatroon", embedUrl: "" },
        { title: "Dynamiek-opbouw voor drums", embedUrl: "" },
      ],
      practiceParagraph: "Speel 1 ritmepatroon met duidelijke spanningsopbouw. Maak begin, midden en einde hoorbaar.",
      practiceBullets: [
        "Zet 3 dynamiekstappen in je patroon.",
        "Speel eerst langzaam, dan op tempo.",
        "Houd je polsen los tijdens hardere slagen.",
        "Bonus: maak een dino-rumble intro op je trommel.",
      ],
      closingText: "Stoer gespeeld. Je ritme maakt echt sfeer.",
    },
    8: {
      subtitle: "Nieuwe nootlengte oefenen in een nieuw stuk.",
      introTitle: "Puntnoot op ritme",
      introParagraphs: [
        "Je leert vandaag ritmes met een puntnoot. Dat vraagt extra goed tellen.",
        "Daarna gebruik je dit in Oh When the Saints met aandacht voor tempo en dynamiek.",
      ],
      highlights: [
        "Je speelt ritmes met puntnoten.",
        "Je houdt de maat vast bij langere tellen.",
        "Je combineert nieuw ritme met oud materiaal.",
      ],
      tips: [
        "Klap puntnoot-ritme eerst.",
        "Spreek de tellen hardop uit.",
        "Oefen kort, pauzeer, en herhaal.",
      ],
      musicParts: [
        { title: "Oh When the Saints ritmepartij", embedUrl: "" },
        { title: "Puntnoot tel-oefening", embedUrl: "" },
      ],
      practiceParagraph: "Oefen een ritmeregel met puntnoten tot je zonder twijfelen kunt doorspelen.",
      practiceBullets: [
        "Klap 4 keer het ritme met puntnoot.",
        "Speel daarna hetzelfde op de trommel.",
        "Herhaal met iets hoger tempo.",
        "Bonus: maak een 1-maats ritme met 1 puntnoot.",
      ],
      closingText: "Knap. Je ritme-taal wordt steeds groter.",
    },
    9: {
      subtitle: "Herhalingstekens toepassen in Happy met lange focus.",
      introTitle: "Happy en herhalen",
      introParagraphs: [
        "Je leert hoe je teruggaat naar een herhaalpunt in de muziek.",
        "Daarna speel je Happy met veel rusten en duidelijke inzetten.",
      ],
      highlights: [
        "Je herkent en gebruikt herhalingstekens.",
        "Je blijft tellen tijdens rustmaten.",
        "Je speelt een lang stuk met een vast ritme.",
      ],
      tips: [
        "Zet een markering bij herhaaltekens.",
        "Tel rusten met tikken op je been.",
        "Ga niet jagen als het spannend wordt.",
      ],
      musicParts: [
        { title: "Happy basisritme", embedUrl: "" },
        { title: "Happy met herhaling", embedUrl: "" },
      ],
      practiceParagraph: "Speel Happy in kleine stukken en plak ze daarna samen. Focus op rusten en instappen.",
      practiceBullets: [
        "Oefen eerst de herhaalmaten.",
        "Speel met metronoom op rustig tempo.",
        "Herhaal je startmoment 5 keer.",
        "Bonus: maak een eigen fill van 1 tel.",
      ],
      closingText: "Sterk werk. Jij houdt zelfs lange stukken strak.",
    },
    10: {
      subtitle: "Feestelijk afsluiten met ritme, energie en plezier.",
      introTitle: "Finale van Team Ritme",
      introParagraphs: [
        "Vandaag speel je Happy opnieuw en laat je horen hoe goed je ritme is geworden.",
        "Je kijkt terug op je groei en ontdekt welke muziek je nog meer wilt spelen.",
      ],
      highlights: [
        "Je ritme is sterker en stabieler dan in les 1.",
        "Je speelt met zelfvertrouwen en controle.",
        "Je sluit positief af en blijft nieuwsgierig naar muziek.",
      ],
      tips: [
        "Blijf ontspannen in schouders en polsen.",
        "Houd contact met je team.",
        "Vier wat al goed lukt.",
      ],
      musicParts: [
        { title: "Happy volledige ritmepartij", embedUrl: "" },
        { title: "Finale ritme", embedUrl: "" },
      ],
      practiceParagraph: "Speel je favoriete ritme uit het hele programma en probeer dat superstrak af te sluiten.",
      practiceBullets: [
        "Speel Happy 2 keer achter elkaar.",
        "Kies 1 oud ritme en speel het op tempo.",
        "Laat thuis horen waar je trots op bent.",
        "Bonus: bedenk een eindslag voor je hele team.",
      ],
      closingText: "Fantastisch ritmewerk. Blijf spelen en blijf groeien.",
    },
  },
};

export default function LessonPage({
  icon,
  instrumentName,
  lessonNumber,
  subtitle,
  introTitle,
  introParagraphs,
  practiceTitle,
  practiceParagraph,
  practiceBullets,
  closingTitle,
  closingText,
  highlights,
  tips,
  musicPartVideos,
}) {
  const handbookLesson = HANDBOOK_CONTENT[instrumentName]?.[lessonNumber];

  const resolvedSubtitle = handbookLesson?.subtitle || subtitle;
  const resolvedIntroTitle = handbookLesson?.introTitle || introTitle;
  const resolvedIntroParagraphs = handbookLesson?.introParagraphs || introParagraphs || [];
  const resolvedPracticeParagraph = handbookLesson?.practiceParagraph || practiceParagraph;
  const resolvedPracticeBullets = handbookLesson?.practiceBullets || practiceBullets || [];
  const resolvedClosingText = handbookLesson?.closingText || closingText;
  const resolvedHighlights = handbookLesson?.highlights || highlights || [];
  const resolvedTips = handbookLesson?.tips || tips || [];
  const resolvedMusicPartVideos = handbookLesson?.musicParts || musicPartVideos || [];
  const resolvedExtraMusicPartVideos = handbookLesson?.extraMusicParts || [];
  const resolvedExtraMusicPartsTitle = handbookLesson?.extraMusicPartsTitle || "Extra videos voor deze les";
  const resolvedFinalMusicPartVideos = handbookLesson?.finalMusicParts || [];
  const resolvedFinalMusicPartsTitle = handbookLesson?.finalMusicPartsTitle || "Nog een extra video";

  const instrumentHref = `/${instrumentName.toLowerCase()}`;

  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="mb-10 text-center">
        <h1 className="title mb-3">
          {icon} {instrumentName} - Les {lessonNumber}
        </h1>

        <p className="subtitle">{resolvedSubtitle}</p>
        <p className="subtitle mt-3">
          Pak je lesboek erbij en open de pagina van les {lessonNumber}. Op deze website krijg je extra uitleg en oefenhulp.
        </p>
      </div>

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--primary-dark)" }}
        >
          {resolvedIntroTitle}
        </h2>

        <p className="subtitle mb-4">
          Lees eerst de opdracht in je lesboek en gebruik daarna deze pagina om stap voor stap te oefenen.
        </p>

        {resolvedIntroParagraphs.map((paragraph, index) => (
          <p
            key={`${instrumentName}-${lessonNumber}-intro-${index}`}
            className={index < resolvedIntroParagraphs.length - 1 ? "subtitle mb-4" : "subtitle"}
          >
            {paragraph}
          </p>
        ))}
      </section>

      {resolvedMusicPartVideos.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--pink)" }}
          >
            Extra video per muziekdeel
          </h2>

          <p className="subtitle mb-6">
            Werk per onderdeel uit je lesboek. Bij elk muziekdeel staat hieronder een plek voor een eigen instructievideo.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {resolvedMusicPartVideos.map((part, index) => (
              <article
                key={`${instrumentName}-${lessonNumber}-part-video-${index}`}
                className="rounded-2xl border p-4 h-full flex flex-col"
                style={{ borderColor: "var(--border)", background: "#fff" }}
              >
                <h3 className="font-bold mb-2 min-h-[3rem]">{part.title}</h3>
                <p className="subtitle mb-3 min-h-[3.25rem]">{part.description || " "}</p>
                {part.embedUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mt-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={part.embedUrl}
                      title={`${instrumentName} les ${lessonNumber} ${part.title}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video rounded-2xl border-2 border-dashed flex items-center justify-center text-center p-4 mt-auto" style={{ borderColor: "var(--border)", background: "#fff" }}>
                    <p className="subtitle">Hier komt straks de video voor: {part.title}. Kijk in je lesboek welk deel je nu oefent.</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {resolvedHighlights.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--primary-dark)" }}
          >
            Belangrijke punten uit de les
          </h2>

          <p className="subtitle mb-5">
            Dit zijn de belangrijkste dingen om te onthouden. Je vindt ze ook terug in je lesboek bij les {lessonNumber}.
          </p>

          <div className="grid gap-4">
            {resolvedHighlights.map((item, index) => (
              <article
                key={`${instrumentName}-${lessonNumber}-highlight-${index}`}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "#fff" }}
              >
                <h3 className="font-bold mb-2">Punt {index + 1}</h3>
                <p className="subtitle">{item}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {resolvedTips.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--green)" }}
          >
            Slimme oefentips voor thuis
          </h2>

          <p className="subtitle mb-5">
            Kies 1 of 2 tips en probeer die meteen bij de oefening uit je lesboek.
          </p>

          <ul className="space-y-3">
            {resolvedTips.map((item, index) => (
              <li key={`${instrumentName}-${lessonNumber}-tip-${index}`} className="badge" style={{ justifyContent: "flex-start" }}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {lessonNumber === 4 && (
        <Lesson4VideoAssignment instrumentName={instrumentName} />
      )}

      {lessonNumber === 5 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--pink)" }}
          >
            Wil je doorgaan na les 5?
          </h2>

          <p className="subtitle mb-4">
            Vind je dit leuk? Dan kun je na deze les gewoon doorgaan met het programma en nog meer muziek leren.
          </p>

          <p className="subtitle mb-6">
            De data en tijden van de lessen vind je op de agenda-pagina.
          </p>

          <Link href="/agenda" className="btn inline-block">
            Naar de agenda
          </Link>
        </section>
      )}

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--green)" }}
        >
          {practiceTitle}
        </h2>

        <p className="subtitle mb-4">{resolvedPracticeParagraph}</p>
        <p className="subtitle mb-4">Gebruik je lesboek tijdens het oefenen en vink af wat al lukt.</p>

        <ul className="space-y-3">
          {resolvedPracticeBullets.map((bullet, index) => (
            <li key={`${instrumentName}-${lessonNumber}-bullet-${index}`} className="badge">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      {resolvedExtraMusicPartVideos.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--pink)" }}
          >
            {resolvedExtraMusicPartsTitle}
          </h2>

          <p className="subtitle mb-6">
            Hieronder staan aanvullende videos die dieper ingaan op de techniek van deze les.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {resolvedExtraMusicPartVideos.map((part, index) => (
              <article
                key={`${instrumentName}-${lessonNumber}-extra-part-video-${index}`}
                className="rounded-2xl border p-4 h-full flex flex-col"
                style={{ borderColor: "var(--border)", background: "#fff" }}
              >
                <h3 className="font-bold mb-2 min-h-[3rem]">{part.title}</h3>
                <p className="subtitle mb-3 min-h-[3.25rem]">{part.description || " "}</p>
                {part.embedUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mt-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={part.embedUrl}
                      title={`${instrumentName} les ${lessonNumber} ${part.title}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video rounded-2xl border-2 border-dashed flex items-center justify-center text-center p-4 mt-auto" style={{ borderColor: "var(--border)", background: "#fff" }}>
                    <p className="subtitle">Hier komt straks de video voor: {part.title}. Kijk in je lesboek welk deel je nu oefent.</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {resolvedFinalMusicPartVideos.length > 0 && (
        <section className="card mb-8">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--pink)" }}
          >
            {resolvedFinalMusicPartsTitle}
          </h2>

          <p className="subtitle mb-6">
            Hieronder staat nog een aanvullend videoblok voor deze les.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {resolvedFinalMusicPartVideos.map((part, index) => (
              <article
                key={`${instrumentName}-${lessonNumber}-final-part-video-${index}`}
                className="rounded-2xl border p-4 h-full flex flex-col"
                style={{ borderColor: "var(--border)", background: "#fff" }}
              >
                <h3 className="font-bold mb-2 min-h-[3rem]">{part.title}</h3>
                <p className="subtitle mb-3 min-h-[3.25rem]">{part.description || " "}</p>
                {part.embedUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mt-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={part.embedUrl}
                      title={`${instrumentName} les ${lessonNumber} ${part.title}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video rounded-2xl border-2 border-dashed flex items-center justify-center text-center p-4 mt-auto" style={{ borderColor: "var(--border)", background: "#fff" }}>
                    <p className="subtitle">Hier komt straks de video voor: {part.title}. Kijk in je lesboek welk deel je nu oefent.</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="card text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--purple)" }}
        >
          {closingTitle}
        </h2>

        <p className="subtitle mb-6">{resolvedClosingText}</p>

        <Link href={instrumentHref} className="btn">
          Terug naar {instrumentName}
        </Link>
      </section>
    </main>
  );
}