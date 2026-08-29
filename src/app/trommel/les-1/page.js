import LessonPage from "../../../components/LessonPage";

export default function Les1() {
  return (
    <LessonPage
      icon="🥁"
      instrumentName="Trommel"
      lessonNumber={1}
      subtitle="Maak kennis met de trommel en speel je eerste ritmes."
      introTitle="👋 Welkom bij Team Ritme"
      introParagraphs={[
        "In les 1 leer je basisritmes op trommel en met sticks tegen elkaar.",
        "Je werkt aan een vaste tel en leert hoe je samen strak kunt spelen.",
      ]}
      videoTitle="🎥 Uitlegvideo les 1"
      videoDescription="Bekijk het ritmepatroon en speel daarna rustig mee met de tel."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Speel het ritme eerst langzaam en herhaal totdat je het patroon stevig vasthoudt."
      practiceBullets={[
        "🥁 Begin langzaam en strak",
        "👂 Luister naar de puls",
        "😊 Oefen in korte herhalingen",
      ]}
      centeredLayout={true}
      centeredMaxWidthClass="max-w-4xl"
      closingTitle="⭐ Goed gedaan"
      closingText="Je hebt les 1 afgerond."
      nextHref="/trommel/les-2"
      nextLabel="Naar Les 2 →"
    />
  );
}