import LessonPage from "../../../components/LessonPage";

export default function TrommelLes9() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={9}
      subtitle="Je bereidt een volledige ritme-oefening voor."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les herhaal je de belangrijkste ritmes uit de vorige lessen.",
        "Je zorgt dat je alles rustig achter elkaar kunt spelen zonder de maat kwijt te raken.",
        "Dat is de perfecte voorbereiding voor de laatste les.",
      ]}
      videoTitle="🎥 Uitlegvideo les 9"
      videoDescription="Bekijk hoe de losse stukken samen een complete oefening worden."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel de volledige oefening van begin tot eind en blijf je tempo goed volgen."
      practiceBullets={[
        "🥁 Houd de maat vast",
        "👀 Speel alle delen op volgorde",
        "😊 Je bent bijna bij les 10",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 9 afgerond!"
      nextHref="/trommel/les-10"
      nextLabel="Naar Les 10 →"
    />
  );
}