import React from 'react';
import './home.scss';
import MobileNavBar from "../../components/MobileNavBar/MobileNavBar";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import {homeDescription} from "../../data/data";
import TitleColor from "../../components/TitleColor/TitleColor";

const Home = () => {
    return (
        <div className='home'>
            <MobileNavBar />
            <BackgroundVideo>
                <div className='home--container container'>
                    <div className='home--content'>
                        <h1 className='home--title'>Black SMM <br/> Agency</h1>
                       <div>
                           <p className='home--description'>КОМПЛЕКСНЫЙ SMM, TARGET, PRODUCTION, БЛОГЕРЫ & САЙТЫ</p>
                           <p className='home--subtitle'>С любовью к вашему бизнесу!</p>
                       </div>
                    </div>
                    <div className='home--services'>
                        <ul className='home--services-list'>
                            {
                                homeDescription.map((elem) => {
                                    const {num, title, color} = elem;
                                    return (
                                        <li className='home--service-item' key={title}>
                                            <TitleColor color={color}  text={num}/>
                                            <p>{title}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </BackgroundVideo>
        </div>
    );
};

export default Home;