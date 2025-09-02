# Project Description
A minimal Docker Compose setup that serves a static HTML/CSS/JS site using the official Apache httpd:2.4 image.

The compose file bind-mounts ./web to /usr/local/apache2/htdocs (read-only) and publishes the container’s port 80 to localhost:8080.

This project is intentionally simple and course-aligned, showcasing core container concepts (image tags, bind mounts, and port mapping) while remaining easy to customize with your own styles and scripts.
