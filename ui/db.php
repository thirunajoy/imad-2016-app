<?php

error_reporting(E_ERROR);
//database name --> downdropcomment
//table name --> commenttable
//table values --> name--> varchar(20)
				// job --> varchar (25)
				// message --> varchar (250)

$conn=mysql_connect("localhost","root","");
$db=mysql_select_db("downdropcomment",$conn);
?>