const Department = ({ department, explain, icon }) => {
    return (
        <div className="Department relative">
            <div className="Dtitle absolute text-xs rounded-2xl px-3 py-0.5">{department}</div>
            <div className="Dexplain flex items-center justify-between bg-white w-9/12 text-center m-auto p-4 rounded-2xl mt-9">
                <span className="break-all text-sm">{explain}</span>
                <span className="Dimg shrink-0 flex justify-end">
                    <span className={icon.length === 3 ? "threeParent" : ''}>
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