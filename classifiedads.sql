-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2022 at 02:42 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `classifiedads`
--

-- --------------------------------------------------------

--
-- Table structure for table `classified_ad`
--

CREATE TABLE `classified_ad` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `contact_name` varchar(255) DEFAULT NULL,
  `contact_phone` varchar(255) DEFAULT NULL,
  `entry_date` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `classified_ad`
--

INSERT INTO `classified_ad` (`id`, `address`, `city`, `contact_name`, `contact_phone`, `entry_date`, `expiry_date`, `text`, `type`) VALUES
(1, 'Квартал 8', 'Етрополе', 'Христо Димитров', '+359887269854', '2022-04-17 03:00:00', '2022-05-01 03:00:00', 'Търся резачка Huskvarna втора употреба до 250 лв.', 'Търся'),
(2, 'местност Рибарица', 'Рибарица', 'Гавраил Цанев', '+359885369659', '2022-04-17 03:00:00', '2022-05-01 03:00:00', 'Предлагам свежо агнешко месо на изгодна цена. За повече информация, моля звъннете.', 'Предлагам'),
(3, 'местност Горунака', 'Етрополе', 'Константин Христов', '+359889944651', '2022-04-18 02:22:09', '2022-05-02 02:22:09', 'Предлагам работа в планината. Добро заплащане.', 'Предлагам'),
(4, 'Квартал 120', 'Етрополе', 'Красен Кирилов', '+3598965231425', '2022-04-18 02:25:14', '2022-05-02 02:25:14', 'Търся да си купя БМВ 320 до 3000 лв.', 'Търся'),
(5, 'Улица', 'Етрополе', 'Станислав Трифонов', '+359865987545', '2022-04-18 02:32:37', '2022-05-02 02:32:37', 'Предлагам ново', 'Предлагам');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classified_ad`
--
ALTER TABLE `classified_ad`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classified_ad`
--
ALTER TABLE `classified_ad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
