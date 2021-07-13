

import React from "react";


const Home =() => {
return(
    < >
<h1 className="primary" > HOME PAGE</h1>
<div className="container">
  <div className="row">
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="335px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="335px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card" >
  <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height="335px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

</>

 );
  
};

export default Home;