# 
**API para consulta de Registro do INMETRO de Inversores e Micro Inversores Solares**
----
*Register Users*

* **URL**

  api/users

* **Method:**

  `POST`

* **Data Params**

  `{ userName: String, email: String, password: String }`

* **Success Response:**
  
    * **Code:** 201 CREATED <br />
    **Content:** `{ _id : "user ID", name : "User Name", email: "User Email", token: JWToken }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Please add all the fields" }`

  OR
  
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Invalid User data" }`

  OR

  * **Code:** 409 CONFLICT <br />
    **Content:** `{ message : "Email already registered" }`    
    
  OR
  
  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ message : "Email format is invalid" }`
  
  
*Login*
  
* **URL**

  api/users/login

* **Method:**

  `POST`

* **Data Params**

  `{ email: String, password: String }`

* **Success Response:**
  
    * **Code:** 200 OK <br />
    **Content:** `{ _id : "user ID", name : "User Name", email: "User Email", token: JWToken }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "Invalid Credentials" }`
  
*Get User Logged data*

* **URL**

  api/users/me

* **Method:**

  `GET`

* **Success Response:**
  
    * **Code:** 200 OK <br />
    **Content:** `{ _id : "user ID", name : "User Name", email: "User Email", token: JWToken }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "Not authorized, no token" }`
  
  OR
  
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message : "Not authorized" }`

<_Users with Admin role Endpoints_>

*Geta all user data*

*Update User*

