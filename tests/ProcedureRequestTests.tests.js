import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { chai } from 'meteor/practicalmeteor:chai';
import { expect } from 'meteor/practicalmeteor:chai';

// describe('clinical:hl7-resources-procedure-requests', function () {
//   var server = meteor();
//   var client = browser(server);

//   it('ProcedureRequests should exist on the client', function () {
//     return client.execute(function () {
//       expect(ProcedureRequests).to.exist;
//     });
//   });

//   it('ProcedureRequests should exist on the server', function () {
//     return server.execute(function () {
//       expect(ProcedureRequests).to.exist;
//     });
//   });

// });


describe('clinical:hl7-resource-practitioner', function () {
  beforeEach(function () {
    //console.log('beforeEach');
  });
  afterEach(function () {
    //console.log('afterEach');
  });
  it('exists globally', function () {
    expect(ProcedureRequests).to.exist;
  });
});