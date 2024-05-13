import PostCard from "@/component/postCard/postCard";
import style from "./blog.module.css";
const singlePage = () => {
  return (
    <>
      <div className={style.container}>
       <div className={style.post}>
        <PostCard />
       </div>
       <div className={style.post}>
        <PostCard />
       </div>
       <div className={style.post}>
        <PostCard />
       </div>
       <div className={style.post}>
        <PostCard />
       </div>
      </div>
    </>
  );
};
export default singlePage;
