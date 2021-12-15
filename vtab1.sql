-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2021 at 05:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vtab1`
--

-- --------------------------------------------------------

--
-- Table structure for table `aptitude`
--

CREATE TABLE `aptitude` (
  `apti_id` int(3) NOT NULL,
  `User_id` int(4) NOT NULL,
  `Score` int(3) NOT NULL,
  `No_of_Questions` int(3) NOT NULL,
  `No_of_Answered` int(3) NOT NULL,
  `No_of_Correct` int(3) NOT NULL,
  `No_of_Wrong` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aptitude`
--

INSERT INTO `aptitude` (`apti_id`, `User_id`, `Score`, `No_of_Questions`, `No_of_Answered`, `No_of_Correct`, `No_of_Wrong`) VALUES
(4, 57, 40, 15, 15, 6, 9),
(5, 57, 73, 15, 15, 11, 4),
(6, 57, 0, 15, 0, 0, 0),
(7, 57, 27, 15, 15, 4, 11),
(8, 57, 33, 15, 16, 5, 11),
(9, 57, 27, 15, 15, 4, 11),
(10, 57, 27, 15, 15, 4, 11),
(11, 57, 20, 15, 15, 3, 12),
(12, 57, 13, 15, 15, 2, 13);

-- --------------------------------------------------------

--
-- Table structure for table `bank_info`
--

CREATE TABLE `bank_info` (
  `Bank_id` int(11) NOT NULL,
  `User_ID` int(3) NOT NULL,
  `Bank_name` varchar(255) NOT NULL,
  `accountNumber` int(20) NOT NULL,
  `IFSC_Code` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank_info`
--

INSERT INTO `bank_info` (`Bank_id`, `User_ID`, `Bank_name`, `accountNumber`, `IFSC_Code`) VALUES
(10, 19, 'ICIC', 9089900, 'SBI909000'),
(11, 53, 'sbi', 876543219, '8765432'),
(12, 54, 'sdfgh', 1234567, 'dfghjm'),
(15, 57, 'SBI', 99849849, 'DSF45FVD6D'),
(16, 58, '', 0, ''),
(17, 59, '', 0, ''),
(18, 55, 'State bank of india', 2147483647, 'SBING34'),
(19, 60, '', 0, ''),
(20, 61, '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `inbox`
--

CREATE TABLE `inbox` (
  `message_id` int(11) NOT NULL,
  `sender_id` int(3) NOT NULL,
  `receiver_id` int(3) NOT NULL,
  `Subject` varchar(50) NOT NULL,
  `message` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Status` enum('Unread','Read') NOT NULL DEFAULT 'Unread'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `inbox`
--

INSERT INTO `inbox` (`message_id`, `sender_id`, `receiver_id`, `Subject`, `message`, `time`, `Status`) VALUES
(19, 19, 53, 'sub9', 'wqesdfghjkm,', '2021-11-01 12:21:38', 'Read'),
(20, 53, 19, 'Subject of Messages', 'sample Message ', '2021-11-19 13:42:37', 'Unread'),
(21, 53, 55, 'Project Documentation', 'Please see the project documentation and give your feedback ', '2021-11-18 14:48:41', 'Unread'),
(22, 54, 19, 'kagshdhjsdj', 'fsghnschjsdb', '2021-11-02 04:46:51', 'Unread'),
(23, 19, 54, 'sub9', 'aesrdgfhjnbcvxcz', '2021-11-02 04:47:31', 'Unread'),
(24, 19, 54, 'Hai', 'Bye', '2021-11-02 05:06:31', 'Unread'),
(25, 55, 53, 'Subject', 'fdxcgbhnm', '2021-11-19 13:43:10', 'Unread'),
(26, 19, 57, 'Hire', 'Be Ready', '2021-11-26 08:11:16', 'Unread');

-- --------------------------------------------------------

--
-- Table structure for table `learnings`
--

CREATE TABLE `learnings` (
  `Learnings_id` int(4) NOT NULL,
  `Requester_id` int(3) NOT NULL,
  `Approver_id` int(3) NOT NULL,
  `Start_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `End_date` timestamp NULL DEFAULT NULL,
  `Status` enum('Submitted','Approved','Rejected') NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `Course_Subject` varchar(255) NOT NULL,
  `Comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `learnings`
--

INSERT INTO `learnings` (`Learnings_id`, `Requester_id`, `Approver_id`, `Start_date`, `End_date`, `Status`, `course_name`, `Course_Subject`, `Comments`) VALUES
(10, 53, 54, '2021-11-01 07:47:21', '2021-11-18 07:46:42', 'Approved', 'Java', 'Java', ''),
(11, 53, 54, '2021-11-26 13:00:00', '2021-11-18 13:00:00', 'Rejected', 'ruby', 'hgfhgdsfsucygdsyufgdsyu', ''),
(12, 53, 54, '2021-10-30 18:30:00', '2021-12-10 18:30:00', 'Submitted', 'javascript', 'sdvsdsdcds', NULL),
(13, 53, 54, '2021-10-30 13:00:00', '2021-12-10 13:00:00', 'Rejected', 'python', 'hgfzasdfghjkl', 'qwedfghkl'),
(14, 54, 19, '2021-11-01 13:00:00', '2021-11-02 13:00:00', 'Rejected', 'jack', 'wqertfghj', 'Poda'),
(15, 55, 19, '2021-11-01 13:00:00', '2021-11-01 13:00:00', 'Approved', 'javascript', 'waesgfhjkl;', 'EEEEEEE'),
(16, 55, 19, '2021-12-02 13:00:00', '2021-10-31 13:00:00', 'Rejected', 'fdghj', 'waesgfhjkl;', 'Noooooooooooooo');

-- --------------------------------------------------------

--
-- Table structure for table `performance`
--

CREATE TABLE `performance` (
  `peff_id` int(3) NOT NULL,
  `receiver_id` int(3) NOT NULL,
  `assigner_id` int(3) NOT NULL,
  `goal` varchar(255) NOT NULL,
  `objective` varchar(500) NOT NULL,
  `status` enum('Assigned','Completed','') NOT NULL,
  `assigned_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `due_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `comments` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `performance`
--

INSERT INTO `performance` (`peff_id`, `receiver_id`, `assigner_id`, `goal`, `objective`, `status`, `assigned_date`, `due_date`, `comments`) VALUES
(37, 53, 54, 'Java', 'Java', 'Completed', '2021-11-02 05:24:57', '2021-11-25 08:10:53', '[object Object]'),
(38, 54, 19, 'C', 'C++', 'Assigned', '2021-11-02 05:20:27', '2021-11-02 05:20:27', 'Do it'),
(39, 53, 55, 'asdfgh', 'esdfghj', 'Completed', '2021-11-02 05:47:49', '2021-11-02 00:15:12', 'sdfghjkl'),
(40, 55, 19, 'JS', 'Js', '', '2021-11-02 05:46:00', '2021-11-02 00:15:23', 'Done'),
(41, 55, 19, 'C++', 'C++', 'Completed', '2021-11-02 05:47:06', '2021-11-02 00:16:56', 'Ok');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `schedule_id` int(3) NOT NULL,
  `User_id` int(4) NOT NULL,
  `Meet_link` varchar(100) NOT NULL,
  `Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`schedule_id`, `User_id`, `Meet_link`, `Time`) VALUES
(14, 57, 'https://meet.google.com/zge-onny-xrd', '2021-12-10 10:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `technical`
--

CREATE TABLE `technical` (
  `tech_id` int(3) NOT NULL,
  `User_id` int(4) NOT NULL,
  `Score` int(3) NOT NULL,
  `No_of_Questions` int(3) NOT NULL,
  `No_of_Answered` int(3) NOT NULL,
  `No_of_Correct` int(3) NOT NULL,
  `No_of_Wrong` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `technical`
--

INSERT INTO `technical` (`tech_id`, `User_id`, `Score`, `No_of_Questions`, `No_of_Answered`, `No_of_Correct`, `No_of_Wrong`) VALUES
(1, 57, 27, 15, 15, 4, 11);

-- --------------------------------------------------------

--
-- Table structure for table `time_off`
--

CREATE TABLE `time_off` (
  `timeoff_id` int(3) NOT NULL,
  `approver_id` int(4) NOT NULL,
  `requester_id` int(4) NOT NULL,
  `start_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_date` timestamp NULL DEFAULT NULL,
  `status` enum('Submitted','Approved','Rejected','') NOT NULL,
  `type_leave` enum('Sick','Casual','Personal','') NOT NULL,
  `leave_subject` varchar(255) NOT NULL,
  `comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `time_off`
--

INSERT INTO `time_off` (`timeoff_id`, `approver_id`, `requester_id`, `start_date`, `end_date`, `status`, `type_leave`, `leave_subject`, `comments`) VALUES
(13, 54, 53, '2021-11-01 13:00:00', '2021-12-03 13:00:00', 'Approved', 'Sick', 'hgfhgdsfsucygdsyufgdsyu', 'Ok'),
(14, 54, 53, '2021-11-01 13:00:00', '2021-11-01 13:00:00', 'Rejected', 'Casual', 'wqertfghj', 'No'),
(15, 19, 54, '2021-11-01 13:00:00', '2021-11-29 13:00:00', 'Approved', 'Casual', 'hgfhgdsfsucygdsyufgdsyu', 'Ok'),
(16, 19, 54, '2021-10-30 13:00:00', '2021-11-05 13:00:00', 'Rejected', 'Personal', 'uyfdsas', 'No'),
(18, 19, 55, '2021-11-16 18:30:00', '2021-11-24 18:30:00', 'Submitted', 'Sick', 'Sick leave', NULL),
(19, 19, 55, '2021-11-17 18:30:00', '2021-11-19 18:30:00', 'Submitted', 'Casual', 'Spend with family ', NULL),
(20, 54, 53, '2021-11-15 18:30:00', '2021-11-18 18:30:00', 'Submitted', 'Casual', 'Going theatre', NULL),
(21, 54, 53, '2021-11-19 18:30:00', '2021-11-26 18:30:00', 'Submitted', 'Casual', 'Test  Reason', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `time_sheet`
--

CREATE TABLE `time_sheet` (
  `Sheet_id` int(3) NOT NULL,
  `User_id` int(3) NOT NULL,
  `Total_days_of_work` int(2) NOT NULL,
  `Total_days_of_leave` int(2) NOT NULL,
  `MonthYear` varchar(10) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `time_sheet`
--

INSERT INTO `time_sheet` (`Sheet_id`, `User_id`, `Total_days_of_work`, `Total_days_of_leave`, `MonthYear`) VALUES
(11, 53, 28, 2, '2021-01'),
(12, 54, 23, 5, '2021-12'),
(13, 55, 28, 2, '2021-12'),
(14, 53, 23, 4, '2021-12');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `User_id` int(4) NOT NULL,
  `Email_id` varchar(100) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Type` enum('Ceo','Manager','HR','Payroll','Employee','Job') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`User_id`, `Email_id`, `Name`, `Password`, `Type`) VALUES
(19, '123@gmail.com', 'Balamuralidharan T', '123', 'Ceo'),
(53, 'Emp@gmail.com', 'Eazhil', 'emp', 'Employee'),
(54, 'hr@gmail.com', 'HR', 'hr', 'HR'),
(55, 'manager@gmail.com', 'Magesh', 'manager', 'Manager'),
(57, 'job@gmail.com', 'Harish Krishna', 'job', 'Job'),
(58, 'Payroll@gmail.com', 'Payroll', 'payroll', 'Payroll'),
(59, 'mani@gmail.com', 'Mani', 'mani', 'Manager'),
(60, 'dinesh@gmail.com', 'dinesh', 'dinesh@gmail.com', 'Payroll'),
(61, 'asdfh', 'Rajesh', 'asdfghjl', 'Payroll');

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `info_id` int(3) NOT NULL,
  `User_id` int(4) NOT NULL,
  `DOB` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ph_no` int(11) NOT NULL,
  `Gender` enum('Male','Female','Trancender') NOT NULL,
  `Address` varchar(255) NOT NULL,
  `linkedin` varchar(100) NOT NULL,
  `github` varchar(100) NOT NULL,
  `Aadhar` bigint(12) NOT NULL,
  `Pan` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`info_id`, `User_id`, `DOB`, `ph_no`, `Gender`, `Address`, `linkedin`, `github`, `Aadhar`, `Pan`) VALUES
(18, 19, '2021-10-03 14:34:49', 98765421, 'Male', 'Coimbatore', 'esdfg111', 'he111', 111, 'JHJK09090U'),
(20, 53, '0000-00-00 00:00:00', 2147483647, 'Male', 'werfghjk', 'linkedIn@linked.in', 'github@gmail.comnn', 6543212345678, '1234563445'),
(24, 57, '2011-11-10 07:38:48', 84944984, 'Male', 'NKAK', 'dfsgdgdf4g7er7r', 'klmlkdfmdg5d4fg', 9814044884, '44FDGDG5D4'),
(25, 58, '0000-00-00 00:00:00', 0, '', '', '', '', 0, ''),
(26, 54, '2021-10-31 19:28:58', 987654321, 'Male', 'ersrdtgfh', 'dsvfcbvn', 'dvsfcbvn ', 98765432, '554444'),
(27, 59, '0000-00-00 00:00:00', 0, '', '', '', '', 0, ''),
(28, 55, '2021-11-01 13:07:13', 2147483647, 'Female', '2/227,East street , Appanaickenpatti', 'Magesh170920', 'Magesh1709', 23423456789, '4321122'),
(29, 60, '0000-00-00 00:00:00', 0, '', '', '', '', 0, ''),
(30, 61, '0000-00-00 00:00:00', 0, '', '', '', '', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aptitude`
--
ALTER TABLE `aptitude`
  ADD PRIMARY KEY (`apti_id`),
  ADD KEY `User_id` (`User_id`);

--
-- Indexes for table `bank_info`
--
ALTER TABLE `bank_info`
  ADD PRIMARY KEY (`Bank_id`),
  ADD KEY `user_id` (`User_ID`);

--
-- Indexes for table `inbox`
--
ALTER TABLE `inbox`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `learnings`
--
ALTER TABLE `learnings`
  ADD PRIMARY KEY (`Learnings_id`),
  ADD KEY `Requester_id` (`Requester_id`),
  ADD KEY `Approver_id` (`Approver_id`);

--
-- Indexes for table `performance`
--
ALTER TABLE `performance`
  ADD PRIMARY KEY (`peff_id`),
  ADD KEY `Fk_user` (`receiver_id`),
  ADD KEY `manager_fk` (`assigner_id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `User_id` (`User_id`);

--
-- Indexes for table `technical`
--
ALTER TABLE `technical`
  ADD PRIMARY KEY (`tech_id`),
  ADD KEY `User_id` (`User_id`);

--
-- Indexes for table `time_off`
--
ALTER TABLE `time_off`
  ADD PRIMARY KEY (`timeoff_id`),
  ADD KEY `Fk_requester` (`requester_id`),
  ADD KEY `approver_id` (`approver_id`);

--
-- Indexes for table `time_sheet`
--
ALTER TABLE `time_sheet`
  ADD PRIMARY KEY (`Sheet_id`),
  ADD KEY `user_id_fk` (`User_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`info_id`),
  ADD KEY `FK_user_info` (`User_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aptitude`
--
ALTER TABLE `aptitude`
  MODIFY `apti_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `bank_info`
--
ALTER TABLE `bank_info`
  MODIFY `Bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `inbox`
--
ALTER TABLE `inbox`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `learnings`
--
ALTER TABLE `learnings`
  MODIFY `Learnings_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `performance`
--
ALTER TABLE `performance`
  MODIFY `peff_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `schedule_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `technical`
--
ALTER TABLE `technical`
  MODIFY `tech_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `time_off`
--
ALTER TABLE `time_off`
  MODIFY `timeoff_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `time_sheet`
--
ALTER TABLE `time_sheet`
  MODIFY `Sheet_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `User_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `info_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aptitude`
--
ALTER TABLE `aptitude`
  ADD CONSTRAINT `aptitude_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `bank_info`
--
ALTER TABLE `bank_info`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `inbox`
--
ALTER TABLE `inbox`
  ADD CONSTRAINT `receiver_id` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `sender_id` FOREIGN KEY (`sender_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `learnings`
--
ALTER TABLE `learnings`
  ADD CONSTRAINT `Approver_id` FOREIGN KEY (`Approver_id`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `Requester_id` FOREIGN KEY (`Requester_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `performance`
--
ALTER TABLE `performance`
  ADD CONSTRAINT `manager_fk` FOREIGN KEY (`assigner_id`) REFERENCES `user` (`User_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `technical`
--
ALTER TABLE `technical`
  ADD CONSTRAINT `technical_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `time_off`
--
ALTER TABLE `time_off`
  ADD CONSTRAINT `Fk_approver` FOREIGN KEY (`approver_id`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `Fk_requester` FOREIGN KEY (`requester_id`) REFERENCES `user` (`User_id`),
  ADD CONSTRAINT `time_off_ibfk_1` FOREIGN KEY (`approver_id`) REFERENCES `user` (`User_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `time_sheet`
--
ALTER TABLE `time_sheet`
  ADD CONSTRAINT `user_id_fk` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `user_info`
--
ALTER TABLE `user_info`
  ADD CONSTRAINT `FK_user_info` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
