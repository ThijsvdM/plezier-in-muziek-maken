import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes7() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={7}
      subtitle="Je maakt je toon stabieler en speelt iets langer door."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les oefen je op een stabiele toon en een rustige overgang naar de volgende noot.",
        "Je let op je lippen, je ademhaling en de stand van de schuif.",
        "Zo wordt je spel zekerder en klinkt het steeds mooier.",
      ]}
      videoTitle="🎥 Uitlegvideo les 7"
      videoDescription="Kijk naar het voorbeeld en probeer de beweging daarna zelf te maken."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel het stukje meerdere keren en houd de klank zo constant mogelijk."
      practiceBullets={[
        "🎺 Blijf rustig blazen",
        "👀 Let op je schuifpositie",
        "😊 Controle is belangrijker dan snelheid",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 7 afgerond!"
      nextHref="/pbuzz/les-8"
      nextLabel="Naar Les 8 →"
    />
  );
}