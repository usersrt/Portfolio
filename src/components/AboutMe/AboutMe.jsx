import s from './AboutMe.module.scss'


const AboutMe = () => {
  return (
    <> 
      <div className={s.wrapper}>
        <div className={s.AboutMe__left}>
          <h2 className={s.AboutMe__left__title} id='AboutMe'>Привет</h2>
          <p className={s.AboutMe__left__text}>Меня зовут <span className={s.AboutMe__left__span}>Артём</span></p>
          <p className={s.AboutMe__left__text2}>Я начинающий <span className={s.AboutMe__left__span}>web developer</span>, и я заканчиваю данный курс по веб разроботке.
           Я учу <span className={s.AboutMe__left__span}> JS(TYPESCRIPT)</span> , 
           <span className={s.AboutMe__left__span}> CSS(SCSS)</span>, <span className={s.AboutMe__left__span}> HTML</span>, <span className={s.AboutMe__left__span}> git</span>. И практикую сборщик инструментов 
           Vite и React.</p>
        </div>
        <img src="/src/assets/img/img.png" alt="" className={s.AboutMe__right}/>
      </div>
    </>
  )
}

export default AboutMe