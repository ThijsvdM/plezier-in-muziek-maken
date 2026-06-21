import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes9() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={9}
      subtitle="Je bereidt je voor op de laatste les met een volledige oefening."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les herhaal je de belangrijkste melodiedelen uit de vorige lessen.",
        "Je oefent om alles rustig achter elkaar te spelen, zodat je klaar bent voor de afsluiting.",
        "Zo merk je hoe ver je al bent gekomen met het klokkenspel.",
      ]}
      videoTitle="🎥 Uitlegvideo les 9"
      videoDescription="Bekijk de hele oefening en let op hoe de losse stukjes samenkomen."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel de hele oefening van begin tot eind en probeer zo min mogelijk te stoppen."
      practiceBullets={[
        "🎵 Speel alles op volgorde",
        "👀 Volg de melodie stap voor stap",
        "😊 Je bent bijna bij de laatste les",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 9 afgerond!"
      nextHref="/klokkenspel/les-10"
      nextLabel="Naar Les 10 →"
    />
  );
}