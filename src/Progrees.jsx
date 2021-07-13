
import React from "react";


const Progrees=() => {
return(
<>

 <div className="ebox">
  <div className="container-md">
  <div className="jumbotron ">
    <h1 className="display-4 text-center dbox mx-5 ">Student Progress!</h1>
    
    <div className="progress_cbox1" height="10%" >
      <div className="progress-bar bg-danger" role="progressbar" width= "5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">Student1 -  5%</div>
    </div>
    <div className="progress_cbox2" height= "30px">
      <div className="progress-bar bg-warning" role="progressbar" width= "50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Student2 -  50%</div>
    </div>
    <div className="progress_cbox3" height= "30px">
      <div className="progress-bar bg-success" role="progressbar" width= "75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Student3 - 75%</div>
    </div>
    <div className="progress_cbox4" height= "30px">
      <div className="progress-bar bg-success" role="progressbar" width= "100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Student4 -  100%</div>
    </div> 
      <a className="btn btn-primary   btn-lg" href="./Home" role="button">Back to Home</a>
    
  </div>
  </div>
</div>
<a className="nav-link active"  type="button" class="btn btn-outline-dark" aria-current="page" href="./dashboard">GO BACK</a>

</>


);
  
};

export default Progrees;