import { festivalData } from "../../data/festivalData";
import "./Program.css";

function Program() {
  const { program } = festivalData;

  return (
    <section className="program" id="program" aria-labelledby="program-title">
      <div className="program__glow" aria-hidden="true" />

      <div className="program__container">
        <header className="program__header">
          <span className="program__eyebrow">Festival Takvimi</span>

          <h2 id="program-title">
            Üç Gün
            <span>Tek Bir Büyük Buluşma</span>
          </h2>

          <p className="program__intro">
            Açılış töreninden konserlere, kültürel etkinliklerden geleneksel
            şölenlere uzanan üç günlük festival programı.
          </p>
        </header>

        <div className="program__cards">
          {program.map((day, index) => (
            <article className="program__card" key={day.id}>
              <div className="program__card-number" aria-hidden="true">
                0{index + 1}
              </div>

              <header className="program__card-header">
                <div className="program__date">
                  <strong>{day.date.split(" ")[0]}</strong>

                  <div>
                    <span>Ağustos</span>
                    <p>{day.day}</p>
                  </div>
                </div>
              </header>

              <div className="program__events">
                {day.events.map((event, eventIndex) => (
                  <div className="program__event" key={`${day.id}-${eventIndex}`}>
                    <div className="program__event-time">{event.time}</div>

                    <div className="program__event-copy">
                      <h3>{event.title}</h3>

                      {event.subtitle && <p>{event.subtitle}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="program__hint">
          Mobil cihazlarda günler arasında yatay kaydırabilirsiniz.
        </p>
      </div>
    </section>
  );
}

export default Program;