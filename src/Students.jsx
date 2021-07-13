
import React from "react";


const Student=() => {
return(
<>
<div>
<h1 className="primary">Students Submitted</h1>

</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">SubjectName</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Student1</td>
      <td>Submitted</td>
  
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Student2</td>
      <td>Submitted</td>
  
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Student3</td>
      <td>NOT_Submitted</td>
  
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >Student4</td>
      <td>NOT_Submitted</td>
  
    </tr>  <tr>
      <th scope="row">5</th>
      <td >Student5</td>
      <td>Submitted</td>
  
    </tr>
  </tbody>
</table>
<a className="btn btn-primary   btn-lg" href="./Home    " role="button" >Back to Home</a>
    

  <a className="nav-link active"  type="button" class="btn btn-outline-dark" aria-current="page" href="./Faculty">GO BACK</a>
  

</>

);
  
};

export default Student;