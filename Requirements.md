# backend

## entities (module)

- users
- dishhes
- cart
- order
- offers
- categories
- help
- chat
- payment

# Requirements
- user
    - POST /user/register : DONE
    - POST /user/login : DONE
- profile
    - GET /user/profile
    - PUT /user/profile
- POST /user/forgot-password : DONE
- PUT /user/reset-password : DONE

# npm modules
- express
    - used to implement REST APIs.
- mysql2
    - used to connect server application with mysql database.
- crypto-js
    - used to connect to the server application with mysql database 
- nodemailer
    - used to send emails
- jesonwebtokens
    - use to authorize the user