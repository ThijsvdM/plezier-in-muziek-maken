import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes6() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={6}
      subtitle="Je speelt met meer controle tussen de verschillende tonen."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les werk je aan een melodie waarin je soepel van toon wisselt.",
        "Je probeert de overgang tussen de noten rustig en gelijkmatig te maken.",
        "Dat geeft je meer controle over de pBuzz en je timing.",
      ]}
      videoTitle="🎥 Uitlegvideo les 6"
      videoDescription="Bekijk hoe de docent de veranderingen laat horen en speel daarna hetzelfde na."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel de oefening een paar keer achter elkaar en let op de toonwisselingen."
      practiceBullets={[
        "🎺 Speel met rustige adem",
        "👂 Luister naar de verandering",
        "😊 Blijf ontspannen",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 6 afgerond!"
      nextHref="/pbuzz/les-7"
      nextLabel="Naar Les 7 →"
    />
  );
}