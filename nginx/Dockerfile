FROM nginx:latest

# Copy the HTML files to the Nginx server root directory
COPY ./html /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the host system
EXPOSE 80

# Start the Nginx service
CMD ["nginx", "-g", "daemon off;"]
