import React from 'react'

const InvestigacionyDatos = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    accent = '#A01316',
    schema = 'common',
  } = props

  const colorschema = {
    letters: dark,
    isotypebackground: accent,
    isotypeletter: light,
    mode: 'normal',
  }

  if (schema === 'light') {
    colorschema.isotypebackground = accent
    colorschema.isotypeletter = light
    colorschema.letters = light
  }

  if (schema === 'white') {
    colorschema.isotypebackground = light
    colorschema.isotypeletter = dark
    colorschema.letters = light
    colorschema.mode = 'isocut'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1686.42 330.2"
      {...props}>
      <g>
        {colorschema.mode === 'isocut' ? (
          <g>
            <mask id="iso-mask-investigacionydatos">
              <path
                d="M0 12.85h283.29v271.96H0z"
                fill={colorschema.isotypebackground}
              />
              <path
                d="M33.92 62.76H61.2v149.18h78.07v24.23H33.92V62.76zm136.57 24.22h-51.51V62.76h130.31v24.22h-51.51v149.19h-27.29V86.98z"
                fill={colorschema.isotypeletter}
              />
            </mask>
            <path
              d="M0 12.85h283.29v271.96H0z"
              mask={
                colorschema.mode === 'isocut'
                  ? 'url(#iso-mask-investigacionydatos)'
                  : ''
              }
              fill={colorschema.isotypebackground}
            />
          </g>
        ) : (
          <g>
            <path
              d="M0 12.85h283.29v271.96H0z"
              fill={colorschema.isotypebackground}
            />
            <path
              d="M33.92 62.76H61.2v149.18h78.07v24.23H33.92V62.76zm136.57 24.22h-51.51V62.76h130.31v24.22h-51.51v149.19h-27.29V86.98z"
              fill={colorschema.isotypeletter}
            />
          </g>
        )}
        <path
          d="M0 12.85h283.29v271.96H0z"
          fill={colorschema.isotypebackground}
        />
        <path
          d="M33.92 62.76H61.2v149.18h78.07v24.23H33.92V62.76zm136.57 24.22h-51.51V62.76h130.31v24.22h-51.51v149.19h-27.29V86.98z"
          fill={colorschema.isotypeletter}
        />
        <path
          d="M353.09 115.28V99.9h25.61V28.18h-25.61V12.81h70.44v15.37h-25.62V99.9h25.62v15.38h-70.44zm144.09-14.73v14.72h-48v-14.72h15.37v-47.4h-15.4V38.42h34.58v13.45h3.84a23 23 0 019.61-11 26.59 26.59 0 0113.58-3.71q10.75 0 17.47 6.72T535 63.53v37h15.37v14.72h-34.62V66.6q0-6.91-3.27-10.37a11.37 11.37 0 00-8.65-3.46A18.71 18.71 0 00493 56.16a43.27 43.27 0 00-9.28 8.91v35.48zm132.56 14.73H605.4l-24.71-62.13h-11.15V38.42h43.04v14.73h-12.81l18.83 49.06 18.82-49.06h-13.31V38.42h41.5v14.73h-11.15l-24.72 62.13zm76.85-48.16v2.3h32v-1.66q0-9.35-3.84-13.45t-12.16-4.1q-8.34 0-12.17 4c-2.57 2.68-3.85 7-3.85 12.87M759 97.73q-4.37 10.36-12.49 14.59T723 116.56q-16.79 0-26.2-7.82t-9.41-22.29V67.12q0-14.48 9.6-22.22t25.75-7.75q16.14 0 25.62 7.81t9.47 22.67V80.7h-51.24v5.75q0 8.34 4.16 12.49c2.77 2.78 7.16 4.16 13.14 4.16q8.45 0 12.42-2.43a14.44 14.44 0 005.89-7.55zm62.87 18.57a75.69 75.69 0 01-20.17-2.74 49.79 49.79 0 01-17.62-8.74l5.76-12.62a47.25 47.25 0 0015.89 8.15 58.47 58.47 0 0016.39 2.51 29.77 29.77 0 0011.4-1.88c3-1.24 4.48-3.59 4.48-7a7.08 7.08 0 00-4.16-6.83q-4.15-2.06-14.66-3.35-15.9-1.7-24.18-6.5t-8.32-15.82q0-11.52 9.28-17.93t23.37-6.4a59.59 59.59 0 0117.62 2.74 57.84 57.84 0 0116.32 8L848.12 60a60.65 60.65 0 00-14.22-7 44.41 44.41 0 00-14.09-2.37 22.41 22.41 0 00-10.18 2 7 7 0 00-3.9 6.78 6.66 6.66 0 004.61 6.59q4.6 1.89 16 3.3 15.63 1.92 23.18 7.29T857.09 92q0 11.92-9.86 18.12t-25.36 6.22m105.02.22q-14.08 0-21.77-7t-7.68-20.23V53.16h-15.37V38.42h15.37V12.81h19.21v25.61h26.9v14.74h-26.9V87.7q0 7.32 3.46 10.72a12.36 12.36 0 009.09 3.41 31.93 31.93 0 006-.64 48.23 48.23 0 006.92-1.92l2.55 14.24a43.77 43.77 0 01-7.93 2.16 53.76 53.76 0 01-9.87.89m78.79-90.94a22 22 0 01-9.93-1.92Q992 21.78 992 17v-1.37q0-4.87 3.77-6.85a25.77 25.77 0 0119.86 0q3.78 2 3.78 6.85V17q0 4.74-3.84 6.66a22.07 22.07 0 01-9.87 1.92m-35.22 89.65v-14.68h25.62v-47.4h-25.66V38.42h44.83v62.13h25.62v14.72zm138.03-40.17q7.17 0 10.63-2.69c2.31-1.79 3.46-4.4 3.46-7.81v-4a8.78 8.78 0 00-3.52-7.49q-3.52-2.61-10.57-2.62t-10.63 2.62a8.86 8.86 0 00-3.45 7.49v4c0 3.41 1.12 6 3.39 7.81s5.83 2.69 10.69 2.69m-9.73 54.94h25a21.28 21.28 0 009-1.66c2.34-1.11 3.52-3.24 3.52-6.4s-1.13-5.3-3.4-6.41a19.26 19.26 0 00-8.51-1.66h-36.9v7.43a7.78 7.78 0 002.82 6.53q2.82 2.17 8.46 2.17m53.53-10q0 10.49-7.81 16.33t-20.75 5.82h-25q-14.1 0-21.91-4.93t-7.81-13.38a13.92 13.92 0 013.72-10.12 15.31 15.31 0 019.73-4.49v-2.53a16.83 16.83 0 01-7.68-4.1q-3.07-3-3.07-9.1a14.41 14.41 0 014.48-10.76q4.47-4.35 12.55-5.25v-2.43q-6.8-1.92-9.86-6a14.93 14.93 0 01-3.08-9.22V58q0-9.09 8.26-14.34t24.15-5.25h42.52v12.8l-20.5-2.68V51a14.22 14.22 0 0110.64 13.45v1.92q0 9-7.94 14.16t-24.72 5.18h-14a10 10 0 00-6 1.54c-1.41 1-2.12 2.77-2.12 5.24a5.9 5.9 0 002.44 5.26q2.44 1.67 7 1.66h29.07q12.56 0 20 5t7.49 15.63m60.16-16.67a36.22 36.22 0 0010.89-1.67 23.27 23.27 0 009.22-5.51V83.77h-22.54a12.57 12.57 0 00-7.56 2q-2.82 2-2.82 7.55c0 3.25 1 5.73 3.14 7.43s5.31 2.57 9.67 2.57m-3.84 13.19q-11.79 0-19.54-5.58t-7.74-16.58q0-10.5 6.91-16.2t18.83-5.7h25.49v-9.17q0-6-4-9.23t-11.66-3.2q-7.68 0-11.46 2.5t-6 10.18l-16.39-3.2q2.43-11.91 11-17.55t23.76-5.63q15.49 0 24.72 6t9.22 18.76v29.67q0 6.53 3.59 8.39t11.78.7v14.48q-10.38 2-17.55-.38c-4.78-1.62-7.72-5.52-8.83-11.66h-3.21q-3.45 5.88-11.4 9.67a40.24 40.24 0 01-17.54 3.78m119.9 0q-18.32 0-27.34-7.69t-9-21.77V67q0-15 9.73-22.42t26.52-7.42q16.9 0 25.54 7t10.06 20.62l-18.57 1.41c-.43-5.63-1.92-9.44-4.48-11.4s-6.66-3-12.3-3c-6 0-10.36 1.22-13.13 3.66s-4.16 6.3-4.16 11.59v19.42q0 8.19 4.16 11.78t13.39 3.59q8.83 0 12.42-2.44t4.1-9.35l18.57 1.41q-.9 12.43-9.15 18.76t-26.33 6.35m97.44-90.94a22 22 0 01-9.92-1.92q-3.78-1.92-3.78-6.66v-1.41q0-4.87 3.78-6.85a25.75 25.75 0 0119.85 0c2.51 1.32 3.78 3.6 3.78 6.85V17q0 4.74-3.84 6.66a22.1 22.1 0 01-9.87 1.92m-35.22 89.65v-14.68h25.62v-47.4h-25.62V38.42h44.83v62.13H1461v14.72zm117.97-89.61L1524 0h25.62l-26.9 25.62zm15.88 76.21q8.44 0 12.23-3.59t3.78-11.78V67q0-7.56-3.78-11.33t-12.23-3.79q-8.34 0-12.17 3.79c-2.56 2.51-3.84 6.34-3.84 11.46v19.33q0 8.19 3.84 11.78t12.17 3.59m0 14.73q-15.24 0-25.23-7.31t-10-22.15V67q0-15 10.06-22.42t25.29-7.42q15.26 0 25.17 7.42t9.93 22.42v20.1q0 14.85-10 22.15t-25.23 7.31m108.88-16.01v14.72h-48v-14.72h15.37v-47.4h-15.37V38.42h34.58v13.45h3.84a22.94 22.94 0 019.61-11 26.59 26.59 0 0113.58-3.71q10.76 0 17.47 6.72t6.73 19.66v37h15.37v14.72h-34.58V66.6q0-6.91-3.26-10.37a11.4 11.4 0 00-8.65-3.46 18.65 18.65 0 00-10.82 3.39 43.31 43.31 0 00-9.29 8.91v35.48zM372.17 310.86c-2.4 0-4.91-.13-7.56-.39s-5.42-.6-8.33-1l1.8-14.73c2.9.6 5.57 1 8 1.35a55.27 55.27 0 006.46.44c4.87 0 8.58-1.1 11.14-3.33s4.79-5.76 6.67-10.63l1.28-3.2h-11.52l-22.29-57.12h-11.14v-14.76h42.52v14.74h-12.93l18.57 48.66 18.83-48.66h-12.81v-14.74h41.88v14.74h-11.4l-25.87 64q-5 12.3-12.81 18.44t-20.49 6.15M573.39 269h17.93q14.34 0 20.62-5.75c4.18-3.83 6.27-9.51 6.27-17v-25.86q0-11.5-6.27-17.33t-20.62-5.81h-17.93zm-34.59 15.35V269h15.38v-71.75H538.8v-15.37h53.93q21 0 32.85 10.18t11.85 27.09v28.44q0 16.77-11.91 26.77t-32.92 10zm158.57-11.92a36.1 36.1 0 0010.88-1.66 23.23 23.23 0 009.23-5.51v-12.42h-22.55a12.58 12.58 0 00-7.55 2q-2.82 2.06-2.82 7.56c0 3.25 1 5.73 3.14 7.43s5.31 2.56 9.67 2.56m-3.84 13.2q-11.79 0-19.54-5.58t-7.75-16.58q0-10.5 6.92-16.2t18.84-5.67h25.49v-9.22q0-6-4-9.22t-11.66-3.2q-7.68 0-11.46 2.5t-6 10.18L668 229.4q2.43-11.91 11-17.55t23.76-5.63q15.5 0 24.71 6t9.22 18.75v29.72q0 6.53 3.6 8.39t11.78.7v14.48q-10.38 2-17.55-.39t-8.83-11.65h-3.21q-3.45 5.88-11.4 9.67a40.27 40.27 0 01-17.54 3.78m119.36-.04q-14.08 0-21.77-7.05t-7.69-20.24v-36.11h-15.36V207.5h15.36v-25.62h19.22v25.62h26.89v14.73h-26.89v34.54q0 7.32 3.45 10.72a12.37 12.37 0 009.1 3.41 32 32 0 006-.64 46.6 46.6 0 006.91-1.93l2.56 14.25a43.67 43.67 0 01-7.94 2.16 53.65 53.65 0 01-9.86.89m78.79-14.73q8.45 0 12.24-3.59t3.77-11.78v-19.47q0-7.56-3.77-11.34T891.67 221q-8.32 0-12.17 3.77c-2.55 2.52-3.84 6.35-3.84 11.47v19.34c0 5.46 1.29 9.38 3.84 11.78s6.62 3.59 12.17 3.59m0 14.73q-15.25 0-25.23-7.3t-10-22.17v-20.1q0-15 10-22.42t25.3-7.42q15.24 0 25.16 7.42t9.93 22.42v20.1q0 14.86-10 22.17t-25.23 7.3m99.33-.31a75.62 75.62 0 01-20.16-2.74 49.88 49.88 0 01-17.62-8.74l5.76-12.62a47.44 47.44 0 0015.89 8.15 58.44 58.44 0 0016.39 2.5 29.78 29.78 0 0011.4-1.87c3-1.24 4.48-3.59 4.48-7a7.07 7.07 0 00-4.16-6.83q-4.15-2.07-14.67-3.35-15.88-1.67-24.2-6.47t-8.32-15.82q0-11.53 9.28-17.93t23.37-6.4A59.47 59.47 0 011006 209a57.74 57.74 0 0116.33 8l-5.14 12a60.26 60.26 0 00-14.22-7 44.43 44.43 0 00-14.09-2.38 22.4 22.4 0 00-10.18 2 7 7 0 00-3.9 6.77 6.68 6.68 0 004.6 6.64q4.62 1.89 16 3.29 15.63 1.92 23.18 7.3t7.55 15.37q0 11.93-9.86 18.12t-25.36 6.22m51.4-123.69h25.62v168.55h-25.62z"
          fill={colorschema.letters}
        />
      </g>
    </svg>
  )
}

export { InvestigacionyDatos }
