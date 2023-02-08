# Use the official MySQL image as the base image
FROM mysql:8.0

# Set the environment variables for the MySQL root user
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=video_streaming

# Copy the SQL file that contains the CREATE TABLE statement
COPY create_table.sql /docker-entrypoint-initdb.d/

EXPOSE 3306/tcp
