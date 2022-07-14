import React from 'react'

const LaTerceraDomingoSmall = props => {
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
      viewBox="0 0 1329.67 184.47"
      {...props}
    >
      <g>
        {colorschema.mode === 'isocut' ? (
          <g>
            <mask id="iso-mask-domingo">
              <path
                fill={colorschema.isotypebackground}
                d="M0 0h192.84v184.47H0z"
              />
              <path
                fill={colorschema.isotypeletter}
                d="M23.51 33.54h18.48v101.02h52.85v16.39H23.51V33.54M115.98 49.94H81.1v-16.4h88.24v16.4h-34.88v101.01h-18.48V49.94"
              />
            </mask>
            <path
              fill={colorschema.isotypebackground}
              mask={
                colorschema.mode === 'isocut' ? 'url(#iso-mask-domingo)' : ''
              }
              d="M0 0h192.84v184.47H0z"
            />
          </g>
        ) : (
          <g>
            <path
              fill={colorschema.isotypebackground}
              d="M0 0h192.84v184.47H0z"
            />
            <path
              fill={colorschema.isotypeletter}
              d="M23.51 33.54h18.48v101.02h52.85v16.39H23.51V33.54M115.98 49.94H81.1v-16.4h88.24v16.4h-34.88v101.01h-18.48V49.94"
            />
          </g>
        )}

        <path
          fill={colorschema.altletters}
          d="M243.58 10.35h46.11c53.74 0 89.48 33.54 89.48 83.82S343.69 178 289.69 178h-46.11zM288 155.05c43.64 0 64.11-25.13 64.11-60.88s-20.52-60.9-64.11-60.9h-18.28v121.78zM391.48 94.17c0-50 38.47-86 86.54-86 47.82 0 86.27 36 86.27 86s-38.45 86-86.27 86c-48.02.03-86.54-35.96-86.54-86zm146.19 0c0-35.75-24.65-62.63-59.65-62.63S418.1 58.42 418.1 94.17s24.9 62.62 59.9 62.62 59.67-26.87 59.67-62.62zM584.5 8.62h2.71l80.1 93.68L746.7 8.62h2.73V178h-24.91V91c0-9.37 1-24.15 1-24.15s-8.12 12.56-15 20.2L668.3 137.8h-2.94L623.19 87c-6.39-7.64-14.77-20.2-14.77-20.2s1 14.78 1 24.15v87H584.5zM778.25 10.35h25.88V178h-25.88zM870.94 80.12c-6.66-7.16-15.79-18.73-15.79-18.73a235.79 235.79 0 011.74 24.16V178h-24.18V8.62h3.46L928.63 108c6.39 6.91 15.51 18.73 15.51 18.73s-1.72-14.78-1.72-24.15V10.35h24.16v169.36h-3.2zM986.78 94.17c0-50 36.25-85.79 86-85.79 25.63 0 45.85 7.15 59.42 22.44l-17.5 17.51c-9.62-10.12-22-16.53-41.92-16.53-35 0-59.41 26.62-59.41 62.37s24.65 62.62 62.62 62.62c17.25 0 32-4.44 41.41-10.85v-29.58h-45.1V93.43h69v65.33c-10.86 9.85-34 21.44-65.33 21.44-52.22 0-89.19-35.99-89.19-86.03zM1156.87 94.17c0-50 38.44-86 86.52-86 47.83 0 86.28 36 86.28 86s-38.45 86-86.28 86c-48.08.03-86.52-35.96-86.52-86zm146.18 0c0-35.75-24.65-62.63-59.66-62.63s-59.9 26.88-59.9 62.63 24.88 62.62 59.9 62.62 59.66-26.87 59.66-62.62z"
        />
      </g>
    </svg>
  )
}

export default LaTerceraDomingoSmall
