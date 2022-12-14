import React from 'react'

export const Glamorama = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    red = '#A01316',
    schema = 'common',
  } = props

  const colorschema = {
    altletters: red,
    letters: dark,
  }

  if (schema === 'light') {
    colorschema.altletters = red
    colorschema.letters = light
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 741.78 174.1"
      {...props}
    >
      <defs>
        <linearGradient
          id="glamorama_svg__b"
          x1={396.04}
          y1={77.78}
          x2={353.5}
          y2={44.69}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d7dbd9" />
          <stop offset={0.16} stopColor="#dfe2e0" />
          <stop offset={0.37} stopColor="#d0d4d3" />
          <stop offset={0.64} stopColor="#b8bdbf" />
          <stop offset={0.8} stopColor="#262325" />
          <stop offset={0.93} stopColor="#a8acb4" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__d"
          x1={404.9}
          y1={95.19}
          x2={348.84}
          y2={30.38}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e9eae8" />
          <stop offset={0.05} stopColor="#e6e7e5" />
          <stop offset={0.39} stopColor="#d1d5d3" />
          <stop offset={0.62} stopColor="#cacfcd" />
          <stop offset={0.7} stopColor="#d2d6d4" />
          <stop offset={1} stopColor="#e9eae8" />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__a"
          data-name="New Gradient Swatch 3"
          x1={401.98}
          y1={95.6}
          x2={351.35}
          y2={29.52}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="#ececeb" />
          <stop offset={0.18} stopColor="#c0c1c0" />
          <stop offset={0.58} stopColor="#606061" />
          <stop offset={0.87} stopColor="#232425" />
          <stop offset={1} stopColor="#0b0c0e" />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__e"
          x1={392.75}
          y1={86.99}
          x2={357.37}
          y2={32.8}
          xlinkHref="#glamorama_svg__a"
        />
        <linearGradient
          id="glamorama_svg__c"
          x1={350.93}
          y1={81.03}
          x2={402.28}
          y2={45.31}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#212124" />
          <stop offset={0.14} stopColor="#454648" />
          <stop offset={0.44} stopColor="#9fa3a4" />
          <stop offset={0.55} stopColor="#bfc5c5" />
          <stop offset={0.59} stopColor="#a6abac" />
          <stop offset={0.65} stopColor="#7d8082" />
          <stop offset={0.72} stopColor="#5b5c5f" />
          <stop offset={0.79} stopColor="#404044" />
          <stop offset={0.86} stopColor="#2d2d30" />
          <stop offset={0.93} stopColor="#222125" />
          <stop offset={1} stopColor="#1e1d21" />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__f"
          x1={395.99}
          y1={81.49}
          x2={357.09}
          y2={43.52}
          xlinkHref="#glamorama_svg__b"
        />
        <linearGradient
          id="glamorama_svg__g"
          x1={368.12}
          y1={55.03}
          x2={387.12}
          y2={71.98}
          xlinkHref="#glamorama_svg__a"
        />
        <linearGradient
          id="glamorama_svg__h"
          x1={364.68}
          y1={77.5}
          x2={406.91}
          y2={27.43}
          xlinkHref="#glamorama_svg__c"
        />
        <linearGradient
          id="glamorama_svg__i"
          data-name="Linear Gradient 1"
          x1={372.38}
          y1={58.22}
          x2={379.83}
          y2={65.86}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__j"
          x1={393.24}
          y1={82.71}
          x2={361.41}
          y2={44}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d7dbd9" />
          <stop offset={0.16} stopColor="#dfe2e0" />
          <stop offset={0.37} stopColor="#d0d4d3" />
          <stop offset={0.55} stopColor="#b8bdbf" />
          <stop offset={0.69} stopColor="#262325" />
          <stop offset={0.84} stopColor="#a8acb4" />
          <stop offset={0.87} stopColor="#c6c8ce" />
          <stop offset={0.9} stopColor="#dfe0e3" />
          <stop offset={0.93} stopColor="#f1f1f3" />
          <stop offset={0.96} stopColor="#fcfcfc" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__k"
          x1={402.03}
          y1={93.3}
          x2={372.39}
          y2={57.43}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.15} stopColor="#c4c4c4" />
          <stop offset={0.32} stopColor="#898989" />
          <stop offset={0.49} stopColor="#585858" />
          <stop offset={0.64} stopColor="#323232" />
          <stop offset={0.78} stopColor="#161616" />
          <stop offset={0.91} stopColor="#060606" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__l"
          x1={407.5}
          y1={103.34}
          x2={346.69}
          y2={22.81}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#cacfcd" />
          <stop offset={0.07} stopColor="#d2d6d4" />
          <stop offset={0.33} stopColor="#e9eae8" />
          <stop offset={0.62} stopColor="#cacfcd" />
          <stop offset={0.66} stopColor="#d2d6d4" />
          <stop offset={0.82} stopColor="#e9eae8" />
          <stop offset={1} stopColor="#cacfcd" />
        </linearGradient>
        <linearGradient
          id="glamorama_svg__m"
          x1={408.59}
          y1={104.79}
          x2={345.39}
          y2={21.09}
          gradientTransform="translate(-7.89 4.96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#262325" />
          <stop offset={0.03} stopColor="#373536" />
          <stop offset={0.18} stopColor="#969595" />
          <stop offset={0.28} stopColor="#d2d2d1" />
          <stop offset={0.33} stopColor="#e9eae8" />
          <stop offset={0.62} stopColor="#ececec" />
          <stop offset={0.82} stopColor="#e9eae8" />
          <stop offset={1} stopColor="#262325" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Capa 1">
          <path
            d="M511.78 112.77l1 .06M89.15 35.77v21.8H76.93v69.79c0 31.16-12.76 46.74-38.6 46.74-14.74 0-25.74-3.45-33-10.18l11.41-20c6 4.61 12 7 18.05 7A17.79 17.79 0 0048 145.65c3.62-3.4 5.31-10 5.31-20v-7.25c-7.63 8.8-15.14 13.17-22.42 13.17-8.61 0-15.79-4.45-21.77-13.75C3 108.74 0 97.14 0 82.84S3 57 9.28 47.93 23.12 34.36 32 34.36c8.63 0 15.72 4.35 21.26 12.9V35.77zM53.4 83.37c0-7.68-1.34-13.78-4-18.15s-6.17-6.61-10.71-6.61c-4.77 0-8.32 2.28-10.83 6.74S24.23 75.87 24.23 83s1.16 12.9 3.78 17.45 6.07 6.84 10.66 6.84c4 0 7.52-2.12 10.42-6.33s4.31-10.11 4.31-17.59z"
            fill="#262325"
          />
          <path
            d="M87.83 116.84v-18.7h10.06l.11-79.3H87.83V0h30.33v98.14h9.2v18.7z"
            fill="#262325"
          />
          <path
            d="M313.68 98.14V67.08c0-8.47-.61-14.83-1.85-19A18.2 18.2 0 00305 38c-3.33-2.43-7.64-3.66-12.76-3.66-9 0-17.54 3.6-25.8 11.06-4.5-7.46-10.84-11.06-19-11.06-6.88 0-13.74 2.56-20.73 7.83v-6.6l-30.63.07v18.63h10.48v43.87H187V68.45a83.51 83.51 0 00-1.27-16.2 27.63 27.63 0 00-4.2-9.22 20.71 20.71 0 00-9-6.78c-4-1.83-9.08-2.64-15.14-2.64-15.84 0-26.07 6.38-30.86 19.13L143 56.5c3.15-4.25 7.11-6.39 11.7-6.39a10.53 10.53 0 018.68 4.08 15.48 15.48 0 013.32 10.2v4.94c-5.52-2.74-10.36-4.2-14.67-4.2a24.21 24.21 0 00-18.58 8c-4.88 5.29-7.21 11.8-7.21 19.49s2.2 14 6.81 18.55a22.59 22.59 0 0016.3 6.81c6 0 11.88-2.56 17.35-7.43v6.33h70.58V98.14H226.7V62c5.66-3.6 10.54-5.46 14.85-5.46 5.59 0 8.26 4.41 8.26 13.43v46.91l30.81.07V98.14H270.2V62c5.17-3.6 10.06-5.46 14.55-5.46 5.77 0 8.57 4.16 8.57 12.68v47.73h30.91V98.14zm-147-4.73c-4.78 5.61-9 8.4-12.75 8.4a6.47 6.47 0 01-5.76-3.08 11.82 11.82 0 01-2.46-7.57c0-3.46.89-5.88 2.92-7.64a8.93 8.93 0 016.28-2.65c3 0 6.82 2 11.77 5.86zM464 98.14v18.7h-44.7v-18.7h11.92V54.27H420V35.66l29.75-.07v20.55a31.1 31.1 0 017.63-15.31 19.29 19.29 0 0114.5-6.47h3.26v24.43A31 31 0 00462.58 61c-3.2 1.48-5.89 4.67-8 9.63-2.22 4.8-3.26 10.71-3.26 17.5v10z"
            fill="#262325"
          />
          <path
            d="M661.38 98.14V67c0-8.4-.53-14.76-1.75-18.91A19 19 0 00652.76 38c-3.31-2.43-7.58-3.66-12.86-3.66-8.85 0-17.48 3.6-25.57 11.06-4.66-7.46-10.93-11.06-19.1-11.06-7 0-13.79 2.56-20.61 7.83v-6.6l-30.86.07v18.63h10.54v43.87h-19.62V68.45c0-7.54-.36-12.88-1.18-16.2a25.89 25.89 0 00-4.18-9.19 19.63 19.63 0 00-8.92-6.81c-4.06-1.83-9.14-2.64-15.25-2.64-15.89 0-26.08 6.38-30.86 19.13l16.41 3.76c3.27-4.25 7.05-6.39 11.65-6.39a10.7 10.7 0 018.8 4.08 15.47 15.47 0 013.3 10.2v4.94c-5.51-2.74-10.4-4.2-14.6-4.2a24.34 24.34 0 00-18.69 8c-5 5.29-7.28 11.8-7.28 19.49s2.33 14 6.93 18.55a22.23 22.23 0 0016.32 6.81c6.09 0 11.84-2.56 17.32-7.43v6.33H585V98.14h-10.38V62c5.53-3.6 10.42-5.46 14.73-5.46 5.42 0 8.28 4.41 8.28 13.43v46.91h30.74V98.14h-10.43V62c5.23-3.6 10.08-5.46 14.56-5.46 5.87 0 8.67 4.16 8.67 12.68v47.73l30.81-.07V98.14zm-146.93-4.73c-4.75 5.61-8.9 8.4-12.66 8.4a6.93 6.93 0 01-6-3.08 12.15 12.15 0 01-2.34-7.57c0-3.46 1-5.88 2.81-7.64a9.39 9.39 0 016.4-2.65c2.85 0 6.94 2 11.75 5.86z"
            fill="#262325"
          />
          <path
            d="M741.78 98.14v18.7h-30.54v-6.4c-5.43 4.94-11.2 7.5-17.25 7.5a22.61 22.61 0 01-16.36-6.81c-4.6-4.6-6.94-10.77-6.94-18.55A28.17 28.17 0 01678 73.09a24.14 24.14 0 0118.58-8c4.27 0 9.2 1.46 14.69 4.2v-4.9a15.46 15.46 0 00-3.27-10.2 10.55 10.55 0 00-8.8-4.08q-6.66 0-11.65 6.39l-16.3-3.76q7-19.12 30.75-19.13c6 0 11.24.81 15.14 2.64a19.84 19.84 0 019 6.78 27 27 0 014.19 9.22c.86 3.32 1.29 8.66 1.29 16.2v29.69zm-30.54-11.41c-4.91-3.89-8.81-5.86-11.71-5.86a9.27 9.27 0 00-6.41 2.65c-1.93 1.76-2.81 4.18-2.81 7.64a12.59 12.59 0 002.33 7.57 6.77 6.77 0 005.88 3.08c3.73 0 8.05-2.79 12.72-8.4z"
            fill="#262325"
          />
          <path
            d="M369.06 113.38a45.5 45.5 0 1145.49-45.5 45.42 45.42 0 01-45.49 45.5z"
            fill="#1c1c1d"
          />
          <path
            d="M369.06 44.45a23.44 23.44 0 1023.37 23.43 23.48 23.48 0 00-23.37-23.43zm0 44.9a21.51 21.51 0 1121.55-21.47 21.47 21.47 0 01-21.55 21.47z"
            style={{
              mixBlendMode: 'overlay',
            }}
            opacity={0.2}
            fill="url(#glamorama_svg__b)"
          />
          <path
            d="M369.06 24.05a43.86 43.86 0 1044 43.83 43.77 43.77 0 00-44-43.83zm0 85.72a41.83 41.83 0 1141.81-41.89 41.82 41.82 0 01-41.81 41.89z"
            opacity={0.36}
            fill="url(#glamorama_svg__d)"
          />
          <path
            d="M369.06 26.11a41.83 41.83 0 1041.81 41.77 41.72 41.72 0 00-41.81-41.77zm0 81.06a39.27 39.27 0 1139.24-39.29 39.28 39.28 0 01-39.24 39.29z"
            opacity={0.63}
            fill="url(#glamorama_svg__a)"
          />
          <path
            d="M369.06 28.63a39.27 39.27 0 1039.24 39.25 39.13 39.13 0 00-39.24-39.25zm0 74a34.71 34.71 0 1134.71-34.73 34.7 34.7 0 01-34.71 34.71z"
            opacity={0.8}
            fill="url(#glamorama_svg__e)"
          />
          <path
            d="M369.06 34.79a33.1 33.1 0 1033.08 33.09 33 33 0 00-33.08-33.09zm0 61.4a28.29 28.29 0 1128.25-28.31 28.32 28.32 0 01-28.25 28.31z"
            opacity={0.36}
            fill="url(#glamorama_svg__c)"
          />
          <path
            d="M369.06 41.33a26.56 26.56 0 1026.55 26.55 26.58 26.58 0 00-26.55-26.55zm0 51.88a25.3 25.3 0 1125.4-25.33 25.28 25.28 0 01-25.4 25.33z"
            opacity={0.6}
            fill="url(#glamorama_svg__f)"
          />
          <image
            width={119}
            height={120}
            transform="translate(309.61 7.46)"
            xlinkHref="data:image/png;base64,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"
            style={{
              mixBlendMode: 'overlay',
            }}
          />
          <path
            d="M369.06 50.31a17.52 17.52 0 11-17.46 17.57 17.38 17.38 0 0117.46-17.57m0-.12a17.52 17.52 0 1012.44 5.16 17.35 17.35 0 00-12.44-5.16z"
            fill="#f1f3f2"
            opacity={0.15}
          />
          <path
            d="M384.78 67.88a15.72 15.72 0 11-15.72-15.76 15.68 15.68 0 0115.72 15.76z"
            style={{
              mixBlendMode: 'multiply',
            }}
            opacity={0.8}
            fill="url(#glamorama_svg__g)"
          />
          <path
            d="M381.64 67.88a12.58 12.58 0 11-12.58-12.52 12.59 12.59 0 0112.58 12.52z"
            opacity={0.15}
            fill="url(#glamorama_svg__h)"
          />
          <path
            d="M379.43 67.88a10.37 10.37 0 11-10.37-10.37 10.28 10.28 0 0110.37 10.37z"
            opacity={0.06}
            fill="url(#glamorama_svg__i)"
          />
          <path
            d="M369.06 109.77a41.83 41.83 0 1141.81-41.89 41.82 41.82 0 01-41.81 41.89z"
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="none"
            stroke="#eaecea"
            strokeWidth={0.033}
            opacity={0.8}
          />
          <path
            d="M369.06 109.77a41.83 41.83 0 1141.81-41.89 41.82 41.82 0 01-41.81 41.89z"
            fill="none"
            stroke="#f1f3f2"
            strokeWidth={0.033}
            opacity={0.27}
          />
          <path
            d="M369.06 41.33a26.56 26.56 0 1026.55 26.55 26.58 26.58 0 00-26.55-26.55zm0 51.88a25.3 25.3 0 1125.4-25.33 25.28 25.28 0 01-25.4 25.33z"
            style={{
              mixBlendMode: 'overlay',
            }}
            fill="url(#glamorama_svg__j)"
          />
          <path
            d="M369.06 39.61a28.29 28.29 0 1028.25 28.27 28.25 28.25 0 00-28.25-28.27zm0 54.84a26.56 26.56 0 1126.55-26.57 26.56 26.56 0 01-26.55 26.57z"
            opacity={0.7}
            fill="url(#glamorama_svg__k)"
          />
          <path
            d="M369.06 96.19a28.29 28.29 0 1128.25-28.31 28.32 28.32 0 01-28.25 28.31z"
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="none"
            stroke="#262325"
            strokeWidth={0.05}
            opacity={0.7}
          />
          <path
            d="M369.06 94.45a26.56 26.56 0 1126.55-26.57 26.56 26.56 0 01-26.55 26.57z"
            fill="none"
            stroke="#000"
            strokeWidth={0.05}
            opacity={0.8}
          />
          <path
            d="M362.91 52.12c.74 1-.31 3.24-2.42 5s-4.47 2.36-5.4 1.42c-.76-1 .29-3.16 2.38-5s4.53-2.38 5.44-1.42z"
            fill="#fff"
            opacity={0.4}
          />
          <path
            d="M375.53 72.77c.52.5.17 1.12-.53 1.69s-1.27.63-1.67.19a1.43 1.43 0 01.5-1.68c.58-.45 1.47-.64 1.7-.2z"
            fill="#fff"
            opacity={0.2}
          />
          <path
            d="M365.62 59.56c.54.73-.16 2-1.44 3.14s-2.75 1.55-3.2.94 0-2 1.27-3.07c1.4-1.23 2.81-1.57 3.37-1.01z"
            fill="#fff"
            opacity={0.1}
          />
          <path
            d="M369.06 15.49a52.43 52.43 0 1052.52 52.39 52.39 52.39 0 00-52.52-52.39zm0 97.89a45.5 45.5 0 1145.49-45.5 45.42 45.42 0 01-45.49 45.5z"
            fill="url(#glamorama_svg__l)"
          />
          <path
            d="M369.06 15.49a52.43 52.43 0 1052.52 52.39 52.39 52.39 0 00-52.52-52.39zm0 97.89a45.5 45.5 0 1145.49-45.5 45.42 45.42 0 01-45.49 45.5z"
            stroke="#e9eae8"
            strokeWidth={0.033}
            fill="url(#glamorama_svg__m)"
          />
          <path
            d="M369.06 113.38a45.5 45.5 0 1145.49-45.5 45.42 45.42 0 01-45.49 45.5z"
            fill="none"
            stroke="#e9eae8"
            strokeWidth={0.033}
          />
          <path
            d="M369.06 114a46.06 46.06 0 1146.08-46.15A46.1 46.1 0 01369.06 114z"
            fill="none"
            stroke="#f1f3f2"
            strokeWidth={0.084}
            opacity={0.2}
          />
        </g>
      </g>
    </svg>
  )
}
