var React = require("react");
var Nav = require("Nav");
var Timer = require("Timer");
// var Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main component</h2>
//                 {this.props.children}
//             </div>
//
//         );
//     }
// });

//siden denne funksjonen ikke innholder noen State, kan man bruke denne syntaxen

var Main =  (props) =>{
    return (
        <div>
            <div>
                <div>
                    <Nav/>
                {props.children}
                <Timer/>

            </div>
            </div>
        </div>

    );
}

module.exports = Main