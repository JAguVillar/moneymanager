-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-02-2019 a las 07:04:41
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `moneymanager`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimientos`
--

CREATE TABLE `movimientos` (
  `idMov` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `finMov` varchar(50) NOT NULL,
  `catMov` varchar(25) NOT NULL,
  `cdadMov` decimal(10,0) NOT NULL,
  `descrMov` varchar(100) DEFAULT NULL,
  `fechaMov` date NOT NULL,
  `horaMov` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`idMov`, `idUsuario`, `finMov`, `catMov`, `cdadMov`, `descrMov`, `fechaMov`, `horaMov`) VALUES
(1, 1, '', '', '0', '', '2019-02-07', '21:00:20'),
(2, 1, '', '', '0', '', '2019-02-07', '21:04:03'),
(3, 1, '', '', '0', '', '2019-02-07', '21:35:22'),
(4, 1, '', '', '0', '', '2019-02-07', '21:35:31'),
(5, 1, '', '', '0', '', '2019-02-07', '21:36:00'),
(6, 1, '', '', '0', '', '2019-02-07', '21:36:30'),
(7, 1, '', '', '0', '', '2019-02-07', '21:37:47'),
(8, 1, '', '', '0', '', '2019-02-07', '21:38:02'),
(9, 1, '', '', '0', '', '2019-02-07', '21:40:26'),
(10, 1, '', '', '0', '', '2019-02-07', '21:41:13'),
(11, 1, '', '', '0', '', '2019-02-07', '21:41:46'),
(12, 1, '', '', '0', '', '2019-02-07', '21:41:56'),
(13, 1, '', '', '0', '', '2019-02-07', '21:42:10'),
(14, 1, '', '', '0', '', '2019-02-07', '21:47:00'),
(15, 1, '', '', '0', '', '2019-02-07', '21:50:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `divisa` varchar(10) NOT NULL,
  `balance` decimal(10,0) NOT NULL,
  `creacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `pass`, `divisa`, `balance`, `creacion`) VALUES
(1, 'Agustin', 'jaguvillar@gmail.com', '1234', 'ARS', '0', '0000-00-00'),
(2, 'Agustin', 'jaguvillar@gmail.com', '1234', 'ARS', '0', '0000-00-00'),
(3, 'a', 'a@a.com', '1234', 'CLP', '0', '0000-00-00'),
(4, 'hola', 'hola@hola.com', 'aaaa', 'ALL', '0', '0000-00-00'),
(5, '', '', '', 'Elija una ', '0', '0000-00-00'),
(6, '', '', '', 'Elija una ', '0', '0000-00-00'),
(7, '', '', '', 'Elija una ', '0', '0000-00-00'),
(8, '', '', '', 'Elija una ', '0', '0000-00-00'),
(9, '', '', '', 'Elija una ', '0', '0000-00-00'),
(10, '', '', '', 'Elija una ', '0', '0000-00-00'),
(11, '', '', '', 'Elija una ', '0', '0000-00-00'),
(12, '', '', '', 'Elija una ', '0', '0000-00-00'),
(13, '', '', '', 'Elija una ', '0', '0000-00-00'),
(14, '', '', '', 'Elija una ', '0', '2019-02-07');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  ADD PRIMARY KEY (`idMov`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movimientos`
--
ALTER TABLE `movimientos`
  MODIFY `idMov` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
