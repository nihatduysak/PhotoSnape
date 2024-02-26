import { useState } from "react";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

export default function Pricing() {
    const [input, setInput] = useState(0);

    let fiyatlar = [
        {
            data: [
                {
                    plan: "temel",
                    fiyat: "19.00 ₺",
                    detay: 'Platformumuzun temel kullanımını içerir. Yeni ve hevesli fotoğrafçılar için önerilir.'
                },
                {
                    plan: "profesyonel",
                    fiyat: "39.00 ₺",
                    detay: 'Daha gelişmiş özellikler mevcut. Fotoğrafçılık uzmanları ve profesyoneller için önerilir.'
                },
                {
                    plan: "işletme",
                    fiyat: "99.00 ₺",
                    detay: 'Daha ayrıntılı ölçümler gibi ek özellikler mevcuttur. İşletme sahipleri için önerilir.'
                }
            ]
            
        },
        {
            data: [
                {
                    plan: "temel",
                    fiyat: "190.00 ₺",
                    detay: 'Platformumuzun temel kullanımını içerir. Yeni ve hevesli fotoğrafçılar için önerilir.'
                },
                {
                    plan: "profesyonel",
                    fiyat: "390.00 ₺",
                    detay: 'Daha gelişmiş özellikler mevcut. Fotoğrafçılık uzmanları ve profesyoneller için önerilir.'
                },
                {
                    plan: "işletme",
                    fiyat: "990.00 ₺",
                    detay: 'Daha ayrıntılı ölçümler gibi ek özellikler mevcuttur. İşletme sahipleri için önerilir.'
                }
            ]
        }
    ] 

    console.log(fiyatlar[input])
    

    function handleClick(e) {
        console.log(e.target.checked)
        if (e.target.checked) {
            setInput(1)
        } else {
            setInput(0)
        }
    }


    console.log(input)


    return (
        <>
            <motion.div className="pricingContainer"
            initial={{ opacity: 0, translateY: 100}}
            animate={{opacity: 1, translateY: 0}}
            >
                <div className="pricingHeader">
                    <div className="pricingText">
                        <h1>FİYATLANDIRMA</h1>
                        <p>Hikayelerinizi oluşturun, Photosnap fotoğrafçılar ve görsel hikaye anlatıcıları için bir platformdur. Fotoğraflarınızı oluşturmanın ve paylaşmanın basit bir yoludur.</p>
                    </div>
                    <img src="/images/pricing-header-img.png" alt="Pricing Header Img" />
                </div>
                <div className="paymentOption">
                    <div className="paymentDuration">
                        <h3>Aylık</h3>
                        <input onClick={handleClick} type="checkbox" className="toggle" />
                        <h3>Yıllık</h3>
                    </div>
                    <div className="paymentPlan">
                        {
                            fiyatlar[input].data.map((item, index) => {
                                return (
                                    <div className="plan">
                                        <div className="planDetail">
                                            <h3>{item.plan}</h3>
                                            <p>{item.detay}</p>
                                        </div>
                                        <div className="price">
                                            <h1>{item.fiyat}</h1>
                                            <h4>{input === 0 ? 'her ay' : 'her yıl'}</h4>
                                        </div>
                                        <button>PLANI SEÇİN</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="compare">
                    <h1>Karşılaştırma</h1>
                    <table className="compareTable">
                        <tr>
                            <th>Özellikler</th>
                            <th>Temel</th>
                            <th>Profesyonel</th>
                            <th>İşletme</th>
                        </tr>
                        <tr>
                            <td>Sınırsız Hikaye Gönderimi</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Sınırsız Hikaye Gönderimi</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Özel İçerik Yerleştirme</td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Metada'yı Özelleştirin</td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Gelişmiş Metrikler</td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Fotoğraf İndirmeleri</td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Arama Motoru İndeksleme</td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                        <tr>
                            <td>Özel Analitik</td>
                            <td></td>
                            <td></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                                <path d="M1 8.12351L5.62323 13L17 1" stroke="black" stroke-width="2"/></svg>
                            </td>
                        </tr>
                    </table>
                </div>

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