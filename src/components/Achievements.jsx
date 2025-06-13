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
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

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
   
    <div className='w-3/4 m-auto'>
     
       <div className='mt-80'>
        <h2 className='text-3xl font-bold text-center '>Acheivements</h2>
             <Slider {...settings}>
                {data.map((d)=>(
                    <div className='rounded-xl  h-140'>
                        <div className='h-120 rounded-t-xl flex justify-center items-center '> 
                            <img src={d.img} alt="" className='h-90 w-150 rounded-2xl'/>
                        </div>
                        <div className='amarante-regular text-4xl -mt-10 flex flex-col justify-center items-center p-5'>
                         <p>{d.content}</p>
                        </div>
                    </div>
                ))}
             </Slider>

        </div>
        </div>
   
    </>
  )
}
