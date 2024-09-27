import React from "react";
import usePersonalData from "../../Hooks/usePersonalData";
import style from "./style.module.css";

const Banner = () => {
  const { firstName, department } = usePersonalData();

  return (
    <>
      <div className="container" id="home">
        <div className={style.banner}>
          <div className={style.left}>
            <h2>
              Hi, <br /> I'm <span>{firstName}</span> <br />
              {department}
            </h2>

            <a href="#contact" className={style.contact}>Contact</a>
          </div>
          <div className={style.right}>
            <svg className={style.bgPhoto}
              fill="#3e6ff4"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>
                <image
                x={40}
                y={80}
                  class="home__blob-img"
                  href="/public/profile.png"
                ></image>
              </g>
            </svg>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
