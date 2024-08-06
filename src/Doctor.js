
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";

import React, { useEffect,useState } from 'react'



import doc from '../src/DocImg/Doctor.png'

const Doctor = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "#dcdfce"
    }, [])

    const Wrapper = styled.div`
    // background-color: #dcdfce;

    .first-part {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height:74px;
        margin-bottom: 16px;
        cursor: pointer;
    
    }
    
    .outer-le {
        border: 1px solid #e7e7e5;
        border-radius: 12px;
        padding: 16px;
        width:96%;
        height: 255px;
        background-color: #f7f8f5;
        margin:1px 60px 2px 20px ;
    
    
    
    }
    
    .img-part {
        height: 80px;
        width: 80px;
        flex-shrink: 0;
        margin-right: 12px;
        border: 1px solid #dcdfce;
        border-radius: 12px;
    }
    
    .img-part img {
        height: 100%;
        width: 100%;
    object-fit: contain;
    }
    
    .des-part ,.main {
        color: #121414;
        font-size: 18px;
        line-height: 20px;
        font-weight: 600px;
        padding-top: 8px;
    }
    
    .des-part ,.bottom {
        color: #71716e;
        line-height: 16px;
        font-size: 14px;
        word-break: break-all;
        padding-top: 3px;
        padding-bottom: 2px;
     }
    
    .plus {
        color: #050a4e;
        padding-top: 2px;
        font-size: 14px;
        font-weight: 600px;
        line-height: 20px;
    }
    
    .second-part {
        display: flex;
    align-items: center;
        justify-content: unset;
        margin-top: auto;
    }
    
    .rs {
        padding-top: 2px;
        font-size: 15px;
        justify-content: center;
    }
    
    .bl {
        font-size: 20px;
        line-height: 22px;
        font-weight: 700;
        margin-right: 4px;
    }
    
    
    .add button {
        min-width: 88px;
        width: 200px;
        padding-left: 20px;
        border-radius: 8px;
    
    }
    
    .add {
        position: relative;
        padding-left: 960px;
        bottom: 50px;
    
    }
    .p {
        min-width: 70px;
        height: 32px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 20px;
    }
    
    .l {
        background: #3b82f6;
        border: 1px solid #3b82f6;
        color: #fff;
        cursor: pointer;
    }
    
    .total {
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 24px;
        
    }
    
    .h {
        padding-top: 30px;
        margin-left: 7px;
        padding-bottom: 10px;
    }
    
    .address{
        color: #050a4e;
    margin-top: 3px;
    font-size: 14px;
    font-weight: 600px;
    line-height: 20px;
    }
    .c{
        padding-top: 8px;
        font-size: 15px;
        align-items: center;
        margin-top: auto;
    }
    
    .c{
        padding-left: 55px;
    }


    .outer-le {
        /* existing styles */
        transition: transform 0.3s ease;
    }

    .outer-le:hover {
        transform: scale(1.02); /* Increase the scale when hovered */
    }

    button:hover{
        color: red;
        background-color: #050a4e;
    }

    
     
    `;

    const location = useLocation();
    const AllDoctor = location.state;

    return (
        <Wrapper className='hi'>
            {
                AllDoctor.map((data) => (
                    <div className="total">
                        <div className="outer-le">
                            <div className="first-part">
                                <div className="img-part">
                                    <img src={doc} alt="hi">
                                    </img>
                                </div>

                                <div className="des-part">
                                    <p className="main" style={{ color: "#050a4e" }}><b>{data.name}</b></p>
                                    <p className="bottom">{data.degree}</p>
                                </div>
                            </div>
                            <div className="plus">
                                <i className="fa-solid fa-briefcase-medical"></i><FaBriefcaseMedical />   {data.years}
                            </div>
                            <div className="address">
                                <i className="fa-solid fa-location-dot"></i>< IoLocationSharp /> {data.location}
                            </div>
                            <div className="second-part">
                                <p className="rs">
                                    Available at
                                </p>
                            </div>

                            <div>
                                {data.time}

                            </div>

                            <div className="add">
                                <p className="c">
                                    Consulation fees <br />
                                    <span class="bl">{data.rs}
                                    </span>
                                    <span className="bl">
                                    </span>
                                </p>
                                <a >
                                    <button className="l p">
                                        <span>Book Visit</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Wrapper>
    )
}

export default Doctor
