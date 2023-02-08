# 
**API para consulta de Registro do INMETRO de Inversores e Micro Inversores Solares**
----
*Register Users*

*Login*

*Get User Logged in data*

<_Users with Admin role Endpoints_>

*Geta all user data*

*Update User*

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
    

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>  
