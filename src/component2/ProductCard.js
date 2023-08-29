import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useHistory } from 'react-router-dom';

// const history = useHistory();

function BasicExample() {
  const api= 'a4715176284f3fb3252194a08da9eb62';
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [alltv,setshow]=useState([]);
  const [pagenxt,setpagenxt]=useState(1);
  

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular`,{
      params:{
        api_key:api,
      
        page:pagenxt,
      }
    }) .then((respone)=>{
      console.log(respone.data.page);
        console.log(respone.data.results);
        setshow(respone.data.results);
    })
    .catch((err) =>{});
  },[pagenxt])

  const nxt=()=>{
    let newPg=pagenxt+1
    setpagenxt(newPg)
    // const nextpage = parseInt(pagenxt) + 1;
    // history.push(`/Card/${nextpage}`);
  }
 

  return (
    <>
    
         
           <button type="button" class="btn btn-primary float-end my-3" 
          onClick={()=>{nxt()}}>btn</button>
          
    <div className="row">
        {
            alltv.map((tv) =>{
                return(
                    <>
                     <div className="col-md-6 col-lg-4 col-xl-4">
                    
            
          
            
          
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                <img
                  src={`${imagePath}${tv.poster_path}`}
                  className="card-img-top cardImg"
                  alt="Apple Computer"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{tv.name}</h5>
                    <p className="text-muted mb-4">{tv.overview}</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>{tv.first_air_date}</span>
                    </div>
                    {/* <div className="d-flex justify-content-between">
                      <span>Categoty</span>
                      <span>{tv.category}</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

                    </>

                )
            })
        }

    </div>
    </>

  );
}

export default BasicExample;