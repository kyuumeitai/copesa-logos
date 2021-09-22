import React from 'react'

const LaTerceraSabadoSmall = props => {
  const {
    dark = '#000000',
    light = '#fff',
    red = '#A01316',
    schema = 'common',
  } = props

  const colorschema = {
    isotypebackground: red,
    isotypeletter: light,
    letters: red,
    altletters: dark,
    mode: 'normal',
  }

  if (schema === 'light') {
    colorschema.isotypebackground = red
    colorschema.isotypeletter = light
    colorschema.letters = light
    colorschema.altletters = light
  }

  if (schema === 'white') {
    colorschema.isotypebackground = light
    colorschema.isotypeletter = dark
    colorschema.letters = light
    colorschema.altletters = light
    colorschema.mode = 'isocut'
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1127.8 197.64"
      {...props}>
      <g>
        {colorschema.mode === 'isocut' ? (
          <g>
            <mask id="iso-mask-sabado">
              <path
                fill={colorschema.isotypebackground}
                d="M0 13.17h192.84v184.47H0z"
              />
              <path
                fill={colorschema.isotypeletter}
                d="M23.51 46.71h18.48v101.02h52.85v16.39H23.51V46.71M115.98 63.11H81.1v-16.4h88.24v16.4h-34.88v101.01h-18.48V63.11"
              />
            </mask>
            <path
              fill={colorschema.isotypebackground}
              mask={
                colorschema.mode === 'isocut' ? 'url(#iso-mask-sabado)' : ''
              }
              d="M0 13.17h192.84v184.47H0z"
            />
          </g>
        ) : (
          <g>
            <path
              fill={colorschema.isotypebackground}
              mask={colorschema.mode === 'isocut' ? 'url(#iso-mask)' : ''}
              d="M0 13.17h192.84v184.47H0z"
            />
            <path
              fill={colorschema.isotypeletter}
              d="M23.51 46.71h18.48v101.02h52.85v16.39H23.51V46.71M115.98 63.11H81.1v-16.4h88.24v16.4h-34.88v101.01h-18.48V63.11"
            />
          </g>
        )}

        <g fill={colorschema.altletters}>
          <path d="M240.93 155.13l21.33-11.77c7.84 13 17.89 23.29 38.24 23.29 16.91 0 28.92-9.07 28.92-22.8 0-14.47-9.8-20.83-27.94-28.92l-11-4.91c-24.27-10.78-39-23-39-48.78 0-24.76 19.12-42.41 46.82-42.41 22.07 0 37 8.33 47.07 26.23L325 57.56c-6.37-11-13.73-16.18-26.72-16.18-13.24 0-21.57 8.1-21.57 19.37 0 12.5 7.11 18.14 24 25.49l10.79 4.91c28.43 12.5 43.64 25.74 43.64 52.46 0 29.17-22.8 46.08-54.18 46.08-31.63 0-50.75-15.68-60.06-34.56M460.08 142.13l-20.84-52c-4.17-9.8-8.34-24.75-8.34-24.75s-3.92 15-8.09 24.75l-20.83 52zM429.92 19.07h2.94l73.05 168.42H479L469.39 164h-76.24l-9.56 23.54h-25zM585.33 164.69c20.1 0 29.66-11.77 29.66-28.44s-10.29-28.43-30.88-28.43h-36.28v56.87zm-4.17-78.94c15.45 0 22.81-8.58 22.81-21.08s-7.11-21.08-23.3-21.08h-32.84v42.16zm-59.32-65h60.55c31.13 0 47.07 18.88 47.07 41.92 0 15.94-8.09 27.21-22.56 32.11C629.22 100 641 115.9 641 137.23c0 28.68-19.12 50.26-54.17 50.26h-65zM745.89 142.13l-20.83-52c-4.17-9.8-8.34-24.75-8.34-24.75s-3.92 15-8.09 24.75l-20.83 52zM715.74 19.07h2.94l73.05 168.42h-27L755.2 164H679l-9.56 23.54h-25zM851.78 164.69c43.39 0 63.74-25 63.74-60.56s-20.35-60.54-63.74-60.54h-18.14v121.1zm-44.12-143.9h45.84c53.44 0 89 33.34 89 83.34s-35.31 83.36-89 83.36h-45.84zM1101.33 104.14c0-35.55-24.52-62.27-59.33-62.27s-59.57 26.72-59.57 62.27 24.76 62.27 59.57 62.27 59.33-26.73 59.33-62.27m-145.37 0c0-49.77 38.24-85.55 86-85.55 47.56 0 85.8 35.78 85.8 85.55s-38.24 85.55-85.8 85.55c-47.8 0-86-35.79-86-85.55" />
          <path d="M427.05 0h17.27l-14.59 20.82h-11.61L427.05 0z" />
        </g>
      </g>
    </svg>
  )
}

export default LaTerceraSabadoSmall
