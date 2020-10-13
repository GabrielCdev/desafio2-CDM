import React, { Component } from 'react';
import Moment from 'moment-timezone';

export default class Clock extends Component {
    constructor() {
        super();
        this.updateTime = this.updateTime.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
    }
    state = {
        currentTime: new Date()
    }

    getCurrentTime() {
        const moment = Moment(this.state.currentTime);
        return moment.tz(this.props.timezone);
    }

    updateTime() {
        this.setState({ currentTime: new Date() });
    }

    componentDidMount() {
        this.timer = setInterval(this.updateTime, 1);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const moment = this.getCurrentTime();

        return (
            <div>
                {true}
                <div style={{fontSize: "100px"}}>
                    {moment.format('HH:mm:ss')}
                </div>
                <span className="nome-cidade">
                    {this.props.name}
                </span>
                <button onClick={(e) => this.props.onDelete(this.props.id)}>
                    Remove clock
                </button>
            </div>
        )
    }
}