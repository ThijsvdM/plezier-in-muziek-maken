import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes8() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={8}
      subtitle="We wisselen tussen tonen en houden de melodie in beweging."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les oefen je op een melodie met meerdere toonwisselingen.",
        "Je probeert de overgang soepel te houden zodat de melodie goed doorloopt.",
        "Daarmee word je beter in het spelen van langere stukken.",
      ]}
      videoTitle="🎥 Uitlegvideo les 8"
      videoDescription="Luister goed naar hoe de tonen elkaar opvolgen en speel daarna mee."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel de tonen in volgorde en probeer niet te veel te stoppen tussen de noten."
      practiceBullets={[
        "🎺 Blijf kalm ademen",
        "👂 Hoor de overgang tussen tonen",
        "😊 Herhaling geeft zekerheid",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 8 afgerond!"
      nextHref="/pbuzz/les-9"
      nextLabel="Naar Les 9 →"
    />
  );
}