const IndividualEducation = ({index, title, school, place, date, marks}) =>{
    const infos = [school, place, date, marks];
    const classname = `individual-edu edu-${index + 1}`;
    return <div className={classname}>
        <h2>{title}</h2>
        {
            infos.map(info => <p key={info}>{info}</p>)
        }
    </div>
}

export default IndividualEducation;