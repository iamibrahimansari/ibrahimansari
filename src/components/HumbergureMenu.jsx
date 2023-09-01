const HumbergureMenu = ({stateMethod, setHiddenClass}) =>{
    const handleOnClick = () =>{
        stateMethod('ms');
        setHiddenClass('hidden');
    }
    return <div className="hmenu" onClick={handleOnClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
}

export default HumbergureMenu;