import Image from "next/image";
import style from "./contact.module.css";
const contact = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <Image src={"/contact.png"} alt="" className={style.img} fill />
        </div>
        <div className={style.formContainer}>
          <form className={style.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (optional) " />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button className={style.button}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default contact;
