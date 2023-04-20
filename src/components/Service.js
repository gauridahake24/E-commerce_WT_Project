import React from 'react'

const Service = (Props) => {
  return (
    <>
      <section id="feature" className="section-p1">
          <div className="feature-box">
              <img src={Props.item.img} alt={Props.item.img} />
              <h6>{Props.item.title}</h6>
          </div>
      </section>
    </>
  )
}

export default Service