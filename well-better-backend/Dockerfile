# Use the official OpenJDK image as the base image
FROM openjdk:17-jdk-slim

# Create a non-root user
RUN useradd -m -s /bin/bash codespace

# Switch to the non-root user
USER codespace

# Set a working directory for the user
WORKDIR /home/codespace

# Copy application files and set appropriate permissions
COPY . /home/codespace
RUN chown -R codespace:codespace /home/codespace

# Copy only the build configuration files first (for dependency caching)
COPY pom.xml .
COPY src ./src

# Install Maven
RUN apt-get update && apt-get install -y maven && apt-get clean

# Download dependencies and build the application
RUN mvn -B -f pom.xml dependency:resolve
RUN mvn -B -f pom.xml clean package

# Copy the built JAR file (assumes the output is in target/ directory)
# Make sure the JAR file name matches your Spring application's output
COPY target/spring-app.jar spring-app.jar

# Expose the application port (default for Spring Boot is 8080)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "spring-app.jar"]
