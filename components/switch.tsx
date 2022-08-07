import { ReactNode } from "react";

export const Switch = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{
      fontSize: '3.55vw',
    }}>
      <div className="switch">
        <div className="body">
          <div className="volume"></div>
          <div className="screen">
            {children}
          </div>
        </div>
        
        <div className="joy-con left">
          <div className="button-group">
            <div className="button arrow up"></div>
            <div className="button arrow right"></div>
            <div className="button arrow down"></div>
            <div className="button arrow left"></div>
          </div>
          
          <div className="stick"></div>
          <div className="select"></div>
          <div className="capture"></div>
          <div className="shoulder l"></div>
        </div>
        
        <div className="joy-con right">
          <div className="button-group">
            <div className="button letter" data-letter="X"></div>
            <div className="button letter" data-letter="A"></div>
            <div className="button letter" data-letter="B"></div>
            <div className="button letter" data-letter="Y"></div>
          </div>
          
          <div className="stick"></div>
          <div className="start"></div>
          <div className="home"></div>
          <div className="shoulder r"></div>
        </div>
      </div>
      <style jsx>{`
        .switch {
          position: relative;
          z-index: 1;
          margin: auto;
        }

        .body {
          position: relative;
          width: 20.125em;
          height: 11.75em;
          padding: 0.375em 0.5625em;
          background-repeat: no-repeat;
          background-position: 0 0, 0 0, 100% 0;
          background-size: 100%, 51%, 51%;
          background-image:
            linear-gradient(
              to bottom,
              rgba(56,58,61,0) 50%,
              rgba(56,58,61,1) 50%
            ),
            radial-gradient(
              circle at 0 0,
              rgba(56,58,61,0) 0.5em,
              rgba(56,58,61,1) 0.515625em
            ),
            radial-gradient(
              circle at 100% 0,
              rgba(56,58,61,0) 0.5em,
              rgba(56,58,61,1) 0.515625em
            );
          border-radius: 0.125em;
          box-shadow:
            inset 0 -1.25em 0.5em -1em rgba(0,0,0,0.5);
        }



        .volume {
          position: absolute;
          bottom: 100%;
          left: 2.625em;
          width: 1.6875em;
          height: 0.03125em;
          background-color: #555;
        }


        .screen {
          display: flex;
          box-sizing: content-box;
          position: relative;
          width: 16em;
          height: 9em;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          //background-color: #e60012;
          border: 1em solid #000;
          border-left-width: 1.5em;
          border-right-width: 1.5em;
          border-radius: 0.375em;
        }

        .logo {
          margin: auto;
          text-transform: uppercase;
        }

        .logo h1 {
          font-size: 1.0625em;
          letter-spacing: 0.125em;
        }

        .logo h1 span {
          display: block;
          font-size: 55%;
          letter-spacing: 0.40625em;
        }

        .icon {
          height: 3.3125em;
          margin-bottom: 0.4375em;
          text-align: center;
          animation: logo-icon 2s linear infinite;
        }

        .icon-part {
          position: relative;
          height: 100%;
          display: inline-block;
          margin: 0 0.03125em;
        }

        .icon-part.left {
          width: 1.59375em;
          border: 0.25em solid #fff;
          border-radius: 0.8125em 0 0 0.8125em;
        }

        .icon-part.right {
          width: 1.4375em;
          background-color: #fff;
          border-radius: 0 0.8125em 0.8125em 0;
          animation: logo-right 2s linear infinite;
        }


        .joy-con {
          position: absolute;
          top: 0;
          width: 3.8125em;
          height: 100%;
          background-color: #83868d;
          backface-visibility: hidden;
          border: 0;
        }

        .joy-con.left {
          right: calc(100% + 0.03125em);
          border-radius: 2.5em 0.25em 0.125em 2.5em;
          box-shadow:
            inset 0.125em -0.125em 0.375em rgba(0,0,0,0.5),
            inset -0.3125em 0 0.0625em -0.25em rgba(0,0,0,0.25),
            inset 0.375em 0.5625em 0.5em -0.25em #83868d,
            0.40625em 0.25em 0 -0.375em #222;
        }

        .joy-con.right {
          left: calc(100% + 0.03125em);
          border-radius: 0.25em 2.5em 2.5em 0.125em;
          box-shadow:
            inset -0.125em -0.125em 0.375em rgba(0,0,0,0.5),
            inset 0.3125em 0 0.0625em -0.25em rgba(0,0,0,0.25),
            inset -0.375em 0.5625em 0.5em -0.25em #83868d,
            -0.40625em 0.25em 0 -0.375em #222;
        }

        .button-group {
          position: absolute;
          left: 50%;
          width: 45%;
          padding-bottom: 45%;
          transform: translateX(-50%);
        }

        .left .button-group {
          top: 5.375em;
          margin-left: 2.5%;
        }

        .right .button-group {
          top: 2.125em;
          margin-left: -2.5%;
        }

        .button {
          position: absolute;
          width: 0.75em;
          height: 0.75em;
          margin: -0.375em;
          color: rgba(255,255,255,0.6);
          background-color: #49494b;
          border-radius: 100%;
          box-shadow:
            inset 0 -0.0625em 0.125em rgba(0,0,0,0.75),
            inset 0 0.125em 0.125em -0.0625em rgba(255,255,255,0.4),
            0 0 0.03125em 0.0625em rgba(0,0,0,0.6),
            0 0.0625em 0.25em 0.03125em rgba(0,0,0,0.5);
          cursor: pointer;
        }

        .button:nth-child(1) {
          top: 0;
          left: 50%;
        }

        .button:nth-child(2) {
          top: 50%;
          right: 0;
        }

        .button:nth-child(3) {
          bottom: 0;
          left: 50%;
        }

        .button:nth-child(4) {
          top: 50%;
          left: 0;
        }

        .stick {
          position: absolute;
          left: 50%;
          width: 1.75em;
          height: 1.75em;
          margin: -0.375em;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.6);
          background-color: #49494b;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 0.0625em 100%, 100% 0.0625em, 100%;
          border-radius: 100%;
          box-shadow:
            inset 0 -0.0625em 0.125em rgba(0,0,0,0.75),
            inset 0 0.125em 0.125em -0.03125em rgba(0,0,0,0.2),
            inset 0 0.1875em 0.125em -0.0625em rgba(255,255,255,0.3),
            0 0 0.09375em 0.0625em rgba(0,0,0,0.75),
            0 0.375em 1em 0.0625em rgba(0,0,0,0.4);
          cursor: pointer;
        }

        .left .stick {
          top: 2.5em;
          margin-left: 2.5%;
        }

        .right .stick {
          top: 5.75em;
          margin-left: -2.5%;
        }

        .select,
        .start {
          position: absolute;
          background-color: #49494b;
          cursor: pointer;
        }

        .select {
          top: 1.125em;
          right: 0.375em;
          width: 0.625em;
          height: 0.1875em;
          border-radius: 0.03125em;
          box-shadow:
            inset 0 -0.03125em 0.0625em rgba(0,0,0,0.5),
            inset 0 0.03125em rgba(255,255,255,0.2),
            0 0 0.03125em 0.03125em rgba(0,0,0,0.6),
            0 0.09375em 0.125em -0.03125em rgba(0,0,0,0.4);
        }

        .start {
          top: 0.90625em;
          left: 0.5625em;
          width: 0.1875em;
          height: 0.625em;
          box-shadow:
            0 0 0.03125em 0.03125em rgba(0,0,0,0.6),
            0 0.09375em 0.125em -0.03125em rgba(0,0,0,0.4);
        }


        .capture {
          position: absolute;
          bottom: 2.875em;
          right: 0.8125em;
          width: 0.6875em;
          height: 0.6875em;
          background-color: #444;
          border-radius: 0.09375em;
          box-shadow:
            inset 0 0.25em 0.5em -0.0625em rgba(255,255,255,0.1),
            inset 0 0.015625em 0.03125em -0.015625em rgba(255,255,255,0.5),
            inset 0 0 0.03125em rgba(0,0,0,1),
            0 0.015625em 0 0.03125em rgba(0,0,0,0.75);
          cursor: pointer;
        }

        .home {
          position: absolute;
          bottom: 2.8125em;
          left: 0.75em;
          width: 0.875em;
          height: 0.875em;
          background-color: #444;
          border-radius: 50%;
          box-shadow:
            inset 0 0 0 0.09375em #83868d,
            inset 0 0.25em 0.5em -0.0625em rgba(255,255,255,0.1),
            inset 0 0.015625em 0.03125em -0.015625em rgba(255,255,255,0.5),
            inset 0 0 0.03125em rgba(0,0,0,1),
            0 0.015625em 0.03125em 0.0625em rgba(0,0,0,0.65);
          cursor: pointer;
        }


        .shoulder {
          position: absolute;
          z-index: -1;
          top: -0.125em;
          display: block;
          width: 5.5em;
          height: 2.5em;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 100%;
          border-radius: 5em 5em 0 0;
          cursor: pointer;
        }

        .shoulder.l {
          left: -0.125em;
          background-image:
            radial-gradient(
              circle at 3em 0.125em,
              rgba(15,15,15,1) 0.125em,
              rgba(15,15,15,0) 0.15125em
            ),
            radial-gradient(
              circle at 0.34375em 1.5em,
              rgba(15,15,15,1) 0.125em,
              rgba(15,15,15,0) 0.15125em
            ),
            radial-gradient(
              circle at 0.875em -0.625em,
              rgba(68,68,68,1) 1.75em,
              rgba(15,15,15,1) 2.15625em,
              rgba(15,15,15,0) 2.1875em
            );
        }

        .shoulder.r {
          right: -0.125em;
          background-image:
            radial-gradient(
              circle at 2.5em 0.125em,
              rgba(15,15,15,1) 0.125em,
              rgba(15,15,15,0) 0.15125em
            ),
            radial-gradient(
              circle at 5.1875em 1.5em,
              rgba(15,15,15,1) 0.125em,
              rgba(15,15,15,0) 0.15125em
            ),
            radial-gradient(
              circle at 4.5em -0.625em,
              rgba(68,68,68,1) 1.75em,
              rgba(15,15,15,1) 2.15625em,
              rgba(15,15,15,0) 2.1875em
            );
        }
      `}</style>
    </div>
  )
}
