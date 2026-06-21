import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes4() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={4}
      subtitle="Je maakt de tonen langer en duidelijker."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les oefen je op een mooie, lange toon op de pBuzz.",
        "Je let op hoe je blaast en hoe je de lucht rustig laat stromen.",
        "Daardoor klinkt je toon steviger en gecontroleerder.",
      ]}
      videoTitle="🎥 Uitlegvideo les 4"
      videoDescription="Bekijk hoe de docent de toon vasthoudt en probeer hetzelfde te doen."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Houd de toon zo lang mogelijk vast zonder dat hij wegvalt."
      practiceBullets={[
        "🎺 Adem rustig in en uit",
        "👂 Luister naar de klank",
        "😊 Blijf ontspannen",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 4 afgerond!"
      nextHref="/pbuzz/les-5"
      nextLabel="Naar Les 5 →"
    />
  );
}