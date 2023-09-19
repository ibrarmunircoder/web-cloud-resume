/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
import React, { useEffect } from "react";
import { Visitor } from "types";
import Typewriter from "typewriter-effect/dist/core";

interface IHeaderProps {
  visitor: Visitor;
}

export const Header: React.FC<IHeaderProps> = ({ visitor }) => {
  useEffect(() => {
    new Typewriter("#header-title", {
      strings: ["Hi, I'm Ibrar Munir"],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline" id="header-title" />
          <p>
            and this page has been viewed{" "}
            <strong style={{ color: "#F06000" }}>
              {visitor.numberOfVisitors > 0 ? visitor.numberOfVisitors : null}
            </strong>{" "}
            times :)
          </p>
          <ul className="social">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/IbrarMunir4"
              >
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ibrar-munir-53197a16b/"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/ibrarmunircoder"
              >
                <i className="fa fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
};
