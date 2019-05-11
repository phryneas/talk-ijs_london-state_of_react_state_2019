module.exports = {
  client: {
    service: {
      name: "localState",
      localSchemaFile: __dirname + "/localState.graphql"
    },
    tagName: "gql",
    includes: ["src/**/*.js", "src/**/*.jsx"]
  }
};
