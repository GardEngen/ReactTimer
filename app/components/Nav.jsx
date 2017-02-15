var React = require("react");
var {Link, IndexLink} = require("react-router");
var Nav = () => {
    return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            ReactTimerApp
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Timer</Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: "bold"}}>Countdown</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="http://gardengen.no" target="_blank">Gard Engen</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

module.exports = Nav