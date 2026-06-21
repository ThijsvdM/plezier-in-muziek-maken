import LessonPage from "../../../components/LessonPage";

export default function TrommelLes8() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={8}
      subtitle="We houden het tempo vast en wisselen tussen meerdere patronen."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les oefen je twee ritmes die je na elkaar speelt.",
        "Je probeert het tempo niet te laten zakken wanneer je van patroon wisselt.",
        "Zo krijg je meer gevoel voor een hele oefening van begin tot eind.",
      ]}
      videoTitle="🎥 Uitlegvideo les 8"
      videoDescription="Luister goed naar de wisseling tussen de patronen en speel daarna hetzelfde na."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel beide patronen om de beurt en probeer ze soepel aan elkaar te zetten."
      practiceBullets={[
        "🥁 Wissel zonder te haasten",
        "👂 Blijf tellen",
        "😊 Rustig oefenen geeft controle",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 8 afgerond!"
      nextHref="/trommel/les-9"
      nextLabel="Naar Les 9 →"
    />
  );
}