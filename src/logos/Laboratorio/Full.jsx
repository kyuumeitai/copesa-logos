import React from "react";

const LaboratorioFull = props => {
  const {
    dark = "#000000",
    light = "#ffffff",
    red = "#cb2128",
    schema = "common"
  } = props;

  const colorschema = {
    isotypebox: dark,
    isotypeletter: light,
    letters: dark
  };

  if (schema === "light") {
    colorschema.isotypebox = light;
    colorschema.isotypeletter = dark;
    colorschema.letters = light;
  }

  return (
    <svg viewBox="0 0 263.39 94.18" {...props}>
      <defs>
        <style>{`.laboratorio-full_svg__cls-2{fill:${colorschema.isotypeletter}}`}</style>
      </defs>
      <g id="laboratorio-full_svg__Layer_2" data-name="Layer 2">
        <g id="laboratorio-full_svg__Capa_1" data-name="Capa 1">
          <path
            fill={colorschema.letters}
            d="M32.05 26.87V10.66h3.16v13.19h7.22v3zM47.27 20.4L50 20c.64-.09.84-.41.84-.8 0-.8-.61-1.46-1.89-1.46a2 2 0 00-2.15 1.83L44.14 19c.18-1.76 1.81-3.7 4.82-3.7 3.57 0 4.9 2 4.9 4.28v5.53a12.51 12.51 0 00.14 1.76h-2.8a8.56 8.56 0 01-.11-1.35 3.76 3.76 0 01-3.31 1.67 3.56 3.56 0 01-3.87-3.38c0-2.01 1.49-3.13 3.36-3.41zm3.61 1.92v-.5l-2.53.39A1.42 1.42 0 0047 23.62a1.32 1.32 0 001.47 1.31 2.28 2.28 0 002.41-2.61zM56.63 26.87V10.32h3v6.54A4 4 0 0163 15.33c3.29 0 5.19 2.53 5.19 5.87s-2.11 5.94-5.31 5.94a3.79 3.79 0 01-3.33-1.64v1.37zm5.76-8.82a2.84 2.84 0 00-2.81 3.17c0 2 1.28 3.2 2.81 3.2s2.79-1.14 2.79-3.2-1.24-3.17-2.79-3.17zM81.49 21.25a5.9 5.9 0 11-11.8 0 5.9 5.9 0 1111.8 0zm-3 0a2.88 2.88 0 10-5.72 0 2.88 2.88 0 105.72 0zM90.54 18.64a4.46 4.46 0 00-.92-.09c-1.55 0-2.9.75-2.9 3.18v5.14h-3V15.62h2.95v1.67a3.36 3.36 0 013.2-1.76c.25 0 .48 0 .71.05zM95.16 20.4l2.76-.4c.64-.09.85-.41.85-.8 0-.8-.62-1.46-1.9-1.46a2 2 0 00-2.15 1.83L92 19c.19-1.76 1.81-3.7 4.83-3.7 3.56 0 4.89 2 4.89 4.28v5.53a14.19 14.19 0 00.13 1.78h-2.76a7.43 7.43 0 01-.09-1.37 3.75 3.75 0 01-3.31 1.67 3.56 3.56 0 01-3.87-3.38c-.03-2.01 1.46-3.13 3.34-3.41zm3.61 1.92v-.5l-2.54.39a1.41 1.41 0 00-1.39 1.41 1.32 1.32 0 001.46 1.31 2.29 2.29 0 002.47-2.61zM108.32 15.62h2.26v2.7h-2.26V23c0 1 .45 1.3 1.32 1.3a4.16 4.16 0 00.94-.09v2.52a4.59 4.59 0 01-1.71.27 3.25 3.25 0 01-3.57-3.47v-5.21h-2v-2.7h.57a1.61 1.61 0 001.73-1.78v-1.58h2.75zM123.65 21.25a5.9 5.9 0 11-11.8 0 5.9 5.9 0 1111.8 0zm-3 0a2.88 2.88 0 10-5.72 0 2.88 2.88 0 105.72 0zM132.7 18.64a4.43 4.43 0 00-.91-.09c-1.56 0-2.91.75-2.91 3.18v5.14h-3V15.62h2.95v1.67a3.36 3.36 0 013.2-1.76c.25 0 .48 0 .71.05zM135.92 10.05a1.88 1.88 0 010 3.75 1.88 1.88 0 110-3.75zm-1.51 16.82V15.62h3v11.25zM151.38 21.25a5.9 5.9 0 11-11.8 0 5.9 5.9 0 1111.8 0zm-3 0a2.88 2.88 0 10-5.72 0 2.88 2.88 0 105.72 0zM11.57 52.26c0 .76 0 1.58.09 2H8.75A8.63 8.63 0 018.64 53a3.51 3.51 0 01-3.15 1.58C2.29 54.57 0 52.06 0 48.65s2.22-5.87 5.39-5.87c2 0 2.86.8 3.18 1.39v-6.42h3zm-5.72-.41c1.56 0 2.77-1.19 2.77-3.22S7.41 45.5 5.85 45.5s-2.79 1.14-2.79 3.15 1.19 3.2 2.79 3.2zM24.68 51.07a5.07 5.07 0 01-5.12 3.57 5.7 5.7 0 01-5.81-6 5.64 5.64 0 015.53-5.92c3.48 0 5.56 2.22 5.56 5.83 0 .43-.05.89-.05.93h-8A2.74 2.74 0 0019.58 52a2.48 2.48 0 002.56-1.71zm-2.84-3.68a2.25 2.25 0 00-2.51-2.21 2.44 2.44 0 00-2.52 2.21zM32.15 46.21a8.18 8.18 0 018.25-8.46c4.48 0 6.79 2.74 7.43 5.37l-3 .94a4.24 4.24 0 00-4.46-3.27c-2.42 0-5 1.74-5 5.42a5 5 0 005 5.34A4.49 4.49 0 0045 48.24l2.95.89a7.37 7.37 0 01-7.49 5.51 8.09 8.09 0 01-8.31-8.43zM61.27 48.67a5.9 5.9 0 11-5.9-6 5.77 5.77 0 015.9 6zm-3 0a2.88 2.88 0 10-5.72 0 2.88 2.88 0 105.72 0zM66.5 54.3h-3V43.05h2.95v1.4a3.75 3.75 0 013.25-1.7c2.79 0 4.07 2 4.07 4.46v7.09h-3v-6.56a2 2 0 00-2.08-2.24 2.12 2.12 0 00-2.11 2.33zM80.31 43.05h2.26v2.7h-2.26v4.71c0 1 .45 1.3 1.32 1.3a4.85 4.85 0 00.94-.09v2.51a4.39 4.39 0 01-1.72.28A3.26 3.26 0 0177.29 51v-5.25h-2v-2.7h.58a1.62 1.62 0 001.73-1.78v-1.58h2.75zM94.83 51.07a5.06 5.06 0 01-5.12 3.57 5.7 5.7 0 01-5.81-6 5.64 5.64 0 015.53-5.92c3.48 0 5.56 2.22 5.56 5.83v.93h-8A2.73 2.73 0 0089.73 52a2.47 2.47 0 002.56-1.71zM92 47.39a2.25 2.25 0 00-2.51-2.21A2.42 2.42 0 0087 47.39zM100.26 54.3h-3V43.05h3v1.4a3.72 3.72 0 013.24-1.7c2.79 0 4.07 2 4.07 4.46v7.09h-3v-6.56a2 2 0 00-2.08-2.24 2.12 2.12 0 00-2.1 2.33zM111.78 37.47a1.88 1.88 0 11-1.88 1.9 1.89 1.89 0 011.88-1.9zm-1.51 16.83V43.05h3V54.3zM127 52.26c0 .76 0 1.58.09 2h-2.9a7.28 7.28 0 01-.12-1.31 3.5 3.5 0 01-3.15 1.58c-3.2 0-5.49-2.51-5.49-5.92s2.22-5.87 5.4-5.87c1.94 0 2.85.8 3.17 1.39v-6.38h3zm-5.72-.41c1.56 0 2.77-1.19 2.77-3.22s-1.21-3.13-2.77-3.13-2.79 1.14-2.79 3.15 1.2 3.2 2.8 3.2zM141 48.67a5.9 5.9 0 11-5.9-6 5.77 5.77 0 015.9 6zm-3 0a2.88 2.88 0 10-5.72 0 2.88 2.88 0 105.72 0zM144.88 50.59a1.88 1.88 0 002.06 1.72c1 0 1.49-.53 1.49-1.12s-.35-.92-1.21-1.1l-1.49-.34c-2.17-.48-3.15-1.78-3.15-3.36a3.92 3.92 0 014.2-3.68c3.2 0 4.28 2 4.41 3.24l-2.53.58A1.72 1.72 0 00146.8 45a1.29 1.29 0 00-1.44 1.12c0 .55.42.89 1 1l1.6.35c2.22.45 3.34 1.8 3.34 3.45 0 1.83-1.42 3.7-4.37 3.7-3.38 0-4.54-2.19-4.68-3.47zM65.2 79.69c0 .75 0 1.58.1 2h-2.91a8.35 8.35 0 01-.11-1.3A3.54 3.54 0 0159.12 82c-3.2 0-5.48-2.52-5.48-5.92S55.86 70.2 59 70.2c1.95 0 2.86.8 3.18 1.4v-6.42h3zm-5.71-.41c1.55 0 2.77-1.19 2.77-3.22s-1.26-3.14-2.77-3.14-2.79 1.15-2.79 3.16 1.19 3.2 2.79 3.2zM78.31 78.5a5.07 5.07 0 01-5.12 3.57 6 6 0 01-.27-11.93c3.47 0 5.55 2.21 5.55 5.82v.94h-8.09a2.74 2.74 0 002.84 2.56 2.5 2.5 0 002.56-1.71zm-2.83-3.68A2.27 2.27 0 0073 72.6a2.44 2.44 0 00-2.52 2.22zM101.72 81.72V70.36l-4.66 11.36h-2.63l-4.67-11.26v11.26h-3v-16.2h4.16l4.87 11.7 4.75-11.7h4.3v16.2zM110.83 75.26l2.77-.42c.64-.09.85-.41.85-.8 0-.8-.62-1.46-1.9-1.46a2 2 0 00-2.15 1.83l-2.7-.57c.19-1.76 1.81-3.7 4.83-3.7 3.56 0 4.89 2 4.89 4.27v5.53a13.9 13.9 0 00.13 1.78h-2.78a7.31 7.31 0 01-.12-1.34 3.75 3.75 0 01-3.31 1.62 3.56 3.56 0 01-3.87-3.38c0-1.97 1.53-3.09 3.36-3.36zm3.62 1.92v-.51l-2.54.39a1.43 1.43 0 00-1.4 1.42 1.32 1.32 0 001.47 1.3 2.28 2.28 0 002.47-2.6zM127.05 73.5a4.6 4.6 0 00-.92-.1c-1.55 0-2.9.76-2.9 3.18v5.14h-3V70.48h3v1.67a3.33 3.33 0 013.2-1.76h.71zM131.17 76.1a2.9 2.9 0 002.88 3.18 2.56 2.56 0 002.58-1.9l2.68.89a5.22 5.22 0 01-5.26 3.8 5.83 5.83 0 01-5.92-6 5.76 5.76 0 015.83-6 5.14 5.14 0 015.28 3.79l-2.72.91A2.45 2.45 0 00134 73a2.86 2.86 0 00-2.83 3.1zM144.13 75.26l2.77-.42c.64-.09.84-.41.84-.8 0-.8-.62-1.46-1.9-1.46a2 2 0 00-2.14 1.83l-2.7-.57c.18-1.76 1.8-3.7 4.82-3.7 3.57 0 4.89 2 4.89 4.27v5.53a12.13 12.13 0 00.14 1.78h-2.79a7.39 7.39 0 01-.11-1.34 3.76 3.76 0 01-3.32 1.62 3.55 3.55 0 01-3.86-3.38c0-1.97 1.49-3.09 3.36-3.36zm3.61 1.92v-.51l-2.54.39a1.43 1.43 0 00-1.39 1.42 1.32 1.32 0 001.46 1.3 2.28 2.28 0 002.47-2.6z"
          />
          <path fill={colorschema.isotypebox} d="M165.3 0h98.1v94.18h-98.1z" />
          <path
            className="laboratorio-full_svg__cls-2"
            d="M177.04 17.29h9.45v51.65h27.03v8.39h-36.48V17.29zM224.33 25.67H206.5v-8.38h45.12v8.38h-17.84v51.66h-9.45V25.67z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LaboratorioFull;
