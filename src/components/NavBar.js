import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];


  const navBarLinks = links.map((navLinks) => {

    console.log(navLinks);
    return <a key={navLinks} href = {`#${navLinks}`}>{navLinks}</a>;

  })
  // console.log(navBarLinks);

  return <nav> {navBarLinks} </nav>;
}

export default NavBar

