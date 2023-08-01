const TitleAndDesc = ({title, desc}) =>{
    return(
        <div className="title-desc">
            {
                title === "HEY, I'M IBRAHIM ANSARI" ?
                <h1 className="title">{title}</h1> :
                <>
                    <h2 className="title">{title}</h2>
                    <div className="line"></div>
                </>
            }
            <p className="desc">{desc}</p>
        </div>
    )
}

export default TitleAndDesc;