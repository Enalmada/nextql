// src/codegen/codegen.ts
var createCodegenConfig = (options) => {
  return {
    schema: [
      {
        "http://localhost:3000/api/graphql": {
          headers: {
            "x-graphql-csrf": "true"
          }
        }
      }
    ],
    documents: [
      "src/server/graphql/(builder|schema).ts",
      "src/server/**/*.model.ts",
      "src/client/gql/queries-mutations.ts"
    ],
    ignoreNoDocuments: true,
    generates: {
      "./src/client/gql/generated/schema.graphql": {
        plugins: ["schema-ast"]
      },
      "./src/client/gql/generated/": {
        preset: "client",
        presetConfig: {
          fragmentMasking: false
        },
        config: {
          scalars: {
            DateTime: "Date",
            NonEmptyString: "string"
          }
        }
      },
      "./src/client/gql/generated/schema.json": {
        plugins: ["urql-introspection"]
      }
    },
    ...options
  };
};
var codegen_default = createCodegenConfig;

// src/codegen/
var src_default = codegen_default;
export {
  src_default as default
};
