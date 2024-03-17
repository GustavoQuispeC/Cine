/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (() => {

eval("\r\n  const SeccionPelicula = document.getElementById('contenedorPeliculas')\r\n\r\n  function renderPeliculas(movie){\r\n  const pelicula = document.createElement(\"article\")\r\n  const containerPeliculas= document.createElement(\"div\")\r\n  \r\n  pelicula.classList.add('contenedorTarjeta');\r\n  containerPeliculas.classList.add('tarjeta');\r\n  \r\n  containerPeliculas.innerHTML=`\r\n  <h3 class=\"titulo\">${movie.title}</h3>\r\n  <img class=\"imagen\" src=\"${movie.poster}\" alt=\"${movie.title}\">\r\n  <p class=\"director\"><strong>Director: </strong> ${movie.director}</p>\r\n  <p class=\"duracion\"><strong>Duracion: </strong> ${movie.duration}</p>\r\n  <p class=\"genre\"><strong>Genero: </strong> ${movie.genre}</p>\r\n  <p class=\"rate\"><strong>rate: </strong> ${movie.rate}</p>\r\n  <p class=\"año\"><strong>rate: </strong> ${movie.year}</p>\r\n  `\r\n  SeccionPelicula.appendChild(pelicula);\r\n  pelicula.appendChild(containerPeliculas);\r\n \r\n  }\r\n  \r\n  $.get('https://students-api.2.us-1.fl0.io/movies',(data)=>\r\n  data.forEach(renderPeliculas)\r\n  \r\n  )\n\n//# sourceURL=webpack://cine/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/index.js"]();
/******/ 	
/******/ })()
;