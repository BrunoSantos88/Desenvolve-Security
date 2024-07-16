# start

zap-cli start

# Add the target URL to the context:

zap-cli context create <context-name>
zap-cli context include <context-name> http://target-url.*

# Spider the target:

zap-cli spider http://target-url

# Run the active scan:

zap-cli active-scan http://target-url

# Generate a report:

zap-cli report -o zap-report.html -f html

# Stop zap-cli:

zap-cli stop

# Initialize zap-cli
zap-cli start

# Define target URL and context name
TARGET_URL="http://example.com"
CONTEXT_NAME="example-context"

# Add target to context
zap-cli context create $CONTEXT_NAME
zap-cli context include $CONTEXT_NAME $TARGET_URL.*

# Spider the target
zap-cli spider $TARGET_URL

# Run the active scan
zap-cli active-scan $TARGET_URL

# Generate report
zap-cli report -o zap-report.html -f html

# Stop zap-cli
zap-cli stop