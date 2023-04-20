import React from 'react'

const Blog = () => {
  return (
    <>
        <section id="page-header" className="blog-header">
            <h2>#Readmore </h2>
            <p> Read all case studies regarding our product!</p>
        </section>

        <section id="Blog">
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./images/blog1.jpg" alt='blog1'/>
                </div>
                <div className="blog-details">
                    <h4>
                        TheCotton jersey zip up hoodie
                    </h4>
                    <p>hdiudk jkdhkid hyjwwhy mk vsghfsh ctdsgqvsjq mflekf lem hihkguwyiw buwhdjkwbdjwb wbdhjvdhsvdtwyd heiw whdfthwfhqv niorjgrlmfkelmfle</p>
                    <a href="/"> CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./images/blog1.jpg" alt='blog2'/>
                </div>
                <div className="blog-details">
                    <h4>
                        TheCotton jersey zip up hoodie
                    </h4>
                    <p>hdiudk jkdhkid hyjwwhy mk vsghfsh ctdsgqvsjq mflekf lem hihkguwyiw buwhdjkwbdjwb wbdhjvdhsvdtwyd heiw whdfthwfhqv niorjgrlmfkelmfle</p>
                    <a href="/"> CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./images/blog1.jpg" alt='blog3'/>
                </div>
                <div className="blog-details">
                    <h4>
                        TheCotton jersey zip up hoodie
                    </h4>
                    <p>hdiudk jkdhkid hyjwwhy mk vsghfsh ctdsgqvsjq mflekf lem hihkguwyiw buwhdjkwbdjwb wbdhjvdhsvdtwyd heiw whdfthwfhqv niorjgrlmfkelmfle</p>
                    <a href="/"> CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./images/blog1.jpg" alt='blog4'/>
                </div>
                <div className="blog-details">
                    <h4>
                        TheCotton jersey zip up hoodie
                    </h4>
                    <p>hdiudk jkdhkid hyjwwhy mk vsghfsh ctdsgqvsjq mflekf lem hihkguwyiw buwhdjkwbdjwb wbdhjvdhsvdtwyd heiw whdfthwfhqv niorjgrlmfkelmfle</p>
                    <a href="/"> CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="./images/blog1.jpg" alt='blog5'/>
                </div>
                <div className="blog-details">
                    <h4>
                        TheCotton jersey zip up hoodie
                    </h4>
                    <p>hdiudk jkdhkid hyjwwhy mk vsghfsh ctdsgqvsjq mflekf lem hihkguwyiw buwhdjkwbdjwb wbdhjvdhsvdtwyd heiw whdfthwfhqv niorjgrlmfkelmfle</p>
                    <a href="/"> CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
        </section>


    <section id="pagination" className="section-p1">
        <a href="/">1</a>
        <a href="/">2</a>
        <a href="/"><i className="fas fa-long-arrow-alt-right"></i></a>
    </section>


    <section id="newsletter" className="section-p1">
        <div className="newstext">
            <h4> sign up for our new newsletters</h4>
            <p> Get E-Mail updates about our latest shop and<span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text " placeholder="your email address"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>
    </>
  )
}

export default Blog