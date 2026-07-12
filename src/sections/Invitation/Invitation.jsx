import { festivalData } from "../../data/festivalData";
import "./Invitation.css";

function Invitation() {
  const { municipality, festival, invitation } = festivalData;

  return (
    <section
      className="invitation"
      id="invitation"
      aria-labelledby="invitation-title"
    >
      <div className="invitation__glow" aria-hidden="true" />

      <div className="invitation__frame">
        <header className="invitation__header">
          <span className="invitation__eyebrow">Tosya Belediye Başkanlığı</span>

          <span className="invitation__ornament" aria-hidden="true">
            ◆
          </span>
        </header>

        <div className="invitation__content">
          <p className="invitation__edition">{festival.edition}</p>

          <h2 id="invitation-title">Resmî Davet</h2>

          <div className="invitation__divider" aria-hidden="true">
            <span />
            <i>◆</i>
            <span />
          </div>

          <p className="invitation__salutation">
            {invitation.recipientTitle}
          </p>

          <p className="invitation__recipient">
            {invitation.recipientName}
          </p>

          <p className="invitation__message">
            Tosya’mızın kültürel değerlerini, köklü geleneklerini ve
            bereketli topraklarını bir araya getiren
            <strong> 24. Tosya Kültür ve Pirinç Festivali’ni </strong>
            teşriflerinizle onurlandırmanızdan büyük memnuniyet duyacağız.
          </p>

          <div className="invitation__details">
            <div>
              <span>Tarih</span>
              <p>{festival.date}</p>
            </div>

            <div className="invitation__details-line" aria-hidden="true" />

            <div>
              <span>Yer</span>
              <p>{festival.location}</p>
            </div>
          </div>
        </div>

        <footer className="invitation__signature">
          <p>{municipality.mayor.name}</p>
          <span>{municipality.mayor.title}</span>
        </footer>
      </div>
    </section>
  );
}

export default Invitation;