import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="onas-baner">
        <div className="slider-1" style={{ backgroundImage: `url(${require('../images/hardware.jpg')})` }}></div>
        <div className="slider-2" style={{ backgroundImage: `url(${require('../images/arch_icnt_om_54.jpg')})` }}></div>
        <div className="slider-3" style={{ backgroundImage: `url(${require('../images/bibi08-2017_19.jpg')})` }}></div>
      </div>

      <div className="title-page-contener">
        <div className="line-left"></div>
        <div className="title-page">O NAS</div>
        <div className="line-right"></div>
      </div>
      <div className="onas">
        <p>
          Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum jest standardowym tekstem manekina w branży od 1500 roku, kiedy nieznana drukarka wzięła galerię typu i gramoliła się, aby stworzyć książkę z typami. Przetrwał nie tylko pięć wieków, ale także skok do składu elektronicznego, pozostając zasadniczo niezmieniony. Został spopularyzowany w latach sześćdziesiątych wraz z wydaniem arkuszy Letraset zawierających fragmenty Lorem Ipsum, a ostatnio z oprogramowaniem do publikowania na komputerze, takim jak Aldus PageMaker, w tym wersjami Lorem Ipsum.
                </p>
        <p>
          Dlaczego go używamy?
          Od dawna wiadomo, że czytelnik będzie rozpraszany czytelną zawartością strony, patrząc na jej układ. Chodzi o to, że Lorem Ipsum ma mniej więcej normalny rozkład liter, w przeciwieństwie do „Treść tutaj, treść tutaj”, dzięki czemu wygląda na czytelny angielski. Wiele pakietów do publikowania na komputerach stacjonarnych i edytorów stron internetowych używa teraz Lorem Ipsum jako domyślnego tekstu modelowego, a wyszukiwanie hasła „lorem ipsum” odkryje wiele witryn internetowych, które są jeszcze w powijakach. Różne wersje ewoluowały przez lata, czasem przez przypadek, czasem celowo (wstrzyknięty humor i tym podobne).
            </p>


        <p>
          Skąd to pochodzi?
          Wbrew powszechnemu przekonaniu Lorem Ipsum nie jest zwykłym tekstem. Ma swoje korzenie w klasycznej literaturze łacińskiej z 45 rpne, która ma ponad 2000 lat. Richard McClintock, łaciński profesor w Hampden-Sydney College w Wirginii, spojrzał na jedno z bardziej niejasnych łacińskich słów consectetur z fragmentu Lorem Ipsum i przeglądając cytaty tego słowa w literaturze klasycznej, odkrył niewątpliwe źródło. Lorem Ipsum pochodzi z sekcji 1.10.32 i 1.10.33 „de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) autorstwa Cycerona, napisanej w 45 rpne Ta książka jest traktatem o teorii etyki, bardzo popularnym w okresie renesansu. Pierwsza linia Lorem Ipsum, „Lorem ipsum dolor sit amet ..”, pochodzi z linii z sekcji 1.10.32.
                </p>

        <p>
          Standardowa część Lorem Ipsum używana od 1500 roku jest przedstawiona poniżej dla zainteresowanych. Sekcje 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cicero są również reprodukowane w ich oryginalnej oryginalnej formie, wraz z angielskimi wersjami z tłumaczenia H. Rackhama z 1914 r.
            </p>

      </div>
    </Layout>
  )
}

export default IndexPage
