CREATE DATABASE IF NOT EXISTS video_streaming;
CREATE TABLE video_streaming.video_library (video_id INT NOT NULL AUTO_INCREMENT, video_title VARCHAR(255) NOT NULL, video_path VARCHAR(255) NOT NULL, PRIMARY KEY (video_id));

