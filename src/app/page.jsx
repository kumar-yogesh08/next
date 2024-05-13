import Image from "next/image";
import error from "./error";
import style from "./home.module.css";
const Home = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.textArea}>
          <h1 className={style.header}>
            WE Create platform to share your ideas
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            sequi, nihil facere possimus consequatur excepturi nisi, impedit ex
            error, debitis laboriosam deleniti quos hic quis! Odit culpa,
            expedita quam quasi illo explicabo, totam consequatur, quas suscipit
            rem illum minus sit!
          </p>
          <div className={style.buttons}>
            <button className={style.button}>Learn more</button>
            <button className={style.button}>Contact</button>
          </div>
          <div className={style.brands}>
            <Image src="/brands.png" alt="" fill />
          </div>
        </div>
        <div className={style.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={style.heroImg} />
        </div>
      </div>
    </>
  );
};

export default Home;
