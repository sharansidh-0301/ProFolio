import auro from '../pictures/Achievements/AURO/Auro.jpg';
import Ideathon from '../pictures/Achievements/Ideathon/certificate.jpg';
import MEC1 from '../pictures/Achievements/MEC/certificate1.jpg';
import MEC2 from '../pictures/Achievements/MEC/certificate2.jpg';
import VEC from '../pictures/Achievements/VEC/prize.jpg';
import '../App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Achievements = () => {
  
   

    const data = [
        {
            img: auro,
            content:`Appreciated as Best intern`
        },
        {
            img:Ideathon,
            content:`Won 2nd Prize in Ideathon (Idea Presentation)`
        },
        {
            img: MEC1,
            content:`Won 1st Prize in Paper Presentation`
        },
        {
            img:MEC2,
            content:`Won 2nd Prize in Adzap`
        },
        {
            img:VEC,
            content:`Won 3rd Prize in Paper Presentatiom`
        }
    ]


    return (
    <>
   
    
    </>
  )
}
