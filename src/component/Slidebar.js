import React from 'react'

const Slidebar = () => {
  return (
    <div>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="./Images/ban6.jpg" className="d-block w-100" height={450}/>
    </div>
    <div className="carousel-item">
      <img src="./Images/ban1.jpg" height={450} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./Images/ban3.png" height={450} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



{/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://pk.sapphireonline.pk/cdn/shop/files/rtw_new_arrivals.jpg?v=1706778457&width=1400" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://pk.sapphireonline.pk/cdn/shop/files/Slider_Banner_9c2736a1-1668-4ff3-87fc-d9624fc72377.jpg?v=1706778364&width=1500" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://pk.sapphireonline.pk/cdn/shop/files/rtw_new_arrivals.jpg?v=1706778457&width=1400" className="d-block w-100" alt="..." />
    </div>
  </div> */}
</div>



  
  )
}

export default Slidebar
