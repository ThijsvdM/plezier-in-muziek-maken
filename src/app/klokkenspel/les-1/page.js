import LessonPage from "../../../components/LessonPage";

export default function Les1() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={1}
      subtitle="Maak kennis met het klokkenspel en speel je eerste noten."
      introTitle="👋 Welkom bij Team Melodie"
      introParagraphs={[
        "In les 1 maak je kennis met het klokkenspel en de manier waarop je klank maakt met de stokken.",
        "Je leert notenkleuren herkennen en speelt de eerste melodische patronen samen met de groep.",
      ]}
      videoTitle="🎥 Uitlegvideo les 1"
      videoDescription="Bekijk het voorbeeld en speel daarna stap voor stap mee."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Oefen de noten rustig op kleur en bouw daarna kleine stukjes melodie op."
      practiceBullets={[
        "🎵 Speel eerst langzaam en duidelijk",
        "👂 Luister naar hoog en laag",
        "😊 Blijf doorspelen, ook als je een foutje maakt",
      ]}
      closingTitle="⭐ Goed gedaan"
      closingText="Je hebt les 1 afgerond."
      nextHref="/klokkenspel/les-2"
      nextLabel="Naar Les 2 →"
    />
  );
}