import Nav from "../component/nav/Nav";
import Person from "../component/about/Person";
import './About.css';

import Lottie from "lottie-react";
import loadingLottie from "../lottie/handshake.json";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })
    return (
        <>
            <div className="About Backcolor">
                <Nav />
                <p className="OAtitle text-3xl text-center pb-6 pt-20">만든이들</p>
                <div className="collabo flex items-center justify-center">
                    <div className="team-logo flex flex-col  w-4/12">
                        <img className="mx-auto" src={process.env.PUBLIC_URL + `assets/Logo/sketchLogo.png`} alt="sketch logo" />
                        <span className="text-center mt-3 titlegreen font-bold">SKETCH</span>
                        <span className="text-center text-gray font-bold">동아리연합회</span>
                    </div>
                    <Lottie className='w-2/12' animationData={loadingLottie} />
                    <div className="team-logo flex flex-col w-4/12">
                        <img className="mx-auto py-6" src={process.env.PUBLIC_URL + `assets/Logo/likelion.png`} alt="likelion logo" />
                        <span className="text-center mt-3 titlegreen font-bold">성결대학교</span>
                        <span className="text-center text-gray font-bold">멋쟁이사자처럼</span>
                    </div>
                </div>
                <div className="font-size10 text-center font-bold text-gray py-16">성결대학교 <span className="titlegreen">제39대 SKETCH 동아리연합회</span>에서 동아리페스티벌을 기획하였습니다. <br /><span className="titlegreen">멋쟁이사자처럼 성결대 11기</span>에서 웹사이트를 제작하였습니다.</div>
                <div className="about-team flex flex-col items-center text-center">
                    <img className="mx-auto w-16" src={process.env.PUBLIC_URL + `assets/Logo/sketchLogo.png`} alt="sketch logo" />
                    <p className="titlegreen font-bold text-xs pt-3 text-center">제39대 SKETCH 동아리연합회</p>
                    <a className="text-xs font-bold text-gray py-2 text-center" target="_blank" without rel="noreferrer" href="https://www.instagram.com/sku_dongari39/">@sku_dongari39</a>
                    <div className="people">
                        <Person id={1} />
                        <Person id={2} />
                        <Person id={3} />
                    </div>
                </div>
                <div className="about-team flex flex-col items-center text-center pt-16">
                    <img className="mx-auto w-16" src={process.env.PUBLIC_URL + `assets/Logo/likelion.png`} alt="likelion logo" />
                    <p className="titlegreen font-bold text-xs pt-3 text-center">멋쟁이사자처럼 성결대 11기</p>
                    <a className="text-xs font-bold text-gray py-2 text-center" target="_blank" without rel="noreferrer" href="https://www.instagram.com/likelion_sku/">@likelion_sku</a>
                    <div className="people">
                        <Person id={6} />
                        <Person id={5} />
                        <Person id={4} />
                    </div>
                </div>
                <div className="last"></div>
            </div>
        </>
    )
}

export default About;