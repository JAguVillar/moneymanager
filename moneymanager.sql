-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2019 a las 01:12:55
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
  `signoMov` varchar(2) NOT NULL,
  `cdadMov` float NOT NULL,
  `descrMov` varchar(100) DEFAULT NULL,
  `fechaMov` date NOT NULL,
  `horaMov` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `movimientos`
--

INSERT INTO `movimientos` (`idMov`, `idUsuario`, `finMov`, `catMov`, `signoMov`, `cdadMov`, `descrMov`, `fechaMov`, `horaMov`) VALUES
(1, 1, '', '', '', 0, '', '2019-02-07', '21:00:20'),
(2, 1, '', '', '', 0, '', '2019-02-07', '21:04:03'),
(3, 1, '', '', '', 0, '', '2019-02-07', '21:35:22'),
(4, 1, '', '', '', 0, '', '2019-02-07', '21:35:31'),
(5, 1, '', '', '', 0, '', '2019-02-07', '21:36:00'),
(6, 1, '', '', '', 0, '', '2019-02-07', '21:36:30'),
(7, 1, '', '', '', 0, '', '2019-02-07', '21:37:47'),
(8, 1, '', '', '', 0, '', '2019-02-07', '21:38:02'),
(9, 1, '', '', '', 0, '', '2019-02-07', '21:40:26'),
(10, 1, '', '', '', 0, '', '2019-02-07', '21:41:13'),
(11, 1, '', '', '', 0, '', '2019-02-07', '21:41:46'),
(12, 1, '', '', '', 0, '', '2019-02-07', '21:41:56'),
(13, 1, '', '', '', 0, '', '2019-02-07', '21:42:10'),
(14, 1, '', '', '', 0, '', '2019-02-07', '21:47:00'),
(15, 1, '', '', '', 0, '', '2019-02-07', '21:50:31'),
(16, 1, 'Pepinos', 'Cuidado Personal', '+', 111111000, 'pepinillos', '2019-02-08', '20:00:17'),
(17, 1, 'sdadasd', 'Alquiler', '+', 12, 'Asdasdads', '2019-02-08', '20:07:22'),
(18, 1, 'QWDQWDQDW', 'Impuestos', '-', 23123100, 'Adwqdqw', '2019-02-08', '20:07:57'),
(19, 1, 'WESQEQW', 'Alquiler', '+', 1212, 'Dqwdwdqdq', '2019-02-08', '20:27:08'),
(20, 1, 'WESQEQW', 'Alquiler', '+', 1212, 'Dqwdwdqdq', '2019-02-08', '20:27:21'),
(21, 1, 'RR23R2R', 'Impuestos', '+', 1, 'Tghdfhgerth', '2019-02-08', '20:28:00'),
(22, 1, 'WDWQDQ', 'Alquiler', '-', 36, 'Dqwdqwd', '2019-02-08', '20:29:08'),
(23, 1, 'WDWQDQ', 'Alquiler', '-', 36, 'Dqwdqwd', '2019-02-08', '20:29:25'),
(24, 1, 'DQWDQWDQWD', 'Transporte Publico', '+', 1541.21, '125215', '2019-02-08', '20:30:22'),
(25, 1, 'DQWDQWDQWD', 'Transporte Publico', '+', 1541.21, '125215', '2019-02-08', '20:30:32'),
(26, 1, 'SDASDADS', 'Gastos Medicos', '+', 0.4, 'Dasdasdasdasdasdadasda', '2019-02-08', '20:50:14'),
(27, 1, 'SDASDADS', 'Gastos Medicos', '+', 0.53, 'Dasdasdasdasdasdadasda', '2019-02-08', '20:50:29'),
(28, 1, 'LALALAL', 'Transporte Publico', '-', 121231000, 'Alallalasl', '2018-03-03', '21:00:42'),
(29, 1, 'DASDASD', 'Impuestos', '-', 0.09, 'Asdasdasdas', '2019-02-15', '21:04:35'),
(30, 1, 'DQDQDQW', 'Cuotas', '-', 1.08, 'Asdasdasdasdadqwdqwdqwdqwdqwdqwdqwdq', '2019-02-21', '21:07:29'),
(31, 1, 'WDQWDQDW', 'Cuotas', '+', 0.05, 'Qwdqwdqd', '2019-02-16', '21:08:05');

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
  MODIFY `idMov` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
