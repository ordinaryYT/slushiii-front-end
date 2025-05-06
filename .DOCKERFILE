# Use an official Nginx image from the Docker registry
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the entire content of your project (HTML, CSS, JS) into the Nginx HTML folder
COPY . .

# Expose port 80, which is the default HTTP port
EXPOSE 80

# Default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
