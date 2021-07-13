
import React from "react";
import "./App.css";

const Dashboard =() => {
return(
<>

<div>
<h1 className="primary">STUDENT DASHBOARD</h1>

</div>

<div className="buttons" >
<a class="nav-link disabled" type="button" class="btn btn-outline-dark" href="#" tabindex="-1" aria-disabled="false">Assignment</a>

          <a className="nav-link active"  type="button" class="btn btn-outline-dark" aria-current="page" href="./Upload">Upload Assignment</a>
       
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
      <td  class="buttons" type="button" class="btn btn-outline-dark">View Assignment </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Java</td>
      <td>JavaProgrammingLanguage</td>
      <td  class="buttons" type="button" class="btn btn-outline-dark">View Assignment </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Python</td>
      <td>PythonProgrammingLangugage</td>
      <td  class="buttons" type="button" class="btn btn-outline-dark">View Assignment </td>
    </tr>
  </tbody>
</table>




</>
);
  
};

export default Dashboard;
