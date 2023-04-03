'use client';

import Image from "next/image"
import { NextSeo } from 'next-seo';
import { ActionButton } from "../../../components/ActionButton";


export default function Page() {
  return (
    <div className="flex gap-2 flex-col items-center text-center">
      <Image
        src="/images/szkolenie-przedluzanie-rzes.jpg"
        alt="szkolenie przedluzanie rzes"
        width={500}
        height={500}
        priority
      />
      <article>
        <h1>SZKOLENIA Z PRZEDŁUŻANIA RZĘS</h1>
        <h2>WOJEWÓDZTWO OPOLSKIE</h2>
        <p>Jestem trenerem stylizacji rzęs w firmie Rarity Academy. Jest to firma stworzona przez ikonę branży rzęsowej Monikę Mroczkę i jej męża.</p>
        <p>Programy szkoleniowe Rarity Academy wyróżniają się prostotą i konkretną wiedzą - która sprawia, że kursantka od razu po ukończeniu szkolenia NAPRAWDĘ potrafi przedłużać rzęsy! W województwie opolskim to ja reprezentuję jako instruktor firmę Rarity i mam zaszczyt prowadzić naprawdę świetne szkolenia! Jako instruktor zadbam oto, abyś kończąc szkolenie czuła się w 100% pewna swoich umiejętności! Po szkoleniu natomiast będziesz otoczona moją opieką - w razie pytań zawsze służę pomocą! Jakie szkolenie wybrać aby zostać profesjonalną stylistką?</p>
        <h2>Szkolenie z metody podstawowej (1:1)</h2>
        <p>Jest to podstawa podstaw. Jest to tak zwana królowa metod! To na tym szkoleniu nauczysz się fundamentów w stylizacji rzęs. Czym są rzęsy? Klej? Polimeryzacja? Powierzchnia styku? Jak separować i zabezpieczać powiekę dolną? Poznasz wszystkie najważniejsze produkty potrzebne do stworzenia pięknych aplikacji! I wiele, wiele więcej! Jest to najważniejsze szkolenie, gwarantuję, że nauczysz się wszystkiego co będzie Ci potrzebne aby natychmiast zacząć przyjmować klientki i zarabiać pieniądze!
        </p>
        <h2>
          Szkolenie z 1 stopnia objętości (2-3D)
        </h2>
        <p>Jeżeli ukończyłaś szkolenie podstawowe, możesz przejść już do nauki robienia kępek - jest to podstawa metod objętościowych. Nauczę Cię różnych metod ich tworzenia, różnymi zakrzywieniami pęset. Poznasz bardziej zaawansowane techniki tworzenia aplikacji LIGHT VOLUME oraz skupimy się na schematach wyklejania. Po ukończeniu tego szkolenia możesz dopisać kolejną usługę do swojego cennika!</p>
        <h2>Szkolenie z 2 stopnia objętości (4-6D)</h2>
        <p>Tworzenie rzęs metodą Mega Volume jest kolejnym krokiem po małych objętościach! Na tym szkoleniu dowiesz się jak tworzyć trwałe stylizacje i mocniejsze efekty. Tworzenie kępek 4-6D to nie łatwa sprawa ale spokojnie, wszystkiego Cię nauczę. Rozwiniemy każdy temat, który był poruszany na szkoleniu z lekkich objętości i bardziej go rozwiniemy. Stylizacja rzęs nie będzie miała już przed Tobą żadnych tajemnic!</p>
        <h2>SZKOLENIA HYBRYDOWE</h2>
        <p>Więcej informacji na temat szkoleń znajdziesz w linku poniżej, tam również możesz od razu wybrać termin i zarezerwować dla siebie szkolenie W razie jakichkolwiek pytań zapraszam Cię do kontaktu :-)</p>
      </article>
      <ActionButton label="Zapisz sie na szkolenie" onClick={() => null} />
    </div>
  )
}
