
import React from "react";


const Faculty =() => {
return(
<>

<div>
<h1 className="primary">FACULTY DASHBOARD</h1>

</div>

<div className="buttons" >
<button class="buttons"  type="button" class="btn btn-outline-dark"  >UPLOAD ASSIGNMENT </button>

          <a className="nav-link active"  type="button" class="btn btn-outline-dark" aria-current="page" href="./Students">Students Submitted</a>
       
          <a className="nav-link active"  type="button" class="btn btn-outline-dark" aria-current="page" href="./Progrees">Student Progrees</a>
</div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">SubjectName</th>
      <th scope="col">SubjectDescription</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>PHP</td>
      <td>PHP ProgramingLanguage</td>
      <td  class="buttons" type="button" class="btn btn-outline-dark">Upload Assignment </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Java</td>
      <td>JavaProgrammingLanguage</td>
      <td  class="buttons" type="button" class="btn btn-outline-dark">Upload Assignment </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Python</td>
      <td>PythonProgrammingLangugage</td>
      <td  class="buttons" type="button" class="btn btn-outline-dark">Upload Assignment </td>
    </tr>
  </tbody>
</table>


<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


</>

);
  
};

export default Faculty;