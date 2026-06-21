import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes3() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={3}
      subtitle="Tijd om de schuif en je ademhaling nog beter te gebruiken."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les werk je aan het vinden van de juiste toon met de schuif.",
        "Je probeert daarbij rustig te blazen zodat de toon mooi en stabiel blijft.",
      ]}
      videoTitle="🎥 Kijk goed mee"
      videoDescription="Luister naar het voorbeeld en speel daarna dezelfde tonen na."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel de tonen één voor één en probeer de overgang soepel te maken."
      practiceBullets={[
        "🎺 Blaas rustig en constant",
        "👀 Kijk naar de schuifpositie",
        "😊 Kleine stapjes werken goed",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 3 afgerond!"
      nextHref="/pbuzz/les-4"
      nextLabel="Naar Les 4 →"
    />
  );
}