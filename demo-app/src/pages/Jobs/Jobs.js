import React from 'react';
import {
    Button,
    TextField
 } from '@material-ui/core'
 import JobCard from '../../components/Job-card/JobCard'

const Jobs = () => {
    const [searchVal, setSerchVal] = React.useState("")
    return (
        <div style={{display: 'flex',alignItems:"center", backgroundColor:'#F5F5F5',minHeight:"900px",flexDirection:"column"}}>
            <div className="search-bar">
                <div>find your next mission</div>
                <div style={{width: '80%',display:"flex",justifyContent:'space-between'}}>

                    <TextField
                        label="find job"
                        margin="normal"
                        variant="outlined"
                        value= {searchVal}
                        onChange={(e) => setSerchVal(e.target.value)}
                        style={{width: 300,}}
                    />
                    <Button variant="contained" color="primary">search</Button>

                </div>
            </div>
            <div className="cards-container">
                    <div style={{ width:'80%',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h2>take a misson</h2>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                        </div>
                    </div>

                    
                </div>
        </div>

    )
}

export default Jobs