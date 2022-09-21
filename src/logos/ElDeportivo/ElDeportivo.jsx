import React from 'react'

export const ElDeportivo = props => {
  const {
    dark = '#000000',
    light = '#ffffff',
    red = '#A01316',
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
      viewBox="0 0 873.38 167.32"
      {...props}
    >
      <g data-name="Layer 2">
        <g data-name="Capa 1">
          <path
            fill={colorschema.isotypebackground}
            d="M0 45.85h69.85v67.06H0z"
          />
          <path
            fill="#fff"
            d="M8.36 58.16h6.73v36.78h19.25v5.98H8.36V58.16zM42.03 64.13H29.34v-5.97h32.13v5.97H48.76v36.79h-6.73V64.13z"
          />
          <g fill={colorschema.isotypebackground}>
            <path d="M16.48 118.4h-2.92v-1.38h7.39v1.38h-2.93v8.47h-1.54v-8.47zM36.08 126.87h-1.84l-1.68-2.39a5.33 5.33 0 01-.71 0h-1v2.35h-1.52V117h2.52c2.71 0 4.2 1.49 4.2 3.77a3.37 3.37 0 01-2 3.28zm-4.28-3.68c1.89 0 2.66-.9 2.66-2.4s-.78-2.39-2.66-2.39h-.92v4.79zM36.69 122a5 5 0 015-5.06 4.52 4.52 0 013.94 1.92l-1.19.83a3.17 3.17 0 00-2.79-1.34 3.66 3.66 0 000 7.3 3.52 3.52 0 003-1.44l1.2.82a4.84 4.84 0 01-4.21 2 4.9 4.9 0 01-5-5M60.8 126.87H59l-1.68-2.39a5.18 5.18 0 01-.7 0h-1v2.35h-1.56V117h2.52c2.71 0 4.2 1.49 4.2 3.77a3.39 3.39 0 01-2 3.28zm-4.29-3.68c1.91 0 2.67-.9 2.67-2.4s-.79-2.39-2.67-2.39h-.9v4.79zM62.68 126.87h-1.56l4.31-10.05h.09l4.33 10.05h-1.63l-.57-1.38h-4.4zm2.78-6.65l-1.63 3.9h3.24zM53.13 125.49h-4.86v-1.66h4.18v-1.35h-4.18v-4.08h4.86v-1.38h-6.41v9.85h6.41v-1.38zM23.47 123.83h4.18v-1.35h-4.18v-4.08h4.92v-1.38h-6.47v9.85h6.47v-1.38h-4.92v-1.66zM0 117.03h1.55v8.47H6v1.37H0v-9.84z" />
            <path d="M6.45 126.87H4.88l4.32-10h.09l4.32 10H12l-.56-1.37H7zm2.78-6.64l-1.64 3.89h3.24z" />
          </g>
          <g fill={colorschema.letters}>
            <path d="M125.42 107.29a35.31 35.31 0 0020.39-6.48l14.67 15.82c-7.81 6.85-17.72 12-34.68 12-29 0-47.64-17.53-47.64-42.5C78.16 61.55 97.79 44 122.94 44c29.16 0 45 21.73 43.07 50.12h-61.55c2.47 8.4 9.33 13.17 20.96 13.17zm14.67-28c-1.14-9-6.86-14.29-17-14.29s-17 4.58-19 14.29zM169.82 3.93h25.54v123h-25.54zM199.17 86.13c0-25 16.77-42.11 36.39-42.11 13 0 20.2 5.15 25.35 13.15V3.93h25.72v123h-25.72l.57-11.81c-4.57 8.57-13.15 13.53-25.54 13.53-19.81-.02-36.77-17.55-36.77-42.52zm62.5 0c0-12-7.24-19.43-18.29-19.43-10.87 0-17.73 7.43-17.73 19.43 0 12.77 6.86 20 17.73 20 11.05.01 18.29-7.23 18.29-20zM336.94 107.29a35.29 35.29 0 0020.39-6.48L372 116.63c-7.82 6.85-17.72 12-34.69 12-29 0-47.64-17.53-47.64-42.5 0-24.58 19.63-42.11 44.78-42.11 29.16 0 45 21.73 43.07 50.12H316c2.46 8.38 9.32 13.15 20.94 13.15zm14.68-28c-1.15-9-6.87-14.29-17-14.29s-16.95 4.58-19 14.29zM380.77 45.74h25.73l-.57 12.57C410.88 49.55 419.45 44 432 44c19.62 0 36.2 17.15 36.2 42.11s-17 42.5-36.78 42.5c-12.38 0-20.77-5.15-25-12.58v51.27h-25.65zm61 40.39c0-12-6.86-19.43-17.72-19.43-11 0-18.29 7.43-18.29 19.43 0 12.77 7.24 20 18.29 20 10.84.01 17.7-7.23 17.7-20zM468.62 86.52c0-24.78 19.63-42.5 44.79-42.5S558 61.74 558 86.52c0 24.58-19.44 42.11-44.59 42.11s-44.79-17.53-44.79-42.11zm63.08 0c0-12.2-6.86-20.4-18.29-20.4s-18.49 8.2-18.49 20.4c0 12 7.05 20.39 18.49 20.39s18.29-8.39 18.29-20.39zM561.05 45.74h25.72l-.38 14.67C592.3 47.07 601.83 44 610.21 44a26 26 0 0112.58 3.24L614.6 70.7a22.36 22.36 0 00-9.91-2.48c-11.63 0-17.92 5.34-17.92 22.68v36h-25.72z" />
            <path d="M629.27 96.43V67.08h-12V45.74h12V3.43h25.54v42.31h20.77v21.34h-20.77v30.11c0 8.19 2.66 9.91 6.67 9.91 4.19 0 7.23-2.29 8.95-3.44l9.72 17.92c-4 3.24-10.86 7.43-22.68 7.43-16.39-.01-28.2-8.19-28.2-32.58z" />
            <path d="M676.53 16c0-9.34 7.62-16 16.39-16a15.91 15.91 0 0116.2 16 16.3 16.3 0 01-32.59 0zM680 45.74h25.73v81.17H680z" />
            <path d="M704.16 45.74h28.4L744 69.94c3.81 8.19 6.67 21.53 6.67 21.53s2.67-13.34 6.29-21.53l11-24.2h26.11l-43.45 82.89h-2.48zM784 86.52C784 61.74 803.64 44 828.79 44s44.59 17.72 44.59 42.5c0 24.58-19.44 42.11-44.59 42.11S784 111.1 784 86.52zm63.07 0c0-12.2-6.85-20.4-18.29-20.4s-18.48 8.2-18.48 20.4c0 12 7.05 20.39 18.48 20.39s18.3-8.39 18.3-20.39z" />
          </g>
        </g>
      </g>
    </svg>
  )
}