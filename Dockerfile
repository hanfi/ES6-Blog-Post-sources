FROM google/nodejs

MAINTAINER Souhail Hanfi <souhail.hanfi@neoxia.com>

# Install Bower & Gulp
RUN npm install -g gulp

#clone the repo
RUN git clone https://github.com/hanfi/ES6-Blog-Post-sources.git /app
WORKDIR /app
RUN npm install

VOLUME ["/app"]

EXPOSE 3000
ENTRYPOINT ["gulp", "watch"]
