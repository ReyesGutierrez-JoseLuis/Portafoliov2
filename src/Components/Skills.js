import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import design from '../img/design.svg';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                
                    <div className="skills">
                        
                        <ProgressBar 
                            title={'HTML'}
                            width={'95%'} 
                        />
                        <ProgressBar 
                            title={'CSS'}
                            width={'92%'}
                        />
                        <ProgressBar 
                            title={'Javascript'}
                            width={'97%'}
                        />
                        <ProgressBar 
                            title={'PHP'}
                            width={'80%'}
                        />
                        <ProgressBar 
                            title={'Node.js'}
                            width={'87%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'95%'}
                        />
                        <ProgressBar 
                            title={'React Native'}
                            width={'85%'}
                        />
                        <ProgressBar 
                            title={'Mongo DB'}
                            width={'92%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'70%'}
                        />
                        <ProgressBar 
                            title={'DevOps'}
                            width={'80%'}
                        />
                        <ProgressBar 
                            title={'Adobe Premiere'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'Photoshop'}
                            width={'90%'}
                        />
                        <ProgressBar 
                            title={'After Effects'}
                            width={'90%'}
                        />
                        <ProgressBar 
                            title={'Ableton Live'}
                            width={'100%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
