##clinical:hl7-resource-procedure-request

HL7 FHIR Resource - ProcedureRequest


===============================
#### Conformance Statement  

The resource in this package implements the FHIR Patient Resource schema provided at  [https://www.hl7.org/fhir/procedurerequest.html](https://www.hl7.org/fhir/procedurerequest.html).  


===============================
#### Installation  

````bash
# to add hl7 resource schemas and rest routes
meteor add clinical:hl7-resource-procedure-request

# to initialize default data
INITIALIZE=true meteor
````

===============================
#### Example   

```js
var request = {}
ProcedureRequests.insert(request);
```

===============================
#### Extending the Schema

```js
ExtendedProcedureRequestSchema = new SimpleSchema([
  ProcedureRequestSchema,
  {
    "createdAt": {
      "type": Date,
      "optional": true
    }
  }
]);
ProcedureRequests.attachSchema( ExtendedProcedureRequestSchema );
```



===============================
#### Utilities  

If you're working with HL7 FHIR Resources, we recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).




===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
