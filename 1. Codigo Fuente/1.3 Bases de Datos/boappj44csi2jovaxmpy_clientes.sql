-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: boappj44csi2jovaxmpy-mysql.services.clever-cloud.com    Database: boappj44csi2jovaxmpy
-- ------------------------------------------------------
-- Server version	8.0.22-13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-128472445';

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `cedula` char(20) NOT NULL,
  `nombres` varchar(120) NOT NULL,
  `telefono` char(50) NOT NULL,
  `departamento` char(2) NOT NULL,
  `ciudad` int NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `correo` char(80) NOT NULL,
  `contraseña` varchar(200) NOT NULL,
  `rol` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`cedula`),
  KEY `departamento` (`departamento`),
  KEY `ciudad` (`ciudad`),
  CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`departamento`) REFERENCES `departamentos` (`codigo_dpto`),
  CONSTRAINT `clientes_ibfk_2` FOREIGN KEY (`ciudad`) REFERENCES `ciudades` (`id_ciudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES ('0000','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$ja65vX3ESY3h7ptV$4a660d19c6555b01af28c95e500528d8b4f4604a2640270020aa9e9da96c0f44',1),('0001','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$a4hx5W1A3CNGZAda$45624fac4324c4e72ddd9459523d8e27f639d9e1f76f10ec421b44ea652fdac7',1),('0002','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$RW02yb3AoZeWSWYx$99d51aa3a40f2de1f54da5d4b06ddf42c10113c5009f6a749342b03de3aa0d14',1),('0003','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$UNXyqACJM0TAvbwr$80d9a206ba1508bd2cf87634b4ee65cd858c243c8aaff3dd0383047b74baf3e0',1),('0004','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$9K9y1QVCRNvEmb9h$78f75d3ab4b10a30bd749eebec8c7c24f28595b071ad4ce10daadce20706e35b',1),('0005','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$3dzpMV7UiC0Sqt8C$496e5a509b854ae487d4a24ac66e1dd924f31485bf35366bcdedae5b10e0601b',1),('0006','Admin','320','63',1806,'mi casa','anamile650@gmail.com','pbkdf2:sha256:260000$vBU7qGN3NFgUWkJL$1d153ecb0a45b9d964157d1ea7e9fd020d782f5aa1b04909fac9d81b747d4ba0',1),('1000','Ana Mile','300250','63',1,'caminos de cocora','mile@gmail.com','pbkdf2:sha256:260000$gQsdmt3vNAQ709xy$911855611fe1146409b66d1e3a720de7ae2a47df1d5691ac3e867fcdac1c2564',1),('1093','Luisa','320','63',1806,'su casa','luisa@gmail.com','luisa123',NULL),('123','lu','3108470148','63',1,'No trabajo','mile@gmail.com','pbkdf2:sha256:260000$FpHmYPdwRlj4Z4fp$d886bbecfeb84364541ca92c67f1660b77a5e9f7dfcea80067bad0184d6d5e71',1),('2100','Mile','320','63',1806,'mi casa','mile2@gmail.com','mile1234',1),('2200','leandro','320','63',1806,'mi casa','leandro@gmail.com','lea1234',1),('2222','Super Admin','300','63',1,'la casa','Admin123','Admin2',2),('3100','leandro','320','63',1806,'mi casa','leandro2@gmail.com','pbkdf2:sha256:260000$5ibwLDg225vmeOKF$5ce37c2e333a4379d215578b9c7b26f264658e83857fded3ffc35e5ede6b750d',1),('3200','cris','320','63',1806,'mi casa','cris@gmail.com','pbkdf2:sha256:260000$V4IjQXoSYhMFoRDc$ee6ea410670c18b87c396d218fd30fabc5528bbde595ca42cee436e34a870f1b',1),('3300','venus','320','63',1806,'mi casa','venus@gmail.com','pbkdf2:sha256:260000$PSXbJ8PDfgwyybzC$3a1f20ba8b5fe10f215e63803d62ca6b97ecaeb17c091f1d666e6783823f7f9b',1),('3333','Admin','320','63',1806,'mi casa','Admin3@gmail.com','pbkdf2:sha256:260000$nXkYEpjf1FXmCyz8$47a4892310641e834628bb7730b8cd27bcffee85bad1d55d9aaab31aa6764287',2),('3500','venus','320','63',1806,'mi casa','venus@gmail.com','pbkdf2:sha256:260000$nP5uKzlZ6xIAG1pf$7d8df0bec52fdf301439e8be407e05a079b19171c218ec95ba45eeeb690005da',1),('65','jesus','24','25',25,'acacc','jesusDPT@gmail.coim','pbkdf2:sha256:260000$Rzt8Pip4LKTSmNaF$f8144758aaef04a7ee707812cc6c1d6cabab5b696a2d49cd173e2de722926709',1);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-06  0:18:14
