import type { CLIConfiguration } from '@uniformdev/cli';

const config: CLIConfiguration = {
  serialization: {    
    format: "yaml",
    mode: "mirror",
    directory: "./uniform",
    entitiesConfig: {
      composition: {},
      pattern: {},
      category: {},
      component: {},
      dataType: {},
      signal: {},
      test: {},
      aggregate: {},
      enrichment: {},
      quirk: {},
      projectMapDefinition: {},
      projectMapNode: {},
      redirect: {},
    },
  },
};

module.exports = config;