FROM ubuntu:latest

MAINTAINER Souhail Hanfi <souhail.hanfi@neoxia.com>

RUN apt-get update -y && apt-get -y install nodejs

ENV PATH $PATH:/nodejs/bin

# Install Bower & Gulp
RUN npm install -g gulp


#clone the repo
RUN git clone https://github.com/hanfi/ES6-Blog-Post-sources.git /app
WORKDIR /app
RUN npm install

VOLUME ["/app"]

EXPOSE 3000
ENTRYPOINT ["gulp", "watch"]
