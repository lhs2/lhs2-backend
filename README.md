# lhs2-backend
Backend pessoal de utilidade geral.

Lista de apis com seus endpoints

Padrão:

Endpoint
HTTP Method - Feature
Description
(Optional) URL Parameters
key=value.type
(Optional) Request Body
JSON Object {}
(Optional) Response Body
JSON Object {}


/user/showAllUsers
GET - Show All Users
Returns an array with all users stored in database without data manipulation.

/user/authenticate
POST - Authenticate
Verify if login and password are registered in the database.
Request Body
{
    "login": "String",
    "password": "String"
}
Response Body
(200),{
    "message": "SUCESS", 
    "data": {
        "username": "String" 
        }
}
(400), {
    "message": "INVALID_CREDENTIALS"
}

/user/register
POST - Register
Store an user with all the information in the database.
Request Body
{
    "login": "String",
    "password": "String",
    "email": "String",
    "username": "String"
}
Response Body
(200), {
    "message": "SUCESS"
}
(400), {
    "message": "MISSING_FIELDS"
}

/user/available
POST - Available
Returns availability of the login.
Request Body 
{
    "login": "String"
}
Response Body
(200), {
    "message": "USER_AVAILABLE"
}
(400), {
    "message": "NOT_AVAILABLE"
}
(400), {
    "message": "MISSING_FIELDS"
}