const Department = ({ department, menu, goods, program, selling, icon }) => {
    return (
        <div className="Department relative">
            <div className="Dtitle absolute text-xs rounded-2xl px-3 py-0.5">{department}</div>
            <div className="Dexplain flex items-center justify-between bg-white w-9/12 text-center m-auto p-4 rounded-2xl mt-9">
                <div className="boothcontent flex flex-col items-start justify-start">
                    {menu !== '' && <div><span className="dongariContenttitle">메뉴 | </span>{menu}</div>}
                    {goods !== '' && <div><span className="dongariContenttitle">배부 | </span> {goods}</div>}
                    {selling !== '' && <div><span className="dongariContenttitle">판매 | </span> {selling}</div>}
                    {program !== '' && <div><span className="dongariContenttitle">프로그램 | </span> {program}</div>}
                </div>
                <span className="Dimg flex justify-end">
                    <span>
                        {icon.map((item, idx) => {
                            return (
                                <img key={idx} className={icon.length === 3 ? "three" : ''} src={process.env.PUBLIC_URL + `assets/dongari/${item}.png`} alt="field" />
                            )
                        })}
                    </span>
                </span>
            </div>
        </div >
    )
}

export default Department;