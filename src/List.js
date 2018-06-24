import React from 'react'
import GetRow from './GetRow'
import './App.css'

class List extends React.Component{

    render(){
        return(
            <div>
                <table className="table-border">
                    <thead>
                        <tr>
                            <th>Crate</th>
                            <th>Tier 1</th>
                            <th>Tier 2</th>
                            <th>Total Cost</th>
                            <th>Income</th>
                            <th>Profit Per Crate</th>
                            <th>Time Per Crate(Mins)</th>
                            <th>Crates Per Day</th>
                            <th>Silver Per Day</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mats.map((component, i) =>
                                    <GetRow key={i}
                                            name={component.name}
                                            tier1={this.props.tierChange(i)}
                                            tier2={this.props.getTier2(i)}
                                            cost={Math.round((((component.tier1) * component.type) + (component.tier2) * component.type) + this.props.bsp).toLocaleString()}
                                            baseValue={Math.round((component.baseValue * this.props.tradeMultiplier)).toLocaleString()}
                                            profit={Math.round(((component.baseValue * this.props.tradeMultiplier) - this.props.bsp) - ((component.tier1 * component.type) + component.tier2 * component.type)).toLocaleString()}
                                            workSpeed={this.props.getWS(i)}
                                            numCrates={this.props.getNC(i)}
                                            totalProfit={Math.round(component.totalProfit * (((component.baseValue * this.props.tradeMultiplier) - this.props.bsp) - ((component.tier1 * component.type) + component.tier2 * component.type))).toLocaleString()}
                                    />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List
