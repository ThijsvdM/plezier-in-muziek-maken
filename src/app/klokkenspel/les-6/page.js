import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes6() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={6}
      subtitle="Je combineert verschillende noten tot één vloeiende melodie."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les werk je aan een melodie die net iets langer is dan de vorige keer.",
        "Je zorgt dat de noten netjes achter elkaar komen en probeert de overgang soepel te maken.",
        "Zo ontwikkel je meer controle over je spel en hoor je duidelijker het liedje dat ontstaat.",
      ]}
      videoTitle="🎥 Uitlegvideo les 6"
      videoDescription="Bekijk hoe de docent de volgorde laat horen en doe daarna dezelfde beweging na."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel het hele stukje zonder te stoppen en let op de momenten waarop je van noot wisselt."
      practiceBullets={[
        "🎵 Blijf in tempo",
        "👂 Luister naar de overgangen",
        "😊 Herhalen maakt het makkelijker",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 6 afgerond!"
      nextHref="/klokkenspel/les-7"
      nextLabel="Naar Les 7 →"
    />
  );
}