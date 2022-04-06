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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-128472429';

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `imagenes` varchar(500) DEFAULT NULL,
  `nombre` varchar(120) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `talla` char(10) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `categoria` char(80) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `color` char(30) DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (2,'http://res.cloudinary.com/anamile/image/upload/v1648579307/twwd0okbixf8datee7sk.jpg','Camiseta Gris','Camiseta con logo de java','M',40000,'Camiseta',10,'Ngergo'),(8,'http://res.cloudinary.com/anamile/image/upload/v1649092506/cczupjit51pwp3jriqjb.jpg','Buzo Rojo','Termo ','M',20000,'Gorra',10,'url todos'),(133,'http://res.cloudinary.com/anamile/image/upload/v1649092457/hmyrojszuejovq3xggud.jpg','Gorra Roja','Gorra','L',15000,'Gorra',12,'rojo'),(134,'http://res.cloudinary.com/anamile/image/upload/v1649092474/xl3vhelibp11gt0otgxt.jpg','Camiseta Azul','Camiseta azul con logo de java','M',40000,'',10,'azul'),(135,'http://res.cloudinary.com/anamile/image/upload/v1649092484/vjmaebwifoj1uckqmzlb.jpg','Buzo Negro','Buzo negro logo react','XL',80000,'vasos',12,'Ngergo');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
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

-- Dump completed on 2022-04-06  0:18:09
