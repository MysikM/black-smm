import slider1 from '../assets/Images/slider1.jpg';
import slider2 from '../assets/Images/slider2.jpg';
import slider3 from '../assets/Images/slider3.jpg';
import slider4 from '../assets/Images/slider4.jpg';
import slider5 from '../assets/Images/slider5.jpg';
import slider6 from '../assets/Images/slider6.jpg';
import slider7 from '../assets/Images/slider7.jpg';
import slider8 from '../assets/Images/slider8.jpg';
import slider9 from '../assets/Images/slider9.jpg';

import iconCase1 from '../assets/Images/case1.svg';
import iconCase2 from '../assets/Images/case2.svg';
import iconCase3 from '../assets/Images/case3.svg';
import iconCase4 from '../assets/Images/case4.svg';
import iconCase5 from '../assets/Images/case5.svg';
import iconCase6 from '../assets/Images/case6.svg';
import iconCase7 from '../assets/Images/case7.svg';
import iconCase8 from '../assets/Images/case8.svg';
import iconCase9 from '../assets/Images/case9.svg';

import bgCase1 from '../assets/Images/case1.jpg';
import bgCase2 from '../assets/Images/case2.jpg';
import bgCase3 from '../assets/Images/case3.jpg';
import bgCase4 from '../assets/Images/case4.jpg';
import bgCase5 from '../assets/Images/case5.jpg';
import bgCase6 from '../assets/Images/case6.jpg';
import bgCase7 from '../assets/Images/case7.jpg';
import bgCase8 from '../assets/Images/case8.jpg';
import bgCase9 from '../assets/Images/case9.jpg';


import logoTeam from '../assets/Images/teamLogo.webp';
import team1 from '../assets/Images/team1.webp';
import team2 from '../assets/Images/team2.webp';
import team3 from '../assets/Images/team3.webp';
import team4 from '../assets/Images/team4.webp';

import contactPhone from '../assets/Images/contact-phone.svg'
import contactMail from '../assets/Images/contact-mail.svg'
import contactHome from '../assets/Images/contact-home.svg'
import contactFacebook from '../assets/Images/contact-facebook.svg'
import contactInstagram from '../assets/Images/contact-instagram.svg'

export const navigationLinks = [
    {path: '#service', title: 'Услуги'},
    {path: '#portfolio', title: 'Портфолио'},
    {path: '#case', title: 'Кейсы'},
    {path: '#team', title: 'Команда'},
    {path: '#contact', title: 'Контакты'},
]

export const homeDescription = [
    {num:'01', title: '40 экспертов в команде', color: 'light-green'},
    {num:'02', title: 'Комплексные стратегии', color: 'yellow'},
    {num:'03', title: 'Экспертность в вашей нише', color: 'yellow'},
    {num:'04', title: 'Реклама в Instagram и Facebook', color: 'pink'},
    {num:'05', title: 'Съемки для брендов', color: 'pink'},
    {num:'06', title: 'Номер один в МЕДИЦИНЕ', color: 'light-green'},
]

export const services = [
    {num:'01', title:'SMM', descriptions: ['SMM-стратегии', 'Ведение страниц в Instagram и Facebook под ключ']},
    {num:'02', title:'Target', descriptions: ['Реклама в Facebook ', 'Реклама в Instagram', 'Реклама в TikTok']},
    {num:'03', title:'Production', descriptions: ['Фотосъемка', 'Видео для рекламы']},
    {num:'04', title:'Работа с блогерами', descriptions: ['Подбор блогера', 'Комплексное сотрудничество с блогерами']},
    {num:'05', title:'TikTok', descriptions: ['Стратегия', 'Ведение под ключ', 'Съемка видео', 'Реклама']},
    {num:'06', title:'Дизайн', descriptions: ['Дизайн ленты Instagram', 'Motion design и анимация', 'Дизайн рекламных баннеров']},
    {num:'07', title:'Сайты', descriptions: ['Интернет-магазин', 'Многостраничный сайт', 'Одностраничный сайт']},
    {num:'08', title:'Медицина', descriptions: ['Личный бренд врача', 'SMM для клиник', 'Привлечение пациентов']},
    {num:'09', title:'Консалтинг', descriptions: ['Аудит', 'Консультация', 'Обучение владельцев бизнеса']},
    {num:'10', title:'Контекстная реклама', descriptions: ['Аудит', 'Настройка рекламы']},
]

export const portfolioImages = [
    {src: slider1, title: 'img1'},
    {src: slider2, title: 'img2'},
    {src: slider3, title: 'img3'},
    {src: slider4, title: 'img4'},
    {src: slider5, title: 'img5'},
    {src: slider6, title: 'img6'},
    {src: slider7, title: 'img7'},
    {src: slider8, title: 'img8'},
    {src: slider9, title: 'img9'},
]

export const caseItems = [
    {title:'Ичня', description:'Ічнянський молочно- консервний комбінат: IMKK', bg:bgCase1, icon: iconCase1},
    {title:'A-medical.pro', description:'Медицинский центр лечения проктологических заболеваний', bg:bgCase2, icon: iconCase2},
    {title:'Anta medicare', description:'Международная фармацевтическая компания', bg:bgCase3, icon: iconCase3},
    {title:'Cosmedix', description:'Профессиональный бренд средств по уходу за кожей', bg:bgCase4, icon: iconCase4},
    {title:'Crutter', description:'Алмазные стоматологические боры украинского производства', bg:bgCase5, icon: iconCase5},
    {title:'Институт Вен', description:'Клиника лечения варикоза', bg:bgCase6, icon: iconCase6},
    {title:'GoodGame', description:'Современный игровой компьютерный клуб', bg:bgCase7, icon: iconCase7},
    {title:'Iortho', description:'Стоматологический центр ортодонтии', bg:bgCase8, icon: iconCase8},
    {title:'Авантаж Велс', description:'Разработка сайта для корпоративного инвестиционного фонда', bg:bgCase9, icon: iconCase9},
]

export const teamImg = [
    {src: logoTeam, title:'logoTeam'},
    {src: team1, title:'team1'},
    {src: team2, title:'team2'},
    {src: team3, title:'team3'},
    {src: team4, title:'team4'},
]

export const contact = [
    {icon: contactPhone , title: '+38 (095) 034 92 81', href:'tel:+380661019190'},
    {icon: contactMail, title: 'helloblacksmm@gmail.com', href:'mailto:helloblacksmm@gmail.com'},
    {icon: contactHome, title: 'Чайковская 27, Харьков', href:'https://www.google.com/maps/dir//%D1%83%D0%BB.+%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+27,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+61000/@50.0042422,36.2545876,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4127a0c41805c87d:0x6a02b13576c5199a!2m2!1d36.2567763!2d50.0042422!3e0'},
    {icon: contactFacebook, title: 'facebook.com/blacksmm', href:'https://www.facebook.com/black.smm.agency.kh/'},
    {icon:  contactInstagram, title: 'instagram.com/blacksmm', href:'https://www.instagram.com/black_smm_/'},
]

export const footerLinks = [
    {href:'#', title: 'Политика конфиденциальности'},
    {href:'#', title: 'Услуги'},
    {href:'#', title: 'Портфолио'},
    {href:'#', title: 'Кейсы'},
    {href:'#', title: 'Команда'},
    {href:'#', title: 'Контакты'},
]