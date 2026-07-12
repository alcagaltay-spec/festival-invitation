import { festivalData } from "../../data/festivalData";
import "./Thanks.css";

function Thanks() {
  const { municipality, festival } = festivalData;

  return (
    <section className="thanks" id="thanks" aria-labelledby="thanks-title">
      <div className="thanks__background" aria-hidden="true" />
      <div className="thanks__overlay" aria-hidden="true" />

      <div className="thanks__content">
        <img
          className="thanks__logo"
          src="/images/logos/tosya-logo.png"
          alt="Tosya Belediyesi logosu"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="thanks__eyebrow">Teşekkürler</span>

        <h2 id="thanks-title">
          Teşrifleriniz
          <span>Bizlere Onur Verecektir</span>
        </h2>

        <div className="thanks__divider" aria-hidden="true">
          <span />
          <i>◆</i>
          <span />
        </div>

        <p className="thanks__message">
          {festival.date} tarihleri arasında Cumhuriyet Meydanı’nda
          gerçekleştireceğimiz 24. Tosya Kültür ve Pirinç Festivali’nde
          sizleri aramızda görmekten büyük memnuniyet duyacağız.
        </p>

        <div className="thanks__signature">
          <p>{municipality.mayor.name}</p>
          <span>{municipality.mayor.title}</span>
        </div>

        <div className="thanks__details">
          <p>{festival.date}</p>
          <span aria-hidden="true">•</span>
          <p>{festival.location}</p>
        </div>

        <a className="thanks__top" href="#top">
          <span>Başa Dön</span>
          <i aria-hidden="true">↑</i>
        </a>
      </div>

      <p className="thanks__footer">{municipality.name}</p>
    </section>
  );
}

export default Thanks;