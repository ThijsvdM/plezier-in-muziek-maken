import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes3() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={3}
      subtitle="Tijd om je eerste echte melodie te spelen!"
      introTitle="🎯 Wat ga je leren?"
      introParagraphs={[
        "In deze les leer je een volledige korte melodie spelen op het klokkenspel.",
        "Je gebruikt alles wat je eerder hebt geleerd en zet de noten in de juiste volgorde.",
      ]}
      videoTitle="🎥 Kijk goed mee"
      videoDescription="Bekijk hoe de volledige melodie wordt voorgedaan en speel daarna stap voor stap mee."
      practiceTitle="🎵 Oefenen"
      practiceParagraph="Oefen de melodie stap voor stap. Begin langzaam en bouw je tempo op."
      practiceBullets={[
        "🎵 Speel de melodie in kleine stukjes",
        "👀 Let op de volgorde",
        "😊 Speel eerst langzaam",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 3 afgerond!"
      nextHref="/klokkenspel/les-4"
      nextLabel="Naar Les 4 →"
    />
  );
}