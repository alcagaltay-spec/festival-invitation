import "./Protocol.css";

const protocolItems = [
  {
    number: "01",
    title: "Protokol Girişi",
    text: "Resmî davetliler için ayrılmış özel karşılama ve kontrollü giriş noktası.",
  },
  {
    number: "02",
    title: "Karşılama Saati",
    text: "Açılış töreninden önce protokol karşılama süreci ayrıca bildirilecektir.",
  },
  {
    number: "03",
    title: "Protokol Otoparkı",
    text: "Festival alanına yakın, kontrollü ve resmî araçlara özel otopark alanı.",
  },
  {
    number: "04",
    title: "İletişim",
    text: "Protokol koordinasyonu için belediye yetkilileri tarafından doğrudan bilgilendirme sağlanacaktır.",
  },
];

function Protocol() {
  return (
    <section
      className="protocol"
      id="protocol"
      aria-labelledby="protocol-title"
    >
      <div className="protocol__glow" aria-hidden="true" />

      <div className="protocol__container">
        <header className="protocol__header">
          <span className="protocol__eyebrow">Özel Davetli Bilgilendirmesi</span>

          <h2 id="protocol-title">
            Protokol
            <span>Bilgileri</span>
          </h2>

          <p>
            Resmî davetlilerin festival alanına güvenli, düzenli ve konforlu
            biçimde ulaşabilmesi için hazırlanan özel bilgilendirme alanı.
          </p>
        </header>

        <div className="protocol__grid">
          {protocolItems.map((item) => (
            <article className="protocol__card" key={item.number}>
              <span className="protocol__number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="protocol__actions">
          <a
            className="protocol__button protocol__button--primary"
            href="https://www.google.com/maps/search/?api=1&query=Cumhuriyet+Meydan%C4%B1+Tosya"
            target="_blank"
            rel="noreferrer"
          >
            <span>Yol Tarifi Al</span>
            <i aria-hidden="true">↗</i>
          </a>

          <a
            className="protocol__button"
            href="tel:+903663131111"
          >
            <span>Protokol İletişim</span>
            <i aria-hidden="true">☎</i>
          </a>
        </div>

        <a className="protocol__next" href="#thanks">
          <span>Kapanış</span>
          <i aria-hidden="true">↓</i>
        </a>
      </div>
    </section>
  );
}

export default Protocol;