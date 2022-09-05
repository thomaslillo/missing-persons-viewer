function Menu(props) {

    return (
        <div className="menu">
            <div className="menu-item">
                <div className="menu-item-name">
                    <h3>{props.name}</h3>
                </div>
            </div>
        </div>
    )

}

export default Menu;