FROM postgres:17.2

ENV POSTGRES_USER well_better_db_user
ENV POSTGRES_PASSWORD testingPassword
ENV POSTGRES_DB well-better-db 

RUN apt-get update && apt-get install -y postgresql-17.2 postgresql-client-17.2 postgresql-contrib-17.2
ADD CreateDB.sql /docker-entrypoint-initdb.d/
