-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema interview
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema interview
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `interview` DEFAULT CHARACTER SET utf8 ;
USE `interview` ;

-- -----------------------------------------------------
-- Table `interview`.`departement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`departement` (
  `deptID` INT NOT NULL,
  `deptName` VARCHAR(45) NULL,
  PRIMARY KEY (`deptID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`position` (
  `posID` INT NOT NULL,
  `posName` VARCHAR(45) NULL,
  `deptID` INT NOT NULL,
  PRIMARY KEY (`posID`),
  INDEX `fk_position_departement1_idx` (`deptID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`user` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `userLastName` VARCHAR(45) NULL,
  `userBirthDate` DATE NULL,
  `userEmail` VARCHAR(128) NULL,
  `userPassword` VARCHAR(128) NULL,
  `userIsActive` TINYINT(1) NULL,
  `deptID` INT NOT NULL,
  `posID` INT NOT NULL,
  `userProfilePhoroID` TEXT NULL,
  PRIMARY KEY (`userID`),
  INDEX `fk_user_departement_idx` (`deptID` ASC) ,
  INDEX `fk_user_position1_idx` (`posID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`app`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`app` (
  `appID` INT NOT NULL,
  `appName` VARCHAR(45) NULL,
  `appURL` VARCHAR(45) NULL,
  PRIMARY KEY (`appID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`userAccessApps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`userAccessApps` (
  `uaaID` INT NOT NULL,
  `app_appID` INT NOT NULL,
  `user_userID` INT NOT NULL,
  PRIMARY KEY (`uaaID`),
  INDEX `fk_userAccessApps_app1_idx` (`app_appID` ASC) ,
  INDEX `fk_userAccessApps_user1_idx` (`user_userID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`headOfDepartment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`headOfDepartment` (
  `deptID` INT UNSIGNED NOT NULL,
  `userID` INT NOT NULL,
  INDEX `fk_headOfDepartment_departement1_idx` (`deptID` ASC) ,
  INDEX `fk_headOfDepartment_user1_idx` (`userID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`appAccess`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`appAccess` (
  `acsID` INT NOT NULL,
  `acsCode` VARCHAR(10) NULL,
  `acsName` VARCHAR(45) NULL,
  `acsDescription` TEXT(255) NULL,
  `appID` INT NOT NULL,
  PRIMARY KEY (`acsID`),
  INDEX `fk_appAccess_app1_idx` (`appID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`userAccess`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`userAccess` (
  `userID` INT NOT NULL,
  `acsID` INT NOT NULL,
  INDEX `fk_userAccess_user1_idx` (`userID` ASC) ,
  INDEX `fk_userAccess_appAccess1_idx` (`acsID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`dialyReport`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`dialyReport` (
  `drID` INT NOT NULL,
  `drDate` DATE NULL,
  `drCreatedAt` DATETIME NULL,
  `drModifiedAt` TIMESTAMP NULL,
  `drIsPublished` TINYINT(1) NULL,
  `drDatePublished` DATETIME NULL,
  `userID` INT NOT NULL,
  PRIMARY KEY (`drID`),
  INDEX `fk_daylyReport_user1_idx` (`userID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`taskType`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`taskType` (
  `ttID` INT NOT NULL,
  `ttName` VARCHAR(45) NULL,
  PRIMARY KEY (`ttID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`taskStatus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`taskStatus` (
  `tsID` INT NOT NULL,
  `tsName` VARCHAR(45) NULL,
  PRIMARY KEY (`tsID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`drTasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`drTasks` (
  `drlID` INT NOT NULL,
  `drlClientName` VARCHAR(45) NULL,
  `drlTaskCode` VARCHAR(20) NULL,
  `drlTaskComment` TEXT(600) NULL,
  `ttID` INT NOT NULL,
  `tsID` INT NOT NULL,
  `drID` INT NOT NULL,
  PRIMARY KEY (`drlID`),
  INDEX `fk_drTasks_taskType1_idx` (`ttID` ASC) ,
  INDEX `fk_drTasks_taskStatus1_idx` (`tsID` ASC) ,
  INDEX `fk_drTasks_dialyReport1_idx` (`drID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`comment` (
  `comID` INT NOT NULL,
  `comComment` TEXT(600) NULL,
  `drlID` INT NULL,
  `userID` INT NOT NULL,
  `drID` INT NOT NULL,
  `comID` INT NULL,
  PRIMARY KEY (`comID`),
  INDEX `fk_comment_drTasks1_idx` (`drlID` ASC) ,
  INDEX `fk_comment_user1_idx` (`userID` ASC) ,
  INDEX `fk_comment_dialyReport1_idx` (`drID` ASC) ,
  INDEX `fk_comment_comment1_idx` (`comID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`section`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`section` (
  `secID` INT NOT NULL,
  `secName` VARCHAR(45) NULL,
  PRIMARY KEY (`secID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`evaluationItem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`evaluationItem` (
  `evaID` INT NOT NULL,
  `evaName` VARCHAR(30) NULL,
  `posID` INT NOT NULL,
  `secID` INT NOT NULL,
  `evaMaxValue` INT NULL,
  PRIMARY KEY (`evaID`),
  INDEX `fk_evaluationItem_position1_idx` (`posID` ASC) ,
  INDEX `fk_evaluationItem_section1_idx` (`secID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`yearOfOperation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`yearOfOperation` (
  `yooID` INT NOT NULL,
  `yooYear` INT(4) NULL,
  PRIMARY KEY (`yooID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`period`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`period` (
  `perID` INT NOT NULL,
  `perName` VARCHAR(45) NULL,
  `perStarDate` DATE NULL,
  `perEndDate` DATE NULL,
  `yooID` INT NOT NULL,
  PRIMARY KEY (`perID`),
  INDEX `fk_period_yearOfOperation1_idx` (`yooID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`interview`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`interview` (
  `itrwID` INT NOT NULL,
  `itrwDate` DATE NULL,
  `userID` INT NOT NULL,
  `itrwComment` TEXT NULL,
  `perID` INT NOT NULL,
  PRIMARY KEY (`itrwID`),
  INDEX `fk_interview_user1_idx` (`userID` ASC) ,
  INDEX `fk_interview_period1_idx` (`perID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`Targets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`Targets` (
  `trgID` INT NOT NULL,
  `trgTarget` TEXT NULL,
  `trgIsAccomplished` TINYINT NULL,
  `itrwID` INT NOT NULL,
  PRIMARY KEY (`trgID`),
  INDEX `fk_Targets_interview1_idx` (`itrwID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`interviewEvaluation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`interviewEvaluation` (
  `itrwID` INT NOT NULL,
  `evaID` INT NOT NULL,
  `interEvaValue` INT NULL,
  INDEX `fk_interviewEvaluation_evaluationItem1_idx` (`evaID` ASC) ,
  INDEX `fk_interviewEvaluation_interview1_idx` (`itrwID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`memo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`memo` (
  `mmID` INT NOT NULL,
  `mmTitle` VARCHAR(255) NULL,
  `mmContent` LONGTEXT NULL,
  `mmIsPublished` TINYINT(1) NULL,
  `mmDatePublished` DATE NULL,
  `mmDateCreatedAt` DATETIME NULL,
  `mmDateModifiedAt` TIMESTAMP NULL,
  `userID` INT NOT NULL,
  PRIMARY KEY (`mmID`),
  INDEX `fk_memo_user1_idx` (`userID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`userHasRead`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`userHasRead` (
  `mmID` INT NOT NULL,
  `userID` INT NOT NULL,
  `readedAt` TIMESTAMP NULL,
  INDEX `fk_userHasRead_memo1_idx` (`mmID` ASC) ,
  INDEX `fk_userHasRead_user1_idx` (`userID` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interview`.`userComment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interview`.`userComment` (
  `userID` INT NOT NULL,
  `mmID` INT NOT NULL,
  `userComment` TEXT(300) NULL,
  `commentedAt` DATETIME NULL,
  `modifiedAt` TIMESTAMP NULL,
  INDEX `fk_userComment_user1_idx` (`userID` ASC) ,
  INDEX `fk_userComment_memo1_idx` (`mmID` ASC) )
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
