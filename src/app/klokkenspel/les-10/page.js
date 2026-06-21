import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes10() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={10}
      subtitle="Tijd om alles wat je hebt geleerd samen te laten horen."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les herhaal je de melodie en laat je horen wat je in de vorige lessen hebt opgebouwd.",
        "Je speelt rustig, let goed op de juiste volgorde en probeert een mooie afsluiting te maken.",
        "Daarmee rond je jouw klokkenspel-reis op een leuke en muzikale manier af.",
      ]}
      videoTitle="🎥 Uitlegvideo les 10"
      videoDescription="Kijk nog één keer goed mee en speel daarna de complete oefening alsof je een mini-optreden geeft."
      practiceTitle="🎯 Laat het horen"
      practiceParagraph="Speel de hele melodie rustig van begin tot eind en probeer op een nette afsluiting uit te komen."
      practiceBullets={[
        "🎵 Speel met vertrouwen",
        "👂 Luister naar je eigen klank",
        "😊 Je hebt veel geleerd",
      ]}
      closingTitle="⭐ Fantastisch gedaan!"
      closingText="Je hebt les 10 afgerond!"
      nextHref="/klokkenspel"
      nextLabel="Terug naar Klokkenspel"
    />
  );
}