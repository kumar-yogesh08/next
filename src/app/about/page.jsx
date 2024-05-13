import Image from "next/image";
import style from "./about.module.css";
const aboutPage = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.textArea}>
          <h1 className={style.header}>
            The about page is very specific
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            sequi, nihil facere possimus consequatur excepturi nisi, impedit ex
            error, debitis laboriosam deleniti quos hic quis! Odit culpa,
            expedita quam quasi illo explicabo, totam consequatur, quas suscipit
            rem illum minus sit!
          </p>
    <div className={style.base}>
      <div className={style.baseItem}>
        <h1 className={style.baseItemHeader}>10 k+</h1>
        <p>Years of expereance</p>
      </div>
      <div className={style.baseItem}>
        <h1 className={style.baseItemHeader}>25 k+</h1>
        <p>People reached</p>
      </div>
      <div className={style.baseItem}>
        <h1 className={style.baseItemHeader}>5 k+</h1>
        <p>Service and Plugins</p>
      </div>
    </div>
         
        </div>
        <div className={style.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={style.heroImg} />
        </div>
      </div>
   
    </>
  );
};
export default aboutPage;
