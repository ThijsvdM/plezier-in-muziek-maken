import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes4() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={4}
      subtitle="Je breidt de melodie uit met nieuwe noten."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les herhaal je de noten van de vorige lessen en voeg je een nieuw stukje melodie toe.",
        "Je let goed op toonhoogte en timing, zodat het spelen steeds vloeiender wordt.",
        "Zo groeit je melodie uit tot een langer muziekstuk dat echt begint te klinken als een liedje.",
      ]}
      videoTitle="🎥 Uitlegvideo les 4"
      videoDescription="Kijk eerst goed mee, speel daarna de melodie rustig na."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel het nieuwe stukje langzaam en probeer de noten zonder haast achter elkaar te zetten."
      practiceBullets={[
        "🎵 Luister naar elke toon",
        "👀 Kijk goed naar de volgorde",
        "😊 Rustig oefenen helpt het meest",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 4 afgerond!"
      nextHref="/klokkenspel/les-5"
      nextLabel="Naar Les 5 →"
    />
  );
}