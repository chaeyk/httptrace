FROM node

COPY httptrace.js /

CMD ["node", "/httptrace.js"]

