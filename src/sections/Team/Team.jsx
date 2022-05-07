import React from 'react';
import {motion} from "framer-motion";
import './team.scss';

import teamLogo from '../../assets/Images/teamLogo.webp';
import teamImg1 from '../../assets/Images/team1.webp';
import teamImg2 from '../../assets/Images/team2.webp';
import teamImg3 from '../../assets/Images/team3.webp';
import teamImg4 from '../../assets/Images/team4.webp';


const Team = () => {

    const imgAnimation1 ={
        visible: { opacity: 1, rotate: '17deg', scale: 1 },
        hidden: { opacity: 0,  rotate: '0', scale: 1.5 },
    }
    const imgAnimation2 ={
        visible: { opacity: 1, rotate: '-9deg', scale: 1 },
        hidden: { opacity: 0,  rotate: '0', scale: 1.5 },
    }
    const imgAnimation3 ={
        visible: { opacity: 1, rotate: '11deg', scale: 1 },
        hidden: { opacity: 0,  rotate: '0', scale: 1.5 },
    }
    const imgAnimation4 ={
        visible: { opacity: 1, rotate: '0', scale: 1 },
        hidden: { opacity: 0,  rotate: '0', scale: 1.5 },
    }

    return (
        <section className='team'>
            <div className='team--container container'>
                <div className='team--images'>
                    <motion.img
                        animate={{ rotate: -360 }}
                        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
                        src={teamLogo}
                        alt={'teamPhoto'} />
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        variants={imgAnimation1}
                        transition={{ ease: "linear", duration: 1, delay: 1 }}
                        src={teamImg1}
                        alt={'teamPhoto'}
                    />
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        variants={imgAnimation2}
                        transition={{ ease: "linear", duration: 1, delay: 2 }}
                        src={teamImg2}
                        alt={'teamPhoto'}
                    />
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        variants={imgAnimation3}
                        transition={{ ease: "linear", duration: 1, delay: 3 }}
                        src={teamImg3}
                         alt={'teamPhoto'}
                    />
                    <motion.img
                        initial="hidden"
                        animate="visible"
                        variants={imgAnimation4}
                        transition={{ ease: "linear", duration: 1, delay: 4 }}
                        src={teamImg4}
                         alt={'teamPhoto'}
                    />
                </div>
                <div className='team--info'>
                    <div className='team--info-container'>
                        <p className='team--description'>
                            У нас работают настоящие профессионалы.
                            Сотрудничество с ними гарантирует положительный результат.
                        </p>
                        <a href='#' className='team--inst'>
                            Наш Instagram
                        </a>
                    </div>
                    <button className='team--btn'>
                        Вакансии
                        <span>></span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;