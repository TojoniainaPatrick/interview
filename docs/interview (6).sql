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

-- --------------------------------------------------------

--
-- Structure de la table `headofdepartment`
--

CREATE TABLE `headofdepartment` (
  `deptID` int(10) UNSIGNED NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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

-- --------------------------------------------------------

--
-- Structure de la table `interviewcomment`
--

CREATE TABLE `interviewcomment` (
  `commentID` int(11) NOT NULL,
  `commentText` text NOT NULL,
  `itrwID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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


-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE `section` (
  `secID` int(11) NOT NULL,
  `secName` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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
  MODIFY `responseID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `departement`
--
ALTER TABLE `departement`
  MODIFY `deptID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evaluationitem`
--
ALTER TABLE `evaluationitem`
  MODIFY `evaID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `interview`
--
ALTER TABLE `interview`
  MODIFY `itrwID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `interviewcomment`
--
ALTER TABLE `interviewcomment`
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `period`
--
ALTER TABLE `period`
  MODIFY `perID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `position`
--
ALTER TABLE `position`
  MODIFY `posID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `section`
--
ALTER TABLE `section`
  MODIFY `secID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `targets`
--
ALTER TABLE `targets`
  MODIFY `trgID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `yearofoperation`
--
ALTER TABLE `yearofoperation`
  MODIFY `yooID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
