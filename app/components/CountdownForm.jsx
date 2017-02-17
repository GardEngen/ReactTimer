var React = require("react");

var CountdownForm =  React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        //Når man har lyst il å kommunisere mellom en child og en parent. The parent kan sende en funksjon inn til child
        //the child kan kalle på den funksjonen og the paraent takes action basert på hva paramenter som blir sendt opp

        //regular expresions
        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = "";
            //call parant function
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }

    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                  <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded hollow">Start</button>
                </form>
            </div>
        );

    }


});

module.exports = CountdownForm;