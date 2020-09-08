import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import Products from '../../components/Products';

function Main() {
  return (
    <div className='container__main'>
      <Header />

      <div className="container__home">
        <img
          className='home__image'
          src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_pt-BR_ENG_PVD5222._CB408297841_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Products
          id={456894}
          title='Breves respostas para grandes questões (Português)'
          price={32.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51mFadsuvLL._SX328_BO1,204,203,200_.jpg'
        />
        <Products
          id={5456548}
          title='Smartphone, Motorola, Motorola One, XT1941-3, 64 GB, 5.9", Branco'
          price={1699}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61qdEFm7fGL._AC_SL1000_.jpg'
        />
      </div>
      <div className="home__row">
        <Products
          id={5649823}
          title='Smart TV LG 50” Ultra HD 4K, HDR Ativo, ThinQ AI Inteligência Artificial, DTS Virtual:X - 50UM751C0SB'
          price={2299}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61qRe9cpv-L._AC_SL1200_.jpg'
        />
        <Products
          id={7894561}
          title='Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Branca'
          price={299.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61IuYNCf1CL._AC_SL1000_.jpg'
        />
         <Products
          id={1234654}
          title='Smartwatch Blitzwolf BW-HL1T Bluetooth 5.0, Multilinguagem, Tela 1.3", Ip68. com Termômetro Corporal (Preto)'
          price={249.99}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/61m3O0%2BMVTL._AC_SL1000_.jpg'
        />
      </div>
    </div>
  );
}

export default Main;