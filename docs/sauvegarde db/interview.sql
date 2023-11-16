-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 16 nov. 2023 à 07:59
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `interview`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentresponse`
--

CREATE TABLE `commentresponse` (
  `responseID` int(11) NOT NULL,
  `responseText` text NOT NULL,
  `commentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commentresponse`
--

INSERT INTO `commentresponse` (`responseID`, `responseText`, `commentID`) VALUES
(4, 'response for first new question.', 8),
(5, 'response fore the second new question', 9),
(6, 'other response for the first new question', 8),
(7, 'comment reply', 10),
(8, 'another response for the comment', 10);

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE `departement` (
  `deptID` int(11) NOT NULL,
  `deptName` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `departement`
--

INSERT INTO `departement` (`deptID`, `deptName`) VALUES
(1, 'Informatique'),
(2, 'Ressources humaines'),
(3, 'Conseil et Assistance'),
(4, 'Externalisation des services');

-- --------------------------------------------------------

--
-- Structure de la table `evaluationitem`
--

CREATE TABLE `evaluationitem` (
  `evaID` int(11) NOT NULL,
  `evaName` varchar(30) DEFAULT NULL,
  `secID` int(11) NOT NULL,
  `evaMaxValue` int(11) DEFAULT NULL,
  `evaStatus` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `evaluationitem`
--

INSERT INTO `evaluationitem` (`evaID`, `evaName`, `secID`, `evaMaxValue`, `evaStatus`) VALUES
(7, 'MVC', 4, 10, 1),
(8, 'Template', 3, 10, 1),
(9, 'Script', 3, 10, 1),
(10, 'Props', 8, 5, 1),
(11, 'Hooks', 8, 10, 1),
(12, 'POO', 6, 15, 1),
(13, 'Migration', 4, 10, 0),
(14, 'Services', 1, 10, 0),
(15, 'evaluation1', 2, 10, 1),
(16, 'evaluation2', 2, 10, 1),
(17, 'evaluation3', 2, 10, 1);

-- --------------------------------------------------------

--
-- Structure de la table `headofdepartment`
--

CREATE TABLE `headofdepartment` (
  `deptID` int(10) UNSIGNED NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `headofdepartment`
--

INSERT INTO `headofdepartment` (`deptID`, `userID`) VALUES
(1, 8),
(1, 8),
(1, 9),
(1, 10),
(2, 11),
(2, 12),
(3, 13),
(3, 14),
(4, 15),
(4, 16),
(4, 17);

-- --------------------------------------------------------

--
-- Structure de la table `interview`
--

CREATE TABLE `interview` (
  `itrwID` int(11) NOT NULL,
  `itrwDate` date DEFAULT NULL,
  `userID` int(11) NOT NULL,
  `itrwStatus` varchar(10) NOT NULL DEFAULT 'locked',
  `perID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `interview`
--

INSERT INTO `interview` (`itrwID`, `itrwDate`, `userID`, `itrwStatus`, `perID`) VALUES
(54, NULL, 8, 'locked', 17),
(55, NULL, 9, 'locked', 17),
(56, NULL, 10, 'locked', 17),
(57, NULL, 11, 'locked', 17),
(58, NULL, 12, 'locked', 17),
(59, NULL, 13, 'locked', 17),
(60, NULL, 14, 'locked', 17),
(61, NULL, 15, 'locked', 17),
(62, NULL, 16, 'locked', 17),
(63, NULL, 17, 'locked', 17),
(64, NULL, 8, 'locked', 18),
(65, NULL, 9, 'locked', 18),
(66, NULL, 10, 'locked', 18),
(67, NULL, 11, 'locked', 18),
(68, NULL, 12, 'locked', 18),
(69, NULL, 13, 'locked', 18),
(70, NULL, 14, 'locked', 18),
(71, NULL, 15, 'locked', 18),
(72, NULL, 16, 'locked', 18),
(73, NULL, 17, 'locked', 18),
(74, NULL, 8, 'locked', 19),
(75, NULL, 9, 'locked', 19),
(76, NULL, 10, 'locked', 19),
(77, NULL, 11, 'locked', 19),
(78, NULL, 12, 'locked', 19),
(79, NULL, 13, 'locked', 19),
(80, NULL, 14, 'locked', 19),
(81, NULL, 15, 'locked', 19),
(82, NULL, 16, 'locked', 19),
(83, NULL, 17, 'locked', 19),
(84, NULL, 8, 'locked', 20),
(85, NULL, 9, 'locked', 20),
(86, NULL, 10, 'locked', 20),
(87, NULL, 11, 'locked', 20),
(88, NULL, 12, 'locked', 20),
(89, NULL, 13, 'locked', 20),
(90, NULL, 14, 'locked', 20),
(91, NULL, 15, 'locked', 20),
(92, NULL, 16, 'locked', 20),
(93, NULL, 17, 'locked', 20);

-- --------------------------------------------------------

--
-- Structure de la table `interviewcomment`
--

CREATE TABLE `interviewcomment` (
  `commentID` int(11) NOT NULL,
  `commentText` text NOT NULL,
  `itrwID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `interviewcomment`
--

INSERT INTO `interviewcomment` (`commentID`, `commentText`, `itrwID`) VALUES
(4, 'new comment', 92),
(5, 'second new comment', 92),
(6, 'new comment', 90),
(7, 'second new comment', 90),
(8, 'new comment', 93),
(9, 'other new comment', 93),
(10, 'new comment', 89);

-- --------------------------------------------------------

--
-- Structure de la table `interviewevaluation`
--

CREATE TABLE `interviewevaluation` (
  `itrwID` int(11) NOT NULL,
  `evaID` int(11) NOT NULL,
  `evaMaxValue` int(11) NOT NULL,
  `interEvaValue` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `interviewevaluation`
--

INSERT INTO `interviewevaluation` (`itrwID`, `evaID`, `evaMaxValue`, `interEvaValue`) VALUES
(54, 13, 10, NULL),
(54, 14, 10, NULL),
(54, 16, 10, NULL),
(54, 17, 10, NULL),
(55, 14, 10, NULL),
(55, 17, 10, NULL),
(56, 14, 10, NULL),
(56, 17, 10, NULL),
(57, 14, 10, NULL),
(57, 15, 10, NULL),
(57, 17, 10, NULL),
(58, 14, 10, NULL),
(58, 17, 10, NULL),
(59, 14, 10, NULL),
(59, 17, 10, NULL),
(60, 13, 10, NULL),
(60, 14, 10, NULL),
(60, 16, 10, NULL),
(60, 17, 10, NULL),
(61, 14, 10, NULL),
(61, 17, 10, NULL),
(62, 14, 10, NULL),
(62, 17, 10, NULL),
(63, 14, 10, NULL),
(63, 15, 10, NULL),
(63, 17, 10, NULL),
(64, 13, 10, NULL),
(64, 14, 10, NULL),
(64, 16, 10, NULL),
(64, 17, 10, NULL),
(65, 14, 10, NULL),
(65, 17, 10, NULL),
(66, 14, 10, NULL),
(66, 17, 10, NULL),
(67, 14, 10, NULL),
(67, 15, 10, NULL),
(67, 17, 10, NULL),
(68, 14, 10, NULL),
(68, 17, 10, NULL),
(69, 14, 10, NULL),
(69, 17, 10, NULL),
(70, 13, 10, NULL),
(70, 14, 10, NULL),
(70, 16, 10, NULL),
(70, 17, 10, NULL),
(71, 14, 10, NULL),
(71, 17, 10, NULL),
(72, 14, 10, NULL),
(72, 17, 10, NULL),
(73, 14, 10, NULL),
(73, 15, 10, NULL),
(73, 17, 10, NULL),
(74, 13, 10, NULL),
(74, 14, 10, NULL),
(74, 16, 10, NULL),
(74, 17, 10, NULL),
(75, 14, 10, NULL),
(75, 17, 10, NULL),
(76, 14, 10, NULL),
(76, 17, 10, NULL),
(77, 14, 10, NULL),
(77, 15, 10, NULL),
(77, 17, 10, NULL),
(78, 14, 10, NULL),
(78, 17, 10, NULL),
(79, 14, 10, NULL),
(79, 17, 10, NULL),
(80, 13, 10, NULL),
(80, 14, 10, NULL),
(80, 16, 10, NULL),
(80, 17, 10, NULL),
(81, 14, 10, NULL),
(81, 17, 10, NULL),
(82, 14, 10, NULL),
(82, 17, 10, NULL),
(83, 14, 10, NULL),
(83, 15, 10, NULL),
(83, 17, 10, NULL),
(84, 13, 10, NULL),
(84, 14, 10, NULL),
(84, 16, 10, NULL),
(84, 17, 10, NULL),
(85, 14, 10, NULL),
(85, 17, 10, NULL),
(86, 14, 10, NULL),
(86, 17, 10, NULL),
(87, 14, 10, NULL),
(87, 15, 10, NULL),
(87, 17, 10, NULL),
(88, 14, 10, NULL),
(88, 17, 10, NULL),
(89, 14, 10, NULL),
(89, 17, 10, NULL),
(90, 13, 10, NULL),
(90, 14, 10, NULL),
(90, 16, 10, NULL),
(90, 17, 10, NULL),
(91, 14, 10, NULL),
(91, 17, 10, NULL),
(92, 14, 10, NULL),
(92, 17, 10, NULL),
(93, 14, 10, NULL),
(93, 15, 10, NULL),
(93, 17, 10, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `period`
--

CREATE TABLE `period` (
  `perID` int(11) NOT NULL,
  `perName` varchar(45) DEFAULT NULL,
  `perStartDate` date DEFAULT NULL,
  `perEndDate` date DEFAULT NULL,
  `yooID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `period`
--

INSERT INTO `period` (`perID`, `perName`, `perStartDate`, `perEndDate`, `yooID`) VALUES
(17, 'Trimestre 1', '2023-01-01', '2023-03-31', 8),
(18, 'Trimestre 2', '2023-04-01', '2023-06-30', 8),
(19, 'Trimestre 3', '2023-07-01', '2023-09-30', 8),
(20, 'Trimestre 4', '2023-10-01', '2023-12-31', 8);

-- --------------------------------------------------------

--
-- Structure de la table `position`
--

CREATE TABLE `position` (
  `posID` int(11) NOT NULL,
  `posName` varchar(45) DEFAULT NULL,
  `deptID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `position`
--

INSERT INTO `position` (`posID`, `posName`, `deptID`) VALUES
(1, 'Développeur frontend', 1),
(2, 'Développeur backend', 1),
(3, 'Développeur mobile', 1),
(4, 'Recruteur', 2),
(5, 'Réceptionniste', 3);

-- --------------------------------------------------------

--
-- Structure de la table `positionevaluation`
--

CREATE TABLE `positionevaluation` (
  `posID` int(11) NOT NULL,
  `evaID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `positionevaluation`
--

INSERT INTO `positionevaluation` (`posID`, `evaID`) VALUES
(2, 13),
(1, 14),
(2, 14),
(3, 14),
(4, 14),
(5, 14),
(5, 15),
(2, 16),
(1, 17),
(2, 17),
(3, 17),
(4, 17),
(5, 17);

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `questionID` int(11) NOT NULL,
  `questionText` varchar(128) NOT NULL,
  `isReplied` tinyint(4) NOT NULL DEFAULT 0,
  `itrwID` int(11) NOT NULL,
  `response` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`questionID`, `questionText`, `isReplied`, `itrwID`, `response`) VALUES
(2, 'Question number one', 0, 54, NULL),
(3, 'Question number two', 0, 55, NULL),
(4, 'Question number three', 0, 54, NULL),
(5, 'Test ajout nouvelle question', 0, 92, NULL),
(6, 'Nouvelle question', 0, 86, NULL),
(7, 'Une autre nouvelle question', 0, 86, NULL),
(8, 'un autre test', 0, 86, NULL),
(9, 'Question?', 1, 89, 'response'),
(10, 'Question1?', 1, 89, 'response1'),
(11, 'question number four', 0, 54, NULL),
(12, 'Apres avoir retire le tableau de dependance', 0, 54, NULL),
(13, 'question2?', 1, 89, 'response2'),
(14, 'new question', 0, 90, NULL),
(15, 'question number one', 1, 93, ''),
(16, 'question number two', 1, 93, 'response for the question number two');

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE `section` (
  `secID` int(11) NOT NULL,
  `secName` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `section`
--

INSERT INTO `section` (`secID`, `secName`) VALUES
(1, 'Angular 17'),
(2, 'Laravel'),
(3, 'Vue js'),
(4, 'Autre modification'),
(5, 'React Native'),
(6, 'Odoo'),
(11, 'comportement professionnel'),
(12, 'comportement 2'),
(13, 'compétence technique');

-- --------------------------------------------------------

--
-- Structure de la table `targets`
--

CREATE TABLE `targets` (
  `trgID` int(11) NOT NULL,
  `trgTarget` text DEFAULT NULL,
  `trgIsAccomplished` tinyint(4) NOT NULL DEFAULT 0,
  `itrwID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `targets`
--

INSERT INTO `targets` (`trgID`, `trgTarget`, `trgIsAccomplished`, `itrwID`) VALUES
(1, 'test d\'objectif 1', 0, 54),
(2, 'update test', 0, 54),
(3, 'tareg 3 tupdate test', 0, 54),
(4, 'test d\'objectif 4', 0, 55),
(5, 'test d\'objectif 5', 0, 55),
(6, 'test d\'objectif 6', 0, 55),
(8, 'create target test', 0, 55),
(9, 'test ajout objectif', 0, 54),
(10, 'un autre test', 0, 54),
(11, 'encore un autre test', 0, 54),
(12, 'remove useEffect dependancy list', 0, 54),
(13, 'Nouvel objectif', 0, 89),
(14, 'Nouvel Objectif', 0, 86),
(15, 'Test objectif', 0, 92),
(16, 'new target', 0, 90),
(17, 'second new target', 0, 90);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `userName` varchar(45) DEFAULT NULL,
  `userLastName` varchar(45) DEFAULT NULL,
  `userBirthDate` date DEFAULT NULL,
  `userEmail` varchar(128) DEFAULT NULL,
  `userPassword` varchar(128) DEFAULT NULL,
  `userIsActive` tinyint(1) DEFAULT NULL,
  `deptID` int(11) NOT NULL,
  `posID` int(11) NOT NULL,
  `userProfilePhoroID` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`userID`, `userName`, `userLastName`, `userBirthDate`, `userEmail`, `userPassword`, `userIsActive`, `deptID`, `posID`, `userProfilePhoroID`) VALUES
(8, 'RAKOTOMAMONJY', 'Alice', '1995-05-05', 'test@gmail.com', '$2y$10$VHw9iDCwTOvKwxlI.aZpA.9/MnyHaki80F9qirThn9Wwheg6Rqnby', 0, 1, 2, 'url de l\'image'),
(9, 'RASOARIMALALA', 'Ben', '1985-12-03', 'ben@gmail.com', '$2y$10$LGuhlkGGBz3RT/kFZJL17upAUvHKlVcZTv/XQ5GVFcw7EzGUepG2i', 0, 1, 3, 'url de l\'image'),
(10, 'RANDRIAMANANTENA', 'Bruto', '1996-03-22', 'bruto@gmail.com', '$2y$10$qrEyO5vj0yCVKgjZG0.Pj.Ti.FQVbGB12iyqtX0vqY0ydMKUQ8ZTy', 0, 1, 4, 'url de l\'image'),
(11, 'RANDRIAMANANTENA', 'Bruto', '1996-03-22', 'bruto@gmail.com', '$2y$10$u9spE87hMUVOKYC6Nwar5.oIGaqawwPGB/4NVX1jZRmYvhF4vPwSK', 0, 2, 5, 'url de l\'image'),
(12, 'ANDRISOA', 'Félicie', '1992-10-07', 'felicie@gmail.com', '$2y$10$47vKwYvsxXV1umrBQUYWze18H6e9SHj/pdM0CbcKXx/s45QgZ/Y/m', 0, 2, 1, 'url de l\'image'),
(13, 'MINOSOA', 'Aurtence', '1988-07-23', 'aurtence@gmail.com', '$2y$10$9equgKLKKc6p.0E4hzL8B.N9YOfZsmqz.LqVE34NFnZNqdCfUKZF6', 0, 3, 1, 'url de l\'image'),
(14, 'ANTENAINA', 'Freddy', '1988-07-23', 'freddy@gmail.com', '$2y$10$cRFUWPm46mKUs3QZpbi/guwE5A6n.FEA6xmkkIn6PYkeK5zrAK5nW', 0, 3, 2, 'url de l\'image'),
(15, 'MANANTENA', 'Johnny', '1977-02-15', 'johnny@gmail.com', '$2y$10$6aDdzzjT/9Eu4HT1aWfnPO1gsRjZ6jKDTCTfpe0pRqY5A6.2jI4M.', 0, 4, 3, 'url de l\'image'),
(16, 'ARISOA', 'Yvette', '1995-11-22', 'yvette@gmail.com', '$2y$10$j/HCuqFOYtYa5p2qE6kFt.9LuoPpMKVTzDpvG0oPwS51mcjG8JUaG', 0, 4, 4, 'url de l\'image'),
(17, 'ANDERSON', 'Alain', '1983-07-26', 'anderson@gmail.com', '$2y$10$LZA4jm4bYKqqo5U56G0S8u4lnDrnKd3GV3fiBA6o1hFyLmsxf6j/6', 0, 4, 5, 'url de l\'image');

-- --------------------------------------------------------

--
-- Structure de la table `yearofoperation`
--

CREATE TABLE `yearofoperation` (
  `yooID` int(11) NOT NULL,
  `yooYear` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `yearofoperation`
--

INSERT INTO `yearofoperation` (`yooID`, `yooYear`) VALUES
(8, 2023);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commentresponse`
--
ALTER TABLE `commentresponse`
  ADD PRIMARY KEY (`responseID`);

--
-- Index pour la table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`deptID`);

--
-- Index pour la table `evaluationitem`
--
ALTER TABLE `evaluationitem`
  ADD PRIMARY KEY (`evaID`),
  ADD KEY `fk_evaluationItem_section1_idx` (`secID`);

--
-- Index pour la table `headofdepartment`
--
ALTER TABLE `headofdepartment`
  ADD KEY `fk_headOfDepartment_departement1_idx` (`deptID`),
  ADD KEY `fk_headOfDepartment_user1_idx` (`userID`);

--
-- Index pour la table `interview`
--
ALTER TABLE `interview`
  ADD PRIMARY KEY (`itrwID`),
  ADD KEY `fk_interview_user1_idx` (`userID`),
  ADD KEY `fk_interview_period1_idx` (`perID`);

--
-- Index pour la table `interviewcomment`
--
ALTER TABLE `interviewcomment`
  ADD PRIMARY KEY (`commentID`);

--
-- Index pour la table `interviewevaluation`
--
ALTER TABLE `interviewevaluation`
  ADD KEY `fk_interviewEvaluation_evaluationItem1_idx` (`evaID`),
  ADD KEY `fk_interviewEvaluation_interview1_idx` (`itrwID`);

--
-- Index pour la table `period`
--
ALTER TABLE `period`
  ADD PRIMARY KEY (`perID`),
  ADD KEY `fk_period_yearOfOperation1_idx` (`yooID`);

--
-- Index pour la table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`posID`),
  ADD KEY `fk_position_departement1_idx` (`deptID`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`questionID`);

--
-- Index pour la table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`secID`);

--
-- Index pour la table `targets`
--
ALTER TABLE `targets`
  ADD PRIMARY KEY (`trgID`),
  ADD KEY `fk_Targets_interview1_idx` (`itrwID`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `fk_user_departement_idx` (`deptID`),
  ADD KEY `fk_user_position1_idx` (`posID`);

--
-- Index pour la table `yearofoperation`
--
ALTER TABLE `yearofoperation`
  ADD PRIMARY KEY (`yooID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commentresponse`
--
ALTER TABLE `commentresponse`
  MODIFY `responseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `departement`
--
ALTER TABLE `departement`
  MODIFY `deptID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `evaluationitem`
--
ALTER TABLE `evaluationitem`
  MODIFY `evaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `interview`
--
ALTER TABLE `interview`
  MODIFY `itrwID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT pour la table `interviewcomment`
--
ALTER TABLE `interviewcomment`
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `period`
--
ALTER TABLE `period`
  MODIFY `perID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `position`
--
ALTER TABLE `position`
  MODIFY `posID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `section`
--
ALTER TABLE `section`
  MODIFY `secID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `targets`
--
ALTER TABLE `targets`
  MODIFY `trgID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `yearofoperation`
--
ALTER TABLE `yearofoperation`
  MODIFY `yooID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
