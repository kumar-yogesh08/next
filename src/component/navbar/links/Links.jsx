import Link from "next/link";
import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
         <NavLinks item={link} key={link.title}/>
        );
      })}
    </div>
  );
};

export default Links;
