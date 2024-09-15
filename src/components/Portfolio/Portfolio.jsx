import { useEffect, useState } from "react"
import axios from "axios"
import s from "./Portfolio.module.scss"


const Portfolio = ({  }) => {

    const [test, setTest] = useState([])  

    const getRep = async () => {
      const { data }  = await axios.get('https://api.github.com/users/usersrt/repos')
      .catch((err) => {
        console.log(err);
      })
      setTest(data)
  }
  
    useEffect(() => {
      getRep()
    }, [])

  return (
    <>
        <div className={s.wrapper}>
            <h2 className={s.Portfolio__title} id="Portfolio">Portfolio</h2>
            <div className={s.Portfolio__block}>
              {test.map((e, item) => (
                <div key={item} className={s.Portfolio__block__item}>
                    <div className={s.Portfolio__block__item__title}>Название - <span className={s.Portfolio__block__item__span}>{e.name}</span></div>   
                    <a href={e.html_url} className={s.Portfolio__block__item__link}>Ссылка</a>
                    <p className={s.Portfolio__block__item__watchers}>Просмотренно - <span className={s.Portfolio__block__item__span}>{e.watchers}</span></p>
                    <p className={s.Portfolio__block__item__create}>Create at: <span className={s.Portfolio__block__item__span}>{e.created_at}</span></p>
                </div>
              ))}  
            </div>
        </div>
    </>
  )
}

export default Portfolio