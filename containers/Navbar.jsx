import React from "react";
import styles from "../styles/containers/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} passHref>
        <Image src={logo} alt="Logo" width={100} height={70} />
      </Link>
    </div>
  );
};

export default Navbar;
