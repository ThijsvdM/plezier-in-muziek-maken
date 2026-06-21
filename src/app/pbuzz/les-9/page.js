import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes9() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={9}
      subtitle="Je bereidt een complete melodie voor op de laatste les."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les herhaal je de belangrijkste delen uit de vorige lessen.",
        "Je probeert ze achter elkaar te spelen zonder de vorm van de melodie kwijt te raken.",
        "Zo ben je goed voorbereid op de afsluitende les.",
      ]}
      videoTitle="🎥 Uitlegvideo les 9"
      videoDescription="Bekijk hoe de losse delen samen één complete oefening vormen."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel de hele oefening van begin tot eind en probeer de toon mooi te houden."
      practiceBullets={[
        "🎺 Speel rustig en gelijkmatig",
        "👀 Volg de volgorde goed",
        "😊 Je bent bijna bij les 10",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 9 afgerond!"
      nextHref="/pbuzz/les-10"
      nextLabel="Naar Les 10 →"
    />
  );
}