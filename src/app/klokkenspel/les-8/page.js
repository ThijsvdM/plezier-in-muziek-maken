import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes8() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={8}
      subtitle="We oefenen wisselingen en houden het tempo rustig vast."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les ga je afwisselen tussen twee of meer stukjes melodie.",
        "Je leert hoe je zonder pauze doorgaat en toch netjes op de juiste noot landt.",
        "Dat helpt je om later een volledige uitvoering zonder onderbrekingen te spelen.",
      ]}
      videoTitle="🎥 Uitlegvideo les 8"
      videoDescription="Let op de wisselingen en luister goed naar het voorbeeld voordat je zelf begint."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel de wisselingen meerdere keren en probeer je tempo gelijk te houden."
      practiceBullets={[
        "🎵 Blijf rustig ademen",
        "👂 Luister naar de overgang",
        "😊 Herhaling geeft vertrouwen",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 8 afgerond!"
      nextHref="/klokkenspel/les-9"
      nextLabel="Naar Les 9 →"
    />
  );
}