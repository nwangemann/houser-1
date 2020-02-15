import React from 'react'
import { connect } from "react-redux";


const Dashboard = () => {
    return ( <h1>Hello World</h1>)
}

const mapStateToProps = state => {
    console.log(state)
    return (
        console.log('woot')
    )
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);