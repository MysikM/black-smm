import React, {useState} from 'react';
import {motion} from "framer-motion";
import './feedback.scss';
import CustomInput from "../../components/CustonInput/CustomInput";

const Feedback = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [task, setTask] = useState('');

    const titleAnimation = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
    }
    const btnsAnimation ={
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
    }
    const subtitleAnimation = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <section className='feedback'>
            <div className='feedback--container container'>
                <div className='feedback--text-container'>
                    <motion.h2
                        className='feedback--title'
                        initial="hidden"
                        whileInView="visible"
                        variants={titleAnimation}
                        transition={{ duration: 2, delay: 1 }}
                    >
                        Начнем!
                    </motion.h2>
                    <motion.p
                        className='feedback--description'
                        initial="hidden"
                        whileInView="visible"
                        variants={subtitleAnimation}
                        transition={{ duration: 1.5, delay: 1.2 }}
                    >
                        Это абсолютно бесплатно! Вы не обязаны делать заказ, если воспользуетесь этой формой для связи.
                        <br/>
                        <br/>
                        Получите более детальную информацию о стоимости и сроках выполнения вашей задачи, ведь главная сила — это знания.
                    </motion.p>
                </div>
                <motion.form
                    className='feedback--form'
                    initial="hidden"
                    whileInView="visible"
                    variants={btnsAnimation}
                    transition={{ duration: 1.5, delay: 1.2 }}
                >
                    <CustomInput title='Ваше имя' text={name} setText={setName} />
                    <CustomInput title='+38 (012) 345 67 89' text={phone} setText={setPhone} />
                    <CustomInput title='Коротко о вашей задаче' text={task} setText={setTask} />
                    <button className='feedback--btn' >Отправить<span>></span></button>
                </motion.form>
            </div>
        </section>
    );
};

export default Feedback;