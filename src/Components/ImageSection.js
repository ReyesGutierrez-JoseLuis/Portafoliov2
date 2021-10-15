import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume2.png';
import PrimaryButton from './PrimaryButton';


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>José Luis Reyes Gutiérrez</span></h4>
                <p className="paragraph">
                I build modern websites and applications focused on optimization and user experience. Dedicated and creative developing software solutions using current technologies and tools in the market.
                    
                </p>
                
                <a href="/assets/cv.pdf" download target="_blank">
                <PrimaryButton title={'Download Cv'}/> 
               </a>
               
               
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 1rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
