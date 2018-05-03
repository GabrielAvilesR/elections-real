**API REFERENCE**
----
**Show Politicians and Parties**
----
  Returns json data about every politician and every party. data: { politicians:[...], parties:[...] }

* **URL**

  /tweets/

* **Method:**

  `GET`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"politicians":[{"politician_name":"Ricardo Anaya","username":"RicardoAnayaC","politician_pts":0,"politician_nts":0,"politician_na":0,"relParties":["Movimiento Ciudadano","PAN","PRI","Partido Verde"]}, ...],"parties":[{"party_name":"Movimiento Ciudadano","party_pts":0,"party_nts":0}, ...]}`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/tweets/",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

**Show a Politician's Word Cloud**
----
  Returns json data with a list of words related to one politician

* **URL**

  /tweets/politicianJson/:politicianUsername

* **Method:**

  `GET`

*  **URL Params**

   **Required:**
 
   `politicianUsername=[String]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"politician_json":{"gracias":227,"mexico":433,"sepuede":166,"pais":120,"nacional":131,"gobierno":152,"regeneracionpan":125,"cambio":257,"ciudadanos":167,"mejor":149,"muchas":123,"juntos":131,"vamos":263,"pan":354,"hoy":302}}`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/tweets/politicianJson/RicardoAnayaC",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```