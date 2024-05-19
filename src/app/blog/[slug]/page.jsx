import Image from "next/image";
import styles from "./post.module.css";
const post = () => {
  return (
    <>
     <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
        <div className={styles.textAre}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.authour}>
            <div className={styles.imgContainer2}>
              <Image className={styles.avatar}
                src={
                  "https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
                fill
              />
            </div>
            <div className={styles.authourR1}>
              <p>Authour</p>
              <p>Terry jeffersion</p>
            </div>
            <div className={styles.authourR2}>
              <p>Published</p>
              <p>01.02.2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default post;
