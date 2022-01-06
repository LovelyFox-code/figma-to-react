import React from 'react';

function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Всі продукти
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Vkursi</a>
                <a className="dropdown-item" href="#">VSUDI</a>
                <a className="dropdown-item" href="#">MARKET BI</a>
                <a className="dropdown-item" href="#">ZEMLI</a>
                <a className="dropdown-item" href="#">HROMADA</a>
                <a className="dropdown-item" href="#">API</a>
            </div>
        </li>


        <li className="nav-item active remove">
            <a href="#" className="nav-link">Vkursi</a>
        </li>
        <li className="nav-item remove">
            <a href="#" className="nav-link">VSUDI</a>
        </li>
        <li className="nav-item remove">
            <a href="#" className="nav-link">MARKET BI</a>
        </li>
        <li className="nav-item remove">
            <a href="#" className="nav-link">ZEMLI</a>
        </li>
        <li className="nav-item remove">
            <a href="#" className="nav-link">HROMADA</a>
        </li>
        <li className="nav-item remove">
            <a href="#" className="nav-link">API</a>
        </li>

    </ul>
    <ul className="nav-item">
        <li className="nav-item">
            <i className="bi bi-telephone-fill "></i>
            <i className="bi bi-chevron-down"></i>
        </li>
        <li className="nav-item">

            <i className="bi bi-person-fill "></i>
            <i className="bi bi-chat-square-dots "></i>
            <i className="bi bi-chevron-down "></i>
        </li>
        <li className="nav-item">
            <p>Мій кабінет</p>
            <i className="bi bi-chevron-down "></i>
        </li>
    </ul>
</div>
</nav>

        </div>
    )
}

export default Navbar;