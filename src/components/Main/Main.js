import './Main.css';

import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';

const Main = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Welcome</h1>
                    <h2 className="session">Browse all sections</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            <a href="" className="cards">
                                <div className="cards card1">
                                    <img src={Playlist1} alt="" />
                                    <span>Molchat Doma</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card2">
                                    <img src={Playlist2} alt="" />
                                    <span>Pop Mix</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card3">
                                    <img src={Playlist3} alt="" />
                                    <span>Rock 'n' Run</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card4">
                                    <img src={Playlist4} alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card5">
                                    <img src={Playlist5} alt="" />
                                    <span>All New Indie</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card6">
                                    <img src={Playlist6} alt="" />
                                    <span>Chill Vibes</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card7">
                                    <img src={Playlist7} alt="" />
                                    <span>Dance/Eletronic Mix</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card8">
                                    <img src={Playlist8} alt="" />
                                    <span>lofi beats</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card9">
                                    <img src={Playlist9} alt="" />
                                    <span>Indie Rock Hits</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card10">
                                    <img src={Playlist10} alt="" />
                                    <span>*end credits</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card11">
                                    <img src={Playlist11} alt="" />
                                    <span>90's Hip-Hop</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card12">
                                    <img src={Playlist12} alt="" />
                                    <span>夢の砂漠</span>
                                </div>
                            </a>
                            <a href="" className="cards">
                                <div className="cards card13">
                                    <img src={Playlist13} alt="" />
                                    <span>Moody Mix</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="">
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artist</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;