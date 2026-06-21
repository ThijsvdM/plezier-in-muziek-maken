import LessonPage from "../../../components/LessonPage";

export default function TrommelLes10() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={10}
      subtitle="Tijd om jouw ritme stevig en netjes af te sluiten."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les laat je horen wat je met de trommel hebt geleerd.",
        "Je speelt het volledige ritme rustig en probeert een krachtige afsluiting te maken.",
        "Daarmee rond je de trommellessen af met een duidelijk en muzikaal ritme.",
      ]}
      videoTitle="🎥 Uitlegvideo les 10"
      videoDescription="Kijk nog één keer mee en speel daarna het hele stuk alsof je een mini-optreden geeft."
      practiceTitle="🎯 Laat het horen"
      practiceParagraph="Speel de oefening van begin tot eind en probeer op een strakke afsluiting uit te komen."
      practiceBullets={[
        "🥁 Speel met vertrouwen",
        "👂 Luister naar je slagen",
        "😊 Je hebt veel vooruitgang geboekt",
      ]}
      closingTitle="⭐ Fantastisch gedaan!"
      closingText="Je hebt les 10 afgerond!"
      nextHref="/trommel"
      nextLabel="Terug naar Trommel"
    />
  );
}