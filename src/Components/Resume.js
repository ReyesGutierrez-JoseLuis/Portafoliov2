import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - 2020'} 
                        title={'Information Technology, T.S.U.'}
                        subTitle={'Universidad Tecnológica de Durango, Durango'}
                        text={'During this period I obtained the degree of university technician in information technology. In these early years I was able to learn certain technologies and the basics of programming and software development.We worked with Java, Android Studio, PHP, HTML, CSS, MySQL, MongoDB, Arduino, Raspberry Pi, Node.js, etc.'} 
                    />
                     <ResumeItem 
                        year={'2020 - Present'} 
                        title={'Software Engineering'}
                        subTitle={'Universidad Tecnológica de Durango, Durango'}
                        text={'I am currently finishing my last degree in Software Engineering. In this period of the career I learned about many technologies and frameworks for multiplatform software development. The technologies we have been using are React.js, React native, Firabase, Flutter, MongoDB, AWS, GitHub, GitLab, Docker, Material-UI, Next.js, Express, Python, and others.'} 
                    />
                </div>
                
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>

                <div className="resume-content">
                    <ResumeItem 
                        year={'Jan 2020 - Dec 2020'} 
                        title={'Digital content creator'}
                        subTitle={'Sirre Consulting'}
                        text={'I was working as a digital content creator for a consulting firm.  This includes the recording and editing of informative, event and promotional videos. I was also in charge of the graphic design of the company and its clients, as well as the photographic aspect'} 
                    />
                   
                </div>
                
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 2rem;
    }
    .u-small-title-margin{
        margin-top: 2rem;
    }

    .resume-content{
        border-left: 1px solid var(--border-color);
        margin-bottom: 3rem;
    }
    .ResumeItem{
        margin-bottom: 2rem;
    }
`;
export default Resume
