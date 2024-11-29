# Define the paths to the Docker Compose files
$composeFile = ".\src\docker-compose.yml"
$overrideFile = ".\src\docker-compose.debug.yml"

# Run the Docker Compose command
docker-compose -f $composeFile -f $overrideFile up -d