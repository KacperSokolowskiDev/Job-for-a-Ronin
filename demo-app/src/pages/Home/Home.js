import React from 'react'
import '../../App.css'
import {
     Button,
     TextField
  } from '@material-ui/core'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
        <div className="header">
            <div className="Header-container">
                <h1>welcom to your community</h1>
                <div style={{display:"flex", flexDirection:"column", width:200, height:100, justifyContent:'space-between'}}>
                    <Button variant="outlined">find samurai</Button>
                    <Link to="/jobs">
                        <Button variant="outlined">find mission</Button>
                    </Link>
                    
                    
                </div>
        </div>
            <div className="HeaderImage">
                
            </div>
        </div>
        </div>

    )
}


export default Home