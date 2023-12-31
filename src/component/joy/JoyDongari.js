import Subtitle from "../Subtitle";
import { HiMusicalNote } from "react-icons/hi2";
import { IoLeaf } from "react-icons/io5";


const JoyDongari = () => {
    return (
        <div className="JoyDongari slide-in">
            {/* TimeTable */}
            <Subtitle character={'joy'} title={'TIME TABLE'} direction={'left'} />
            <div className="timetable w-10/12 m-auto text-center">
                <div className="py-3 text-lg font-extrabold flex justify-center items-center">
                    <HiMusicalNote className="mr-1 mb-1" />
                    난 그대의 연예인 17:00 ~ 20:00
                    <HiMusicalNote className="ml-1 mb-1" />
                </div>

                <div className="joytimetabletext grid grid-cols-2 w-8/12 m-auto pb-3 gap-1 gap-x-6 text-start">
                    <p>
                        <IoLeaf color='#2B6935' /><span>1. 세인트</span></p>
                    <p>
                        <IoLeaf color='#2B6935' /><span>5. 뮤직애</span></p>
                    <p>
                        <IoLeaf color='#2B6935' /><span>2. 소리하나</span></p>
                    <p>
                        <IoLeaf color='#2B6935' /><span>6. S.T.C</span></p>
                    <p>
                        <IoLeaf color='#2B6935' /><span>3. 흑심</span></p>
                    <p>
                        <IoLeaf color='#2B6935' /><span>7. 페가수스</span></p>
                    <p>
                        <IoLeaf color='#2B6935' /><span>4. 소너러스</span></p>
                </div>
            </div>

            {/* Line Up */}
            <Subtitle character={'joy'} title={'LINE UP'} direction={'right'} />
            <div className="dongarifont">
                <div className="flex justify-center items-end relative my-10">
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/1.png`} alt="" />
                    <p className="text-2xl mb-8">SAINT</p>
                    <img width='150' className='dongariLogo1 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/1Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <p className="text-2xl mb-3">소리하나</p>
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/2.png`} alt="" />
                    <img width='150' className='dongariLogo2 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/2Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/3.png`} alt="" />
                    <p className="text-2xl mb-3">흑심</p>
                    <img width='100' className='dongariLogo3 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/3Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <p className="text-2xl mb-4">소너러스</p>
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/4.png`} alt="" />
                    <img width='130' className='dongariLogo4 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/4Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/5.png`} alt="" />
                    <p className="text-2xl mb-6">뮤직애</p>
                    <img width='200' className='dongariLogo5 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/5Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <p className="text-2xl mb-5">S.T.C</p>
                    <img width='230' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/6.png`} alt="" />
                    <img width='130' className='dongariLogo6 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/6Logo.png`} alt="" />
                </div>

                <div className="flex justify-center items-end relative my-10">
                    <img width='200' className='relative z-10' src={process.env.PUBLIC_URL + `assets/joyDongari/7.png`} alt="" />
                    <p className="text-2xl mb-1 ml-1"> PEGASUSS</p>
                    <img width='130' className='dongariLogo7 absolute opacity-30' src={process.env.PUBLIC_URL + `assets/joyDongari/7Logo.png`} alt="" />
                </div>
                <div className="last"></div>
            </div>
        </div>
    )
}

export default JoyDongari;