import {React, useState} from 'react'
import {Link} from 'react-router-dom'

function App() {
    const [activePage, setActivePage] = useState('Home')

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">Faber Pizza</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={activePage === "Home" ? "nav-link active" : "nav-link"} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">Menu/Online Order</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>    
    );
}

export default App;
