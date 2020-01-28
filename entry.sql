-- MySQL dump 10.13  Distrib 8.0.18, for Linux (x86_64)
--
-- Host: localhost    Database: entry
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `host`
--

DROP TABLE IF EXISTS `host`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `host` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `host`
--

LOCK TABLES `host` WRITE;
/*!40000 ALTER TABLE `host` DISABLE KEYS */;
INSERT INTO `host` VALUES (1,'rahul','r@gmail.com','456789075'),(2,'priti','priti@gmail.com','4567888'),(3,'priti','priti@gmail.com','4567888'),(4,'priti','priti@gmail.com','4567888'),(5,'priti','priti@gmail.com','4567888'),(6,'tripti','tripti@2015.com','456789'),(7,'tripti','t@gmail.com','456789'),(8,'priti','p@gmail.com','5679643'),(9,'priti','p@gmail.com','5679643'),(10,'priti','p@gmail.com','5679643'),(11,'priti','p@gmail.com','5679643'),(12,'priti','p@gmail.com','5679643'),(13,'priti','p@gmail.com','5679643'),(14,'ani','a@gmail.com','45678954'),(15,'ani','a@gmail.com','45678954'),(16,'ani','a@gmail.com','45678954'),(17,'ani','a@gmail.com','45678954'),(18,'ani','a@gmail.com','45678954'),(19,'ani','a@gmail.com','45678954'),(20,'ani','a@gmail.com','45678954'),(21,'ani','a@gmail.com','45678954'),(22,'ani','a@gmail.com','45678954'),(23,'ani','a@gmail.com','45678954'),(24,'ani','a@gmail.com','45678954'),(25,'ani','a@gmail.com','45678954'),(26,'ani','a@gmail.com','45678954'),(27,'ani','a@gmail.com','45678954'),(28,'ani','a@gmail.com','45678954'),(29,'ani','a@gmail.com','45678954'),(30,'ani','a@gmail.com','45678954'),(31,'ani','a@gmail.com','45678954'),(32,'ani','a@gmail.com','45678954'),(33,'ani','a@gmail.com','45678954'),(34,'vansh','v@gmail.com','345788'),(35,'vansh','v@gmail.com','345788'),(36,'vansh','v@gmail.com','345788'),(37,'vansh','v@gmail.com','345788'),(38,'vansh','v@gmail.com','345788'),(39,'vansh','v@gmail.com','345788'),(40,'vansh','v@gmail.com','345788'),(41,'vansh','v@gmail.com','345788'),(42,'vansh','v@gmail.com','345788'),(43,'vansh','v@gmail.com','345788'),(44,'vansh','v@gmail.com','345788'),(45,'vansh','v@gmail.com','345788'),(46,'vansh','v@gmail.com','345788'),(47,'Tripti Shukla','tripti12shukla1280@gmail.com','7355780958'),(48,'Tripti Shukla','zentripti@gmail.com','7355780958'),(49,'Tripti Shukla','zentripti@gmail.com','7355780958'),(50,'Tripti Shukla','zentripti@gmail.com','7355780958'),(51,'tripti','zentripti@gmail.com','7355780958'),(52,'tripti','zentripti@gmail.com','7355780958'),(53,'tripti','zentripti@gmail.com','8765467890'),(54,'tripti','zentripti@gmail.com','8765467890'),(55,'tripti','zentripti@gmail.com','8765467890'),(56,'tripti','zentripti@gmail.com','7355780958'),(57,'tripti','zentripti@gmail.com','7355780958'),(58,'tripti','zentripti@gmail.com','7355780958'),(59,'tripti','zentripti@gmail.com','7355780958'),(60,'tripti','zentripti@gmail.com','7355780958'),(61,'tripti','zentripti@gmail.com','756789054'),(62,'tripti','zentripti@gmail.com','56789045'),(63,'tripti','zentripti@gmail.com','7355780958'),(64,'vaibhav','v@gmail.com','5678954'),(65,'zen tripti','zentripti@gmail.com','9871650360'),(66,'zen ','zentripti@gmail.com','7355780958'),(67,'tripti','zentripti@gmail.com','7355780958'),(68,'tripti','tripti12shukla1280@gmail.com','7355780958'),(69,'tripti','zentripti@gmail.com','7355780958'),(70,'tripti','triptii.shukla12@gmail.com','7355780958'),(71,'tripti','triptii.shukla12@gmail.com','7355780958'),(72,'tripti','triptii.shukla12@gmail.com','7355780958'),(73,'tripti shukla','zentripti@gmail.com','7355780958'),(74,'Tripti Shukla','zentripti@gmail.com','7355780958'),(75,'Tripti Shukla','zentripti@gmail.com','7355780958'),(76,'Tripti Shukla','triptii.shukla12@gmail.com','7355780958'),(77,'Tripti Shukla','zentripti@gmail.com','7355780958'),(78,'Tripti Shukla','zentripti@gmail.com','7355780958');
/*!40000 ALTER TABLE `host` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `arrival` datetime NOT NULL,
  `departure` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'tripti','tripti12shukla1280@gmail.com','7355780958','2019-11-21 23:02:04',NULL),(2,'Tripti Shukla','tripti12shukla1280@gmail.com','754568976','2019-11-22 01:10:24',NULL),(3,'Rahul Chaudhary','rahul@gmail.com','8905645678','2019-11-23 01:44:36',NULL),(4,'rahul','rahul@gmail.com','546789056','2019-11-23 02:25:50',NULL),(5,'rahul','rahul@gmail.com','345678','2019-11-23 02:37:34',NULL),(6,'rahul','rahul@gmail.com','654789067','2019-11-23 02:40:13',NULL),(7,'rahul','r@gmail.com','76578987645','2019-11-23 02:47:13',NULL),(8,'tripti','zentripti@gmail.com','7355780958','2019-11-23 02:47:45',NULL),(9,'rahul','r@gmail.com','56789045','2019-11-23 02:51:13',NULL),(10,'rahul','er@gmail.com','456789','2019-11-23 02:53:35',NULL),(11,'rahul','r@gmail.com','6578907','2019-11-23 03:01:35',NULL),(12,'rahul','r@gmail.com','5679000','2019-11-23 03:03:27',NULL),(13,'rahul','r@gmail.com','76545898765','2019-11-23 12:41:43',NULL),(14,'tripti','tripti@gmail.com','734567859','2019-11-28 14:43:32',NULL),(15,'Rahul ','r@gmail.com','7656789078','2019-11-28 19:43:08',NULL),(16,'tripti shukla','tripti12shukla1280@gmail.com','7355780958','2019-11-28 19:44:52',NULL),(17,'tripti ','triptii.shukla12@gmail.com','9871650360','2019-11-28 20:07:44',NULL),(18,'aditi','zentripti@gmail.com','567654567','2019-11-28 20:10:09',NULL),(19,'rahul','vaanshjain@gmail.com','67890567','2019-11-28 20:12:03',NULL),(20,'a','a@gmail.com','2345678','2019-11-28 20:15:09',NULL),(21,'vansh','triptii.shukla12@gmail.com','7355233543','2019-11-28 20:19:30',NULL),(22,'Vansh Jain','vaanshjain@gmail.com','9871650360','2019-11-28 20:22:03',NULL),(23,'Vansh Jain','vaanshjain@gmail.com','9871656780','2019-11-28 20:30:49',NULL),(24,'Vansh Jain','vaanshjain@gmail.com','9871654342','2019-11-28 22:20:05',NULL),(25,'Vansh Jain','zentripti@gmail.com','8765434567','2019-11-28 22:29:03',NULL),(26,'Vansh Jain','vaanshjain@gmail.com','9871656789','2019-11-28 22:33:43',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-28  8:10:12
