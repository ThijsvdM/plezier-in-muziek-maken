import LessonPage from "../../../components/LessonPage";

export default function TrommelLes4() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={4}
      subtitle="Je voegt een nieuwe slag toe aan je ritme."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les werk je aan een ritme met meer afwisseling tussen je handen.",
        "Je let goed op wanneer je hard en wanneer je zacht speelt.",
        "Zo leer je hoe je ritme spannender en duidelijker kunt maken.",
      ]}
      videoTitle="🎥 Uitlegvideo les 4"
      videoDescription="Bekijk hoe de docent de nieuwe slag laat horen en doe daarna mee."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel het nieuwe patroon langzaam en probeer de slagen netjes te laten klinken."
      practiceBullets={[
        "🥁 Houd je tempo stabiel",
        "👂 Luister naar hard en zacht",
        "😊 Rustig oefenen werkt het best",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 4 afgerond!"
      nextHref="/trommel/les-5"
      nextLabel="Naar Les 5 →"
    />
  );
}