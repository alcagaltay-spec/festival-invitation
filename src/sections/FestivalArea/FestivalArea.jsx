import "./FestivalArea.css";

function FestivalArea() {
  return (
    <section
      className="festival-area"
      id="festival-area"
      aria-labelledby="festival-area-title"
    >
      <div className="festival-area__background" aria-hidden="true" />
      <div className="festival-area__overlay" aria-hidden="true" />

      <div className="festival-area__container">
        <header className="festival-area__header">
          <span className="festival-area__eyebrow">Festival Alanı</span>

          <h2 id="festival-area-title">
            Cumhuriyet Meydanı
            <span>Festivalin Kalbi</span>
          </h2>

          <p>
            Açılış töreninden konserlere, kültürel etkinliklerden protokol
            karşılamasına kadar festivalin tüm ana programları Cumhuriyet
            Meydanı’nda gerçekleştirilecektir.
          </p>
        </header>

        <div className="festival-area__grid">
          <article className="festival-area__main-card">
            <div className="festival-area__image-wrap">
              <img
                className="festival-area__image"
                src="/festival-invitation/images/map/cumhuriyet-meydani.webp"
                alt="Tosya Cumhuriyet Meydanı festival alanı"
                loading="lazy"
              />

              <div
                className="festival-area__image-overlay"
                aria-hidden="true"
              />

              <span className="festival-area__image-label">
                Cumhuriyet Meydanı
              </span>
            </div>

            <div className="festival-area__main-content">
              <span className="festival-area__label">
                Ana Etkinlik Noktası
              </span>

              <h3>Cumhuriyet Meydanı</h3>

              <p>
                Tosya merkezinde yer alan festival alanına şehir içinden kolay
                ulaşım sağlanmaktadır.
              </p>

              <a
                className="festival-area__button"
                href="https://www.google.com/maps/search/?api=1&query=Cumhuriyet+Meydan%C4%B1+Tosya"
                target="_blank"
                rel="noreferrer"
                aria-label="Cumhuriyet Meydanı için yol tarifi al"
              >
                <span>Yol Tarifi Al</span>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </article>

          <div className="festival-area__info">
            <article className="festival-area__info-card">
              <span className="festival-area__info-number">01</span>

              <h3>Protokol Girişi</h3>

              <p>
                Resmî davetliler için ayrılmış özel karşılama ve giriş noktası.
              </p>
            </article>

            <article className="festival-area__info-card">
              <span className="festival-area__info-number">02</span>

              <h3>Protokol Otoparkı</h3>

              <p>
                Festival alanına yakın, kontrollü ve özel araç giriş alanı.
              </p>
            </article>

            <article className="festival-area__info-card">
              <span className="festival-area__info-number">03</span>

              <h3>Ana Sahne</h3>

              <p>
                Açılış töreni ve tüm akşam konserlerinin gerçekleştirileceği
                festival sahnesi.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FestivalArea;
