
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.PaymentScalarFieldEnum = {
  paymentId: 'paymentId',
  endToEndId: 'endToEndId',
  consentId: 'consentId',
  creationDateTime: 'creationDateTime',
  statusUpdateDateTime: 'statusUpdateDateTime',
  proxy: 'proxy',
  ibgeTownCode: 'ibgeTownCode',
  status: 'status',
  rejectionReasonCode: 'rejectionReasonCode',
  rejectionReasonDetail: 'rejectionReasonDetail',
  localInstrument: 'localInstrument',
  cnpjInitiator: 'cnpjInitiator',
  paymentAmount: 'paymentAmount',
  paymentCurrency: 'paymentCurrency',
  transactionIdentification: 'transactionIdentification',
  remittanceInformation: 'remittanceInformation'
};

exports.Prisma.CreditorAccountScalarFieldEnum = {
  id: 'id',
  ispb: 'ispb',
  issuer: 'issuer',
  number: 'number',
  accountType: 'accountType',
  paymentId: 'paymentId'
};

exports.Prisma.DebtorAccountScalarFieldEnum = {
  id: 'id',
  ispb: 'ispb',
  issuer: 'issuer',
  number: 'number',
  accountType: 'accountType',
  paymentId: 'paymentId'
};

exports.Prisma.CancellationScalarFieldEnum = {
  id: 'id',
  reason: 'reason',
  cancelledFrom: 'cancelledFrom',
  cancelledAt: 'cancelledAt',
  cancelledByIdentification: 'cancelledByIdentification',
  cancelledByRel: 'cancelledByRel',
  paymentId: 'paymentId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Payment: 'Payment',
  CreditorAccount: 'CreditorAccount',
  DebtorAccount: 'DebtorAccount',
  Cancellation: 'Cancellation'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\johnx\\OneDrive\\Área de Trabalho\\desenvolvimento\\node\\api_typescript\\backend_payments\\prisma\\generated\\client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_MONGO",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQxIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJtb25nb2RiIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkxfTU9OR08iKQp9Cgptb2RlbCBQYXltZW50IHsKICBwYXltZW50SWQgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBlbmRUb0VuZElkICAgICAgICAgICAgICAgIFN0cmluZwogIGNvbnNlbnRJZCAgICAgICAgICAgICAgICAgU3RyaW5nCiAgY3JlYXRpb25EYXRlVGltZSAgICAgICAgICBEYXRlVGltZSAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgc3RhdHVzVXBkYXRlRGF0ZVRpbWUgICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdAogIHByb3h5ICAgICAgICAgICAgICAgICAgICAgU3RyaW5nCiAgaWJnZVRvd25Db2RlICAgICAgICAgICAgICBTdHJpbmcKICBzdGF0dXMgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHJlamVjdGlvblJlYXNvbkNvZGUgICAgICAgU3RyaW5nPwogIHJlamVjdGlvblJlYXNvbkRldGFpbCAgICAgU3RyaW5nPwogIGxvY2FsSW5zdHJ1bWVudCAgICAgICAgICAgU3RyaW5nCiAgY25wakluaXRpYXRvciAgICAgICAgICAgICBTdHJpbmcKICBwYXltZW50QW1vdW50ICAgICAgICAgICAgIFN0cmluZwogIHBheW1lbnRDdXJyZW5jeSAgICAgICAgICAgU3RyaW5nCiAgdHJhbnNhY3Rpb25JZGVudGlmaWNhdGlvbiBTdHJpbmcKICByZW1pdHRhbmNlSW5mb3JtYXRpb24gICAgIFN0cmluZwogIGNyZWRpdG9yQWNjb3VudCAgICAgICAgICAgQ3JlZGl0b3JBY2NvdW50PwogIGRlYnRvckFjY291bnQgICAgICAgICAgICAgRGVidG9yQWNjb3VudD8KICBjYW5jZWxsYXRpb24gICAgICAgICAgICAgIENhbmNlbGxhdGlvbj8KCiAgQEBtYXAoInBheW1lbnRzIikKfQoKbW9kZWwgQ3JlZGl0b3JBY2NvdW50IHsKICBpZCAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIGlzcGIgICAgICAgIFN0cmluZwogIGlzc3VlciAgICAgIFN0cmluZwogIG51bWJlciAgICAgIFN0cmluZwogIGFjY291bnRUeXBlIFN0cmluZwogIFBheW1lbnQgICAgIFBheW1lbnQgQHJlbGF0aW9uKGZpZWxkczogW3BheW1lbnRJZF0sIHJlZmVyZW5jZXM6IFtwYXltZW50SWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpIAogIHBheW1lbnRJZCAgIFN0cmluZyAgQHVuaXF1ZSBAZGIuT2JqZWN0SWQKCiAgQEBtYXAoImNyZWRpdG9yX2FjY291bnRzIikKfQoKbW9kZWwgRGVidG9yQWNjb3VudCB7CiAgaWQgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBpc3BiICAgICAgICBTdHJpbmcKICBpc3N1ZXIgICAgICBTdHJpbmcKICBudW1iZXIgICAgICBTdHJpbmcKICBhY2NvdW50VHlwZSBTdHJpbmcKICBQYXltZW50ICAgICBQYXltZW50IEByZWxhdGlvbihmaWVsZHM6IFtwYXltZW50SWRdLCByZWZlcmVuY2VzOiBbcGF5bWVudElkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQogIHBheW1lbnRJZCAgIFN0cmluZyAgQHVuaXF1ZSBAZGIuT2JqZWN0SWQKCiAgQEBtYXAoImRlYnRvcl9hY2NvdW50cyIpCn0KCm1vZGVsIENhbmNlbGxhdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICByZWFzb24gICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGNhbmNlbGxlZEZyb20gICAgICAgICAgICAgU3RyaW5nCiAgY2FuY2VsbGVkQXQgICAgICAgICAgICAgICBEYXRlVGltZQogIGNhbmNlbGxlZEJ5SWRlbnRpZmljYXRpb24gU3RyaW5nCiAgY2FuY2VsbGVkQnlSZWwgICAgICAgICAgICBTdHJpbmcKICBQYXltZW50ICAgICAgICAgICAgICAgICAgIFBheW1lbnQgIEByZWxhdGlvbihmaWVsZHM6IFtwYXltZW50SWRdLCByZWZlcmVuY2VzOiBbcGF5bWVudElkXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQogIHBheW1lbnRJZCAgICAgICAgICAgICAgICAgU3RyaW5nICAgQHVuaXF1ZSBAZGIuT2JqZWN0SWQKCiAgQEBtYXAoImNhbmNlbGxhdGlvbnMiKQp9Cg==",
  "inlineSchemaHash": "fe36d9066a128922fadafe22148c21a2f7ba0e3c6a138330135947fdf68664ae",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client1",
    "generated/client1",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Payment\":{\"dbName\":\"payments\",\"fields\":[{\"name\":\"paymentId\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endToEndId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"consentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creationDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statusUpdateDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"proxy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ibgeTownCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rejectionReasonCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rejectionReasonDetail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"localInstrument\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpjInitiator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentAmount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentCurrency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactionIdentification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remittanceInformation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creditorAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CreditorAccount\",\"relationName\":\"CreditorAccountToPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"debtorAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DebtorAccount\",\"relationName\":\"DebtorAccountToPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancellation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cancellation\",\"relationName\":\"CancellationToPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CreditorAccount\":{\"dbName\":\"creditor_accounts\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ispb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"CreditorAccountToPayment\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"paymentId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DebtorAccount\":{\"dbName\":\"debtor_accounts\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ispb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"DebtorAccountToPayment\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"paymentId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cancellation\":{\"dbName\":\"cancellations\",\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledFrom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledByIdentification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cancelledByRel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Payment\",\"relationName\":\"CancellationToPayment\",\"relationFromFields\":[\"paymentId\"],\"relationToFields\":[\"paymentId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client1/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client1/schema.prisma")
