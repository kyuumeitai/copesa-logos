import React from 'react'

export const Elecciones2021 = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    red = '#aa202c',
    schema = 'common',
  } = props

  const colorschema = {
    isotypebackground: red,
    isotypeletter: light,
    letters: dark,
  }

  if (schema === 'light') {
    colorschema.isotypebackground = red
    colorschema.isotypeletter = light
    colorschema.letters = light
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 439.64 142.81"
      {...props}
    >
      <defs>
        <style>{`.logo-elecciones-2021_svg__cls-2{fill: ${colorschema.isotypeletter}}`}</style>
      </defs>
      <g id="logo-elecciones-2021_svg__Layer_2" data-name="Layer 2">
        <g id="logo-elecciones-2021_svg__logosfondo">
          <path
            fill={colorschema.letters}
            d="M321.37 96.05c-10.83 0-15.71-5.42-15.71-12.47l.54-.54h6.5l.54.54c0 3.79 2.17 6 8.68 6 4.87 0 7.58-1.62 7.58-4.88 0-3.79-2.16-4.87-9.75-6s-13.55-3.79-13.55-11.38c0-5.42 4.34-10.3 14.63-10.3s14.64 4.88 14.64 11.38l-.55.55h-6.5l-.54-.55c0-3.25-1.63-4.87-7.59-4.87-4.88 0-6.5 1.62-6.5 3.79 0 3.25 2.16 4.34 9.75 5.42s13.55 4.34 13.55 11.92c0 6-4.33 11.39-15.72 11.39M313.79 140.59h-25.47l-.55-.55v-6l.55-1.08 9.75-8.13c6.51-5.42 7.59-7.59 7.59-10.84s-1.63-5.42-4.88-5.42c-4.33 0-5.42 2.17-5.42 5.42l-.54.54h-6.5l-.55-.54c0-6 3.26-11.92 13-11.92 8.13 0 12.47 5.42 12.47 11.38s-2.71 9.21-9.22 14.63l-6.5 5.42v.54h16.26l.54.54V140zM327.34 140.59l-.54-.55V112.4h-.55l-4.33 4.34h-2.71l-.54-.54v-5.42l7.58-7.59 1.09-.54h6.5l.54.54v36.85l-.54.55h-6.5zM26.02 95.5H.54L0 94.96V58.11l.54-.55h25.48l.54.55v5.42l-.54.54H8.13l-.54.54v7.59l.54.54h16.8l.54.54v5.42l-.54.54H8.13l-.54.55v8.67l.54.54h17.89l.54.54v5.42l-.54.54zM59.07 95.5H34.69l-.55-.54V58.11l.55-.55h6.5l.54.55v30.35l.54.54h16.8l.55.54v5.42l-.55.54zM90.51 95.5H65.03l-.54-.54V58.11l.54-.55h25.48l.54.55v5.42l-.54.54H72.62l-.54.54v7.59l.54.54h16.8l.54.54v5.42l-.54.54h-16.8l-.54.55v8.67l.54.54h17.89l.54.54v5.42l-.54.54zM123 84.12l.55-.54h6.5l.54.54c-1.08 7.59-7 11.93-15.72 11.93-11.92 0-18.42-8.13-18.42-19.52S103 57 114.89 57c8.68 0 14.64 4.34 15.72 11.38l-.54.55h-6.5l-.57-.53q-1.62-4.87-8.13-4.87c-7.58 0-10.84 5.42-10.84 13s3.26 13 10.84 13c4.34 0 7-1.62 8.13-5.42M161.5 84.12l.54-.54h6.51l.54.54C168 91.71 162 96.05 153.37 96.05c-11.92 0-18.43-8.13-18.43-19.52S141.45 57 153.37 57c8.63 0 14.63 4.36 15.72 11.4l-.54.55H162l-.54-.55q-1.62-4.87-8.13-4.87c-7.59 0-10.84 5.42-10.84 13s3.25 13 10.84 13c4.34 0 7-1.62 8.13-5.42M182.64 95.5h-6.51l-.54-.54V58.11l.54-.55h6.51l.54.55v36.85l-.54.54zM208.11 96.05c-11.38 0-18.43-8.13-18.43-19.52S196.73 57 208.11 57s18.43 8.13 18.43 19.51-7 19.52-18.43 19.52m0-32.52c-7.05 0-10.84 5.42-10.84 13s3.79 13 10.84 13S219 84.12 219 76.53s-3.8-13-10.84-13M233.58 57.56h7.59l1.08.55 14.63 24.93h.55V58.11l.54-.55h6.5l.54.55v36.85l-.54.54h-7.59l-1.08-.54-14.63-24.93h-.55v24.93l-.54.54h-6.5l-.54-.54V58.11l.54-.55zM299.7 95.5h-25.47l-.55-.54V58.11l.55-.55h25.47l.54.55v5.42l-.54.54h-17.89l-.54.54v7.59l.54.54h16.8l.55.54v5.42l-.55.54h-16.8l-.54.55v8.67l.54.54h17.89l.54.54v5.42l-.54.54zM251.46 140.59H226l-.54-.55v-6L226 133l9.76-8.13c6.5-5.42 7.58-7.59 7.58-10.84s-1.62-5.42-4.87-5.42c-4.34 0-5.42 2.17-5.42 5.42l-.54.54H226l-.54-.54c0-6 3.25-11.92 13-11.92 8.13 0 12.46 5.42 12.46 11.38s-2.71 9.21-9.21 14.63l-6.51 5.42v.54h16.26l.55.54V140zM269.89 102.11c8.13 0 14.09 5.42 14.09 19.51s-6 19.51-14.09 19.51-14.09-5.42-14.09-19.51 6-19.51 14.09-19.51m0 32.51c4.34 0 6.5-3.25 6.5-13s-2.16-13-6.5-13-6.5 3.25-6.5 13 2.16 13 6.5 13"
          />
          <path
            fill={colorschema.isotypebackground}
            d="M353.64 60.55h86v82.26h-86z"
          />
          <path
            className="logo-elecciones-2021_svg__cls-2"
            d="M364.13 75.5h8.24v45.05h23.57v7.31h-31.81V75.5zM405.36 82.82h-15.55V75.5h39.35v7.32H413.6v45.04h-8.24V82.82z"
          />
          <path
            d="M419.14 41.15l-1.61-3.33a12.15 12.15 0 005.92-16.15l-.78-1.67 9.53-4.45 1.57 3.35-6.29 2.93a15.82 15.82 0 01-8.34 19.32z"
            fill="#7248bb"
          />
          <path
            d="M385.42 34.81l-3.65-.56c1.61-10.54 7.93-18.67 18.28-23.51 7.69-3.6 23-10.74 23-10.74l1.56 3.35-23 10.73c-9.31 4.36-14.76 11.33-16.19 20.73z"
            fill="#2e74e5"
          />
          <path
            transform="rotate(-25 418.425 42.008)"
            fill="#07aa96"
            d="M416.59 30.9h3.69v22.19h-3.69z"
          />
          <path
            fill="#e5331c"
            d="M364.14 54.59l-4.6-9.86 36.93-17.22 1.56 3.34-33.58 15.66 3.04 6.52-3.35 1.56z"
          />
          <path
            d="M396.79 48.44a5.75 5.75 0 01-1.94-.34 5.69 5.69 0 01-3.39-7.29l6.21-17.08 3.48 1.27-6.22 17.09a2 2 0 003.74 1.36l4.71-12.95 1.74.63a8.92 8.92 0 0011.42-5.33l.45-1.24 3.48 1.26-.47 1.24a12.62 12.62 0 01-14.37 8l-3.5 9.6a5.69 5.69 0 01-5.34 3.78z"
            fill="#f87d03"
          />
          <path
            fill={colorschema.letters}
            d="M355.83 51.96h81.84v3.69h-81.84z"
          />
        </g>
      </g>
    </svg>
  )
}
