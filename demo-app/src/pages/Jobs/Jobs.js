import React from 'react';
import {
    Button,
    TextField,
    InputAdornment,
    Box
 } from '@material-ui/core'
 import JobCard from '../../components/Job-card/JobCard'
 import Navbar from '../../components/Navbar'
 import lords from '../../data/lord'
 import SearchIcon from '@material-ui/icons/Search';



const Jobs = () => {
    console.log(lords)
    const [searchVal, setSerchVal] = React.useState("")

    const search = () => {

    }
    return (
        <>
        <div style={{position:"fixed",width:"100%",backgroundColor:"white",zIndex:1}}>
        <Navbar  buttons={['MY PROFIL','FIND MISSON']}/>
        </div>
        
        <div style={{display: 'flex',alignItems:"center", backgroundColor:'#F5F5F5',minHeight:"900px",flexDirection:"column",paddingTop:100}}>
            <div className="search-bar">
                <div>find your next mission</div>
                <div style={{width: '80%',display:"flex",alignItems:'center',justifyContent:'space-between'}}>

                    <TextField
                    
                        margin="normal"
                        variant="outlined"
                        value= {searchVal}
                        onChange={(e) => setSerchVal(e.target.value)}
                        style={{width: 300, backgroundColor:"white",margin:0,padding:0}}
                        size="small"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                    />  
                    <Button variant="outlined" color="primary" style={{ width: 100, height:43}}>search</Button>
                </div>
            </div>
            <div className="cards-container">
                    <div style={{ width:'80%',flexDirection:'column',justifyContent:'flex-start'}}>
                        <h2>take a misson</h2>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                            {
                                lords
                                .filter( lord => searchVal ?
                                     lord.seeks.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()) || lord.city.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
                                     :true)
                                .map( (lord,i) => (<JobCard searchVal={searchVal} lord={lord} key={i}/>))
                            }
                        </div>
                    </div>

                    
                </div>
        </div>
        </>

    )
}

export default Jobs