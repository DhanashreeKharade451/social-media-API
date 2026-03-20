//answers form reflection Questions:
************************************
Q1.Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
**
Ans:
Whitelisting IP addresses is important because it restricts database access to only trusted sources, such as your application server. This adds a critical layer of security by preventing unauthorized users from attempting to connect to the database.

Allowing access from 0.0.0.0/0 means any IP address in the world can attempt to connect to your database. While authentication is still required, this significantly increases the attack surface. 

In a real-world production environment, access should be limited to specific IP addresses or ranges (e.g., your backend server or cloud service).
*****************************************************************

Q2.
What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
**
Ans:
The dotenv package is used to load environment variables from a .env file into process.env in a Node.js application. This allows developers to store sensitive information—such as database connection strings, API keys, and secrets—outside of the source code.

This improves:
Security (no hardcoded secrets)
Flexibility (different configs for dev/test/prod)
Maintainability
*******************************************************************************
If your application failed to connect, what are the first few steps you would take to debug the issue?
Lesson 2: MongoDB Atlas & Connecting an App
Lesson 3