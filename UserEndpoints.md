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

<_Admin Users Endpoints_>

*Geta all user data*

* **URL**

  api/users/all

* **Method:**

  `GET`

* **Success Response:**
  
    * **Code:** 200 OK <br />
    **Content:** `{ role: "User Role", _id : "user ID", userName : "User Name", email: "User Email", password: "Hashed Passwrod", createdAt: "User data Creation", updatedAt: "Last Update" }`
 
* **Error Response:**

    * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "User not authorized" }`
  
  OR
  
    * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Users not found!" }`
    
*Update User Role*

* **URL**

  api/users/updateRole

* **Method:**

  `PUT`

* **Data Params**

  `{ role: String ("admin" or "user"), id: String }`

* **Success Response:**
  
    * **Code:** 200 OK <br />
    **Content:** `{ role: "User Role", _id : "user ID", userName : "User Name", email: "User Email" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Please add all the fields" }`

  OR
  
  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Role does not exist, please use only "user" or "admin" roles." }`

  OR

  * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "User not authorized" }`    
    
  OR
  
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "User not found" }`
  
