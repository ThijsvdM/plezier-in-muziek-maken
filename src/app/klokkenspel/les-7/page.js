import LessonPage from "../../../components/LessonPage";

export default function KlokkenspelLes7() {
  return (
    <LessonPage
      icon="🎵"
      instrumentName="Klokkenspel"
      lessonNumber={7}
      subtitle="Je oefent een iets moeilijker stukje met meer controle."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les herhaal je de melodie en voeg je een paar nieuwe noten toe.",
        "Je let extra goed op de volgorde, zodat je niet te snel vooruit gaat.",
        "Daardoor speel je met meer zekerheid en blijft de melodie mooi helder klinken.",
      ]}
      videoTitle="🎥 Uitlegvideo les 7"
      videoDescription="Kijk rustig mee en probeer het voorbeeld daarna zonder haast te spelen."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Begin langzaam en speel het nieuwe stukje pas sneller als het rustig lukt."
      practiceBullets={[
        "🎵 Rustig starten",
        "👀 Blijf goed kijken",
        "😊 Zeker spelen is belangrijker dan snel spelen",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 7 afgerond!"
      nextHref="/klokkenspel/les-8"
      nextLabel="Naar Les 8 →"
    />
  );
}