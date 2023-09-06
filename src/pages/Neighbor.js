import { useEffect, useState } from "react";
import Nav from "../component/Nav";
import SwitchBtn from "../component/SwitchBtn";
import OutBooth from "../component/OutBooth";
import OutSponsor from "../component/OutSponsor";
import StudentBooth from "../component/StudentBooth";

const Neighbor = () => {
    const [onActive, setOnActive] = useState('외부부스');
    let Content;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [Content])

    switch (onActive) {
        case '외부협찬':
            Content = OutSponsor;
            break;
        case '학생부스':
            Content = StudentBooth;
            break;
        default:
            Content = OutBooth;
            break;
    }

    return (
        <div className="Neighbor Backcolor">
            <div>
                <Nav />

                <div className="flex justify-center OA">
                    <SwitchBtn character={'neighbor'} title={'외부부스'} onActive={onActive} setOnActive={setOnActive} />
                    <SwitchBtn character={'neighbor'} title={'외부협찬'} onActive={onActive} setOnActive={setOnActive} />
                    <SwitchBtn character={'neighbor'} title={'학생부스'} onActive={onActive} setOnActive={setOnActive} />
                </div>
            </div>

            <div>
                <Content />
            </div>
        </div>
    )
}

export default Neighbor;