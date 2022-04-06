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
a38a16d0-767a-11eb-abe2-cecd029e558e:1-128472483';

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idProducto` int NOT NULL,
  `cantidad` int NOT NULL,
  `precioUni` int NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `talla` varchar(45) NOT NULL,
  `idCliente` int NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `subTotal` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (11,7,8,5437556,'gbfv.fghjx','calculator','math','k',345567,'chaqueta',4567),(12,3,10,18222,'www.phone.com','iphone','algo teleper','s',1000,'iphone',NULL),(13,7,10,50,'www.vont.com','iphone','algo teleper','s',1000,'iphone',500),(14,8,10,50,'www.vont.com','iphone','algo teleper','s',1000,'iphone',500),(15,7,1,2000,'url','Camiseta','logo java','L',1000,'camiseta',2000),(16,7,1,2000,'url','Camiseta','logo java','L',1000,'camiseta',2000),(17,7,1,2000,'http://res.cloudinary.com/anamile/image/upload/v1648579307/twwd0okbixf8datee7sk.jpg','Camiseta','logo java','L',1000,'camiseta',2000),(18,7,1,2000,'http://res.cloudinary.com/anamile/image/upload/v1648579307/twwd0okbixf8datee7sk.jpg','Camiseta','logo java','L',1000,'camiseta',2000),(19,7,1,2000,'http://res.cloudinary.com/anamile/image/upload/v1648579307/twwd0okbixf8datee7sk.jpg','Camiseta','logo java','L',1000,'camiseta',2000),(20,7,1,2000,'http://res.cloudinary.com/anamile/image/upload/v1648579307/twwd0okbixf8datee7sk.jpg','Camiseta','logo java','L',1000,'camiseta',2000);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
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

-- Dump completed on 2022-04-06  0:18:35
