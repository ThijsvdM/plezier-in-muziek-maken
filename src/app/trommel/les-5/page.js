import LessonPage from "../../../components/LessonPage";

export default function TrommelLes5() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={5}
      subtitle="We bouwen een langer ritme op uit kleine stukjes."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les combineer je verschillende slagen tot één langer patroon.",
        "Je probeert de bewegingen soepel te laten overlopen zodat het ritme lekker blijft lopen.",
        "Daarmee word je zekerder in het spelen van een hele maat.",
      ]}
      videoTitle="🎥 Uitlegvideo les 5"
      videoDescription="Luister goed naar de volgorde van de slagen en speel daarna rustig mee."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel het patroon meerdere keren en let op de momenten waarop je van hand wisselt."
      practiceBullets={[
        "🥁 Wissel rustig van hand",
        "👀 Blijf op het patroon letten",
        "😊 Langzaam is prima",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 5 afgerond!"
      nextHref="/trommel/les-6"
      nextLabel="Naar Les 6 →"
    />
  );
}