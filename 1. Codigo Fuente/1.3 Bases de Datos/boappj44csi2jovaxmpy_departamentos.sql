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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-128472463';

--
-- Table structure for table `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamentos` (
  `codigo_dpto` char(2) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`codigo_dpto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamentos`
--

LOCK TABLES `departamentos` WRITE;
/*!40000 ALTER TABLE `departamentos` DISABLE KEYS */;
INSERT INTO `departamentos` VALUES ('05','ANTIOQUIA                     '),('08','ATLANTICO                     '),('11','SANTA FE DE BOGOTA D.C.       '),('13','BOLIVAR                       '),('15','BOYACA                        '),('17','CALDAS                        '),('18','CAQUETA                       '),('19','CAUCA                         '),('20','CESAR                         '),('23','CORDOBA                       '),('25','CUNDINAMARCA                  '),('27','CHOCO                         '),('41','HUILA                         '),('44','GUAJIRA                       '),('47','MAGDALENA                     '),('48','SANTAMARTA D.E                '),('50','META                          '),('52','NARINO                        '),('54','NORTE DE SANTANDER            '),('63','QUINDIO                       '),('66','RISARALDA                     '),('68','SANTANDER                     '),('70','SUCRE                         '),('73','TOLIMA                        '),('76','VALLE                         '),('81','ARAUCA                        '),('85','CASANARE                      '),('86','PUTUMAYO                      '),('88','SAN ANDRES                    '),('91','AMAZONAS                      '),('94','GUAINIA                       '),('95','GUAVIARE                      '),('97','VAUPES                        '),('99','VICHADA                       ');
/*!40000 ALTER TABLE `departamentos` ENABLE KEYS */;
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

-- Dump completed on 2022-04-06  0:18:18
