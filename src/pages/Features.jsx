import { Link } from "react-router-dom";
import {motion} from "framer-motion";

export default function Features() {


    const container = {
        visible: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            translateY: 20
        },
        visible: {
            opacity: 1,
            translateY: 0
        }
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: 100}}
                animate={{ opacity: 1, translateY: 0 }}
                className="featuresContainer">
                <div className="featuresHeader">
                    <div className="featuresText">
                        <h1>ÖZELLİKLER</h1>
                        <p>Tüm özelliklerimizin, hikayelerini paylaşmak isteyen her hevesli ve hatta profesyonel fotoğrafçı tarafından sevilecek şekilde tasarlandığından emin oluyoruz.</p>
                    </div>
                    <img src="/images/features-header-img.png" alt="Features Header Img" />
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="features">
                    <motion.div
                        variants={item}
                        className="feature"
                    >
                        <img src="/images/features-icon-1.png" alt="Feature Icon"/>
                        <h1>%100 Tüm cihazlarla uyumlu</h1>
                        <p>Hangi cihazda olursanız olun, sitemiz tamamen duyarlı ve hikayeler her ekranda güzel
                            görünüyor.</p>
                    </motion.div>
                    <motion.div className="feature"
                                variants={item}
                    >
                        <img src="/images/features-icon-2.png" alt="Feature Icon"/>
                        <h1>Fotoğraf Yükleme Sınırı Yok</h1>
                        <p>Aracımızın yükleme veya bant genişliği sınırı yoktur. Toplu olarak özgürce yükleyin ve tüm
                            hikayelerinizi tek seferde paylaşın.</p>
                    </motion.div>
                <motion.div className="feature"
                            variants={item}
                            >
                    <img src="/images/features-icon-3.png" alt="Feature Icon"/>
                    <h1>Yerleştirmek için Kullanılabilir</h1>
                        <p>Tweetleri, Facebook gönderilerini, Instagram medyasını, Vimeo veya YouTube videolarını, Google Haritalar'ı ve daha fazlasını ekleyin. </p>
                    </motion.div>
                    <motion.div className="feature"
                                variants={item}
                    >
                        <img src="/images/features-icon-4.svg" alt="Feature Icon" />
                        <h1>Özel Alan Adı</h1>
                        <p>Photosnap abonelikleriyle hikayelerinizi kendi alanınızda barındırabilirsiniz. Ayrıca markalamamızı da kaldırabilirsiniz!</p>
                    </motion.div>
                    <motion.div className="feature"
                                variants={item}
                    >
                        <img src="/images/features-icon-5.svg" alt="Feature Icon" />
                        <h1>Görünürlüğünüzü Artırın</h1>
                        <p>Hikayenizi veya galerinizi görüntüleyen kullanıcılar, yerleşik posta listemizle yeni ve öne çıkan hikayelerden kolayca haberdar olabilirler.</p>
                    </motion.div>
                    <motion.div className="feature"
                                variants={item}
                    >
                        <img src="/images/features-icon-6.svg" alt="Feature Icon" />
                        <h1>Sürükle ve Bırak Görüntü</h1>
                        <p>Görselinizi kolayca sürükleyip bırakın ve her seferinde güzel çekimler elde edin. Hikaye oluşturmayı zorlaştıracak üst düzey araçlar yok.</p>
                    </motion.div>
                </motion.div>
                <div className="featuresFooter">
                    {/* <img src="/images/features-footer-img.png" alt="" /> */}
                    <div className="featuresFooterText">
                        <div className="featuresFooterTitle">
                            <h1>Beta aşamasındayız. Davetiyenizi bugün alın!</h1>
                        </div>
                        <div className="getAnInvite">
                        <Link to="#"><span className="linkText">DAVETİYE ALIN</span><img src="/images/arrow-right-w.png" alt="Invite Icon" /></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}