import React from 'react'

const LaTerceraSabado = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    red = '#A01316',
    schema = 'common',
  } = props

  const colorschema = {
    isotypebackground: red,
    isotypeletter: light,
    letters: red,
    altletters: dark,
  }

  if (schema === 'light') {
    colorschema.isotypebackground = red
    colorschema.isotypeletter = light
    colorschema.letters = light
    colorschema.altletters = red
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2350.8 197.64"
      {...props}
    >
      <g>
        <g fill={colorschema.letters}>
          <path d="M523.67 43.46H474V20.09h125.77v23.37h-49.75v144.03h-26.35V43.46z" />
          <g>
            <path d="M784.22 124.93c32.17 0 45.2-15.24 45.2-40.86 0-25.31-13.26-40.6-45.2-40.6h-15.61v81.46zM857 187.49h-31.27l-28.56-40.68a83.44 83.44 0 01-12 .76h-16.56v39.92h-26.32V20.08h42.84c46 0 71.37 25.34 71.37 64 0 25.85-11.5 45.8-33.5 55.92zM867.33 103.78c0-49.47 37.67-85.91 85.43-85.91 31 0 52.44 12.05 67 32.48l-20.21 14.29c-11.14-15-25.37-22.93-47.52-22.93-33.26 0-57.39 26.61-57.39 62.07 0 36.21 24.69 62.05 58.34 62.05 21.7 0 37.7-8.17 50.26-24.43l20.45 14.08c-17.24 22.9-39.16 34.21-71.66 34.21-47.78 0-84.7-36.47-84.7-85.91M1204.57 124.93c32.27 0 45.29-15.24 45.29-40.86 0-25.31-13.33-40.6-45.29-40.6h-15.38v81.46zm72.93 62.56h-31.31l-28.59-40.68a83.39 83.39 0 01-12 .76h-16.4v39.92h-26.43V20.08h42.83c46 0 71.41 25.34 71.41 64 0 25.86-11.58 45.81-33.52 55.92z" />
          </g>
          <path d="M1356.75 74.46l-27.87 66.23h55.19zm-47.34 113h-26.58l73.37-170.81h1.5l73.59 170.84h-27.77l-9.63-23.39h-74.83zM1146.97 164.1h-82.68v-28.34h71.09v-22.89h-71.09V43.45h82.68V20.08h-109.01v167.41h109.01V164.1zM642.59 135.78h71.15v-22.91h-71.15V43.46h83.58V20.09H616.28v167.4h110.05v-23.38h-83.74v-28.33zM243.52 20.18h26.31v143.98h75.6v23.4H243.52V20.18z" />
          <path d="M400.44 74.57l-27.79 66.19h55.1zm-47.27 113h-26.62l73.38-170.85h1.55L475 187.56h-27.8l-9.56-23.4h-74.91z" />
        </g>
        <g fill={colorschema.altletters}>
          <path d="M1463.93 155.13l21.33-11.77c7.84 13 17.89 23.29 38.24 23.29 16.91 0 28.92-9.07 28.92-22.8 0-14.47-9.8-20.83-27.94-28.92l-11-4.91c-24.27-10.78-39-23-39-48.78 0-24.76 19.12-42.41 46.82-42.41 22.07 0 37 8.33 47.07 26.23L1548 57.56c-6.37-11-13.73-16.18-26.72-16.18-13.24 0-21.57 8.1-21.57 19.37 0 12.5 7.11 18.14 24 25.49l10.79 4.91c28.43 12.5 43.64 25.74 43.64 52.46 0 29.17-22.8 46.08-54.18 46.08-31.63 0-50.75-15.68-60.06-34.56M1683.08 142.13l-20.84-52c-4.17-9.8-8.34-24.75-8.34-24.75s-3.92 15-8.09 24.75l-20.83 52zm-30.16-123.06h2.94l73.05 168.42h-27l-9.52-23.49h-76.24l-9.56 23.54h-25zM1808.33 164.69c20.1 0 29.66-11.77 29.66-28.44s-10.29-28.43-30.88-28.43h-36.28v56.87zm-4.17-78.94c15.45 0 22.81-8.58 22.81-21.08s-7.11-21.08-23.3-21.08h-32.84v42.16zm-59.32-65h60.55c31.13 0 47.07 18.88 47.07 41.92 0 15.94-8.09 27.21-22.56 32.11 22.32 5.22 34.1 21.12 34.1 42.45 0 28.68-19.12 50.26-54.17 50.26h-65zM1968.89 142.13l-20.83-52c-4.17-9.8-8.34-24.75-8.34-24.75s-3.92 15-8.09 24.75l-20.83 52zm-30.15-123.06h2.94l73 168.42h-27L1978.2 164H1902l-9.56 23.54h-25zM2074.78 164.69c43.39 0 63.74-25 63.74-60.56s-20.35-60.54-63.74-60.54h-18.14v121.1zm-44.12-143.9h45.84c53.44 0 89 33.34 89 83.34s-35.31 83.36-89 83.36h-45.84zM2324.33 104.14c0-35.55-24.52-62.27-59.33-62.27s-59.57 26.72-59.57 62.27 24.76 62.27 59.57 62.27 59.33-26.73 59.33-62.27m-145.37 0c0-49.77 38.24-85.55 86-85.55 47.56 0 85.8 35.78 85.8 85.55s-38.24 85.55-85.8 85.55c-47.8 0-86-35.79-86-85.55" />
          <path d="M1661.05 0h17.27l-14.59 20.82h-11.61L1661.05 0z" />
          <path
            fill={colorschema.isotypebackground}
            d="M0 13.17h192.84v184.47H0z"
          />
        </g>
        <path
          fill={colorschema.isotypeletter}
          d="M23.51 46.71h18.48v101.02h52.85v16.39H23.51V46.71M115.98 63.11H81.1v-16.4h88.24v16.4h-34.88v101.01h-18.48V63.11"
        />
      </g>
    </svg>
  )
}

export default LaTerceraSabado
