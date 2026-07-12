import "./Artists.css";

const artists = [
  {
    name: "Hande Ünsal",
    date: "28 Ağustos",
    time: "20.00",
    image: "/festival-invitation/images/artists/hande-unsal.webp",
  },
  {
    name: "Berkay",
    date: "28 Ağustos",
    time: "22.00",
    image: "/festival-invitation/images/artists/berkay.webp",
  },
  {
    name: "Tuğba Yurt",
    date: "29 Ağustos",
    time: "20.00",
    image: "/festival-invitation/images/artists/tugba-yurt.webp",
  },
  {
    name: "Murat Boz",
    date: "29 Ağustos",
    time: "22.00",
    image: "/festival-invitation/images/artists/murat-boz.webp",
  },
  {
    name: "Ceza",
    date: "30 Ağustos",
    time: "20.00",
    image: "/festival-invitation/images/artists/ceza.webp",
  },
  {
    name: "Hadise",
    date: "30 Ağustos",
    time: "22.00",
    image: "/festival-invitation/images/artists/hadise.webp",
  },
];

function Artists() {
  return (
    <section className="artists" id="artists" aria-labelledby="artists-title">
      <div className="artists__glow" aria-hidden="true" />

      <div className="artists__container">
        <header className="artists__header">
          <span className="artists__eyebrow">Festival Konserleri</span>

          <h2 id="artists-title">
            Üç Gece
            <span>Altı Büyük Sahne</span>
          </h2>

          <p>
            Cumhuriyet Meydanı’nda üç gün boyunca müzik, enerji ve unutulmaz
            performanslar.
          </p>
        </header>

        <div className="artists__grid">
          {artists.map((artist, index) => (
            <article className="artists__card" key={artist.name}>
              <div className="artists__image-wrap">
                <img
                  className="artists__image"
                  src={artist.image}
                  alt={`${artist.name} konser görseli`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="artists__image-overlay" aria-hidden="true" />
                <span className="artists__index">0{index + 1}</span>
              </div>

              <div className="artists__content">
                <div className="artists__meta">
                  <span>{artist.date}</span>
                  <span>{artist.time}</span>
                </div>

                <h3>{artist.name}</h3>

                <p>Canlı Konser</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
