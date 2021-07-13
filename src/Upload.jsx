import React from 'react';

const Upload = () => {
    return(
        <>
        <div>
<h1 className="primary">Upload Assignment</h1>

</div>
      <div>  <form >
  <div class="row mb-3">
    <label for="name" class="col-sm-1 col-form-label">Full Name</label>
    <div class="col-sm-5">
      <input type="name" class="form-control" id="name"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-1 col-form-label">College Id</label>
    <div class="col-sm-5">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="mb-3">
  <label for="formFile" class="col-sm-3 col-form-label">Upload Assignment File</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Confirm
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<a className="nav-link active"  type="button" class="btn btn-outline-dark" aria-current="page" href="./dashboard">GO BACK</a>

</>
    );
};
export default Upload ;