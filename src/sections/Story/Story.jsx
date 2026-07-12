import "./Story.css";

function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="story__background" aria-hidden="true" />
      <div className="story__overlay" aria-hidden="true" />

      <div className="story__container">
        <header className="story__header">
          <span className="story__eyebrow">Kültürel Miras</span>

          <h2 id="story-title">
            Tosya’nın Bereketinden
            <span>Geleceğe Uzanan Bir Gelenek</span>
          </h2>

          <div className="story__divider" aria-hidden="true">
            <span />
            <i>◆</i>
            <span />
          </div>
        </header>

        <div className="story__content">
          <div className="story__number" aria-hidden="true">
            24
            <span>Yıl</span>
          </div>

          <div className="story__text">
            <p>
              Tosya Kültür ve Pirinç Festivali; ilçemizin köklü
              geleneklerini, eşsiz kültürel değerlerini ve bereketli
              topraklarını aynı çatı altında buluşturan özel bir mirastır.
            </p>

            <p>
              Nesilden nesile aktarılan geleneklerimiz; sanat, müzik,
              dayanışma ve Tosya pirincinin bereketiyle üç gün boyunca
              Cumhuriyet Meydanı’nda yeniden hayat bulacaktır.
            </p>
          </div>
        </div>

        <div className="story__values">
          <article className="story__value">
            <span>01</span>
            <h3>Kültür</h3>
            <p>Geçmişten günümüze taşınan Tosya gelenekleri.</p>
          </article>

          <article className="story__value">
            <span>02</span>
            <h3>Bereket</h3>
            <p>Tosya’nın verimli toprakları ve meşhur pirinci.</p>
          </article>

          <article className="story__value">
            <span>03</span>
            <h3>Birlik</h3>
            <p>Şehrimizi aynı heyecan etrafında buluşturan festival.</p>
          </article>
        </div>

        <a className="story__next" href="#program">
          <span>Üç Günlük Program</span>
          <i aria-hidden="true">↓</i>
        </a>
      </div>
    </section>
  );
}

export default Story;