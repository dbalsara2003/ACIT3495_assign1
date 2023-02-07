FROM nginx:latest

# Copy the HTML files to the Nginx server root directory
COPY ./html/index.html /var/www/html/

RUN mkdir -p /var/www/html/viewer

COPY ./html/view.html /var/www/html/viewer/

# Copy the Nginx configuration file
RUN rm -f /etc/nginx/conf.d/default.conf
RUN rm -f /etc/nginx/sites-available/default

COPY ./new.conf /etc/nginx/sites-available/default

RUN rm -f /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/sites-enabled
RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled
RUN service nginx restart

#RUN systemctl restart nginx & ufw allow 'Nginx HTTP' & ufw allow OpenSSH & ufw enable

# Expose port 80 to the host system
EXPOSE 80

# # Start the Nginx service
# CMD ["nginx", "-g", "daemon off;"]
