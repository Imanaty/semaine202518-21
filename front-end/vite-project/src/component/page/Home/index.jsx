import PlayPage from "../Play"


const HomePage = () => {
    return (
        <div className="HomePageBlock">
            <h2>Jouez à notre jeu de Yam's pour tenter de remporter des lots !</h2>
            {/* Boutton Jouer page : PlayPage*/}

            <h2>Lots restants :</h2>
            <div className="LotsRestantsBlock">
                <div>
                    <img src="http://fakeimg.pl/200x100/ff0000/000" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="http://fakeimg.pl/200x100/7f00ff/000" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="http://fakeimg.pl/200x100/00aaff/000" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="http://fakeimg.pl/200x100/00ff00/000" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="http://fakeimg.pl/200x100/f7ff00/000" alt="" />
                    <p></p>
                </div>
                <div>
                    <img src="http://fakeimg.pl/200x100/ff0066/000" alt="" />
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default HomePage