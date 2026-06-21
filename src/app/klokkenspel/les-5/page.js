import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes5() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={5}
      subtitle="We maken de melodie een stukje langer en iets spannender."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les oefen je een nieuwe volgorde van noten die aansluit op wat je al kent.",
        "Je speelt rustiger en zorgvuldiger, zodat elke toon mooi klinkt.",
        "Daarmee leg je de basis voor een nog langere melodie in de volgende lessen.",
      ]}
      videoTitle="🎥 Uitlegvideo les 5"
      videoDescription="Luister naar het voorbeeld en let goed op waar de noten veranderen."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel het stukje meerdere keren achter elkaar en probeer steeds minder te hoeven kijken."
      practiceBullets={[
        "🎵 Herhaal rustig",
        "👀 Kijk naar de verschillen",
        "😊 Kleine stapjes werken het best",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 5 afgerond!"
      nextHref="/klokkenspel/les-6"
      nextLabel="Naar Les 6 →"
    />
  );
}