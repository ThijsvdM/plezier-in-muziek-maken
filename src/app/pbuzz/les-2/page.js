import LessonPage from "../../../components/LessonPage";

export default function PBuzzLes2() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={2}
      subtitle="We gaan verder met het spelen van de eerste tonen!"
      introTitle="👋 Wat gaan we leren?"
      introParagraphs={[
        "In deze les oefen je hoe je een stabiele toon uit de pBuzz krijgt.",
        "Je let goed op je ademhaling en op de manier waarop je de pBuzz vasthoudt.",
      ]}
      videoTitle="🎥 Kijk en leer"
      videoDescription="Bekijk hoe de docent de eerste tonen laat horen en probeer daarna zelf mee te blazen."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Probeer rustig verschillende tonen te maken en luister goed naar je eigen klank."
      practiceBullets={[
        "🎺 Blaas rustig",
        "👂 Luister naar de toon",
        "😊 Rustig oefenen helpt",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 2 afgerond!"
      nextHref="/pbuzz/les-3"
      nextLabel="Naar Les 3 →"
    />
  );
}