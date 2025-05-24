FROM postgres:17.2

ENV POSTGRES_USER well_loom_db_user
ENV POSTGRES_PASSWORD testingPassword
ENV POSTGRES_DB well-loom-db

COPY ./CreateDB.sql /docker-entrypoint-initdb.d/
RUN chmod 644 /docker-entrypoint-initdb.d/CreateDB.sql

EXPOSE 5432