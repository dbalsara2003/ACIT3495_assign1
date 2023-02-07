FROM nginx:latest

# Copy the HTML files to the Nginx server root directory
COPY ./html/index.html /var/www/html/

# Copy the Nginx configuration file
RUN rm -f /etc/nginx/conf.d/default.conf

COPY ./new.conf /etc/nginx/sites-available/default
COPY ./new.conf /etc/nginx/sites-enabled/default

RUN service nginx restart

#RUN systemctl restart nginx & ufw allow 'Nginx HTTP' & ufw allow OpenSSH & ufw enable

# Expose port 80 to the host system
EXPOSE 80

# # Start the Nginx service
# CMD ["nginx", "-g", "daemon off;"]
