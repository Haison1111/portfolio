import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/S-logo2.svg'
import './Logo.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 8,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        src={LogoS}
        ref={solidLogoRef}
        alt="JavaScript,  Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="555.000000pt"
        height="603.000000pt"
        viewBox="0 0 555.000000 603.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,603.000000) scale(0.100000,-0.100000)"
          fill="none"
          stroke="none"
        >
          <path
            d="M2581 4279 c-237 -46 -446 -202 -542 -404 -52 -108 -69 -179 -76
-310 -13 -275 99 -477 351 -628 33 -20 257 -125 499 -234 l439 -198 -177 -5
-178 -5 -68 -325 c-37 -179 -70 -337 -73 -352 l-5 -28 277 0 c297 0 357 7 472
53 100 41 170 88 250 167 138 138 199 280 207 487 7 146 -5 219 -52 320 -68
147 -180 257 -352 346 -48 24 -245 116 -438 202 -192 87 -375 169 -405 184
l-55 26 739 5 739 5 74 345 c40 190 73 348 73 353 0 10 -1645 7 -1699 -4z"
          />
          <path
          
            d="M1775 2478 c-3 -13 -34 -162 -70 -333 -36 -170 -67 -320 -70 -332 -5
-23 -4 -23 90 -23 90 0 95 1 100 23 3 12 34 162 70 332 36 171 67 320 70 333
5 22 4 22 -90 22 -90 0 -95 -1 -100 -22z"
          />
          <path
          
            d="M2106 2483 c-5 -18 -146 -681 -146 -689 0 -2 62 -4 138 -4 l137 0 73
348 c40 191 73 350 72 355 0 4 -60 7 -134 7 -120 0 -135 -2 -140 -17z"
          />
          <path
          
            d="M2486 2483 c-5 -18 -146 -682 -146 -689 0 -3 78 -3 173 -2 l172 3 67
315 c37 173 70 332 73 353 l7 37 -170 0 c-154 0 -171 -2 -176 -17z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo