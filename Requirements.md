# backend

## entities (module)

- users             :DONE
- address           :DONE
- categories        :DONE
- food-item         :DONE
- cart              :DONE
- order
- offers
- help
- chat
- payment

# Requirements
- user
    - POST /user/register           : DONE
    - POST /user/login              : DONE
    - profile
        - GET /user/profile         : DONE
        - PUT /user/profile         : DONE
        - PUT /user/profile-image   : DONE
    - POST /user/forgot-password    : DONE
    - PUT /user/reset-password      : DONE

- address
    - POST /address/        : DONE
    - GET /address/         : DONE
    - PUT /address/:id      : DONE
    - DELETE /address/:id   : DONE

- category
    - POST /category/           : DONE
    - GET /category/            : DONE
    - PUT /category/:id         : DONE
    - DELETE /category/:id      : DONE

- food items
    - POST /food-item/               : DONE
    - GET /food-item/                : DONE
    - PUT /food-item/:id             : DONE
    - DELETE /food-item/:id          : DONE

- cart
    - POST /cart/               : DONE
    - GET /cart/                : DONE
    - PUT /cart/:id             : DONE
    - DELETE /cart/:id          : DONE
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
- dotenv
    - used to load the configuration from enviornment variable files
- multer
    - used to upload a file on the server