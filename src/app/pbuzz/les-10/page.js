import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes10() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={10}
      subtitle="Tijd om jouw eerste pBuzz-reis af te sluiten met een mooie melodie."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les laat je horen wat je in de eerdere lessen hebt opgebouwd.",
        "Je speelt rustig, let goed op je ademhaling en maakt de melodie af met vertrouwen.",
        "Daarmee sluit je de pBuzz-lessen af met een mini-uitvoering van je eigen spel.",
      ]}
      videoTitle="🎥 Uitlegvideo les 10"
      videoDescription="Kijk nog een keer goed mee en speel daarna de hele melodie als afsluiter."
      practiceTitle="🎯 Laat het horen"
      practiceParagraph="Speel de oefening van begin tot eind en probeer een nette afsluiting te maken."
      practiceBullets={[
        "🎺 Speel met een rustige ademhaling",
        "👂 Luister naar je toon",
        "😊 Je hebt veel geleerd",
      ]}
      closingTitle="⭐ Fantastisch gedaan!"
      closingText="Je hebt les 10 afgerond!"
      nextHref="/pbuzz"
      nextLabel="Terug naar pBuzz"
    />
  );
}