import Link from "next/link";

const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export default function LessonPage({
  icon,
  instrumentName,
  lessonNumber,
  subtitle,
  introTitle,
  introParagraphs,
  videoTitle,
  videoDescription,
  practiceTitle,
  practiceParagraph,
  practiceBullets,
  closingTitle,
  closingText,
  nextHref,
  nextLabel,
}) {
  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="mb-10 text-center">
        <h1 className="title mb-3">
          {icon} {instrumentName} - Les {lessonNumber}
        </h1>

        <p className="subtitle">{subtitle}</p>
      </div>

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--primary-dark)" }}
        >
          {introTitle}
        </h2>

        {introParagraphs.map((paragraph, index) => (
          <p
            key={`${instrumentName}-${lessonNumber}-intro-${index}`}
            className={index < introParagraphs.length - 1 ? "subtitle mb-4" : "subtitle"}
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--pink)" }}
        >
          {videoTitle}
        </h2>

        <p className="subtitle mb-6">{videoDescription}</p>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={VIDEO_URL}
            title={`${instrumentName} les ${lessonNumber} video`}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="card mb-8">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--green)" }}
        >
          {practiceTitle}
        </h2>

        <p className="subtitle mb-4">{practiceParagraph}</p>

        <ul className="space-y-3">
          {practiceBullets.map((bullet, index) => (
            <li key={`${instrumentName}-${lessonNumber}-bullet-${index}`} className="badge">
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <section className="card text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--purple)" }}
        >
          {closingTitle}
        </h2>

        <p className="subtitle mb-6">{closingText}</p>

        <Link href={nextHref} className="btn">
          {nextLabel}
        </Link>
      </section>
    </main>
  );
}