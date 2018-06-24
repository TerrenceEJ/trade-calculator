import React from 'react'

class Town extends React.Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTownChange(e.target.value)
    }

    render(){
        return(
            <div>
                <select onChange={this.handleChange}>
                    {this.props.Town.map((town, i) => <option key={i}
                                                              value={town.value}>{town.name}</option>)}
                </select>
            </div>
        )
    }
}

Town.defaultProps={
    Town: [
        {
            name: 'Trent',
            value: 1.9984
        },
        {
            name: 'Grana',
            value: 2.1385
        },
        {
            name: 'Old Wisdom Tree',
            value: 2.0407
        }
    ]
}

export default Town
