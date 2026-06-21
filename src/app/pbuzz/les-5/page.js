import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes5() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={5}
      subtitle="We koppelen de eerste tonen aan elkaar tot een klein melodietje."
      introTitle="👋 Wat ga je leren?"
      introParagraphs={[
        "In deze les speel je een kort melodietje met een paar verschillende tonen.",
        "Je let goed op ademhaling, toonhoogte en de juiste schuifpositie.",
        "Zo hoor je steeds beter hoe de pBuzz voor een liedje kan zorgen.",
      ]}
      videoTitle="🎥 Uitlegvideo les 5"
      videoDescription="Luister naar de volgorde van de tonen en speel daarna mee met het voorbeeld."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Speel het melodietje langzaam en probeer de toonwisselingen soepel te maken."
      practiceBullets={[
        "🎺 Blijf rustig blazen",
        "👀 Kijk goed naar de schuif",
        "😊 Herhalen maakt het makkelijker",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 5 afgerond!"
      nextHref="/pbuzz/les-6"
      nextLabel="Naar Les 6 →"
    />
  );
}