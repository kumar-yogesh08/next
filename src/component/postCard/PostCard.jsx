import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={
                "https://images.pexels.com/photos/18717344/pexels-photo-18717344/free-photo-of-the-treasury-behind-canyon-in-petra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              fill
            />
          </div>
          <span className={styles.date}>01.12.2024</span>
        </div>
        <div className={styles.bottom}>
          <h2 className={styles.title}>Title</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            neque atque voluptate reiciendis, cum tempore excepturi perspiciatis
            beatae consectetur ratione. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores, et!
          </p>
          <Link href={"/blog/post"} className={styles.link}>Read More</Link>
        </div>
      </div>
    </>
  );
};
export default PostCard;
