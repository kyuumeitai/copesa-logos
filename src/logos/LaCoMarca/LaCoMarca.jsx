import React from 'react'

export const LaCoMarca = props => {
  const {
    light = '#ffffff',
    red = '#a9212f',
    schema = 'common',
    claim = false,
  } = props

  const colorschema = {
    letters: red,
  }

  if (schema === 'light') {
    colorschema.letters = light
  }

  return (
    <svg viewBox="0 0 735.77 125.23" {...props}>
      <g id="lacomarca" fill={colorschema.letters}>
        <g id="main">
          <path d="M13.45,11.33C13.45,5,12,5,0,4.25V1.42H34.69V4.25C22.66,5,21.24,5,21.24,11.33v85h26.2C58.91,96.29,65.14,92,68,77.88H70.8l-1.42,22.66H0V97.71C12,97,13.45,97,13.45,90.63Z" />
          <path d="M124.61,90.63c0,3.54,2,5,5,5,2.54,0,5.66-1.27,9.2-3.54l.71,2.13c-4.67,3.39-11.75,7.78-16.57,7.78-5.38,0-6.09-3.82-6.09-8.49V90.63h-.28C108.61,97.42,101.25,102,92.75,102c-11,0-16.28-7.08-16.28-15.57,0-8.78,6.08-18.69,40.35-21.95V51c0-12.75-5.95-18.41-15.57-18.41-9.35,0-15.58,5.24-15.58,9.91,0,3.4,3.54,3.54,3.54,7.08,0,2.41-2.12,4.25-5.24,4.25-2.83,0-5.38-1.7-5.38-5.67,0-6.08,8.5-19.82,26.9-19.82,13.46,0,19.12,8.5,19.12,20.53Zm-7.79-23.37C91.76,70.38,84.25,75.76,84.25,85c0,7.22,5,11.33,11.33,11.33,7.22,0,14.44-4.11,21.24-8.5Z" />
          <path d="M204.61,74.34h2.84l-2.13,19.12A57.88,57.88,0,0,1,174.88,102c-25.63,0-46-21.24-46-51s20.39-51,46-51a57.87,57.87,0,0,1,30.44,8.5l1.42,19.11h-2.83c-2.84-12.74-12-23.36-29-23.36-21,0-37.53,19.11-37.53,46.73s16.57,46.73,37.53,46.73C194.7,97.71,201.78,85.67,204.61,74.34Z" />
          <path d="M209.57,65.14c0-20.54,12.75-36.82,32.57-36.82s32.57,16.28,32.57,36.82S262,102,242.14,102,209.57,85.67,209.57,65.14Zm8.5,0c0,21.24,9.2,33.27,24.07,33.27s24.08-12,24.08-33.27S257,31.86,242.14,31.86,218.07,43.9,218.07,65.14Z" />
          <path d="M353.3,21.81,327,101.25H314.5L286.89,22.09V90.2c0,4.67,1,5.1,12.74,5.81v4.53H267.21V96c11.18-.71,12.17-1.14,12.17-5.81V11.75c0-4.67-1-5.09-12.17-5.8V1.42h33.56l26.62,73.91L351.6,1.42h31V6C374,6.66,373,7.08,373,11.75V90.2c0,4.67,1,5.1,9.63,5.81v4.53H342.82V96c8.64-.71,9.63-1.14,9.63-5.81Z" />
          <path d="M471.26,88.93c1.7,4.81,3.11,5.94,10.19,7.08v4.53H440.67V96c8.5-1,10.9-2.27,8.36-8.93L442.79,70H410.65L406,84.54c-2.83,8.49-.14,10,11.33,11.47v4.53H385.59V96c7.79-1.42,9.63-2.13,11.47-7.93L425.8.71h12.46ZM412.92,63.15h27.47l-14.3-39.79h-.29Z" />
          <path d="M527.76,1.42c21.24,0,33.41,11.32,33.41,26.9,0,11.61-7.64,23.93-25.34,28,8.49,3.68,12.74,9.2,16,14.44l10.9,17.28c4.11,6.51,8.07,7.22,12.32,7.93v4.53H547.58a88.79,88.79,0,0,1-10.19-16l-6.23-11.47c-3.12-5.53-6.66-11.76-10.91-15.3h-7.08V90.2c0,4.67,1,5.1,9.63,5.81v4.53H483V96c8.64-.71,9.63-1.14,9.63-5.81V11.75c0-4.67-1-5.09-9.63-5.8V1.42ZM513.17,7.36V51h6.94c15.72,0,19.4-8.78,19.4-21.24,0-11.33-4-22.38-16.85-22.38Z" />
          <path d="M640.33,72.64h4.53l-1.7,20.82a56.15,56.15,0,0,1-30,8.49c-29,0-51.12-21.24-51.12-51S584.11,0,613.14,0a56.14,56.14,0,0,1,30,8.5l1.42,20.81h-4.53C637.21,17.42,630.13,6.8,613.14,6.8c-16.56,0-29.45,14.44-29.45,44.18s12.89,44.18,29.45,44.18C631.27,95.16,637.5,84,640.33,72.64Z" />
          <path d="M725.58,88.93c1.7,4.81,3.11,5.94,10.19,7.08v4.53H695V96c8.5-1,10.9-2.27,8.36-8.93L697.12,70H665L660.3,84.54c-2.83,8.49-.14,10,11.33,11.47v4.53H639.91V96c7.79-1.42,9.63-2.13,11.47-7.93L680.12.71h12.46ZM667.24,63.15h27.47l-14.3-39.79h-.29Z" />
        </g>
        {claim && (
          <g id="claim">
            <path d="M84.54,124.88v-14h7.85v1.49H86.53v4.5h4.92v1.46H86.53v5.08H92.8v1.49Z" />
            <path d="M95.06,124.88v-14h2v12.53h6.23v1.49Z" />
            <path d="M111.54,124.88v-14h3.74a7.31,7.31,0,0,1,2.86.4,2.81,2.81,0,0,1,1.33,1.22,4.13,4.13,0,0,1,.47,2.06,5,5,0,0,1-.62,2.51,4,4,0,0,1-2,1.67,7.46,7.46,0,0,1-3,.59h-.85v5.57Zm2-7.08h.77a3.56,3.56,0,0,0,2.73-.9,3.12,3.12,0,0,0,.83-2.22,2.53,2.53,0,0,0-.26-1.22,2,2,0,0,0-.85-.81,4.9,4.9,0,0,0-2-.3h-1.17Z" />
            <path d="M128,125.23a6.57,6.57,0,0,1-3.46-.89,5.89,5.89,0,0,1-2.29-2.6,9.62,9.62,0,0,1,0-7.66,5.82,5.82,0,0,1,2.27-2.64,7.07,7.07,0,0,1,7,0,5.84,5.84,0,0,1,2.28,2.64,9.72,9.72,0,0,1,0,7.56,5.88,5.88,0,0,1-2.26,2.65A6.53,6.53,0,0,1,128,125.23Zm0-1.49a3.84,3.84,0,0,0,3.28-1.58,7.16,7.16,0,0,0,1.16-4.31,7,7,0,0,0-1.17-4.29,4.22,4.22,0,0,0-6.55,0,8.55,8.55,0,0,0,0,8.6A3.83,3.83,0,0,0,128,123.74Z" />
            <path d="M137.33,124.88v-14H142a8.55,8.55,0,0,1,4.09.78,5.46,5.46,0,0,1,2.18,2.28,7.65,7.65,0,0,1,.79,3.62,9.12,9.12,0,0,1-.72,3.66,6.19,6.19,0,0,1-2.2,2.67,7.26,7.26,0,0,1-4.11,1Zm2-1.49h2.55a5.61,5.61,0,0,0,3-.63,4.07,4.07,0,0,0,1.54-2,8,8,0,0,0,.56-3,7.29,7.29,0,0,0-.48-2.7,4.15,4.15,0,0,0-1.56-2,7.49,7.49,0,0,0-3.94-.73h-1.64Z" />
            <path d="M162.39,124.16a10.74,10.74,0,0,1-1.54.66,9,9,0,0,1-1.41.31,11.15,11.15,0,0,1-1.58.1q-3.54,0-5.19-2.1a8.25,8.25,0,0,1-1.64-5.25,8,8,0,0,1,1.71-5.3,6.35,6.35,0,0,1,5.22-2.07,18.58,18.58,0,0,1,4.41.62V113a22.06,22.06,0,0,0-2.92-.86,9.18,9.18,0,0,0-1.52-.13,4.08,4.08,0,0,0-3.66,1.71,7.45,7.45,0,0,0-1.13,4.19,6.46,6.46,0,0,0,1.3,4.18,4.5,4.5,0,0,0,3.69,1.59,8.42,8.42,0,0,0,1.33-.11,9.43,9.43,0,0,0,1.31-.35,13.41,13.41,0,0,0,1.62-.76Z" />
            <path d="M163.63,124.88l5.56-14h2l5.48,14h-2.15L173,121h-6l-1.54,3.89Zm4-5.37h4.77l-2.37-6Z" />
            <path d="M177.81,124.61v-2a13.46,13.46,0,0,0,2.47.94,7.06,7.06,0,0,0,1.45.16,2.67,2.67,0,0,0,1.91-.66,2.07,2.07,0,0,0,.7-1.57,2.3,2.3,0,0,0-.37-1.28,5.41,5.41,0,0,0-1.85-1.41l-1-.56a8.31,8.31,0,0,1-2.6-2,3.31,3.31,0,0,1-.67-2,3.54,3.54,0,0,1,.53-1.86,3.74,3.74,0,0,1,1.42-1.37,4.56,4.56,0,0,1,2.24-.49,12.09,12.09,0,0,1,3.44.54v1.82a16.68,16.68,0,0,0-2.16-.74,5.24,5.24,0,0,0-1.17-.13,2.35,2.35,0,0,0-1.81.63,1.93,1.93,0,0,0-.59,1.3,1.85,1.85,0,0,0,.28.92,2.88,2.88,0,0,0,.75.81,15.13,15.13,0,0,0,1.29.8l1,.57a8.2,8.2,0,0,1,2.62,2,3.59,3.59,0,0,1,.66,2.13,3.85,3.85,0,0,1-1.25,2.85,5.15,5.15,0,0,1-3.69,1.2,9.94,9.94,0,0,1-1.46-.1A18.81,18.81,0,0,1,177.81,124.61Z" />
            <path d="M192.43,124.88V112.35h-5v-1.49h11.93v1.49h-5v12.53Z" />
            <path d="M207.51,124.88v-14h4.65a8.55,8.55,0,0,1,4.09.78,5.4,5.4,0,0,1,2.18,2.28,7.65,7.65,0,0,1,.79,3.62,9.12,9.12,0,0,1-.72,3.66,6.12,6.12,0,0,1-2.2,2.67,7.26,7.26,0,0,1-4.11,1Zm2-1.49H212a5.61,5.61,0,0,0,3-.63,4.07,4.07,0,0,0,1.54-2,8,8,0,0,0,.56-3,7.29,7.29,0,0,0-.48-2.7,4.15,4.15,0,0,0-1.56-2,7.49,7.49,0,0,0-3.94-.73H209.5Z" />
            <path d="M222,124.88v-14h7.85v1.49H224v4.5h4.92v1.46H224v5.08h6.27v1.49Z" />
            <path d="M232.55,124.88v-14h2v12.53h6.22v1.49Z" />
            <path d="M249,124.88v-14h2v12.53h6.22v1.49Z" />
            <path d="M257.72,124.88l5.57-14h2l5.49,14h-2.15L267.06,121h-5.95l-1.54,3.89Zm4-5.37h4.77l-2.38-6Z" />
            <path d="M272.75,124.88v-14h3.67a5,5,0,0,1,3.38.91,2.87,2.87,0,0,1,1,2.18,3.68,3.68,0,0,1-.66,2,4.53,4.53,0,0,1-2.23,1.6,6.24,6.24,0,0,1,2.05,1,3.7,3.7,0,0,1,1.05,1.28,3.63,3.63,0,0,1,.36,1.56,3.54,3.54,0,0,1-.5,1.82,3.33,3.33,0,0,1-1.34,1.27,6,6,0,0,1-2.6.42Zm2-7.86h.65a3.7,3.7,0,0,0,2.57-.75,2.41,2.41,0,0,0,.82-1.88,1.75,1.75,0,0,0-.73-1.52,4.46,4.46,0,0,0-2.52-.52h-.79Zm0,6.37h.42a10.41,10.41,0,0,0,2.77-.23,1.92,1.92,0,0,0,1-.77,2.17,2.17,0,0,0,.35-1.21,2.52,2.52,0,0,0-1.12-2.06,4.62,4.62,0,0,0-2.84-.84h-.57Z" />
            <path d="M289.64,125.23a6.57,6.57,0,0,1-3.46-.89,5.93,5.93,0,0,1-2.28-2.6,9.68,9.68,0,0,1,0-7.66,5.78,5.78,0,0,1,2.28-2.64,7.07,7.07,0,0,1,7,0,5.82,5.82,0,0,1,2.27,2.64,9,9,0,0,1,.77,3.79,9.07,9.07,0,0,1-.76,3.77,5.92,5.92,0,0,1-2.25,2.65A6.59,6.59,0,0,1,289.64,125.23Zm0-1.49a3.84,3.84,0,0,0,3.28-1.58,8.52,8.52,0,0,0,0-8.6,4.21,4.21,0,0,0-6.54,0,7,7,0,0,0-1.17,4.29,7.16,7.16,0,0,0,1.16,4.31A3.84,3.84,0,0,0,289.64,123.74Z" />
            <path d="M299,124.88v-14h4.24a4.11,4.11,0,0,1,3.26,1.06,3.62,3.62,0,0,1,.9,2.42,4.16,4.16,0,0,1-.32,1.57,4.22,4.22,0,0,1-.9,1.38,4.5,4.5,0,0,1-1.6,1l4.68,6.57H306.8l-4-5.93H301v5.93Zm2-7.42h.64c1.47,0,2.47-.3,3-.92a3,3,0,0,0,.77-2,2.25,2.25,0,0,0-.28-1.15,2,2,0,0,0-.9-.76,5.21,5.21,0,0,0-2-.27H301Z" />
            <path d="M309.6,124.88l5.56-14h2l5.48,14h-2.15L318.93,121H313l-1.54,3.89Zm4-5.37h4.77l-2.37-6Z" />
            <path d="M328,124.88V112.35h-5v-1.49h11.93v1.49h-5v12.53Z" />
            <path d="M342.62,125.23a6.6,6.6,0,0,1-3.46-.89,5.93,5.93,0,0,1-2.28-2.6,8.93,8.93,0,0,1-.81-3.87,9.13,9.13,0,0,1,.77-3.79,5.78,5.78,0,0,1,2.28-2.64,7.07,7.07,0,0,1,7,0,5.82,5.82,0,0,1,2.27,2.64,9,9,0,0,1,.78,3.79,9.07,9.07,0,0,1-.77,3.77,5.86,5.86,0,0,1-2.25,2.65A6.54,6.54,0,0,1,342.62,125.23Zm0-1.49a3.83,3.83,0,0,0,3.28-1.58,8.52,8.52,0,0,0,0-8.6,4.21,4.21,0,0,0-6.54,0,7,7,0,0,0-1.17,4.29,7.16,7.16,0,0,0,1.16,4.31A3.84,3.84,0,0,0,342.62,123.74Z" />
            <path d="M352,124.88v-14h4.24a4.1,4.1,0,0,1,3.26,1.06,3.62,3.62,0,0,1,.9,2.42,4,4,0,0,1-.32,1.57,4.22,4.22,0,0,1-.9,1.38,4.5,4.5,0,0,1-1.6,1l4.68,6.57h-2.44l-4-5.93h-1.86v5.93Zm2-7.42h.64c1.48,0,2.47-.3,3-.92a3,3,0,0,0,.78-2,2.26,2.26,0,0,0-.29-1.15,2,2,0,0,0-.9-.76,5.21,5.21,0,0,0-2-.27h-1.25Z" />
            <path d="M364.22,124.88v-14h2v14Z" />
            <path d="M375.54,125.23a6.6,6.6,0,0,1-3.46-.89,5.93,5.93,0,0,1-2.28-2.6,8.93,8.93,0,0,1-.81-3.87,9.13,9.13,0,0,1,.77-3.79,5.9,5.9,0,0,1,2.28-2.64,7.07,7.07,0,0,1,7,0,5.9,5.9,0,0,1,2.28,2.64,9.13,9.13,0,0,1,.77,3.79,9.23,9.23,0,0,1-.76,3.77,5.88,5.88,0,0,1-2.26,2.65A6.54,6.54,0,0,1,375.54,125.23Zm0-1.49a3.86,3.86,0,0,0,3.29-1.58,7.16,7.16,0,0,0,1.16-4.31,7,7,0,0,0-1.17-4.29,4.22,4.22,0,0,0-6.55,0,7,7,0,0,0-1.17,4.29,7.16,7.16,0,0,0,1.16,4.31A3.85,3.85,0,0,0,375.54,123.74Z" />
            <path d="M391,124.88v-14h4.66a8.5,8.5,0,0,1,4.08.78,5.48,5.48,0,0,1,2.19,2.28,7.77,7.77,0,0,1,.79,3.62,9.13,9.13,0,0,1-.73,3.66,6.05,6.05,0,0,1-2.2,2.67,7.22,7.22,0,0,1-4.11,1Zm2-1.49h2.54a5.61,5.61,0,0,0,3-.63,4.15,4.15,0,0,0,1.55-2,8,8,0,0,0,.55-3,7.29,7.29,0,0,0-.48-2.7,4.15,4.15,0,0,0-1.56-2,7.49,7.49,0,0,0-3.94-.73H393Z" />
            <path d="M405.55,124.88v-14h7.85v1.49h-5.86v4.5h4.91v1.46h-4.91v5.08h6.27v1.49Z" />
            <path d="M432.73,124.16a10.29,10.29,0,0,1-1.54.66,9.17,9.17,0,0,1-1.4.31,11.3,11.3,0,0,1-1.59.1q-3.54,0-5.18-2.1a8.2,8.2,0,0,1-1.65-5.25,8,8,0,0,1,1.71-5.3,6.39,6.39,0,0,1,5.23-2.07,18.44,18.44,0,0,1,4.4.62V113a21.62,21.62,0,0,0-2.92-.86,9.09,9.09,0,0,0-1.52-.13,4,4,0,0,0-3.65,1.71,7.37,7.37,0,0,0-1.13,4.19,6.41,6.41,0,0,0,1.3,4.18,4.5,4.5,0,0,0,3.69,1.59,8.4,8.4,0,0,0,1.32-.11,8.74,8.74,0,0,0,1.31-.35,12.13,12.13,0,0,0,1.62-.76Z" />
            <path d="M441.35,125.23a6.57,6.57,0,0,1-3.46-.89,5.93,5.93,0,0,1-2.28-2.6,9.68,9.68,0,0,1,0-7.66,5.78,5.78,0,0,1,2.28-2.64,7.05,7.05,0,0,1,7,0,5.78,5.78,0,0,1,2.28,2.64,9,9,0,0,1,.77,3.79,9.07,9.07,0,0,1-.76,3.77,5.92,5.92,0,0,1-2.25,2.65A6.59,6.59,0,0,1,441.35,125.23Zm0-1.49a3.84,3.84,0,0,0,3.28-1.58,7.16,7.16,0,0,0,1.16-4.31,7,7,0,0,0-1.17-4.29,4.21,4.21,0,0,0-6.54,0,8.52,8.52,0,0,0,0,8.6A3.84,3.84,0,0,0,441.35,123.74Z" />
            <path d="M450.69,124.88v-14h2l7,10.82V110.86h1.71v14h-1.95l-7-10.81v10.81Z" />
            <path d="M468.34,124.88V112.35h-5v-1.49H475.3v1.49h-5v12.53Z" />
            <path d="M477.28,124.88v-14h7.85v1.49h-5.86v4.5h4.92v1.46h-4.92v5.08h6.27v1.49Z" />
            <path d="M487.8,124.88v-14h2l7,10.82V110.86h1.72v14h-1.95l-7-10.81v10.81Z" />
            <path d="M502.12,124.88v-14h2v14Z" />
            <path d="M507.71,124.88v-14h4.66a8.55,8.55,0,0,1,4.09.78,5.46,5.46,0,0,1,2.18,2.28,7.65,7.65,0,0,1,.79,3.62,9.12,9.12,0,0,1-.72,3.66,6.19,6.19,0,0,1-2.2,2.67,7.26,7.26,0,0,1-4.11,1Zm2-1.49h2.54a5.62,5.62,0,0,0,3-.63,4.13,4.13,0,0,0,1.54-2,8,8,0,0,0,.56-3,7.29,7.29,0,0,0-.48-2.7,4.22,4.22,0,0,0-1.56-2,7.49,7.49,0,0,0-3.94-.73H509.7Z" />
            <path d="M528,125.23a6.6,6.6,0,0,1-3.46-.89,5.93,5.93,0,0,1-2.28-2.6,8.93,8.93,0,0,1-.81-3.87,9.13,9.13,0,0,1,.77-3.79,5.84,5.84,0,0,1,2.28-2.64,7.07,7.07,0,0,1,7,0,5.82,5.82,0,0,1,2.27,2.64,9,9,0,0,1,.78,3.79,9.07,9.07,0,0,1-.77,3.77,5.86,5.86,0,0,1-2.25,2.65A6.54,6.54,0,0,1,528,125.23Zm0-1.49a3.83,3.83,0,0,0,3.28-1.58,8.49,8.49,0,0,0,0-8.6,4.22,4.22,0,0,0-6.55,0,7,7,0,0,0-1.17,4.29,7.16,7.16,0,0,0,1.16,4.31A3.84,3.84,0,0,0,528,123.74Z" />
            <path d="M536.46,124.61v-2a13.22,13.22,0,0,0,2.48.94,7,7,0,0,0,1.44.16,2.66,2.66,0,0,0,1.91-.66,2.07,2.07,0,0,0,.7-1.57,2.38,2.38,0,0,0-.36-1.28,5.51,5.51,0,0,0-1.85-1.41l-1-.56a8.26,8.26,0,0,1-2.61-2,3.38,3.38,0,0,1-.67-2,3.54,3.54,0,0,1,.53-1.86,3.88,3.88,0,0,1,1.42-1.37,4.56,4.56,0,0,1,2.24-.49,12,12,0,0,1,3.44.54v1.82a16.68,16.68,0,0,0-2.16-.74,5.18,5.18,0,0,0-1.17-.13,2.38,2.38,0,0,0-1.81.63,1.91,1.91,0,0,0-.58,1.3,1.75,1.75,0,0,0,.28.92,2.7,2.7,0,0,0,.74.81,15.13,15.13,0,0,0,1.29.8l1,.57a8.14,8.14,0,0,1,2.61,2,3.59,3.59,0,0,1,.66,2.13,3.85,3.85,0,0,1-1.25,2.85,5.14,5.14,0,0,1-3.69,1.2,9.81,9.81,0,0,1-1.45-.1A18.85,18.85,0,0,1,536.46,124.61Z" />
            <path d="M553.89,124.88v-14h4.66a8.55,8.55,0,0,1,4.09.78,5.46,5.46,0,0,1,2.18,2.28,7.65,7.65,0,0,1,.79,3.62,9.12,9.12,0,0,1-.72,3.66,6.19,6.19,0,0,1-2.2,2.67,7.26,7.26,0,0,1-4.11,1Zm2-1.49h2.54a5.62,5.62,0,0,0,3-.63,4.13,4.13,0,0,0,1.54-2,8,8,0,0,0,.56-3A7.29,7.29,0,0,0,563,115a4.15,4.15,0,0,0-1.56-2,7.49,7.49,0,0,0-3.94-.73h-1.64Z" />
            <path d="M568.42,124.88v-14h7.86v1.49h-5.87v4.5h4.92v1.46h-4.92v5.08h6.27v1.49Z" />
            <path d="M585.07,124.88v-14h2.76l3.9,10.85,4-10.85h2.45v14h-1.86V113.47l-3.87,10.47h-1.91l-3.76-10.49v11.43Z" />
            <path d="M600.13,124.88l5.57-14h2l5.48,14H611L609.47,121h-6L602,124.88Zm4-5.37h4.77l-2.38-6Z" />
            <path d="M615.16,124.88v-14h4.25a4.13,4.13,0,0,1,3.26,1.06,3.66,3.66,0,0,1,.89,2.42,4.14,4.14,0,0,1-.31,1.57,4.25,4.25,0,0,1-.91,1.38,4.41,4.41,0,0,1-1.6,1l4.68,6.57H623L619,119h-1.86v5.93Zm2-7.42h.65a3.78,3.78,0,0,0,3-.92,3.07,3.07,0,0,0,.77-2,2.26,2.26,0,0,0-.29-1.15,1.9,1.9,0,0,0-.9-.76,5.21,5.21,0,0,0-2-.27h-1.25Z" />
            <path d="M638,124.16a10.29,10.29,0,0,1-1.54.66,9.17,9.17,0,0,1-1.4.31,11.3,11.3,0,0,1-1.59.1q-3.54,0-5.18-2.1a8.19,8.19,0,0,1-1.64-5.25,8,8,0,0,1,1.7-5.3,6.39,6.39,0,0,1,5.23-2.07,18.44,18.44,0,0,1,4.4.62V113a21.62,21.62,0,0,0-2.92-.86,9.09,9.09,0,0,0-1.52-.13,4,4,0,0,0-3.65,1.71,7.37,7.37,0,0,0-1.13,4.19,6.41,6.41,0,0,0,1.3,4.18,4.5,4.5,0,0,0,3.69,1.59,8.4,8.4,0,0,0,1.32-.11,8.74,8.74,0,0,0,1.31-.35,12.13,12.13,0,0,0,1.62-.76Z" />
            <path d="M639.2,124.88l5.57-14h2l5.49,14h-2.15L648.54,121h-5.95l-1.54,3.89Zm4-5.37H648l-2.38-6Z" />
          </g>
        )}
      </g>
    </svg>
  )
}
