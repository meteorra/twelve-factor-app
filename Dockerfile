FROM mhart/alpine-node
COPY index2.js .
EXPOSE 8000
CMD node index2.js