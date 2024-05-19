"use client";
import Image from "next/image";
import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
import { useState } from "react";
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
const Links = () => {
  const session = true;
  const isAdmin = true;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLinks item={link} key={link.title} />;
        })}
        {session ? (
          <div>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </div>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src={"/menu.png"}
        alt=""
        width={65}
        height={65}
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <NavLinks item={link} key={link.title} />;
          })}
          {session ? (
            <div>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", path: "/admin" }} />
              )}
              <button className={styles.logout}>Logout</button>
            </div>
          ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
