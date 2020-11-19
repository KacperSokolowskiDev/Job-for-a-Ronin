import React from 'react'
import '../../App.css'
import { Button } from '@material-ui/core'

const Home = () => {
    return (
        <div>
        <div className="header">
            <div className="Header-container">
                <h1>welcom to your community</h1>
                <div style={{display:"flex", flexDirection:"column", width:200, height:100, justifyContent:'space-between'}}>
                    <Button variant="outlined">find samurai</Button>
                    <Button variant="outlined">find mission</Button>
                </div>
        </div>
            <div className="HeaderImage">
                
            </div>
        </div>
        </div>

    )
}


export default Home