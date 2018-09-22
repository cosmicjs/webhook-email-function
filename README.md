# Webhook Email Function
<img src="https://cosmic-s3.imgix.net/ed58d700-7b2c-11e8-9d6b-252d8b978aea-SendGrid-Logo.png?w=1000" width="300" />

### Installation
1. [Login to Cosmic JS](https://cosmicjs.com) and go to Your Bucket > Settings > Functions
2. Add this GitHub repo and click "Install Function"
![Install Function](https://cosmic-s3.imgix.net/5712f1e0-be84-11e8-9e2d-15855cb44a12-Screen%20Shot%202018-09-22%20at%2011.25.44%20AM.png)

3. Add your AWS credentials, SENDGRID_API_KEY, TO, and FROM environment variables.
![Add Environment Variables](https://cosmic-s3.imgix.net/570891a0-be84-11e8-a68f-791787ea22ca-Screen%20Shot%202018-09-22%20at%2011.11.01%20AM.png)

4. Deploy the function and get your endpoint.
5. Add your POST endpoint to your webhooks area to Your Bucket > Settings > Webhooks. This webhook can send an email whenever content is added, edited or deleted (your preference).
![Webhooks](https://cosmic-s3.imgix.net/8ba3abc0-be84-11e8-9e2d-15855cb44a12-Screen%20Shot%202018-09-22%20at%2011.28.16%20AM.png)

### Maintainence
That's it! No managing or maintaining a server, just code and deploy!
