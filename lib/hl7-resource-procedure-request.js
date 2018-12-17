import SimpleSchema from 'simpl-schema';

// create the object using our BaseModel
ProcedureRequest = BaseModel.extend();


//Assign a collection so the object knows how to perform CRUD operations
ProcedureRequest.prototype._collection = ProcedureRequests;

// Create a persistent data store for addresses to be stored.
// HL7.Resources.Patients = new Mongo.Collection('HL7.Resources.Patients');
ProcedureRequests = new Mongo.Collection('ProcedureRequests');

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
ProcedureRequests._transform = function (document) {
  return new ProcedureRequest(document);
};


if (Meteor.isClient){
  Meteor.subscribe("ProcedureRequests");
}

if (Meteor.isServer){
  Meteor.publish("ProcedureRequests", function (argument){
    if (this.userId) {
      return ProcedureRequests.find();
    } else {
      return [];
    }
  });
}



ProcedureRequestSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "ProcedureRequest"
  },
  

});


// BaseSchema.extend(ProcedureSchema);
// DomainResourceSchema.extend(ProcedureSchema);

ProcedureRequests.attachSchema(ProcedureRequestSchema);





export default { ProcedureRequests, ProcedureRequest, ProcedureRequestSchema };