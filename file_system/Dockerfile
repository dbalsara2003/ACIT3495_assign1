FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && \
    apt-get -y install openssh-server && \
    mkdir /var/run/sshd && \
    chmod 0755 /var/run/sshd

RUN mkdir /mnt/data

# Create user
RUN useradd -ms /bin/bash fileuser && \
    echo 'fileuser:fileuser' | chpasswd && \
    chown -R fileuser:fileuser /mnt/data

# Configure SSH
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication no/' /etc/ssh/sshd_config

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]

