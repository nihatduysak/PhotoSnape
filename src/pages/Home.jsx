import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <>
            <motion.div className="container"
            initial={{ opacity: 0, translateY: 100}}
            animate={{ opacity: 1, translateY: 0 }}>
                {/* LARGE STORIES START */}

                <div className="largeStories">
                    <div className="stories blackBgStories">
                        <div className="storiesText">
                            <h1>Fotoğraf hikayelerinizi oluşturun ve paylaşın.</h1>
                            <p>Photosnap, fotoğrafçılar ve görsel hikaye anlatıcıları için bir platformdur. Fotoğraf paylaşmayı, hikayeler anlatmayı ve başkalarıyla bağlantı kurmayı kolaylaştırıyoruz.</p>
                            <div className="getAnInvite">
                                <Link to="#"><span className="linkText">DAVETİYE ALIN</span><img src="/images/arrow-right-w.png" alt="Invite Icon" /></Link>
                            </div>
                        </div>
                        <img src="/images/large-stories-1.png" alt="Large Stories" />
                    </div>
                    <div className="stories">
                        <img src="/images/large-stories-2.png" alt="Large Stories" />
                        <div className="storiesText">
                            <h1>Her zaman güzel hikayeler</h1>
                            <p>Hikayelerinizin harika görünmesini sağlamak için tasarım şablonları sunuyoruz. Kolayca fotoğraf, metin, harita ve diğer ağlardan medya ekleyin. Ardından hikayenizi herkesle paylaşın.</p>
                            <div className="getAnInvite">
                                <Link to="#"><span className="linkText">DAVETİYE ALIN</span><img src="/images/arrow-right-b.svg" alt="Invite Icon" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="stories lastStories">
                        <div className="storiesText">
                            <h1>Herkes için tasarlandı</h1>
                            <p>Photosnap, kitlenizde yankı uyandıran hikayeler oluşturmanıza yardımcı olabilir.  Aracımız her seviyeden fotoğrafçılar, markalar, işletmeler için tasarlanmıştır. </p>
                            <div className="getAnInvite">
                                <Link to="#"><span className="linkText">DAVETİYE ALIN</span><img src="/images/arrow-right-b.svg" alt="Invite Icon" /></Link>
                            </div>
                        </div>
                        <img src="/images/large-stories-3.png" alt="Large Stories" />
                    </div>
                </div>
                {/* LARGE STORIES END */}

                {/* SMALL STORIES START */}
                <div className="smallStories">
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-1.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h1>Dağlar</h1>
                                <p>John Appleseed</p>
                            </div>
                            <div className="smallStoryBorder">

                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-2.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h1>Gün Batımı Şehir Manzaraları</h1>
                                <p>Benjamin Cruz</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-3.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h1>18 Günlük Yolculuk</h1>
                                <p>Alexei Borodin</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-4.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h1>Mimari</h1>
                                <p>Samantha Brooke</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* SMALL STORIES END */}

                {/* FEATURES START */}
                <div className="features">
                    <div className="feature">
                        <img src="/images/features-icon-1.png" alt="Feature Icon" />
                        <h1>%100 Tüm cihazlarla uyumlu</h1>
                        <p>Hangi cihazda olursanız olun, sitemiz tamamen duyarlı ve hikayeler her ekranda güzel görünüyor.</p>
                    </div>
                    <div className="feature">
                        <img src="/images/features-icon-2.png" alt="Feature Icon" />
                        <h1>Fotoğraf Yükleme Sınırı Yok</h1>
                        <p>Aracımızın yükleme veya bant genişliği sınırı yoktur. Toplu olarak özgürce yükleyin ve tüm hikayelerinizi tek seferde paylaşın.</p>
                    </div>
                    <div className="feature">
                        <img src="/images/features-icon-3.png" alt="Feature Icon" />
                        <h1>Yerleştirmek için Kullanılabilir</h1>
                        <p>Tweetleri, Facebook gönderilerini, Instagram medyasını, Vimeo veya YouTube videolarını, Google Haritalar'ı ve daha fazlasını ekleyin. </p>
                    </div>
                </div>
                {/* FEATURES END */}
            </motion.div>
        </>
    )
}