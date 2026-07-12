import { festivalData } from "../../data/festivalData";
import "./Welcome.css";

function Welcome() {
  const { municipality, festival, invitation, opening } = festivalData;

  const handleInvitationOpen = () => {
    const nextSection = document.querySelector("#invitation");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <div className="welcome__overlay" aria-hidden="true" />

      <div
        className="welcome__decoration welcome__decoration--top"
        aria-hidden="true"
      />

      <div
        className="welcome__decoration welcome__decoration--bottom"
        aria-hidden="true"
      />

      <div className="welcome__content">
        <header className="welcome__municipality">
          <img
            className="welcome__logo"
            src="/images/logos/tosya-logo.png"
            alt="Tosya Belediyesi logosu"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <p>{municipality.name}</p>
        </header>

        <div className="welcome__heading">
          <span className="welcome__label">{opening.label}</span>

          <div className="welcome__line" aria-hidden="true" />

          <p className="welcome__edition">{festival.edition}</p>

          <h1 id="welcome-title">
            Tosya Kültür
            <span>ve Pirinç Festivali</span>
          </h1>

          <p className="welcome__date">
            <span>{festival.date}</span>
            <span className="welcome__date-separator" aria-hidden="true">
              •
            </span>
            <span>{festival.location}</span>
          </p>
        </div>

        <div className="welcome__recipient">
          <p className="welcome__recipient-title">
            {invitation.recipientTitle}
          </p>

          <p className="welcome__recipient-name">
            {invitation.recipientName}
          </p>

          <p className="welcome__message">{invitation.message}</p>
        </div>

        <button
          className="welcome__button"
          type="button"
          onClick={handleInvitationOpen}
        >
          <span>{opening.buttonText}</span>

          <span className="welcome__button-arrow" aria-hidden="true">
            ↓
          </span>
        </button>
      </div>

      <p className="welcome__scroll-text">{opening.scrollText}</p>
    </section>
  );
}

export default Welcome;