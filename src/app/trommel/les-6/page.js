import LessonPage from "../../../components/LessonPage";

export default function TrommelLes6() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={6}
      subtitle="Je houdt het ritme strak terwijl de slagen afwisselen."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les oefen je met meer controle over je slagen en tempo.",
        "Je zorgt dat het ritme netjes doorloopt, ook als de bewegingen iets lastiger worden.",
        "Zo bouw je aan een ritme dat steviger en muzikaal klinkt.",
      ]}
      videoTitle="🎥 Uitlegvideo les 6"
      videoDescription="Kijk naar de overgang tussen de slagen en probeer hetzelfde gevoel vast te houden."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel de oefening langzaam en maak de slagen gelijkmatig en duidelijk."
      practiceBullets={[
        "🥁 Blijf rustig tellen",
        "👂 Houd de maat vast",
        "😊 Controle is belangrijk",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 6 afgerond!"
      nextHref="/trommel/les-7"
      nextLabel="Naar Les 7 →"
    />
  );
}