# ACIT3495_assign1
Project:
Create an application with containerized microservices all hosted across docker containers.
We have a mico-service for each of the following services.
Database
Uploaded files are saved in /mnt/data in the filesystem container. The file 
      -     Authentication
Ensures users connecting to services log in with a valid user/pass
File System
This is a ubuntu image with a volume attached to it. This sends the path and the name of the file to the mysql container
Uploading
Connects to the database and uploaded files get their paths and names added to the tables on mysql
Streaming
Webpage to serve available videos to authenticated users for viewing

