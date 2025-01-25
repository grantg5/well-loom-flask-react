FROM postgres:17.2

ENV POSTGRES_USER well_loom_db_user
ENV POSTGRES_PASSWORD testingPassword
ENV POSTGRES_DB well-loom-db

RUN chmod 644 ./CreateDB.sql
ADD ./CreateDB.sql /docker-entrypoint-initdb.d/

EXPOSE 5432