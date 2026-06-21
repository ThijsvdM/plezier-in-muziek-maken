import LessonPage from "../../../components/LessonPage";

export default function TrommelLes3() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={3}
      subtitle="Tijd om een kort ritme helemaal zelf te spelen!"
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les speel je een kort ritme dat je helemaal kunt herhalen.",
        "Je let op de volgorde van de slagen en op het tempo waarin je speelt.",
      ]}
      videoTitle="🎥 Kijk goed mee"
      videoDescription="Luister naar het voorbeeld en sla het ritme daarna stap voor stap na."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Oefen het ritme een paar keer achter elkaar en probeer de maat vast te houden."
      practiceBullets={[
        "🥁 Speel in een rustig tempo",
        "👀 Kijk naar het patroon",
        "😊 Herhalen helpt",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 3 afgerond!"
      nextHref="/trommel/les-4"
      nextLabel="Naar Les 4 →"
    />
  );
}