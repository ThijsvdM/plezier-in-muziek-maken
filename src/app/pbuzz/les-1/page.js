import LessonPage from "../../../components/LessonPage";

export default function Les1() {
  return (
    <LessonPage
      icon="🎺"
      instrumentName="pBuzz"
      lessonNumber={1}
      subtitle="Maak kennis met de pBuzz en speel je eerste tonen."
      introTitle="👋 Welkom bij Team Blaas"
      introParagraphs={[
        "In les 1 leer je hoe je de pBuzz vasthoudt en hoe je een eerste toon vormt met je lippen en adem.",
        "Je ontdekt de schuifposities en koppelt die aan de kleuren en noten uit het lesboek.",
      ]}
      videoTitle="🎥 Uitlegvideo les 1"
      videoDescription="Bekijk het voorbeeld en oefen daarna je eerste tonen stap voor stap mee."
      practiceTitle="🎯 Probeer het zelf"
      practiceParagraph="Oefen korte en lange tonen en luister of je klank stabiel blijft."
      practiceBullets={[
        "🎺 Blaas rustig en met constante lucht",
        "👂 Luister naar zuiver en stabiel geluid",
        "😊 Werk in korte oefenrondes met pauzes",
      ]}
      closingTitle="⭐ Goed gedaan"
      closingText="Je hebt les 1 afgerond."
      nextHref="/pbuzz/les-2"
      nextLabel="Naar Les 2 →"
    />
  );
}