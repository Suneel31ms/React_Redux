import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/CakeAction'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.byCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numOfCakes: state.numOfCakes 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        byCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
