import React from "react"
import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slideToShow: 1,
    slideToScroll: 1,
    swipeToSlide: true
}

const Testimonials = () => (
    <section id="testimonials">
        <div className="text-container">
            <div className="row">
                <div className="two columns header-col" />
                <div className="ten columns">
                    <h1>Testimonials</h1>
                    <ul>
                        <Slider {...settings}>
                            <li>
                                <blockquote>
                                    <p className="testimonial-font">
                                        "I was project manager for Adam while he went through the Lambda School web
                                        development curriculum, and then we worked together building out Cadence, a
                                        full-stack shift scheduling web app. Adam was absolutely essential to our team!
                                        He is hard working and is gung ho to attack any ticket, and will find the
                                        resources needed to get the job done. <br /> He is thoughtful about user
                                        experience, potential problems and bugs, and has an excellent eye for detail.
                                        Oftentimes he noticed potential issues that no one else on the team did and
                                        brought them to our attention. <br /> Adam is a solid developer to have in your
                                        corner when you need to get things done right. And he's a pleasure to work
                                        with!"
                                    </p>
                                    <cite>Kamry Bowman - Project Manager, Lambda School </cite>
                                </blockquote>
                            </li>
                            <li>
                                <blockquote>
                                    <p>
                                        I worked with Adam to build Cadence, a shift scheduling app for small
                                        businesses. During that process, I discovered two things about Adam: <br />
                                        1. He likes to take the bull by the horns, tackling some of the most difficult
                                        problems set before us, including complicated testing and complex manipulation
                                        of datetimes for our "Edit Availability" feature. <br /> 2. He is, above all
                                        else, a gentleman. No matter how frustrating or insurmountable the obstacles
                                        ahead seem, Adam is jovial and good-natured. He was a notable source of
                                        positivity during our sprint. <br /> If you're reading this, know that you
                                        should definitely hire Adam. He's not only a great developer, but also a great
                                        person. His technical know-how and kind spirit would be a phenomenal addition to
                                        any team.”
                                    </p>
                                    <cite>Rahul Desai - Full Stack Developer, Lambda School</cite>
                                </blockquote>
                            </li>
                        </Slider>
                    </ul>
                </div>
                {/* <div className="ten columns flex-container">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>
                    Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work. And the only way to do great work is to love
                    what you do. If you haven't found it yet, keep looking.
                    Don't settle. As with all matters of the heart, you'll know
                    when you find it.
                  </p>
                  <cite>Steve Jobs</cite>
                </blockquote>
              </li>

              <li>
                <blockquote>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum, nec
                    sagittis sem nibh id elit. Duis sed odio sit amet nibh
                    vulputate cursus a sit amet mauris.
                  </p>
                  <cite>Mr. Adobe</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </div> */}
            </div>
        </div>
    </section>
)

export default Testimonials
