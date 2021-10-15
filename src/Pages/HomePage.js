import React from 'react'
import styled from 'styled-components';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>José Luis Reyes Gutiérrez</span></h1>
                <p>
                Web developer, software engineering student and passionate about audiovisual production.
                </p>
                <div className="icons">
                    
                    <a href="https://github.com/ReyesGutierrez-JoseLuis" target="_blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="mailto:reyesgutierrez.utd@gmail.com" target="_blank" className="icon i-youtube">
                        <EmailIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/jose-luis-reyes-gutierrez-20726b223/" className="icon i-facebook">
                        <LinkedinIcon />
                    </a>
                    
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
