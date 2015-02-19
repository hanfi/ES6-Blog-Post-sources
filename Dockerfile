FROM google/debian:wheezy

MAINTAINER Souhail Hanfi <souhail.hanfi@neoxia.com>

RUN apt-get update -y && apt-get install --no-install-recommends -y -q curl python build-essential git ca-certificates
RUN mkdir /nodejs && curl http://nodejs.org/dist/v0.10.33/node-v0.10.33-linux-x64.tar.gz | tar xvzf - -C /nodejs --strip-components=1

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
