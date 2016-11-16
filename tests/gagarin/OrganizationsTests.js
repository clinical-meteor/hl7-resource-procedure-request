describe('clinical:hl7-resources-procedure-requests', function () {
  var server = meteor();
  var client = browser(server);

  it('ProcedureRequests should exist on the client', function () {
    return client.execute(function () {
      expect(ProcedureRequests).to.exist;
    });
  });

  it('ProcedureRequests should exist on the server', function () {
    return server.execute(function () {
      expect(ProcedureRequests).to.exist;
    });
  });

});
