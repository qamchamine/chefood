import React from 'react'
import HomeCard  from './HomeCard'

import FoodImg from '../../images/food.jpg'
import FoodImg1 from '../../images/food1.jpeg'
import FoodImg2 from '../../images/food2.jpg'
import FoodImg3 from '../../images/food3.jpg'

export default function HomeCardFullSection({sectionId}) {
  return (
    <div
    id={sectionId}
    className="carousel slide my-5 py-5"
    data-bs-ride="carousel"
>
    <div className="carousel-inner my-5">
        <div className="carousel-item active">
            <div className="cardsGroup mb-5 d-grid ">
                <div className="row">
                    <HomeCard img={FoodImg} title="Special Feature" content="If you're in the mood for something hearty and comforting, look no further than this classic beef stew." prix="90"
                    />
                    <HomeCard img={FoodImg1} title="Special Feature" content="This dish is a delicious combination of tender grilled chicken, juicy pineapple chunks " prix="90"
                    />
                    <HomeCard img={FoodImg2} title="Special Feature" content="If you're in the mood for something hearty and comforting, look no further than this classic beef stew. " prix="90"
                    />
                    <HomeCard img={FoodImg3} title="Special Feature" content="Indulge your taste buds with this decadent chocolate cake, layered with silky smooth ganache " prix="90"
                    />
                </div>
            </div>
        </div>
        <div className="carousel-item">
        <div className="cardsGroup mb-5 d-grid ">
                <div className="row">
                    <HomeCard img={FoodImg} title="Special Feature" content="If you're in the mood for something hearty and comforting, look no further than this classic beef stew." prix="90"
                    />
                    <HomeCard img={FoodImg1} title="Special Feature" content="This dish is a delicious combination of tender grilled chicken, juicy pineapple chunks " prix="90"
                    />
                    <HomeCard img={FoodImg2} title="Special Feature" content="If you're in the mood for something hearty and comforting, look no further than this classic beef stew. " prix="90"
                    />
                    <HomeCard img={FoodImg3} title="Special Feature" content="Indulge your taste buds with this decadent chocolate cake, layered with silky smooth ganache " prix="90"
                    />
                </div>
            </div>
        </div>
        <div className="carousel-item">
        <div className="cardsGroup mb-5 d-grid ">
                <div className="row">
                    <HomeCard img={FoodImg} title="Special Feature" content="If you're in the mood for something hearty and comforting, look no further than this classic beef stew." prix="90"
                    />
                    <HomeCard img={FoodImg1} title="Special Feature" content="This dish is a delicious combination of tender grilled chicken, juicy pineapple chunks " prix="90"
                    />
                    <HomeCard img={FoodImg2} title="Special Feature" content="If you're in the mood for something hearty and comforting, look no further than this classic beef stew. " prix="90"
                    />
                    <HomeCard img={FoodImg3} title="Special Feature" content="Indulge your taste buds with this decadent chocolate cake, layered with silky smooth ganache " prix="90"
                    />
                </div>
            </div>
        </div>
    </div>
    <button
        className="carousel-control-prev"
        style={{ translate: "-140% 0" }}
        type="button"
        data-bs-target={`#${sectionId}`}
        data-bs-slide="prev"
    >
        <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button
        className="carousel-control-next"
        style={{ translate: "120% 0" }}
        type="button"
        data-bs-target={`#${sectionId}`}
        data-bs-slide="next"
    >
        <span
            className="carousel-control-next-icon"
            aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
  )
}
