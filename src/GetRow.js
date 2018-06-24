import React from 'react'
import PropTypes from 'prop-types'

class GetRow extends React.Component{

    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.tier1}</td>
                <td>{this.props.tier2}</td>
                <td>{this.props.cost}</td>
                <td>{this.props.baseValue}</td>
                <td>{this.props.profit}</td>
                <td>{this.props.workSpeed}</td>
                <td>{this.props.numCrates}</td>
                <td>{this.props.totalProfit}</td>
            </tr>
        )
    }
}

export default GetRow

GetRow.propTypes={
    name: PropTypes.string.isRequired,
}
/*
<input value={this.state.tier1} onChange={this.handleChange}></input>
<Consumer>
    {value => <td>{Math.round(value * baseValue)} </td>}
</Consumer>

export const GetRow = ({name, tier1, tier2, baseValue, cost, profit}) => (

    <tr>
        <td>{name}</td>
        <td>{tier1}</td>
        <td>{tier2}</td>
        <td>{cost}</td>
        <td>{baseValue}</td>
        <td>{profit}</td>

    </tr>

)
*/
