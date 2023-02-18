import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 6, end: 11 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "cat", loc: { start: 16, end: 19 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 20, end: 22 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 24, end: 26 },
                  },
                  loc: { start: 24, end: 26 },
                },
                loc: { start: 24, end: 27 },
              },
              directives: [],
              loc: { start: 20, end: 27 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Cat", loc: { start: 30, end: 33 } },
            loc: { start: 30, end: 33 },
          },
          directives: [],
          loc: { start: 16, end: 33 },
        },
      ],
      loc: { start: 1, end: 35 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Cat", loc: { start: 42, end: 45 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 50, end: 52 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 54, end: 56 } },
              loc: { start: 54, end: 56 },
            },
            loc: { start: 54, end: 57 },
          },
          directives: [],
          loc: { start: 50, end: 57 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 60, end: 68 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 70, end: 76 },
              },
              loc: { start: 70, end: 76 },
            },
            loc: { start: 70, end: 77 },
          },
          directives: [],
          loc: { start: 60, end: 77 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "age", loc: { start: 80, end: 83 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Int", loc: { start: 85, end: 88 } },
              loc: { start: 85, end: 88 },
            },
            loc: { start: 85, end: 89 },
          },
          directives: [],
          loc: { start: 80, end: 89 },
        },
      ],
      loc: { start: 37, end: 91 },
    },
  ],
  loc: { start: 0, end: 91 },
} as unknown as DocumentNode;
