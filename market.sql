-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 17-Mar-2017 às 11:52
-- Versão do servidor: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `market`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `cod_produto` int(11) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `qtdade` int(11) NOT NULL,
  `descricao` text NOT NULL,
  `dt_cadastro` date NOT NULL,
  `up_cadastro` date NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`cod_produto`, `nome`, `qtdade`, `descricao`, `dt_cadastro`, `up_cadastro`, `user`) VALUES
(19, 'dsa dsa', 3, 'a sa a', '2017-03-16', '2017-03-16', 1),
(3, 'Borracha', 3, 'borracha', '2017-03-15', '2017-03-15', 1),
(20, 'dsad as das', 3, 'sa ads', '2017-03-16', '2017-03-16', 1),
(6, 'Caderno Tilibra', 1, 'Caderno 10 matérias', '2017-03-15', '2017-03-15', 1),
(7, 'Corretivo', 3, 'Corretivo a base d\'agua', '2017-03-15', '2017-03-15', 1),
(8, 'Caneta Preta', 2, 'Caneta cor preta', '2017-03-15', '2017-03-15', 1),
(26, 'teste', 3, 'f dsfsd fs', '2017-03-17', '2017-03-17', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`cod_produto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `cod_produto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
