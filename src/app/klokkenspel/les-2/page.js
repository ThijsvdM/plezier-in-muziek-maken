import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes2() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={2}
      subtitle="We gaan verder met het leren van melodieën!"
      introTitle="👋 Wat gaan we leren?"
      introParagraphs={[
        "In deze les ga je leren hoe je korte melodieën kunt spelen op het klokkenspel.",
        "We bouwen verder op de eerste basisnoten en zorgen dat je vingers de toetsen steeds sneller vinden.",
      ]}
      videoTitle="🎥 Kijk en leer"
      videoDescription="Bekijk goed hoe de docent de melodie speelt en probeer daarna zelf mee te doen."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Probeer de melodie zelf langzaam na te spelen. Neem de tijd en luister goed naar elke toon."
      practiceBullets={[
        "🎵 Speel rustig",
        "👂 Luister goed",
        "😊 Fouten maken mag",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 2 afgerond!"
      nextHref="/klokkenspel/les-3"
      nextLabel="Naar Les 3 →"
    />
  );
}