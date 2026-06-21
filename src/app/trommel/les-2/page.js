import LessonPage from "../../../components/LessonPage";

export default function TrommelLes2() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={2}
      subtitle="We gaan verder met het leren van ritmes!"
      introTitle="👋 Wat gaan we leren?"
      introParagraphs={[
        "In deze les oefen je een strak en rustig ritme op de trommel.",
        "Je bouwt verder op de eerste slagbewegingen en probeert het tempo gelijk te houden.",
      ]}
      videoTitle="🎥 Kijk en leer"
      videoDescription="Bekijk hoe de docent het ritme voordoet en speel daarna mee met je stokken."
      practiceTitle="🎯 Oefenen maar!"
      practiceParagraph="Probeer het ritme zelf langzaam na te spelen. Houd je slagen gelijkmatig en luister goed."
      practiceBullets={[
        "🥁 Begin rustig",
        "👂 Houd het ritme vast",
        "😊 Fouten maken mag",
      ]}
      closingTitle="⭐ Goed gedaan!"
      closingText="Je hebt les 2 afgerond!"
      nextHref="/trommel/les-3"
      nextLabel="Naar Les 3 →"
    />
  );
}