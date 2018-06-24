import React from 'react'
import './Formula.css'

class Dropdown extends React.Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.getTotalRank = this.getTotalRank.bind(this);
        this.addTradePoints = this.addTradePoints.bind(this);
    }

    handleChange(e){
        this.props.onRankChange(e.target.value)
    }

    getTotalRank(e){
        this.props.onLevelChange(e.target.value)
    }

    getRankLevels = () => {
        const view = this.props.Sets.filter(({name}) => name === this.props.selectedRank)[0]
        return (
            <div className="same-lineRank">
                <select onChange={this.getTotalRank} value={this.props.selectedLevel}>
                    {view.Levels.map((level, i) => <option key={i}>{level}</option>)}
                </select>
            </div>
        )
    }

    addTradePoints(e){
        this.props.onClick(this.props.value)
    }



    render(){

        return(
            <div>
                <select value={this.props.selectedRank} onChange={this.handleChange}>
                    {this.props.Rank.map((value, i) => <option key={i}>{value}</option>)}
                </select>
                {this.getRankLevels()}
                <button onClick={this.addTradePoints}>Calculate</button>
            </div>
        )
    }
}

export default Dropdown

var basic = [...Array(11).keys()];
var min = basic.splice(1, 11);

var Master = [...Array(31).keys()];
var minMaster = Master.splice(1, 31);

var Guru = [...Array(21).keys()];
var minGuru = Guru.splice(1, 21);

Dropdown.defaultProps={
    Rank: ['Beginner', 'Apprentice', 'Skilled', 'Professional', 'Artisan', 'Master', 'Guru'],
    Sets:[
            {name: 'Beginner', Levels: min},
            {name: 'Apprentice', Levels: min},
            {name: 'Skilled', Levels: min},
            {name: 'Professional', Levels: min},
            {name: 'Artisan', Levels: min},
            {name: 'Guru', Levels: minGuru},
            {name: 'Master', Levels: minMaster},
        ]
}
// [...Array(10).keys()]
