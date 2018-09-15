import React from 'react';
import {Line} from 'react-chartjs';
import moment from 'moment';

class TimestampPlot extends React.Component {
    constructor(props) {
        super(props);

        let curTime = moment().unix();
        this.state = {
            x: this.getX(curTime),
            y: this.getY(curTime)
        };

        this.layout = {
            label: 'Unix Time',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
        };

        this.config = {
            scaleShowGridLines: false,
            pointDot: false,
            responsive: true,
            maintainAspectRatio: false
        };

        this.interval = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        this.interval.clearInterval();
    }

    updateTime() {
        let curTime = moment().unix();

        this.setState({
            x: this.getX(curTime),
            y: this.getY(curTime)
        });
    }

    getX(time) {
        let amount = time.toString().length;
        let xAxis = [];

        for (let i=0; i < amount; i++) {
            xAxis.push('');
        }

        return xAxis;
    }

    getY(time) {
        let timeString = time.toString();
        let yAxis = [];

        for (let i=0; i < timeString.length; i++) {
            yAxis.push(Number(timeString[i]));
        }
        return yAxis;
    }

    render() {
        return (
            <div style={{
                marginTop: '10vh',
                marginBottom: '10vh',
                marginLeft: '5vw',
                marginRight: '5vw'
            }}>
                <div style={{width: '90vw', height: '80vh'}}>
                    <Line
                        data={{
                            labels: this.state.x,
                            datasets: [{
                                data: this.state.y,
                                ...this.layout
                            }]
                        }}
                        options={this.config} />
                </div>
            </div>
        );
    }
}

export default TimestampPlot;
