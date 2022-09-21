import React from 'react'

export const LaTerceraNoche = props => {
  const { blue = '#18283f', white = 'white', schema = 'common' } = props

  const colorschema = {
    isotypebox: white,
    isotypeletter: blue,
    letters: blue,
  }

  if (schema === 'light') {
    colorschema.isotypebox = blue
    colorschema.isotypeletter = white
    colorschema.letters = white
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1686.47 278.68"
      {...props}
    >
      <defs>
        <clipPath id="la-tercera-noche_svg__a">
          <path
            data-name="SVGID"
            d="M1458 237.11h18.77v18.75H1458z"
            fill="none"
          />
        </clipPath>
        <clipPath id="la-tercera-noche_svg__b">
          <path
            data-name="SVGID"
            d="M1272.87 237.11h18.75v18.75h-18.75z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g data-name="Layer 2">
        <g data-name="grupo copesa">
          <path
            d="M0 165h165V7.13H0zm81.18-28.67H20.11V35.83h15.83v86.45h45.24zm63.75-86.46h-29.86v86.46H99.26V49.87H69.42v-14h75.51zm260.81-15.6h42.59v123.5h22.59V34.27h42.65V14.24H405.74v20.03zM733.72 69.1c0-33.14-21.74-54.87-61.2-54.87h-36.74v143.55h22.55v-34.21h14.19a73.06 73.06 0 0010.31-.66l24.5 34.87h26.82L705 117.07c18.81-8.69 28.72-25.78 28.72-48m-62 35.05h-13.39V34.26h13.39c27.41 0 38.77 13.14 38.77 34.84 0 22-11.18 35.05-38.77 35.05m144.73 35.07c-28.86 0-50-22.16-50-53.21 0-30.42 20.7-53.23 49.2-53.23 19 0 31.21 6.79 40.74 19.65l17.28-12.23c-12.46-17.53-30.82-27.84-57.43-27.84C775.3 12.36 743 43.58 743 86s31.65 73.66 72.61 73.66c27.87 0 46.66-9.72 61.44-29.34l-17.52-12.07c-10.78 13.94-24.49 21-43.08 21m277.83-70.15c0-33.14-21.8-54.87-61.25-54.87h-36.72v143.55H1019v-34.21h14a73.11 73.11 0 0010.3-.66l24.51 34.87h26.84l-29.15-40.71c18.81-8.69 28.75-25.78 28.75-48m-62.14 35.05H1019V34.26h13.18c27.43 0 38.86 13.14 38.86 34.84 0 22-11.18 35.05-38.86 35.05m131.26-92.86h-1.26l-62.92 146.5h22.8l8.28-20.07h64.16l8.25 20.07h23.83zm-24.69 106.37l23.88-56.79 23.43 56.79zm-249.46 40.11h93.48v-20.04h-70.89v-24.32h60.96V93.79h-60.96V34.27h70.89V14.22h-93.48v143.55zM550.3 113.43h60.99V93.79H550.3V34.28h71.65V14.23h-94.2v143.55h94.34v-20.06H550.3v-24.29zM342.22 11.33l-54.3 126.43h-57.25V14.31h-22.56v143.52h94l8.21-20.07h64.24l8.18 20.07h23.86l-63.04-146.5zm-23.4 106.37L342.65 61l23.44 56.75z"
            fill={colorschema.letters}
          />
          <g clipPath="url(#la-tercera-noche_svg__a)" opacity={0.5}>
            <path
              d="M1476.75 246.49a9.38 9.38 0 11-9.38-9.38 9.38 9.38 0 019.38 9.38"
              fill={colorschema.letters}
            />
          </g>
          <g clipPath="url(#la-tercera-noche_svg__b)" opacity={0.5}>
            <path
              d="M1291.63 246.49a9.38 9.38 0 11-9.38-9.38 9.38 9.38 0 019.38 9.38"
              fill={colorschema.letters}
            />
          </g>
          <path
            d="M1653.93 277.22a30.72 30.72 0 01-7.78-60.44l6.57-1.72-1.72 6.58a22.69 22.69 0 0027.78 27.78l6.58-1.72-1.72 6.57a30.72 30.72 0 01-29.71 23m-11.65-50.28a22.76 22.76 0 1031.2 31.2 30.69 30.69 0 01-31.21-30.73v-.47m-15.99 48.13a3.56 3.56 0 11-3.55-3.55 3.56 3.56 0 013.55 3.55m57.32-54.29a3.56 3.56 0 11-3.55-3.56 3.55 3.55 0 013.55 3.56m-64.43 8.46a3.56 3.56 0 11-3.55-3.55 3.56 3.56 0 013.55 3.55m67.3-57.37h-435.58V0h435.58zm-422-13.53h408.52V13.54h-408.57z"
            fill={colorschema.letters}
          />
          <path
            d="M1511.93 48h26.89c-.15.45 0 .55-.08.6-2.74 1.7-3.69 4.42-4 7.35-.34 3.59-.45 7.2-.53 10.81-.08 4.33 0 8.66 0 13 0 .7.07 1.4.11 2.2h32a13.06 13.06 0 00.22-1.69V61.64a40.73 40.73 0 00-.55-6c-.48-2.88-1.56-5.93-4.45-7.6h27.28c0 .19-.07.53-.18.6-2.12 1.24-3 3.27-3.56 5.48a40.84 40.84 0 00-.94 10.33c-.08 14 0 28 0 42a60.18 60.18 0 00.4 7.36c.43 3.44 1.21 7.17 4.86 9.14h-27.83c4.9-3.09 4.75-8.24 4.92-12.92.28-7.36.11-14.73.13-22.1v-3.4c-1.71-.52-29.34-.66-32.19-.19-.05.51-.16 1.06-.16 1.61v23.19a41.26 41.26 0 00.57 6.47c.49 2.9 1.57 5.55 4.3 7.3h-27.62a11.39 11.39 0 011.09-.89 5.62 5.62 0 002.56-3.38 38.88 38.88 0 001.19-5.71 54.67 54.67 0 00.23-6.27V64.18a70.1 70.1 0 00-.51-8.2c-.38-3-1.25-6.08-4.14-8M1394.3 124a41.17 41.17 0 01-14.37-3.16 34.65 34.65 0 01-20.71-23 44.23 44.23 0 01-1.36-18.21 38.75 38.75 0 015.1-15.26 33.49 33.49 0 0114.93-13.45 44.62 44.62 0 0125-3.65 39.07 39.07 0 0118.65 7.12A34.49 34.49 0 011435 75a43.92 43.92 0 010 20.58c-3.16 13.14-11.23 21.85-24 26.28a49 49 0 01-16.7 2.14m23.55-38.53c-.25-3.52-.41-7.06-.77-10.57a51.1 51.1 0 00-1.16-6.38 34.35 34.35 0 00-5.1-12.09c-7-9.94-20.4-10.22-27.63-.54a32 32 0 00-5 11 67.88 67.88 0 00-2 13.24 74 74 0 002 24 30.26 30.26 0 006 12.11 16.49 16.49 0 0023.83 1.38c3.87-3.66 5.94-8.3 7.36-13.28a75 75 0 002.45-18.86M1283.56 48H1308l9.5 12.35 9.5 12.36q4.76 6.18 9.53 12.38c3.15 4.08 6.25 8.2 9.46 12.24l.41-.19c0-.62.11-1.23.11-1.85 0-9.18.1-18.35 0-27.53a58.17 58.17 0 00-1.07-9.66 11.68 11.68 0 00-7.45-9.17 9.88 9.88 0 01-1.21-1h22.44c-.28.09-1.71.69-2 .8-4.68 2-6.84 5.88-7.58 10.61A56.62 56.62 0 001349 68c-.06 17.41 0 34.82 0 52.24v2.67h-5.27q-23.88-31.23-48.3-63.15c-.11 1-.22 1.47-.22 1.95 0 15 0 30.06.08 45.09a22.92 22.92 0 001.52 8.25 11.26 11.26 0 006.55 6.83 6.24 6.24 0 011 .48c.11.06.28.55.28.55h-20.85c.28-.31.38-.71.63-.82 5-2.1 7-6.29 7.78-11.21a59.24 59.24 0 00.62-8.63c.06-12.21 0-24.42 0-36.63a21.83 21.83 0 00-2.52-10.84 13.92 13.92 0 00-6-5.84 6.62 6.62 0 01-.84-.58c0-.13.06-.26.1-.4m368.64 53.64c.5 1.78-.7 15.1-1.82 21.32h-56.87a39.93 39.93 0 002.76-3.2 12.59 12.59 0 001.65-6c.22-2.44.33-4.9.33-7.36V64.54a92.94 92.94 0 00-.66-9.28 8.64 8.64 0 00-3.91-6.82.61.61 0 01-.12-.47h53.53c.66 1.75 1.43 18.2 1 21.36-.47-.94-.79-1.54-1.08-2.16a45.2 45.2 0 00-6.59-10.64 18.51 18.51 0 00-11.69-6.5c-4.18-.55-8.37-.19-12.51-.22-.44 1.69-.55 30.14-.16 32.88a4.29 4.29 0 001 .22c3.55 0 7.11.1 10.66-.1a21 21 0 005.91-1.24 11.55 11.55 0 006.37-5.92c.26-.51.56-1 .84-1.49h.19c.48 1.5.57 18.77.06 21.22a6.2 6.2 0 01-.77-1.07c-2.28-5.88-6.54-9-12.88-9.22-3.55-.12-7.1-.11-10.66-.15a2.19 2.19 0 00-.58.19c-.44 1.83-.44 34.05 0 36.08h10.77a19.87 19.87 0 0012-3.91 40.22 40.22 0 0011.67-13l1.58-2.72m-143.78-1.94c.32 1.45-1 15.09-1.91 20-1.23.5-2.58 1.15-4 1.61a58.45 58.45 0 01-14.73 2.59c-6.1.35-12.18.34-18.13-1.31-14.13-3.9-23.26-12.78-26.67-27.1a42.09 42.09 0 011.61-25.32c4-10.43 11.58-17.27 22.1-20.89 7.32-2.52 14.89-2.83 22.55-2a53.83 53.83 0 0112.74 2.55c1.27.47 2.49 1.09 3.59 1.57.53 2.4.8 18.49.32 20.32-.45-.78-.77-1.37-1.11-2-2.09-3.55-4.07-7.16-6.3-10.61a24.36 24.36 0 00-6.43-6.69c-5.8-4-11.94-4.61-18.27-1.45-3.89 1.95-6.43 5.29-8.42 9.07a42.08 42.08 0 00-4.11 13.17 77.25 77.25 0 00-.46 21.15c.8 6.86 2.35 13.52 6.35 19.36a17.51 17.51 0 0011.3 7.79 16.09 16.09 0 009.77-1.18 35.27 35.27 0 0013.23-10.66c2.15-2.69 3.88-5.72 5.8-8.6.28-.42.52-.86.81-1.28.06-.09.24-.09.37-.14"
            fill={colorschema.letters}
          />
        </g>
      </g>
    </svg>
  )
}