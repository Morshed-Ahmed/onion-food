import React from 'react';
import './Service.css'

const Service = () => {



    return (
        <div className="service container my-5">
            <h2> Why your choose us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dicta! <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>



            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid mb-3" src={'https://i.ibb.co/Cz5v290/adult-blur-blurred-background-687824.png'} alt="" />
                    <h6><img className="img" src={'https://i.ibb.co/vBwdBPy/Group-204.png'} alt="" /> First Delivery</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit maiores inventore dolore possimus sequi autem hic repudiandae omnis delectus!</p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid mb-3" src={'https://i.ibb.co/D8dCL4b/chef-cook-food-33614.png'} alt="" />
                    <h6> <img className="img" src={'https://i.ibb.co/cCw4vMn/Group-245.png'} alt="" />A Good Auto Respoder</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit maiores inventore dolore possimus sequi autem hic repudiandae omnis delectus!</p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid mb-3" src={'https://i.ibb.co/MZyqFXj/architecture-building-city-2047397.png'} alt="" />
                    <h6><img className="img" src={'https://i.ibb.co/n0hcQtS/Group-1133.png'} alt="" /> Home Delivery</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fugit maiores inventore dolore possimus sequi autem hic repudiandae omnis delectus!</p>
                </div>
            </div>
        </div>
    );
};

export default Service;