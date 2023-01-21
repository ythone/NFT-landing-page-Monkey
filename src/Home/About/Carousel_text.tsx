import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const button__bar = "text-white"
        const settings = {
            dots: true,
            infinite: true,
            className: "center",
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
          };


        let Links = [
            { id: 1, link: "https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61e2a0ac1ee9e1696610c78d_3.jpg" },
            { id: 2, link: "https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61d7434803e3cc105e8b2381_octo.jpg" },
            { id: 3, link: "https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61e2a0e6b0649e42187b393d_2.png" },
            //{ id: 4, link: "https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61e2a095c0086b522ba1f0bb_4.jpg" },
            //{ id: 5, link: "https://pbs.twimg.com/media/FMCccejWQAAQTxy.jpg:large" }
        ];

        return (
            <div className="mx-auto w-5/6 mt-10 gap-16">
                <Slider {...settings}>
                    <div>
                        <div className='p-2'>
                            <img className="rounded-lg overflow-hidden object-contain h-120 w-96" src="https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61e2a0ac1ee9e1696610c78d_3.jpg" alt="Ape" />
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <img className="rounded-lg overflow-hidden object-contain h-120 w-96" src="https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61d7434803e3cc105e8b2381_octo.jpg" alt="Ape" />
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <img className="rounded-lg overflow-hidden object-contain h-120 w-96" src="https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61e2a0e6b0649e42187b393d_2.png" alt="Ape" />
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <img className="rounded-lg overflow-hidden object-contain h-120 w-96" src="https://uploads-ssl.webflow.com/61c8ba3864049fa06a524bbd/61e2a095c0086b522ba1f0bb_4.jpg" alt="Ape" />
                        </div>
                    </div>
                    <div>
                        <div className='p-2'>
                            <img className="rounded-lg overflow-hidden object-contain h-120 w-96" src="https://pbs.twimg.com/media/FMCccejWQAAQTxy.jpg:large" alt="Ape" />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}