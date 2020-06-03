import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-5">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  Beranda
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/category")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Kategori
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/news")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Berita
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
