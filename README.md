Purpose:
Service level account linking Google Sheets API v4 to a service such as Autocode or a local node environment.

Step 1 is to create a new project in the Google Cloud Platform Dashboard

![Step 1](/img/001.png?raw=true "Step 1")

Step 2 is to add the Sheets API to your project

![Step 2](/img/002.png?raw=true "Step 2")

Step 3 is click manage api

![Step 3](/img/003.png?raw=true "Step 3")

Step 4 is is click credentials and then click manage service accounts

![Step 4](/img/004.png?raw=true "Step 4")

Step 5 click "Create Service Account"

![Step 5](/img/005.png?raw=true "Step 5")

Step 6 Go through the steps of creating the service account. Just give it a name and click next. Then click "Manage Keys"

![Step 6](/img/006.png?raw=true "Step 6")

Step 7 Add a new key, select JSON as the format

![Step 7](/img/007.png?raw=true "Step 7")

Step 8 The credentials should be stored securely in somethin like an environmental variable

Step 9 Copy the Service Account email from the credentials file. In the Google Sheet, click share and share it via that email address so that the Service Account has access rights

Step 10 Replace relevant values in index.js

additional resources:
https://github.com/googleapis/google-api-nodejs-client#service-account-credentials
https://www.npmjs.com/package/googleapis#application-default-credentials

