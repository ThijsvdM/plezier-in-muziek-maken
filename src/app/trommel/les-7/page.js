import LessonPage from "../../../components/LessonPage";

export default function TrommelLes7() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={7}
      subtitle="Je oefent een kort fill-achtig stukje tussen het ritme door."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les voeg je een iets speelser ritme toe aan je oefening.",
        "Je probeert op het juiste moment extra slagen te maken zonder de maat kwijt te raken.",
        "Dat maakt je ritme levendiger en helpt je beter te luisteren naar wat je speelt.",
      ]}
      videoTitle="🎥 Uitlegvideo les 7"
      videoDescription="Bekijk hoe de docent het extra stukje laat horen en speel daarna mee."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel het extra stukje steeds opnieuw totdat de overgang natuurlijk voelt."
      practiceBullets={[
        "🥁 Speel de toevoeging rustig",
        "👀 Let op het juiste moment",
        "😊 Een goede timing is belangrijk",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 7 afgerond!"
      nextHref="/trommel/les-8"
      nextLabel="Naar Les 8 →"
    />
  );
}