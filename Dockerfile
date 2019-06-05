FROM ubuntu:latest
WORKDIR /home/app
COPY ./* /home/app/
# Cleanup
RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
RUN npm install
EXPOSE 5000
# start app
CMD ["npm", "start"]
