import Image from "next/image";
import React from "react";
import styles from "./info.module.css";

interface Info {
  id: number;
  title: string;
  copy: string;
  image: string;
}

const info: Info[] = [
  {
    id: 1,
    title: "O Mnie:",
    copy: "Cześć! Jestem Agnieszka, twórczyni marki ReTkane. Moja przygoda z modą zaczęła się w świecie projektowania dla różnych firm odzieżowych. Z biegiem czasu zauważyłam problem związany z masową produkcją tanich, nietrwałych ubrań, dlatego postanowiłam odejść z etatu. ReTkane to rezultat mojej pasji do upcyklingu i troski o środowisko. Tworzę unikalne akcesoria, wykorzystując materiały, które inaczej trafiłyby na śmietnik. Jednocześnie pragnę edukować ludzi na temat zrównoważonej mody i zachęcać do unikania nadprodukcji. W ramach marki ReTkane organizuję również warsztaty z rękodzieła, aby dzielić się wiedzą i umożliwiać innym doświadczenie radości tworzenia. Zapraszam Cię do odkrywania inspiracji na mojej stronie, gdzie znajdziesz nie tylko wyjątkowe produkty, ale także informacje o upcyclingu i ekologii.",
    image: require("../../ass/icons/wired-outline-1832-sunflower.gif"),
  },
];
const Info = () => {
  return (
    <div className={styles.containerInfo}>
      <div>
        <Image
          className={styles.imageInfo}
          src={require("../../ass/info/info_foto.jpg")}
          alt="info"
        />
      </div>
      <div className={styles.divInfo}>
        {info.map((i) => (
          <div key={i.id} className={styles.wrapperInfo}>
            <Image className={styles.imageIcons} src={i.image} alt="info" />
            <h4>{i.title}</h4>
            <h5>{i.copy}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
