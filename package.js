Package.describe({
  name: 'clinical:hl7-resource-procedure-request',
  version: '1.0.0',
  summary: 'HL7 FHIR Resource - ProcedureRequest',
  git: 'https://github.com/clinical-meteor/hl7-resource-procedure-request',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.3.3');
  api.use('simple:json-routes@2.1.0');
  api.use('prime8consulting:meteor-oauth2-server@0.0.2');

  api.use('clinical:base-model@1.3.5');
  api.use('clinical:hl7-resource-datatypes@0.4.0');

  api.addFiles('lib/hl7-resource-procedure-request.js', ['client', 'server']);
  api.addFiles('server/rest.js', 'server');
  api.addFiles('server/initialize.js', 'server');

  api.export('ProcedureRequest');
  api.export('ProcedureRequests');
  api.export('ProcedureRequestSchema');
});
