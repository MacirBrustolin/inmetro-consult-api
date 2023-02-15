# 
**Registers Endpoints**
----
*Get Registers*

* **URL**

  api/registers

* **Method:**

  `GET`

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
  
  
*Post a Register*
  
* **URL**

  api/registers

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
  
*Update Register*

* **URL**

  api/registers/:id

* **Method:**

  `PUT`

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

*Delete Register*

* **URL**

  api/registers/:id

* **Method:**

  `DELETE`

* **Success Response:**
  
    * **Code:** 200 OK <br />
    **Content:** `{ role: "User Role", _id : "user ID", userName : "User Name", email: "User Email", password: "Hashed Passwrod", createdAt: "User data Creation", updatedAt: "Last Update" }`
 
* **Error Response:**

    * **Code:** 403 UNAUTHORIZED <br />
    **Content:** `{ message : "User not authorized" }`
  
  OR
  
    * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "Users not found!" }`
