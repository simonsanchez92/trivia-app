import React from 'react'

import {connect} from 'react-redux';

import {CssBaseline} from '@material-ui/core';

import Header from './Header';




const Home = (props) => {
    

    

    return (
    
        <div>
            <CssBaseline/>

             <Header/>

        </div>
    )
}

const mapStateToProps = state=>({

});

export default connect(mapStateToProps)(Home);



