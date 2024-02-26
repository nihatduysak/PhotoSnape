import { Link } from "react-router-dom";
import {motion} from "framer-motion";


export default function Stories() {
    return (
        <>
            <motion.div className="storiesContainer"
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            >
                <div className="largestImg">
                    <img src="/images/largest-img.png" alt="Largest Story" />
                    <div className="largesImgText">
                        <h3>GEÇEN AYIN ÖNE ÇIKAN HIKAYESI</h3>
                        <h1>APPALACHIA'NIN PUSLU DOLUNAYI</h1>
                        <p>2 Mart 2020 <span>John Appleseed</span></p>
                        <p>Parçalanmış plato alanı, aslında jeolojik dağlardan oluşmasa da, özellikle doğu Kentucky ve Batı Virginia'da halk arasında "dağlar" olarak adlandırılır ve sırtlar yüksek olmasa da, arazi son derece engebelidir.</p>
                        <div className="readStory">
                            <a href="#">HİKAYEYİ OKU</a>
                            <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="smallStories">
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-1.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>16 Nisan 2020</h5>
                                <h1>Dağlar</h1>
                                <p>John Appleseed</p>
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
                                <h5>14 Nisan 2020</h5>
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
                                <h5>11 Nisan 2020</h5>
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
                                <h5>9 Nisan 2020</h5>
                                <h1>Mimari</h1>
                                <p>Samantha Brooke</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-5.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>7 Nisan 2020</h5>
                                <h1>Dünya Turu 2019</h1>
                                <p>Timothy Wagner</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-6.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>3 Nisan 2020</h5>
                                <h1>Öngörülemeyen Köşeler</h1>
                                <p>William Malcolm</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-7.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>29 Mart 2020</h5>
                                <h1>King Afrika'da: Bölüm II</h1>
                                <p>Tim Hillenburg</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-8.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>21 Mart 2020</h5>
                                <h1>Hiçliğe Yolculuk</h1>
                                <p>Felicia Rourke</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-9.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>19 Mart 2020</h5>
                                <h1>Denizin Öfkesi</h1>
                                <p>Mohammed Abdul</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-10.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>16 Mart 2020</h5>
                                <h1>Serbest Koşu</h1>
                                <p>Michelle</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-11.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>11 Mart 2020</h5>
                                <h1>Dalgaların Ardında</h1>
                                <p>Lamarr Wilson</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-12.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>9 Mart 2020</h5>
                                <h1>Sakin Sular</h1>
                                <p>Samantha Brooke</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-13.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>5 Mart 2020</h5>
                                <h1>Samanyolu</h1>
                                <p>Benjamin Cruz</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-14.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>4 Mart 2020</h5>
                                <h1>Karanlık Ormanda Gece</h1>
                                <p>Mohammed Abdul</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-15.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>1 Mart 2020</h5>
                                <h1>Somwarpet'in Güzelliği</h1>
                                <p>Michelle</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                    <Link to='#' className="smallStory">
                        <img src="/images/small-story-16.png" alt="Small Stories" />
                        <div className="smallStoryInfo">
                            <div className="smallStoryText">
                                <h5>25 Şubat 2020</h5>
                                <h1>Düşler Ülkesi</h1>
                                <p>William Malcolm</p>
                            </div>
                            <div className="readStory">
                                <a href="#">HİKAYEYİ OKU</a>
                                <a href=""><img src="/images/arrow-right-w.png" alt="Invite Icon" /></a>
                            </div>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}