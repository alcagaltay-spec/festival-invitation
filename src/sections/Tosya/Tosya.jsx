import "./Tosya.css";

function Tosya() {
  return (
    <section className="tosya" id="tosya" aria-labelledby="tosya-title">
      <div className="tosya__background" aria-hidden="true" />
      <div className="tosya__overlay" aria-hidden="true" />

      <div className="tosya__content">
        <span className="tosya__eyebrow">Tosya</span>

        <h2 id="tosya-title">
          Yüzyıllardır Bereketin
          <span>ve Kültürün Buluştuğu Şehir</span>
        </h2>

        <div className="tosya__divider" aria-hidden="true">
          <span />
          <i>◆</i>
          <span />
        </div>

        <p className="tosya__lead">
          Köklü tarihi, bereketli toprakları, kendine özgü kültürü ve
          misafirperver insanlarıyla Tosya; geçmişten geleceğe uzanan güçlü bir
          Anadolu mirasıdır.
        </p>

        <div className="tosya__features">
          <article>
            <span>01</span>
            <h3>Tosya Pirinci</h3>
            <p>
              İlçemizin verimli topraklarında yetişen, lezzeti ve kalitesiyle
              öne çıkan eşsiz bir değer.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Kültürel Miras</h3>
            <p>
              Geleneksel el sanatları, tarihi yapılar ve nesiller boyunca
              yaşatılan köklü değerler.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Anadolu Zarafeti</h3>
            <p>
              Doğası, insanı ve yaşam kültürüyle sakin, güçlü ve zamansız bir
              şehir kimliği.
            </p>
          </article>
        </div>

        <a className="tosya__next" href="#protocol">
          <span>Protokol Bilgileri</span>
          <i aria-hidden="true">↓</i>
        </a>
      </div>
    </section>
  );
}

export default Tosya;