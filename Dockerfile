FROM google/nodejs

MAINTAINER Souhail Hanfi <souhail.hanfi@neoxia.com>

# Install Bower & Gulp
RUN npm install -g gulp

#clone the repo
WORKDIR /app
RUN git clone https://github.com/hanfi/ES6-Blog-Post-sources.git /app
RUN npm install
RUN npm install gulp

VOLUME /app
EXPOSE 3000
ENTRYPOINT ["gulp", "watch"]
