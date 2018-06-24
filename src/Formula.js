import React, {Component} from 'react'
import './Formula.css'
import List from './List'
import Dropdown from './Dropdown'
import Town from './Town'


class Formula extends Component {
    constructor(props){
        super(props)

        this.state={
            crate: [
                {
                    name: 'Serendia',
                    tier1: 12900, //maple
                    tier2: 12000, //pine
                    cost: 0,
                    baseValue: 32550,
                    type: 5,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 0,
                },
                {
                    name: 'Balenos',
                    tier1: 9500, //ash
                    tier2: 12000,
                    cost: 0,
                    baseValue: 28710,
                    type: 5,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 1,
                },
                {
                    name: 'Calpheon',
                    tier1: 17760,
                    tier2: 22050, //counting for both cedar and birch min price
                    baseValue: 50790,
                    type: 5,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 2,
                },
                {
                    name: 'Mediah',
                    tier1: 14000,
                    tier2: 19000,
                    baseValue: 40230,
                    type: 5,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 3,
                },
                {
                    name: 'Bronze',
                    tier1: 10966,
                    tier2: 0,
                    baseValue: 29670,
                    type: 10,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 4,
                },
                {
                    name: 'Brass',
                    tier1: 11740,
                    tier2: 0,
                    baseValue: 31590,
                    type: 10,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 5,
                },
                {
                    name: 'Steel',
                    tier1: 7572,
                    tier2: 0,
                    baseValue: 21030,
                    type: 10,
                    workSpeed: 10,
                    numCrates: 144,
                    totalProfit: 144,
                    id: 6,
                }
            ],

            distance: 1.9984,
            bsp: 0,
            tradeMultiplier: 0,
            workSpeed: 10,
            numCrates: 1,
            tradelevel: '',
            tradePoints: 0,
            profit: 0,
            totalProfit: 0,
            selectedRank: 'Beginner',
            selectedLevel: 1

        }

        this.handleRank = this.handleRank.bind(this);
        this.handleLevel = this.handleLevel.bind(this);
        this.receivePoints = this.receivePoints.bind(this);
        this.handleTown = this.handleTown.bind(this);
        this.handleTier = this.handleTier.bind(this);
        this.getNumCrates = this.getNumCrates.bind(this);
        this.getWorkSpeed = this.getWorkSpeed.bind(this);
        this.handleTierChange = this.handleTierChange.bind(this);
        this.handle2ndTier = this.handle2ndTier.bind(this);
        this.handleGetTier = this.handleGetTier.bind(this);
        this.handleWorkSpeed = this.handleWorkSpeed.bind(this);
        this.save = this.save.bind(this);
}

    handleRank(selectedRank){
        this.setState({selectedRank: selectedRank})
    }

    handleLevel(selectedLevel){
        this.setState({selectedLevel: selectedLevel})
    }

    save(e){
        this.setState({bsp: e.target.value / 80.11})
    }

    getFinalTradeLevel(num){
        var bonus = ((this.props.bargain + num * 0.005) * this.state.distance) * 1.5;
        var base = ((this.props.bargain + num * 0.005) * this.state.distance);

        (num >= 42) ? this.setState({tradeMultiplier: bonus}) :
                            this.setState({tradeMultiplier: base})

    }

    handleTown(distanceVal){
        this.setState({distance: distanceVal})
    }

    sumPoints(num, num2, masterGuru, master){
        var level = parseInt(this.state.selectedLevel, 10);
        var finalTradeLevel = num + level;
            this.setState({tradePoints: num + level})
            this.getFinalTradeLevel(finalTradeLevel)
    }

    receivePoints(tradePoints){
        var Rank = this.state.selectedRank;
            switch(Rank){
                case 'Beginner':
                    this.sumPoints(0)
                    break;
                case 'Apprentice':
                    this.sumPoints(10)
                    break;
                case 'Skilled':
                    this.sumPoints(20)
                    break;
                case 'Professional':
                    this.sumPoints(30)
                    break;
                case 'Artisan':
                    this.sumPoints(40)
                    break;
                case 'Master':
                    this.sumPoints(50)
                    break;
                case 'Guru':
                    this.sumPoints(80)
                    break;
                default:
                    this.setState({tradePoints: 1})
                }
    }

    handleTierChange(i, e){
        let items = [...this.state.crate];
        let item = {...items[i]};
        item.tier1 = e.target.value;
        items[i] = item;
        this.setState({crate: items})
    }

    handleTier(i){
        return(
            <input id={i} value={this.state.crate[i].tier1} onChange={e => this.handleTierChange(i, e)}/>
        )
    }

    handle2ndTier(i, e){
        let items = [...this.state.crate];
        let item = {...items[i]};
        item.tier2 = e.target.value;
        items[i] = item;
        this.setState({crate: items})
    }

    handleGetTier(i){
        return(
            <input id={i} value={this.state.crate[i].tier2} onChange={e => this.handle2ndTier(i, e)}/>
        )
    }

    handleWorkSpeed(i, e){
        let items = [...this.state.crate];
        let item = {...items[i]};
        item.workSpeed = e.target.value;
        item.totalProfit = (60 / item.workSpeed) * 24;  //want nonfiltered data so we round numCrates instead of both
        item.numCrates = Math.round((60 / item.workSpeed) * 24);
        items[i] = item;
        this.setState({crate: items})
    }

    getWorkSpeed(i){
        return(
            <input value={this.state.crate[i].workSpeed} onChange={e => this.handleWorkSpeed(i, e)}/>
        )
    }

    getNumCrates(i){
        return(
            this.state.crate[i].numCrates
        )
    }

    render(){
        return(
            <div>
                <List mats={this.state.crate} tradeMultiplier={this.state.tradeMultiplier} bsp={this.state.bsp} tierChange={this.handleTier} getTier2={this.handleGetTier}
                getWS={this.getWorkSpeed} getNC={this.getNumCrates}/>
                <Dropdown calssName="rank-list" selectedRank={this.state.selectedRank} selectedLevel={this.state.selectedLevel} onRankChange={this.handleRank} onLevelChange={this.handleLevel}
                                                onClick={this.receivePoints} value={this.state.tradePoints} />
                <Town onTownChange={this.handleTown}/>
                    <p>Cost of Weapon BS:</p>
                        <input onChange={this.save}/>
            </div>
        );
    }

}

Formula.defaultProps={
    bargain: 1.05,
}

export default Formula

/*
<form  className="same-lineRank" onSubmit={this.save}>
    <input ref={input => this._updatedValue = input} onChange={this.save}/>
</form>
*/
