import s from './Social.module.scss'

const Social = () => {
  return (
    <>
        <div className={s.wrapper}>
            <h2 className={s.Social__title} id='Social'>Social</h2>
            <div className={s.Social__block}>
                <h2 className={s.Social__block__title}> Где <span className={s.Social__block__span}>связатся</span> со мной?</h2>
                <ul className={s.Social__block__list}>
                    <li className={s.Social__block__list__li}>Номер телефона <span className={s.Social__block__span}>+998-90-733-96-65</span></li>
                    <li className={s.Social__block__list__li}><a href="https://t.me/thythy_thy" className={s.Social__block__list__link}>Телеграмм</a></li>
                    <li className={s.Social__block__list__li}>Адресс - Чилонзор, Наккашлык</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Social