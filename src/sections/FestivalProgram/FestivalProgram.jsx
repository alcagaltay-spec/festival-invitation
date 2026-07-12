import { festivalData } from "../../data/festivalData";
import "./FestivalProgram.css";

function FestivalProgram() {
  const { program } = festivalData;

  return (
    <section
      className="festival-program"
      id="program"
      aria-labelledby="festival-program-title"
    >
      <div className="festival-program__glow" aria-hidden="true" />

      <div className="festival-program__container">
        <header className="festival-program__header">
          <span className="festival-program__eyebrow">
            Festival Takvimi
          </span>

          <h2 id="festival-program-title">
            Üç Gün
            <span>Unutulmaz Bir Festival</span>
          </h2>

          <p>
            Açılış töreninden büyük konserlere, kültürel etkinliklerden
            Geleneksel Sünnet Şöleni’ne uzanan festival programı.
          </p>
        </header>

        <div className="festival-program__grid">
          {program.map((day, dayIndex) => {
            const dayNumber = day.date.split(" ")[0];

            return (
              <article
                className="festival-program__card"
                key={day.id}
              >
                <span
                  className="festival-program__card-index"
                  aria-hidden="true"
                >
                  0{dayIndex + 1}
                </span>

                <header className="festival-program__date">
                  <strong>{dayNumber}</strong>

                  <div>
                    <span>Ağustos</span>
                    <p>{day.day}</p>
                  </div>
                </header>

                <div className="festival-program__divider" />

                <div className="festival-program__events">
                  {day.events.map((event, eventIndex) => (
                    <div
                      className="festival-program__event"
                      key={`${day.id}-${eventIndex}`}
                    >
                      <time>{event.time}</time>

                      <div>
                        <h3>{event.title}</h3>

                        {event.subtitle && (
                          <p>{event.subtitle}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FestivalProgram;