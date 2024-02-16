
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model CreditorAccount
 * 
 */
export type CreditorAccount = $Result.DefaultSelection<Prisma.$CreditorAccountPayload>
/**
 * Model DebtorAccount
 * 
 */
export type DebtorAccount = $Result.DefaultSelection<Prisma.$DebtorAccountPayload>
/**
 * Model Cancellation
 * 
 */
export type Cancellation = $Result.DefaultSelection<Prisma.$CancellationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Payments
 * const payments = await prisma.payment.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.creditorAccount`: Exposes CRUD operations for the **CreditorAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditorAccounts
    * const creditorAccounts = await prisma.creditorAccount.findMany()
    * ```
    */
  get creditorAccount(): Prisma.CreditorAccountDelegate<ExtArgs>;

  /**
   * `prisma.debtorAccount`: Exposes CRUD operations for the **DebtorAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebtorAccounts
    * const debtorAccounts = await prisma.debtorAccount.findMany()
    * ```
    */
  get debtorAccount(): Prisma.DebtorAccountDelegate<ExtArgs>;

  /**
   * `prisma.cancellation`: Exposes CRUD operations for the **Cancellation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cancellations
    * const cancellations = await prisma.cancellation.findMany()
    * ```
    */
  get cancellation(): Prisma.CancellationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Payment: 'Payment',
    CreditorAccount: 'CreditorAccount',
    DebtorAccount: 'DebtorAccount',
    Cancellation: 'Cancellation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'payment' | 'creditorAccount' | 'debtorAccount' | 'cancellation'
      txIsolationLevel: never
    },
    model: {
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      CreditorAccount: {
        payload: Prisma.$CreditorAccountPayload<ExtArgs>
        fields: Prisma.CreditorAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditorAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditorAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>
          }
          findFirst: {
            args: Prisma.CreditorAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditorAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>
          }
          findMany: {
            args: Prisma.CreditorAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>[]
          }
          create: {
            args: Prisma.CreditorAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>
          }
          createMany: {
            args: Prisma.CreditorAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CreditorAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>
          }
          update: {
            args: Prisma.CreditorAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>
          }
          deleteMany: {
            args: Prisma.CreditorAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CreditorAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CreditorAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditorAccountPayload>
          }
          aggregate: {
            args: Prisma.CreditorAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCreditorAccount>
          }
          groupBy: {
            args: Prisma.CreditorAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CreditorAccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CreditorAccountFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CreditorAccountAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CreditorAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<CreditorAccountCountAggregateOutputType> | number
          }
        }
      }
      DebtorAccount: {
        payload: Prisma.$DebtorAccountPayload<ExtArgs>
        fields: Prisma.DebtorAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebtorAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebtorAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>
          }
          findFirst: {
            args: Prisma.DebtorAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebtorAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>
          }
          findMany: {
            args: Prisma.DebtorAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>[]
          }
          create: {
            args: Prisma.DebtorAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>
          }
          createMany: {
            args: Prisma.DebtorAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DebtorAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>
          }
          update: {
            args: Prisma.DebtorAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>
          }
          deleteMany: {
            args: Prisma.DebtorAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DebtorAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DebtorAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DebtorAccountPayload>
          }
          aggregate: {
            args: Prisma.DebtorAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDebtorAccount>
          }
          groupBy: {
            args: Prisma.DebtorAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DebtorAccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DebtorAccountFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DebtorAccountAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DebtorAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<DebtorAccountCountAggregateOutputType> | number
          }
        }
      }
      Cancellation: {
        payload: Prisma.$CancellationPayload<ExtArgs>
        fields: Prisma.CancellationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CancellationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CancellationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>
          }
          findFirst: {
            args: Prisma.CancellationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CancellationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>
          }
          findMany: {
            args: Prisma.CancellationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>[]
          }
          create: {
            args: Prisma.CancellationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>
          }
          createMany: {
            args: Prisma.CancellationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CancellationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>
          }
          update: {
            args: Prisma.CancellationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>
          }
          deleteMany: {
            args: Prisma.CancellationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CancellationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CancellationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CancellationPayload>
          }
          aggregate: {
            args: Prisma.CancellationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCancellation>
          }
          groupBy: {
            args: Prisma.CancellationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CancellationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CancellationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CancellationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CancellationCountArgs<ExtArgs>,
            result: $Utils.Optional<CancellationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    paymentId: string | null
    endToEndId: string | null
    consentId: string | null
    creationDateTime: Date | null
    statusUpdateDateTime: Date | null
    proxy: string | null
    ibgeTownCode: string | null
    status: string | null
    rejectionReasonCode: string | null
    rejectionReasonDetail: string | null
    localInstrument: string | null
    cnpjInitiator: string | null
    paymentAmount: string | null
    paymentCurrency: string | null
    transactionIdentification: string | null
    remittanceInformation: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    paymentId: string | null
    endToEndId: string | null
    consentId: string | null
    creationDateTime: Date | null
    statusUpdateDateTime: Date | null
    proxy: string | null
    ibgeTownCode: string | null
    status: string | null
    rejectionReasonCode: string | null
    rejectionReasonDetail: string | null
    localInstrument: string | null
    cnpjInitiator: string | null
    paymentAmount: string | null
    paymentCurrency: string | null
    transactionIdentification: string | null
    remittanceInformation: string | null
  }

  export type PaymentCountAggregateOutputType = {
    paymentId: number
    endToEndId: number
    consentId: number
    creationDateTime: number
    statusUpdateDateTime: number
    proxy: number
    ibgeTownCode: number
    status: number
    rejectionReasonCode: number
    rejectionReasonDetail: number
    localInstrument: number
    cnpjInitiator: number
    paymentAmount: number
    paymentCurrency: number
    transactionIdentification: number
    remittanceInformation: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    paymentId?: true
    endToEndId?: true
    consentId?: true
    creationDateTime?: true
    statusUpdateDateTime?: true
    proxy?: true
    ibgeTownCode?: true
    status?: true
    rejectionReasonCode?: true
    rejectionReasonDetail?: true
    localInstrument?: true
    cnpjInitiator?: true
    paymentAmount?: true
    paymentCurrency?: true
    transactionIdentification?: true
    remittanceInformation?: true
  }

  export type PaymentMaxAggregateInputType = {
    paymentId?: true
    endToEndId?: true
    consentId?: true
    creationDateTime?: true
    statusUpdateDateTime?: true
    proxy?: true
    ibgeTownCode?: true
    status?: true
    rejectionReasonCode?: true
    rejectionReasonDetail?: true
    localInstrument?: true
    cnpjInitiator?: true
    paymentAmount?: true
    paymentCurrency?: true
    transactionIdentification?: true
    remittanceInformation?: true
  }

  export type PaymentCountAggregateInputType = {
    paymentId?: true
    endToEndId?: true
    consentId?: true
    creationDateTime?: true
    statusUpdateDateTime?: true
    proxy?: true
    ibgeTownCode?: true
    status?: true
    rejectionReasonCode?: true
    rejectionReasonDetail?: true
    localInstrument?: true
    cnpjInitiator?: true
    paymentAmount?: true
    paymentCurrency?: true
    transactionIdentification?: true
    remittanceInformation?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    paymentId: string
    endToEndId: string
    consentId: string
    creationDateTime: Date
    statusUpdateDateTime: Date
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode: string | null
    rejectionReasonDetail: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paymentId?: boolean
    endToEndId?: boolean
    consentId?: boolean
    creationDateTime?: boolean
    statusUpdateDateTime?: boolean
    proxy?: boolean
    ibgeTownCode?: boolean
    status?: boolean
    rejectionReasonCode?: boolean
    rejectionReasonDetail?: boolean
    localInstrument?: boolean
    cnpjInitiator?: boolean
    paymentAmount?: boolean
    paymentCurrency?: boolean
    transactionIdentification?: boolean
    remittanceInformation?: boolean
    creditorAccount?: boolean | Payment$creditorAccountArgs<ExtArgs>
    debtorAccount?: boolean | Payment$debtorAccountArgs<ExtArgs>
    cancellation?: boolean | Payment$cancellationArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    paymentId?: boolean
    endToEndId?: boolean
    consentId?: boolean
    creationDateTime?: boolean
    statusUpdateDateTime?: boolean
    proxy?: boolean
    ibgeTownCode?: boolean
    status?: boolean
    rejectionReasonCode?: boolean
    rejectionReasonDetail?: boolean
    localInstrument?: boolean
    cnpjInitiator?: boolean
    paymentAmount?: boolean
    paymentCurrency?: boolean
    transactionIdentification?: boolean
    remittanceInformation?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditorAccount?: boolean | Payment$creditorAccountArgs<ExtArgs>
    debtorAccount?: boolean | Payment$debtorAccountArgs<ExtArgs>
    cancellation?: boolean | Payment$cancellationArgs<ExtArgs>
  }


  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      creditorAccount: Prisma.$CreditorAccountPayload<ExtArgs> | null
      debtorAccount: Prisma.$DebtorAccountPayload<ExtArgs> | null
      cancellation: Prisma.$CancellationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      paymentId: string
      endToEndId: string
      consentId: string
      creationDateTime: Date
      statusUpdateDateTime: Date
      proxy: string
      ibgeTownCode: string
      status: string
      rejectionReasonCode: string | null
      rejectionReasonDetail: string | null
      localInstrument: string
      cnpjInitiator: string
      paymentAmount: string
      paymentCurrency: string
      transactionIdentification: string
      remittanceInformation: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }


  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `paymentId`
     * const paymentWithPaymentIdOnly = await prisma.payment.findMany({ select: { paymentId: true } })
     * 
    **/
    findMany<T extends PaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
    **/
    create<T extends PaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payments.
     *     @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     *     @example
     *     // Create many Payments
     *     const payment = await prisma.payment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * @param {PaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payment = await prisma.payment.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PaymentFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payment.
     * @param {PaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payment = await prisma.payment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PaymentAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    creditorAccount<T extends Payment$creditorAccountArgs<ExtArgs> = {}>(args?: Subset<T, Payment$creditorAccountArgs<ExtArgs>>): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    debtorAccount<T extends Payment$debtorAccountArgs<ExtArgs> = {}>(args?: Subset<T, Payment$debtorAccountArgs<ExtArgs>>): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    cancellation<T extends Payment$cancellationArgs<ExtArgs> = {}>(args?: Subset<T, Payment$cancellationArgs<ExtArgs>>): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly paymentId: FieldRef<"Payment", 'String'>
    readonly endToEndId: FieldRef<"Payment", 'String'>
    readonly consentId: FieldRef<"Payment", 'String'>
    readonly creationDateTime: FieldRef<"Payment", 'DateTime'>
    readonly statusUpdateDateTime: FieldRef<"Payment", 'DateTime'>
    readonly proxy: FieldRef<"Payment", 'String'>
    readonly ibgeTownCode: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly rejectionReasonCode: FieldRef<"Payment", 'String'>
    readonly rejectionReasonDetail: FieldRef<"Payment", 'String'>
    readonly localInstrument: FieldRef<"Payment", 'String'>
    readonly cnpjInitiator: FieldRef<"Payment", 'String'>
    readonly paymentAmount: FieldRef<"Payment", 'String'>
    readonly paymentCurrency: FieldRef<"Payment", 'String'>
    readonly transactionIdentification: FieldRef<"Payment", 'String'>
    readonly remittanceInformation: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }


  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }


  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }


  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }


  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }


  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }


  /**
   * Payment findRaw
   */
  export type PaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Payment aggregateRaw
   */
  export type PaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Payment.creditorAccount
   */
  export type Payment$creditorAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    where?: CreditorAccountWhereInput
  }


  /**
   * Payment.debtorAccount
   */
  export type Payment$debtorAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    where?: DebtorAccountWhereInput
  }


  /**
   * Payment.cancellation
   */
  export type Payment$cancellationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    where?: CancellationWhereInput
  }


  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentInclude<ExtArgs> | null
  }



  /**
   * Model CreditorAccount
   */

  export type AggregateCreditorAccount = {
    _count: CreditorAccountCountAggregateOutputType | null
    _min: CreditorAccountMinAggregateOutputType | null
    _max: CreditorAccountMaxAggregateOutputType | null
  }

  export type CreditorAccountMinAggregateOutputType = {
    id: string | null
    ispb: string | null
    issuer: string | null
    number: string | null
    accountType: string | null
    paymentId: string | null
  }

  export type CreditorAccountMaxAggregateOutputType = {
    id: string | null
    ispb: string | null
    issuer: string | null
    number: string | null
    accountType: string | null
    paymentId: string | null
  }

  export type CreditorAccountCountAggregateOutputType = {
    id: number
    ispb: number
    issuer: number
    number: number
    accountType: number
    paymentId: number
    _all: number
  }


  export type CreditorAccountMinAggregateInputType = {
    id?: true
    ispb?: true
    issuer?: true
    number?: true
    accountType?: true
    paymentId?: true
  }

  export type CreditorAccountMaxAggregateInputType = {
    id?: true
    ispb?: true
    issuer?: true
    number?: true
    accountType?: true
    paymentId?: true
  }

  export type CreditorAccountCountAggregateInputType = {
    id?: true
    ispb?: true
    issuer?: true
    number?: true
    accountType?: true
    paymentId?: true
    _all?: true
  }

  export type CreditorAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditorAccount to aggregate.
     */
    where?: CreditorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditorAccounts to fetch.
     */
    orderBy?: CreditorAccountOrderByWithRelationInput | CreditorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditorAccounts
    **/
    _count?: true | CreditorAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditorAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditorAccountMaxAggregateInputType
  }

  export type GetCreditorAccountAggregateType<T extends CreditorAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditorAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditorAccount[P]>
      : GetScalarType<T[P], AggregateCreditorAccount[P]>
  }




  export type CreditorAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditorAccountWhereInput
    orderBy?: CreditorAccountOrderByWithAggregationInput | CreditorAccountOrderByWithAggregationInput[]
    by: CreditorAccountScalarFieldEnum[] | CreditorAccountScalarFieldEnum
    having?: CreditorAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditorAccountCountAggregateInputType | true
    _min?: CreditorAccountMinAggregateInputType
    _max?: CreditorAccountMaxAggregateInputType
  }

  export type CreditorAccountGroupByOutputType = {
    id: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    paymentId: string
    _count: CreditorAccountCountAggregateOutputType | null
    _min: CreditorAccountMinAggregateOutputType | null
    _max: CreditorAccountMaxAggregateOutputType | null
  }

  type GetCreditorAccountGroupByPayload<T extends CreditorAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditorAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditorAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditorAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CreditorAccountGroupByOutputType[P]>
        }
      >
    >


  export type CreditorAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ispb?: boolean
    issuer?: boolean
    number?: boolean
    accountType?: boolean
    paymentId?: boolean
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditorAccount"]>

  export type CreditorAccountSelectScalar = {
    id?: boolean
    ispb?: boolean
    issuer?: boolean
    number?: boolean
    accountType?: boolean
    paymentId?: boolean
  }

  export type CreditorAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }


  export type $CreditorAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditorAccount"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ispb: string
      issuer: string
      number: string
      accountType: string
      paymentId: string
    }, ExtArgs["result"]["creditorAccount"]>
    composites: {}
  }


  type CreditorAccountGetPayload<S extends boolean | null | undefined | CreditorAccountDefaultArgs> = $Result.GetResult<Prisma.$CreditorAccountPayload, S>

  type CreditorAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditorAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditorAccountCountAggregateInputType | true
    }

  export interface CreditorAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditorAccount'], meta: { name: 'CreditorAccount' } }
    /**
     * Find zero or one CreditorAccount that matches the filter.
     * @param {CreditorAccountFindUniqueArgs} args - Arguments to find a CreditorAccount
     * @example
     * // Get one CreditorAccount
     * const creditorAccount = await prisma.creditorAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CreditorAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CreditorAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CreditorAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CreditorAccountFindUniqueOrThrowArgs} args - Arguments to find a CreditorAccount
     * @example
     * // Get one CreditorAccount
     * const creditorAccount = await prisma.creditorAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CreditorAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditorAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CreditorAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountFindFirstArgs} args - Arguments to find a CreditorAccount
     * @example
     * // Get one CreditorAccount
     * const creditorAccount = await prisma.creditorAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CreditorAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditorAccountFindFirstArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CreditorAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountFindFirstOrThrowArgs} args - Arguments to find a CreditorAccount
     * @example
     * // Get one CreditorAccount
     * const creditorAccount = await prisma.creditorAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CreditorAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditorAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CreditorAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditorAccounts
     * const creditorAccounts = await prisma.creditorAccount.findMany()
     * 
     * // Get first 10 CreditorAccounts
     * const creditorAccounts = await prisma.creditorAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditorAccountWithIdOnly = await prisma.creditorAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CreditorAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditorAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CreditorAccount.
     * @param {CreditorAccountCreateArgs} args - Arguments to create a CreditorAccount.
     * @example
     * // Create one CreditorAccount
     * const CreditorAccount = await prisma.creditorAccount.create({
     *   data: {
     *     // ... data to create a CreditorAccount
     *   }
     * })
     * 
    **/
    create<T extends CreditorAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CreditorAccountCreateArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CreditorAccounts.
     *     @param {CreditorAccountCreateManyArgs} args - Arguments to create many CreditorAccounts.
     *     @example
     *     // Create many CreditorAccounts
     *     const creditorAccount = await prisma.creditorAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CreditorAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditorAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditorAccount.
     * @param {CreditorAccountDeleteArgs} args - Arguments to delete one CreditorAccount.
     * @example
     * // Delete one CreditorAccount
     * const CreditorAccount = await prisma.creditorAccount.delete({
     *   where: {
     *     // ... filter to delete one CreditorAccount
     *   }
     * })
     * 
    **/
    delete<T extends CreditorAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CreditorAccountDeleteArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CreditorAccount.
     * @param {CreditorAccountUpdateArgs} args - Arguments to update one CreditorAccount.
     * @example
     * // Update one CreditorAccount
     * const creditorAccount = await prisma.creditorAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CreditorAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CreditorAccountUpdateArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CreditorAccounts.
     * @param {CreditorAccountDeleteManyArgs} args - Arguments to filter CreditorAccounts to delete.
     * @example
     * // Delete a few CreditorAccounts
     * const { count } = await prisma.creditorAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CreditorAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditorAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditorAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditorAccounts
     * const creditorAccount = await prisma.creditorAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CreditorAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CreditorAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditorAccount.
     * @param {CreditorAccountUpsertArgs} args - Arguments to update or create a CreditorAccount.
     * @example
     * // Update or create a CreditorAccount
     * const creditorAccount = await prisma.creditorAccount.upsert({
     *   create: {
     *     // ... data to create a CreditorAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditorAccount we want to update
     *   }
     * })
    **/
    upsert<T extends CreditorAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CreditorAccountUpsertArgs<ExtArgs>>
    ): Prisma__CreditorAccountClient<$Result.GetResult<Prisma.$CreditorAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more CreditorAccounts that matches the filter.
     * @param {CreditorAccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const creditorAccount = await prisma.creditorAccount.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CreditorAccountFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CreditorAccount.
     * @param {CreditorAccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const creditorAccount = await prisma.creditorAccount.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CreditorAccountAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of CreditorAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountCountArgs} args - Arguments to filter CreditorAccounts to count.
     * @example
     * // Count the number of CreditorAccounts
     * const count = await prisma.creditorAccount.count({
     *   where: {
     *     // ... the filter for the CreditorAccounts we want to count
     *   }
     * })
    **/
    count<T extends CreditorAccountCountArgs>(
      args?: Subset<T, CreditorAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditorAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditorAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditorAccountAggregateArgs>(args: Subset<T, CreditorAccountAggregateArgs>): Prisma.PrismaPromise<GetCreditorAccountAggregateType<T>>

    /**
     * Group by CreditorAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditorAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditorAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditorAccountGroupByArgs['orderBy'] }
        : { orderBy?: CreditorAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditorAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditorAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditorAccount model
   */
  readonly fields: CreditorAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditorAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditorAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CreditorAccount model
   */ 
  interface CreditorAccountFieldRefs {
    readonly id: FieldRef<"CreditorAccount", 'String'>
    readonly ispb: FieldRef<"CreditorAccount", 'String'>
    readonly issuer: FieldRef<"CreditorAccount", 'String'>
    readonly number: FieldRef<"CreditorAccount", 'String'>
    readonly accountType: FieldRef<"CreditorAccount", 'String'>
    readonly paymentId: FieldRef<"CreditorAccount", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CreditorAccount findUnique
   */
  export type CreditorAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditorAccount to fetch.
     */
    where: CreditorAccountWhereUniqueInput
  }


  /**
   * CreditorAccount findUniqueOrThrow
   */
  export type CreditorAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditorAccount to fetch.
     */
    where: CreditorAccountWhereUniqueInput
  }


  /**
   * CreditorAccount findFirst
   */
  export type CreditorAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditorAccount to fetch.
     */
    where?: CreditorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditorAccounts to fetch.
     */
    orderBy?: CreditorAccountOrderByWithRelationInput | CreditorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditorAccounts.
     */
    cursor?: CreditorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditorAccounts.
     */
    distinct?: CreditorAccountScalarFieldEnum | CreditorAccountScalarFieldEnum[]
  }


  /**
   * CreditorAccount findFirstOrThrow
   */
  export type CreditorAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditorAccount to fetch.
     */
    where?: CreditorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditorAccounts to fetch.
     */
    orderBy?: CreditorAccountOrderByWithRelationInput | CreditorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditorAccounts.
     */
    cursor?: CreditorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditorAccounts.
     */
    distinct?: CreditorAccountScalarFieldEnum | CreditorAccountScalarFieldEnum[]
  }


  /**
   * CreditorAccount findMany
   */
  export type CreditorAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * Filter, which CreditorAccounts to fetch.
     */
    where?: CreditorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditorAccounts to fetch.
     */
    orderBy?: CreditorAccountOrderByWithRelationInput | CreditorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditorAccounts.
     */
    cursor?: CreditorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditorAccounts.
     */
    skip?: number
    distinct?: CreditorAccountScalarFieldEnum | CreditorAccountScalarFieldEnum[]
  }


  /**
   * CreditorAccount create
   */
  export type CreditorAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditorAccount.
     */
    data: XOR<CreditorAccountCreateInput, CreditorAccountUncheckedCreateInput>
  }


  /**
   * CreditorAccount createMany
   */
  export type CreditorAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditorAccounts.
     */
    data: CreditorAccountCreateManyInput | CreditorAccountCreateManyInput[]
  }


  /**
   * CreditorAccount update
   */
  export type CreditorAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditorAccount.
     */
    data: XOR<CreditorAccountUpdateInput, CreditorAccountUncheckedUpdateInput>
    /**
     * Choose, which CreditorAccount to update.
     */
    where: CreditorAccountWhereUniqueInput
  }


  /**
   * CreditorAccount updateMany
   */
  export type CreditorAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditorAccounts.
     */
    data: XOR<CreditorAccountUpdateManyMutationInput, CreditorAccountUncheckedUpdateManyInput>
    /**
     * Filter which CreditorAccounts to update
     */
    where?: CreditorAccountWhereInput
  }


  /**
   * CreditorAccount upsert
   */
  export type CreditorAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditorAccount to update in case it exists.
     */
    where: CreditorAccountWhereUniqueInput
    /**
     * In case the CreditorAccount found by the `where` argument doesn't exist, create a new CreditorAccount with this data.
     */
    create: XOR<CreditorAccountCreateInput, CreditorAccountUncheckedCreateInput>
    /**
     * In case the CreditorAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditorAccountUpdateInput, CreditorAccountUncheckedUpdateInput>
  }


  /**
   * CreditorAccount delete
   */
  export type CreditorAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
    /**
     * Filter which CreditorAccount to delete.
     */
    where: CreditorAccountWhereUniqueInput
  }


  /**
   * CreditorAccount deleteMany
   */
  export type CreditorAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditorAccounts to delete
     */
    where?: CreditorAccountWhereInput
  }


  /**
   * CreditorAccount findRaw
   */
  export type CreditorAccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CreditorAccount aggregateRaw
   */
  export type CreditorAccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CreditorAccount without action
   */
  export type CreditorAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditorAccount
     */
    select?: CreditorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditorAccountInclude<ExtArgs> | null
  }



  /**
   * Model DebtorAccount
   */

  export type AggregateDebtorAccount = {
    _count: DebtorAccountCountAggregateOutputType | null
    _min: DebtorAccountMinAggregateOutputType | null
    _max: DebtorAccountMaxAggregateOutputType | null
  }

  export type DebtorAccountMinAggregateOutputType = {
    id: string | null
    ispb: string | null
    issuer: string | null
    number: string | null
    accountType: string | null
    paymentId: string | null
  }

  export type DebtorAccountMaxAggregateOutputType = {
    id: string | null
    ispb: string | null
    issuer: string | null
    number: string | null
    accountType: string | null
    paymentId: string | null
  }

  export type DebtorAccountCountAggregateOutputType = {
    id: number
    ispb: number
    issuer: number
    number: number
    accountType: number
    paymentId: number
    _all: number
  }


  export type DebtorAccountMinAggregateInputType = {
    id?: true
    ispb?: true
    issuer?: true
    number?: true
    accountType?: true
    paymentId?: true
  }

  export type DebtorAccountMaxAggregateInputType = {
    id?: true
    ispb?: true
    issuer?: true
    number?: true
    accountType?: true
    paymentId?: true
  }

  export type DebtorAccountCountAggregateInputType = {
    id?: true
    ispb?: true
    issuer?: true
    number?: true
    accountType?: true
    paymentId?: true
    _all?: true
  }

  export type DebtorAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebtorAccount to aggregate.
     */
    where?: DebtorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebtorAccounts to fetch.
     */
    orderBy?: DebtorAccountOrderByWithRelationInput | DebtorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebtorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebtorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebtorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebtorAccounts
    **/
    _count?: true | DebtorAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebtorAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebtorAccountMaxAggregateInputType
  }

  export type GetDebtorAccountAggregateType<T extends DebtorAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateDebtorAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebtorAccount[P]>
      : GetScalarType<T[P], AggregateDebtorAccount[P]>
  }




  export type DebtorAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebtorAccountWhereInput
    orderBy?: DebtorAccountOrderByWithAggregationInput | DebtorAccountOrderByWithAggregationInput[]
    by: DebtorAccountScalarFieldEnum[] | DebtorAccountScalarFieldEnum
    having?: DebtorAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebtorAccountCountAggregateInputType | true
    _min?: DebtorAccountMinAggregateInputType
    _max?: DebtorAccountMaxAggregateInputType
  }

  export type DebtorAccountGroupByOutputType = {
    id: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    paymentId: string
    _count: DebtorAccountCountAggregateOutputType | null
    _min: DebtorAccountMinAggregateOutputType | null
    _max: DebtorAccountMaxAggregateOutputType | null
  }

  type GetDebtorAccountGroupByPayload<T extends DebtorAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebtorAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebtorAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebtorAccountGroupByOutputType[P]>
            : GetScalarType<T[P], DebtorAccountGroupByOutputType[P]>
        }
      >
    >


  export type DebtorAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ispb?: boolean
    issuer?: boolean
    number?: boolean
    accountType?: boolean
    paymentId?: boolean
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debtorAccount"]>

  export type DebtorAccountSelectScalar = {
    id?: boolean
    ispb?: boolean
    issuer?: boolean
    number?: boolean
    accountType?: boolean
    paymentId?: boolean
  }

  export type DebtorAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }


  export type $DebtorAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebtorAccount"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ispb: string
      issuer: string
      number: string
      accountType: string
      paymentId: string
    }, ExtArgs["result"]["debtorAccount"]>
    composites: {}
  }


  type DebtorAccountGetPayload<S extends boolean | null | undefined | DebtorAccountDefaultArgs> = $Result.GetResult<Prisma.$DebtorAccountPayload, S>

  type DebtorAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DebtorAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DebtorAccountCountAggregateInputType | true
    }

  export interface DebtorAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebtorAccount'], meta: { name: 'DebtorAccount' } }
    /**
     * Find zero or one DebtorAccount that matches the filter.
     * @param {DebtorAccountFindUniqueArgs} args - Arguments to find a DebtorAccount
     * @example
     * // Get one DebtorAccount
     * const debtorAccount = await prisma.debtorAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DebtorAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DebtorAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DebtorAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DebtorAccountFindUniqueOrThrowArgs} args - Arguments to find a DebtorAccount
     * @example
     * // Get one DebtorAccount
     * const debtorAccount = await prisma.debtorAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DebtorAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DebtorAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DebtorAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountFindFirstArgs} args - Arguments to find a DebtorAccount
     * @example
     * // Get one DebtorAccount
     * const debtorAccount = await prisma.debtorAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DebtorAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DebtorAccountFindFirstArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DebtorAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountFindFirstOrThrowArgs} args - Arguments to find a DebtorAccount
     * @example
     * // Get one DebtorAccount
     * const debtorAccount = await prisma.debtorAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DebtorAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DebtorAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DebtorAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebtorAccounts
     * const debtorAccounts = await prisma.debtorAccount.findMany()
     * 
     * // Get first 10 DebtorAccounts
     * const debtorAccounts = await prisma.debtorAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debtorAccountWithIdOnly = await prisma.debtorAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DebtorAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DebtorAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DebtorAccount.
     * @param {DebtorAccountCreateArgs} args - Arguments to create a DebtorAccount.
     * @example
     * // Create one DebtorAccount
     * const DebtorAccount = await prisma.debtorAccount.create({
     *   data: {
     *     // ... data to create a DebtorAccount
     *   }
     * })
     * 
    **/
    create<T extends DebtorAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DebtorAccountCreateArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DebtorAccounts.
     *     @param {DebtorAccountCreateManyArgs} args - Arguments to create many DebtorAccounts.
     *     @example
     *     // Create many DebtorAccounts
     *     const debtorAccount = await prisma.debtorAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DebtorAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DebtorAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DebtorAccount.
     * @param {DebtorAccountDeleteArgs} args - Arguments to delete one DebtorAccount.
     * @example
     * // Delete one DebtorAccount
     * const DebtorAccount = await prisma.debtorAccount.delete({
     *   where: {
     *     // ... filter to delete one DebtorAccount
     *   }
     * })
     * 
    **/
    delete<T extends DebtorAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DebtorAccountDeleteArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DebtorAccount.
     * @param {DebtorAccountUpdateArgs} args - Arguments to update one DebtorAccount.
     * @example
     * // Update one DebtorAccount
     * const debtorAccount = await prisma.debtorAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DebtorAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DebtorAccountUpdateArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DebtorAccounts.
     * @param {DebtorAccountDeleteManyArgs} args - Arguments to filter DebtorAccounts to delete.
     * @example
     * // Delete a few DebtorAccounts
     * const { count } = await prisma.debtorAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DebtorAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DebtorAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebtorAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebtorAccounts
     * const debtorAccount = await prisma.debtorAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DebtorAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DebtorAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DebtorAccount.
     * @param {DebtorAccountUpsertArgs} args - Arguments to update or create a DebtorAccount.
     * @example
     * // Update or create a DebtorAccount
     * const debtorAccount = await prisma.debtorAccount.upsert({
     *   create: {
     *     // ... data to create a DebtorAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebtorAccount we want to update
     *   }
     * })
    **/
    upsert<T extends DebtorAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DebtorAccountUpsertArgs<ExtArgs>>
    ): Prisma__DebtorAccountClient<$Result.GetResult<Prisma.$DebtorAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more DebtorAccounts that matches the filter.
     * @param {DebtorAccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const debtorAccount = await prisma.debtorAccount.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DebtorAccountFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DebtorAccount.
     * @param {DebtorAccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const debtorAccount = await prisma.debtorAccount.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DebtorAccountAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of DebtorAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountCountArgs} args - Arguments to filter DebtorAccounts to count.
     * @example
     * // Count the number of DebtorAccounts
     * const count = await prisma.debtorAccount.count({
     *   where: {
     *     // ... the filter for the DebtorAccounts we want to count
     *   }
     * })
    **/
    count<T extends DebtorAccountCountArgs>(
      args?: Subset<T, DebtorAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebtorAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebtorAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DebtorAccountAggregateArgs>(args: Subset<T, DebtorAccountAggregateArgs>): Prisma.PrismaPromise<GetDebtorAccountAggregateType<T>>

    /**
     * Group by DebtorAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebtorAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DebtorAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebtorAccountGroupByArgs['orderBy'] }
        : { orderBy?: DebtorAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DebtorAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebtorAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebtorAccount model
   */
  readonly fields: DebtorAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebtorAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebtorAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DebtorAccount model
   */ 
  interface DebtorAccountFieldRefs {
    readonly id: FieldRef<"DebtorAccount", 'String'>
    readonly ispb: FieldRef<"DebtorAccount", 'String'>
    readonly issuer: FieldRef<"DebtorAccount", 'String'>
    readonly number: FieldRef<"DebtorAccount", 'String'>
    readonly accountType: FieldRef<"DebtorAccount", 'String'>
    readonly paymentId: FieldRef<"DebtorAccount", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DebtorAccount findUnique
   */
  export type DebtorAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * Filter, which DebtorAccount to fetch.
     */
    where: DebtorAccountWhereUniqueInput
  }


  /**
   * DebtorAccount findUniqueOrThrow
   */
  export type DebtorAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * Filter, which DebtorAccount to fetch.
     */
    where: DebtorAccountWhereUniqueInput
  }


  /**
   * DebtorAccount findFirst
   */
  export type DebtorAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * Filter, which DebtorAccount to fetch.
     */
    where?: DebtorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebtorAccounts to fetch.
     */
    orderBy?: DebtorAccountOrderByWithRelationInput | DebtorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebtorAccounts.
     */
    cursor?: DebtorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebtorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebtorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebtorAccounts.
     */
    distinct?: DebtorAccountScalarFieldEnum | DebtorAccountScalarFieldEnum[]
  }


  /**
   * DebtorAccount findFirstOrThrow
   */
  export type DebtorAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * Filter, which DebtorAccount to fetch.
     */
    where?: DebtorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebtorAccounts to fetch.
     */
    orderBy?: DebtorAccountOrderByWithRelationInput | DebtorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebtorAccounts.
     */
    cursor?: DebtorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebtorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebtorAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebtorAccounts.
     */
    distinct?: DebtorAccountScalarFieldEnum | DebtorAccountScalarFieldEnum[]
  }


  /**
   * DebtorAccount findMany
   */
  export type DebtorAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * Filter, which DebtorAccounts to fetch.
     */
    where?: DebtorAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebtorAccounts to fetch.
     */
    orderBy?: DebtorAccountOrderByWithRelationInput | DebtorAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebtorAccounts.
     */
    cursor?: DebtorAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebtorAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebtorAccounts.
     */
    skip?: number
    distinct?: DebtorAccountScalarFieldEnum | DebtorAccountScalarFieldEnum[]
  }


  /**
   * DebtorAccount create
   */
  export type DebtorAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a DebtorAccount.
     */
    data: XOR<DebtorAccountCreateInput, DebtorAccountUncheckedCreateInput>
  }


  /**
   * DebtorAccount createMany
   */
  export type DebtorAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebtorAccounts.
     */
    data: DebtorAccountCreateManyInput | DebtorAccountCreateManyInput[]
  }


  /**
   * DebtorAccount update
   */
  export type DebtorAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a DebtorAccount.
     */
    data: XOR<DebtorAccountUpdateInput, DebtorAccountUncheckedUpdateInput>
    /**
     * Choose, which DebtorAccount to update.
     */
    where: DebtorAccountWhereUniqueInput
  }


  /**
   * DebtorAccount updateMany
   */
  export type DebtorAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebtorAccounts.
     */
    data: XOR<DebtorAccountUpdateManyMutationInput, DebtorAccountUncheckedUpdateManyInput>
    /**
     * Filter which DebtorAccounts to update
     */
    where?: DebtorAccountWhereInput
  }


  /**
   * DebtorAccount upsert
   */
  export type DebtorAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the DebtorAccount to update in case it exists.
     */
    where: DebtorAccountWhereUniqueInput
    /**
     * In case the DebtorAccount found by the `where` argument doesn't exist, create a new DebtorAccount with this data.
     */
    create: XOR<DebtorAccountCreateInput, DebtorAccountUncheckedCreateInput>
    /**
     * In case the DebtorAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebtorAccountUpdateInput, DebtorAccountUncheckedUpdateInput>
  }


  /**
   * DebtorAccount delete
   */
  export type DebtorAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
    /**
     * Filter which DebtorAccount to delete.
     */
    where: DebtorAccountWhereUniqueInput
  }


  /**
   * DebtorAccount deleteMany
   */
  export type DebtorAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebtorAccounts to delete
     */
    where?: DebtorAccountWhereInput
  }


  /**
   * DebtorAccount findRaw
   */
  export type DebtorAccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DebtorAccount aggregateRaw
   */
  export type DebtorAccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DebtorAccount without action
   */
  export type DebtorAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebtorAccount
     */
    select?: DebtorAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DebtorAccountInclude<ExtArgs> | null
  }



  /**
   * Model Cancellation
   */

  export type AggregateCancellation = {
    _count: CancellationCountAggregateOutputType | null
    _min: CancellationMinAggregateOutputType | null
    _max: CancellationMaxAggregateOutputType | null
  }

  export type CancellationMinAggregateOutputType = {
    id: string | null
    reason: string | null
    cancelledFrom: string | null
    cancelledAt: Date | null
    cancelledByIdentification: string | null
    cancelledByRel: string | null
    paymentId: string | null
  }

  export type CancellationMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    cancelledFrom: string | null
    cancelledAt: Date | null
    cancelledByIdentification: string | null
    cancelledByRel: string | null
    paymentId: string | null
  }

  export type CancellationCountAggregateOutputType = {
    id: number
    reason: number
    cancelledFrom: number
    cancelledAt: number
    cancelledByIdentification: number
    cancelledByRel: number
    paymentId: number
    _all: number
  }


  export type CancellationMinAggregateInputType = {
    id?: true
    reason?: true
    cancelledFrom?: true
    cancelledAt?: true
    cancelledByIdentification?: true
    cancelledByRel?: true
    paymentId?: true
  }

  export type CancellationMaxAggregateInputType = {
    id?: true
    reason?: true
    cancelledFrom?: true
    cancelledAt?: true
    cancelledByIdentification?: true
    cancelledByRel?: true
    paymentId?: true
  }

  export type CancellationCountAggregateInputType = {
    id?: true
    reason?: true
    cancelledFrom?: true
    cancelledAt?: true
    cancelledByIdentification?: true
    cancelledByRel?: true
    paymentId?: true
    _all?: true
  }

  export type CancellationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cancellation to aggregate.
     */
    where?: CancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancellations to fetch.
     */
    orderBy?: CancellationOrderByWithRelationInput | CancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cancellations
    **/
    _count?: true | CancellationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancellationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancellationMaxAggregateInputType
  }

  export type GetCancellationAggregateType<T extends CancellationAggregateArgs> = {
        [P in keyof T & keyof AggregateCancellation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancellation[P]>
      : GetScalarType<T[P], AggregateCancellation[P]>
  }




  export type CancellationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancellationWhereInput
    orderBy?: CancellationOrderByWithAggregationInput | CancellationOrderByWithAggregationInput[]
    by: CancellationScalarFieldEnum[] | CancellationScalarFieldEnum
    having?: CancellationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancellationCountAggregateInputType | true
    _min?: CancellationMinAggregateInputType
    _max?: CancellationMaxAggregateInputType
  }

  export type CancellationGroupByOutputType = {
    id: string
    reason: string
    cancelledFrom: string
    cancelledAt: Date
    cancelledByIdentification: string
    cancelledByRel: string
    paymentId: string
    _count: CancellationCountAggregateOutputType | null
    _min: CancellationMinAggregateOutputType | null
    _max: CancellationMaxAggregateOutputType | null
  }

  type GetCancellationGroupByPayload<T extends CancellationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CancellationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancellationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancellationGroupByOutputType[P]>
            : GetScalarType<T[P], CancellationGroupByOutputType[P]>
        }
      >
    >


  export type CancellationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    cancelledFrom?: boolean
    cancelledAt?: boolean
    cancelledByIdentification?: boolean
    cancelledByRel?: boolean
    paymentId?: boolean
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancellation"]>

  export type CancellationSelectScalar = {
    id?: boolean
    reason?: boolean
    cancelledFrom?: boolean
    cancelledAt?: boolean
    cancelledByIdentification?: boolean
    cancelledByRel?: boolean
    paymentId?: boolean
  }

  export type CancellationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }


  export type $CancellationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cancellation"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: string
      cancelledFrom: string
      cancelledAt: Date
      cancelledByIdentification: string
      cancelledByRel: string
      paymentId: string
    }, ExtArgs["result"]["cancellation"]>
    composites: {}
  }


  type CancellationGetPayload<S extends boolean | null | undefined | CancellationDefaultArgs> = $Result.GetResult<Prisma.$CancellationPayload, S>

  type CancellationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CancellationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CancellationCountAggregateInputType | true
    }

  export interface CancellationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cancellation'], meta: { name: 'Cancellation' } }
    /**
     * Find zero or one Cancellation that matches the filter.
     * @param {CancellationFindUniqueArgs} args - Arguments to find a Cancellation
     * @example
     * // Get one Cancellation
     * const cancellation = await prisma.cancellation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CancellationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CancellationFindUniqueArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cancellation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CancellationFindUniqueOrThrowArgs} args - Arguments to find a Cancellation
     * @example
     * // Get one Cancellation
     * const cancellation = await prisma.cancellation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CancellationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CancellationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cancellation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationFindFirstArgs} args - Arguments to find a Cancellation
     * @example
     * // Get one Cancellation
     * const cancellation = await prisma.cancellation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CancellationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CancellationFindFirstArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cancellation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationFindFirstOrThrowArgs} args - Arguments to find a Cancellation
     * @example
     * // Get one Cancellation
     * const cancellation = await prisma.cancellation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CancellationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CancellationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cancellations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cancellations
     * const cancellations = await prisma.cancellation.findMany()
     * 
     * // Get first 10 Cancellations
     * const cancellations = await prisma.cancellation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancellationWithIdOnly = await prisma.cancellation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CancellationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CancellationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cancellation.
     * @param {CancellationCreateArgs} args - Arguments to create a Cancellation.
     * @example
     * // Create one Cancellation
     * const Cancellation = await prisma.cancellation.create({
     *   data: {
     *     // ... data to create a Cancellation
     *   }
     * })
     * 
    **/
    create<T extends CancellationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CancellationCreateArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cancellations.
     *     @param {CancellationCreateManyArgs} args - Arguments to create many Cancellations.
     *     @example
     *     // Create many Cancellations
     *     const cancellation = await prisma.cancellation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CancellationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CancellationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cancellation.
     * @param {CancellationDeleteArgs} args - Arguments to delete one Cancellation.
     * @example
     * // Delete one Cancellation
     * const Cancellation = await prisma.cancellation.delete({
     *   where: {
     *     // ... filter to delete one Cancellation
     *   }
     * })
     * 
    **/
    delete<T extends CancellationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CancellationDeleteArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cancellation.
     * @param {CancellationUpdateArgs} args - Arguments to update one Cancellation.
     * @example
     * // Update one Cancellation
     * const cancellation = await prisma.cancellation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CancellationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CancellationUpdateArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cancellations.
     * @param {CancellationDeleteManyArgs} args - Arguments to filter Cancellations to delete.
     * @example
     * // Delete a few Cancellations
     * const { count } = await prisma.cancellation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CancellationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CancellationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cancellations
     * const cancellation = await prisma.cancellation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CancellationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CancellationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cancellation.
     * @param {CancellationUpsertArgs} args - Arguments to update or create a Cancellation.
     * @example
     * // Update or create a Cancellation
     * const cancellation = await prisma.cancellation.upsert({
     *   create: {
     *     // ... data to create a Cancellation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cancellation we want to update
     *   }
     * })
    **/
    upsert<T extends CancellationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CancellationUpsertArgs<ExtArgs>>
    ): Prisma__CancellationClient<$Result.GetResult<Prisma.$CancellationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Cancellations that matches the filter.
     * @param {CancellationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cancellation = await prisma.cancellation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CancellationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cancellation.
     * @param {CancellationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cancellation = await prisma.cancellation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CancellationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Cancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationCountArgs} args - Arguments to filter Cancellations to count.
     * @example
     * // Count the number of Cancellations
     * const count = await prisma.cancellation.count({
     *   where: {
     *     // ... the filter for the Cancellations we want to count
     *   }
     * })
    **/
    count<T extends CancellationCountArgs>(
      args?: Subset<T, CancellationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancellationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CancellationAggregateArgs>(args: Subset<T, CancellationAggregateArgs>): Prisma.PrismaPromise<GetCancellationAggregateType<T>>

    /**
     * Group by Cancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancellationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CancellationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancellationGroupByArgs['orderBy'] }
        : { orderBy?: CancellationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CancellationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancellationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cancellation model
   */
  readonly fields: CancellationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cancellation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CancellationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cancellation model
   */ 
  interface CancellationFieldRefs {
    readonly id: FieldRef<"Cancellation", 'String'>
    readonly reason: FieldRef<"Cancellation", 'String'>
    readonly cancelledFrom: FieldRef<"Cancellation", 'String'>
    readonly cancelledAt: FieldRef<"Cancellation", 'DateTime'>
    readonly cancelledByIdentification: FieldRef<"Cancellation", 'String'>
    readonly cancelledByRel: FieldRef<"Cancellation", 'String'>
    readonly paymentId: FieldRef<"Cancellation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Cancellation findUnique
   */
  export type CancellationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * Filter, which Cancellation to fetch.
     */
    where: CancellationWhereUniqueInput
  }


  /**
   * Cancellation findUniqueOrThrow
   */
  export type CancellationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * Filter, which Cancellation to fetch.
     */
    where: CancellationWhereUniqueInput
  }


  /**
   * Cancellation findFirst
   */
  export type CancellationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * Filter, which Cancellation to fetch.
     */
    where?: CancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancellations to fetch.
     */
    orderBy?: CancellationOrderByWithRelationInput | CancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cancellations.
     */
    cursor?: CancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cancellations.
     */
    distinct?: CancellationScalarFieldEnum | CancellationScalarFieldEnum[]
  }


  /**
   * Cancellation findFirstOrThrow
   */
  export type CancellationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * Filter, which Cancellation to fetch.
     */
    where?: CancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancellations to fetch.
     */
    orderBy?: CancellationOrderByWithRelationInput | CancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cancellations.
     */
    cursor?: CancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cancellations.
     */
    distinct?: CancellationScalarFieldEnum | CancellationScalarFieldEnum[]
  }


  /**
   * Cancellation findMany
   */
  export type CancellationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * Filter, which Cancellations to fetch.
     */
    where?: CancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancellations to fetch.
     */
    orderBy?: CancellationOrderByWithRelationInput | CancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cancellations.
     */
    cursor?: CancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancellations.
     */
    skip?: number
    distinct?: CancellationScalarFieldEnum | CancellationScalarFieldEnum[]
  }


  /**
   * Cancellation create
   */
  export type CancellationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * The data needed to create a Cancellation.
     */
    data: XOR<CancellationCreateInput, CancellationUncheckedCreateInput>
  }


  /**
   * Cancellation createMany
   */
  export type CancellationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cancellations.
     */
    data: CancellationCreateManyInput | CancellationCreateManyInput[]
  }


  /**
   * Cancellation update
   */
  export type CancellationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * The data needed to update a Cancellation.
     */
    data: XOR<CancellationUpdateInput, CancellationUncheckedUpdateInput>
    /**
     * Choose, which Cancellation to update.
     */
    where: CancellationWhereUniqueInput
  }


  /**
   * Cancellation updateMany
   */
  export type CancellationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cancellations.
     */
    data: XOR<CancellationUpdateManyMutationInput, CancellationUncheckedUpdateManyInput>
    /**
     * Filter which Cancellations to update
     */
    where?: CancellationWhereInput
  }


  /**
   * Cancellation upsert
   */
  export type CancellationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * The filter to search for the Cancellation to update in case it exists.
     */
    where: CancellationWhereUniqueInput
    /**
     * In case the Cancellation found by the `where` argument doesn't exist, create a new Cancellation with this data.
     */
    create: XOR<CancellationCreateInput, CancellationUncheckedCreateInput>
    /**
     * In case the Cancellation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CancellationUpdateInput, CancellationUncheckedUpdateInput>
  }


  /**
   * Cancellation delete
   */
  export type CancellationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
    /**
     * Filter which Cancellation to delete.
     */
    where: CancellationWhereUniqueInput
  }


  /**
   * Cancellation deleteMany
   */
  export type CancellationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cancellations to delete
     */
    where?: CancellationWhereInput
  }


  /**
   * Cancellation findRaw
   */
  export type CancellationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Cancellation aggregateRaw
   */
  export type CancellationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Cancellation without action
   */
  export type CancellationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancellation
     */
    select?: CancellationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CancellationInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const PaymentScalarFieldEnum: {
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

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const CreditorAccountScalarFieldEnum: {
    id: 'id',
    ispb: 'ispb',
    issuer: 'issuer',
    number: 'number',
    accountType: 'accountType',
    paymentId: 'paymentId'
  };

  export type CreditorAccountScalarFieldEnum = (typeof CreditorAccountScalarFieldEnum)[keyof typeof CreditorAccountScalarFieldEnum]


  export const DebtorAccountScalarFieldEnum: {
    id: 'id',
    ispb: 'ispb',
    issuer: 'issuer',
    number: 'number',
    accountType: 'accountType',
    paymentId: 'paymentId'
  };

  export type DebtorAccountScalarFieldEnum = (typeof DebtorAccountScalarFieldEnum)[keyof typeof DebtorAccountScalarFieldEnum]


  export const CancellationScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    cancelledFrom: 'cancelledFrom',
    cancelledAt: 'cancelledAt',
    cancelledByIdentification: 'cancelledByIdentification',
    cancelledByRel: 'cancelledByRel',
    paymentId: 'paymentId'
  };

  export type CancellationScalarFieldEnum = (typeof CancellationScalarFieldEnum)[keyof typeof CancellationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paymentId?: StringFilter<"Payment"> | string
    endToEndId?: StringFilter<"Payment"> | string
    consentId?: StringFilter<"Payment"> | string
    creationDateTime?: DateTimeFilter<"Payment"> | Date | string
    statusUpdateDateTime?: DateTimeFilter<"Payment"> | Date | string
    proxy?: StringFilter<"Payment"> | string
    ibgeTownCode?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    rejectionReasonCode?: StringNullableFilter<"Payment"> | string | null
    rejectionReasonDetail?: StringNullableFilter<"Payment"> | string | null
    localInstrument?: StringFilter<"Payment"> | string
    cnpjInitiator?: StringFilter<"Payment"> | string
    paymentAmount?: StringFilter<"Payment"> | string
    paymentCurrency?: StringFilter<"Payment"> | string
    transactionIdentification?: StringFilter<"Payment"> | string
    remittanceInformation?: StringFilter<"Payment"> | string
    creditorAccount?: XOR<CreditorAccountNullableRelationFilter, CreditorAccountWhereInput> | null
    debtorAccount?: XOR<DebtorAccountNullableRelationFilter, DebtorAccountWhereInput> | null
    cancellation?: XOR<CancellationNullableRelationFilter, CancellationWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    paymentId?: SortOrder
    endToEndId?: SortOrder
    consentId?: SortOrder
    creationDateTime?: SortOrder
    statusUpdateDateTime?: SortOrder
    proxy?: SortOrder
    ibgeTownCode?: SortOrder
    status?: SortOrder
    rejectionReasonCode?: SortOrder
    rejectionReasonDetail?: SortOrder
    localInstrument?: SortOrder
    cnpjInitiator?: SortOrder
    paymentAmount?: SortOrder
    paymentCurrency?: SortOrder
    transactionIdentification?: SortOrder
    remittanceInformation?: SortOrder
    creditorAccount?: CreditorAccountOrderByWithRelationInput
    debtorAccount?: DebtorAccountOrderByWithRelationInput
    cancellation?: CancellationOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    paymentId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    endToEndId?: StringFilter<"Payment"> | string
    consentId?: StringFilter<"Payment"> | string
    creationDateTime?: DateTimeFilter<"Payment"> | Date | string
    statusUpdateDateTime?: DateTimeFilter<"Payment"> | Date | string
    proxy?: StringFilter<"Payment"> | string
    ibgeTownCode?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    rejectionReasonCode?: StringNullableFilter<"Payment"> | string | null
    rejectionReasonDetail?: StringNullableFilter<"Payment"> | string | null
    localInstrument?: StringFilter<"Payment"> | string
    cnpjInitiator?: StringFilter<"Payment"> | string
    paymentAmount?: StringFilter<"Payment"> | string
    paymentCurrency?: StringFilter<"Payment"> | string
    transactionIdentification?: StringFilter<"Payment"> | string
    remittanceInformation?: StringFilter<"Payment"> | string
    creditorAccount?: XOR<CreditorAccountNullableRelationFilter, CreditorAccountWhereInput> | null
    debtorAccount?: XOR<DebtorAccountNullableRelationFilter, DebtorAccountWhereInput> | null
    cancellation?: XOR<CancellationNullableRelationFilter, CancellationWhereInput> | null
  }, "paymentId">

  export type PaymentOrderByWithAggregationInput = {
    paymentId?: SortOrder
    endToEndId?: SortOrder
    consentId?: SortOrder
    creationDateTime?: SortOrder
    statusUpdateDateTime?: SortOrder
    proxy?: SortOrder
    ibgeTownCode?: SortOrder
    status?: SortOrder
    rejectionReasonCode?: SortOrder
    rejectionReasonDetail?: SortOrder
    localInstrument?: SortOrder
    cnpjInitiator?: SortOrder
    paymentAmount?: SortOrder
    paymentCurrency?: SortOrder
    transactionIdentification?: SortOrder
    remittanceInformation?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    paymentId?: StringWithAggregatesFilter<"Payment"> | string
    endToEndId?: StringWithAggregatesFilter<"Payment"> | string
    consentId?: StringWithAggregatesFilter<"Payment"> | string
    creationDateTime?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    statusUpdateDateTime?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    proxy?: StringWithAggregatesFilter<"Payment"> | string
    ibgeTownCode?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    rejectionReasonCode?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    rejectionReasonDetail?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    localInstrument?: StringWithAggregatesFilter<"Payment"> | string
    cnpjInitiator?: StringWithAggregatesFilter<"Payment"> | string
    paymentAmount?: StringWithAggregatesFilter<"Payment"> | string
    paymentCurrency?: StringWithAggregatesFilter<"Payment"> | string
    transactionIdentification?: StringWithAggregatesFilter<"Payment"> | string
    remittanceInformation?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type CreditorAccountWhereInput = {
    AND?: CreditorAccountWhereInput | CreditorAccountWhereInput[]
    OR?: CreditorAccountWhereInput[]
    NOT?: CreditorAccountWhereInput | CreditorAccountWhereInput[]
    id?: StringFilter<"CreditorAccount"> | string
    ispb?: StringFilter<"CreditorAccount"> | string
    issuer?: StringFilter<"CreditorAccount"> | string
    number?: StringFilter<"CreditorAccount"> | string
    accountType?: StringFilter<"CreditorAccount"> | string
    paymentId?: StringFilter<"CreditorAccount"> | string
    Payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type CreditorAccountOrderByWithRelationInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
    Payment?: PaymentOrderByWithRelationInput
  }

  export type CreditorAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: CreditorAccountWhereInput | CreditorAccountWhereInput[]
    OR?: CreditorAccountWhereInput[]
    NOT?: CreditorAccountWhereInput | CreditorAccountWhereInput[]
    ispb?: StringFilter<"CreditorAccount"> | string
    issuer?: StringFilter<"CreditorAccount"> | string
    number?: StringFilter<"CreditorAccount"> | string
    accountType?: StringFilter<"CreditorAccount"> | string
    Payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id" | "paymentId">

  export type CreditorAccountOrderByWithAggregationInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
    _count?: CreditorAccountCountOrderByAggregateInput
    _max?: CreditorAccountMaxOrderByAggregateInput
    _min?: CreditorAccountMinOrderByAggregateInput
  }

  export type CreditorAccountScalarWhereWithAggregatesInput = {
    AND?: CreditorAccountScalarWhereWithAggregatesInput | CreditorAccountScalarWhereWithAggregatesInput[]
    OR?: CreditorAccountScalarWhereWithAggregatesInput[]
    NOT?: CreditorAccountScalarWhereWithAggregatesInput | CreditorAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditorAccount"> | string
    ispb?: StringWithAggregatesFilter<"CreditorAccount"> | string
    issuer?: StringWithAggregatesFilter<"CreditorAccount"> | string
    number?: StringWithAggregatesFilter<"CreditorAccount"> | string
    accountType?: StringWithAggregatesFilter<"CreditorAccount"> | string
    paymentId?: StringWithAggregatesFilter<"CreditorAccount"> | string
  }

  export type DebtorAccountWhereInput = {
    AND?: DebtorAccountWhereInput | DebtorAccountWhereInput[]
    OR?: DebtorAccountWhereInput[]
    NOT?: DebtorAccountWhereInput | DebtorAccountWhereInput[]
    id?: StringFilter<"DebtorAccount"> | string
    ispb?: StringFilter<"DebtorAccount"> | string
    issuer?: StringFilter<"DebtorAccount"> | string
    number?: StringFilter<"DebtorAccount"> | string
    accountType?: StringFilter<"DebtorAccount"> | string
    paymentId?: StringFilter<"DebtorAccount"> | string
    Payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type DebtorAccountOrderByWithRelationInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
    Payment?: PaymentOrderByWithRelationInput
  }

  export type DebtorAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: DebtorAccountWhereInput | DebtorAccountWhereInput[]
    OR?: DebtorAccountWhereInput[]
    NOT?: DebtorAccountWhereInput | DebtorAccountWhereInput[]
    ispb?: StringFilter<"DebtorAccount"> | string
    issuer?: StringFilter<"DebtorAccount"> | string
    number?: StringFilter<"DebtorAccount"> | string
    accountType?: StringFilter<"DebtorAccount"> | string
    Payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id" | "paymentId">

  export type DebtorAccountOrderByWithAggregationInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
    _count?: DebtorAccountCountOrderByAggregateInput
    _max?: DebtorAccountMaxOrderByAggregateInput
    _min?: DebtorAccountMinOrderByAggregateInput
  }

  export type DebtorAccountScalarWhereWithAggregatesInput = {
    AND?: DebtorAccountScalarWhereWithAggregatesInput | DebtorAccountScalarWhereWithAggregatesInput[]
    OR?: DebtorAccountScalarWhereWithAggregatesInput[]
    NOT?: DebtorAccountScalarWhereWithAggregatesInput | DebtorAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DebtorAccount"> | string
    ispb?: StringWithAggregatesFilter<"DebtorAccount"> | string
    issuer?: StringWithAggregatesFilter<"DebtorAccount"> | string
    number?: StringWithAggregatesFilter<"DebtorAccount"> | string
    accountType?: StringWithAggregatesFilter<"DebtorAccount"> | string
    paymentId?: StringWithAggregatesFilter<"DebtorAccount"> | string
  }

  export type CancellationWhereInput = {
    AND?: CancellationWhereInput | CancellationWhereInput[]
    OR?: CancellationWhereInput[]
    NOT?: CancellationWhereInput | CancellationWhereInput[]
    id?: StringFilter<"Cancellation"> | string
    reason?: StringFilter<"Cancellation"> | string
    cancelledFrom?: StringFilter<"Cancellation"> | string
    cancelledAt?: DateTimeFilter<"Cancellation"> | Date | string
    cancelledByIdentification?: StringFilter<"Cancellation"> | string
    cancelledByRel?: StringFilter<"Cancellation"> | string
    paymentId?: StringFilter<"Cancellation"> | string
    Payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }

  export type CancellationOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    cancelledFrom?: SortOrder
    cancelledAt?: SortOrder
    cancelledByIdentification?: SortOrder
    cancelledByRel?: SortOrder
    paymentId?: SortOrder
    Payment?: PaymentOrderByWithRelationInput
  }

  export type CancellationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: CancellationWhereInput | CancellationWhereInput[]
    OR?: CancellationWhereInput[]
    NOT?: CancellationWhereInput | CancellationWhereInput[]
    reason?: StringFilter<"Cancellation"> | string
    cancelledFrom?: StringFilter<"Cancellation"> | string
    cancelledAt?: DateTimeFilter<"Cancellation"> | Date | string
    cancelledByIdentification?: StringFilter<"Cancellation"> | string
    cancelledByRel?: StringFilter<"Cancellation"> | string
    Payment?: XOR<PaymentRelationFilter, PaymentWhereInput>
  }, "id" | "paymentId">

  export type CancellationOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    cancelledFrom?: SortOrder
    cancelledAt?: SortOrder
    cancelledByIdentification?: SortOrder
    cancelledByRel?: SortOrder
    paymentId?: SortOrder
    _count?: CancellationCountOrderByAggregateInput
    _max?: CancellationMaxOrderByAggregateInput
    _min?: CancellationMinOrderByAggregateInput
  }

  export type CancellationScalarWhereWithAggregatesInput = {
    AND?: CancellationScalarWhereWithAggregatesInput | CancellationScalarWhereWithAggregatesInput[]
    OR?: CancellationScalarWhereWithAggregatesInput[]
    NOT?: CancellationScalarWhereWithAggregatesInput | CancellationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cancellation"> | string
    reason?: StringWithAggregatesFilter<"Cancellation"> | string
    cancelledFrom?: StringWithAggregatesFilter<"Cancellation"> | string
    cancelledAt?: DateTimeWithAggregatesFilter<"Cancellation"> | Date | string
    cancelledByIdentification?: StringWithAggregatesFilter<"Cancellation"> | string
    cancelledByRel?: StringWithAggregatesFilter<"Cancellation"> | string
    paymentId?: StringWithAggregatesFilter<"Cancellation"> | string
  }

  export type PaymentCreateInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    creditorAccount?: CreditorAccountCreateNestedOneWithoutPaymentInput
    debtorAccount?: DebtorAccountCreateNestedOneWithoutPaymentInput
    cancellation?: CancellationCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    creditorAccount?: CreditorAccountUncheckedCreateNestedOneWithoutPaymentInput
    debtorAccount?: DebtorAccountUncheckedCreateNestedOneWithoutPaymentInput
    cancellation?: CancellationUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    creditorAccount?: CreditorAccountUpdateOneWithoutPaymentNestedInput
    debtorAccount?: DebtorAccountUpdateOneWithoutPaymentNestedInput
    cancellation?: CancellationUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    creditorAccount?: CreditorAccountUncheckedUpdateOneWithoutPaymentNestedInput
    debtorAccount?: DebtorAccountUncheckedUpdateOneWithoutPaymentNestedInput
    cancellation?: CancellationUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
  }

  export type PaymentUpdateManyMutationInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
  }

  export type CreditorAccountCreateInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    Payment: PaymentCreateNestedOneWithoutCreditorAccountInput
  }

  export type CreditorAccountUncheckedCreateInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    paymentId: string
  }

  export type CreditorAccountUpdateInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    Payment?: PaymentUpdateOneRequiredWithoutCreditorAccountNestedInput
  }

  export type CreditorAccountUncheckedUpdateInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
  }

  export type CreditorAccountCreateManyInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    paymentId: string
  }

  export type CreditorAccountUpdateManyMutationInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
  }

  export type CreditorAccountUncheckedUpdateManyInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
  }

  export type DebtorAccountCreateInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    Payment: PaymentCreateNestedOneWithoutDebtorAccountInput
  }

  export type DebtorAccountUncheckedCreateInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    paymentId: string
  }

  export type DebtorAccountUpdateInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    Payment?: PaymentUpdateOneRequiredWithoutDebtorAccountNestedInput
  }

  export type DebtorAccountUncheckedUpdateInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
  }

  export type DebtorAccountCreateManyInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
    paymentId: string
  }

  export type DebtorAccountUpdateManyMutationInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
  }

  export type DebtorAccountUncheckedUpdateManyInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
  }

  export type CancellationCreateInput = {
    id?: string
    reason: string
    cancelledFrom: string
    cancelledAt: Date | string
    cancelledByIdentification: string
    cancelledByRel: string
    Payment: PaymentCreateNestedOneWithoutCancellationInput
  }

  export type CancellationUncheckedCreateInput = {
    id?: string
    reason: string
    cancelledFrom: string
    cancelledAt: Date | string
    cancelledByIdentification: string
    cancelledByRel: string
    paymentId: string
  }

  export type CancellationUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    cancelledFrom?: StringFieldUpdateOperationsInput | string
    cancelledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledByIdentification?: StringFieldUpdateOperationsInput | string
    cancelledByRel?: StringFieldUpdateOperationsInput | string
    Payment?: PaymentUpdateOneRequiredWithoutCancellationNestedInput
  }

  export type CancellationUncheckedUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    cancelledFrom?: StringFieldUpdateOperationsInput | string
    cancelledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledByIdentification?: StringFieldUpdateOperationsInput | string
    cancelledByRel?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
  }

  export type CancellationCreateManyInput = {
    id?: string
    reason: string
    cancelledFrom: string
    cancelledAt: Date | string
    cancelledByIdentification: string
    cancelledByRel: string
    paymentId: string
  }

  export type CancellationUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    cancelledFrom?: StringFieldUpdateOperationsInput | string
    cancelledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledByIdentification?: StringFieldUpdateOperationsInput | string
    cancelledByRel?: StringFieldUpdateOperationsInput | string
  }

  export type CancellationUncheckedUpdateManyInput = {
    reason?: StringFieldUpdateOperationsInput | string
    cancelledFrom?: StringFieldUpdateOperationsInput | string
    cancelledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledByIdentification?: StringFieldUpdateOperationsInput | string
    cancelledByRel?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type CreditorAccountNullableRelationFilter = {
    is?: CreditorAccountWhereInput | null
    isNot?: CreditorAccountWhereInput | null
  }

  export type DebtorAccountNullableRelationFilter = {
    is?: DebtorAccountWhereInput | null
    isNot?: DebtorAccountWhereInput | null
  }

  export type CancellationNullableRelationFilter = {
    is?: CancellationWhereInput | null
    isNot?: CancellationWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    paymentId?: SortOrder
    endToEndId?: SortOrder
    consentId?: SortOrder
    creationDateTime?: SortOrder
    statusUpdateDateTime?: SortOrder
    proxy?: SortOrder
    ibgeTownCode?: SortOrder
    status?: SortOrder
    rejectionReasonCode?: SortOrder
    rejectionReasonDetail?: SortOrder
    localInstrument?: SortOrder
    cnpjInitiator?: SortOrder
    paymentAmount?: SortOrder
    paymentCurrency?: SortOrder
    transactionIdentification?: SortOrder
    remittanceInformation?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    paymentId?: SortOrder
    endToEndId?: SortOrder
    consentId?: SortOrder
    creationDateTime?: SortOrder
    statusUpdateDateTime?: SortOrder
    proxy?: SortOrder
    ibgeTownCode?: SortOrder
    status?: SortOrder
    rejectionReasonCode?: SortOrder
    rejectionReasonDetail?: SortOrder
    localInstrument?: SortOrder
    cnpjInitiator?: SortOrder
    paymentAmount?: SortOrder
    paymentCurrency?: SortOrder
    transactionIdentification?: SortOrder
    remittanceInformation?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    paymentId?: SortOrder
    endToEndId?: SortOrder
    consentId?: SortOrder
    creationDateTime?: SortOrder
    statusUpdateDateTime?: SortOrder
    proxy?: SortOrder
    ibgeTownCode?: SortOrder
    status?: SortOrder
    rejectionReasonCode?: SortOrder
    rejectionReasonDetail?: SortOrder
    localInstrument?: SortOrder
    cnpjInitiator?: SortOrder
    paymentAmount?: SortOrder
    paymentCurrency?: SortOrder
    transactionIdentification?: SortOrder
    remittanceInformation?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type PaymentRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type CreditorAccountCountOrderByAggregateInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
  }

  export type CreditorAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
  }

  export type CreditorAccountMinOrderByAggregateInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
  }

  export type DebtorAccountCountOrderByAggregateInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
  }

  export type DebtorAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
  }

  export type DebtorAccountMinOrderByAggregateInput = {
    id?: SortOrder
    ispb?: SortOrder
    issuer?: SortOrder
    number?: SortOrder
    accountType?: SortOrder
    paymentId?: SortOrder
  }

  export type CancellationCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    cancelledFrom?: SortOrder
    cancelledAt?: SortOrder
    cancelledByIdentification?: SortOrder
    cancelledByRel?: SortOrder
    paymentId?: SortOrder
  }

  export type CancellationMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    cancelledFrom?: SortOrder
    cancelledAt?: SortOrder
    cancelledByIdentification?: SortOrder
    cancelledByRel?: SortOrder
    paymentId?: SortOrder
  }

  export type CancellationMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    cancelledFrom?: SortOrder
    cancelledAt?: SortOrder
    cancelledByIdentification?: SortOrder
    cancelledByRel?: SortOrder
    paymentId?: SortOrder
  }

  export type CreditorAccountCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CreditorAccountCreateWithoutPaymentInput, CreditorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditorAccountCreateOrConnectWithoutPaymentInput
    connect?: CreditorAccountWhereUniqueInput
  }

  export type DebtorAccountCreateNestedOneWithoutPaymentInput = {
    create?: XOR<DebtorAccountCreateWithoutPaymentInput, DebtorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DebtorAccountCreateOrConnectWithoutPaymentInput
    connect?: DebtorAccountWhereUniqueInput
  }

  export type CancellationCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CancellationCreateWithoutPaymentInput, CancellationUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CancellationCreateOrConnectWithoutPaymentInput
    connect?: CancellationWhereUniqueInput
  }

  export type CreditorAccountUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CreditorAccountCreateWithoutPaymentInput, CreditorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditorAccountCreateOrConnectWithoutPaymentInput
    connect?: CreditorAccountWhereUniqueInput
  }

  export type DebtorAccountUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<DebtorAccountCreateWithoutPaymentInput, DebtorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DebtorAccountCreateOrConnectWithoutPaymentInput
    connect?: DebtorAccountWhereUniqueInput
  }

  export type CancellationUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CancellationCreateWithoutPaymentInput, CancellationUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CancellationCreateOrConnectWithoutPaymentInput
    connect?: CancellationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type CreditorAccountUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<CreditorAccountCreateWithoutPaymentInput, CreditorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditorAccountCreateOrConnectWithoutPaymentInput
    upsert?: CreditorAccountUpsertWithoutPaymentInput
    disconnect?: CreditorAccountWhereInput | boolean
    delete?: CreditorAccountWhereInput | boolean
    connect?: CreditorAccountWhereUniqueInput
    update?: XOR<XOR<CreditorAccountUpdateToOneWithWhereWithoutPaymentInput, CreditorAccountUpdateWithoutPaymentInput>, CreditorAccountUncheckedUpdateWithoutPaymentInput>
  }

  export type DebtorAccountUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<DebtorAccountCreateWithoutPaymentInput, DebtorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DebtorAccountCreateOrConnectWithoutPaymentInput
    upsert?: DebtorAccountUpsertWithoutPaymentInput
    disconnect?: DebtorAccountWhereInput | boolean
    delete?: DebtorAccountWhereInput | boolean
    connect?: DebtorAccountWhereUniqueInput
    update?: XOR<XOR<DebtorAccountUpdateToOneWithWhereWithoutPaymentInput, DebtorAccountUpdateWithoutPaymentInput>, DebtorAccountUncheckedUpdateWithoutPaymentInput>
  }

  export type CancellationUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<CancellationCreateWithoutPaymentInput, CancellationUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CancellationCreateOrConnectWithoutPaymentInput
    upsert?: CancellationUpsertWithoutPaymentInput
    disconnect?: CancellationWhereInput | boolean
    delete?: CancellationWhereInput | boolean
    connect?: CancellationWhereUniqueInput
    update?: XOR<XOR<CancellationUpdateToOneWithWhereWithoutPaymentInput, CancellationUpdateWithoutPaymentInput>, CancellationUncheckedUpdateWithoutPaymentInput>
  }

  export type CreditorAccountUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<CreditorAccountCreateWithoutPaymentInput, CreditorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CreditorAccountCreateOrConnectWithoutPaymentInput
    upsert?: CreditorAccountUpsertWithoutPaymentInput
    disconnect?: CreditorAccountWhereInput | boolean
    delete?: CreditorAccountWhereInput | boolean
    connect?: CreditorAccountWhereUniqueInput
    update?: XOR<XOR<CreditorAccountUpdateToOneWithWhereWithoutPaymentInput, CreditorAccountUpdateWithoutPaymentInput>, CreditorAccountUncheckedUpdateWithoutPaymentInput>
  }

  export type DebtorAccountUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<DebtorAccountCreateWithoutPaymentInput, DebtorAccountUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DebtorAccountCreateOrConnectWithoutPaymentInput
    upsert?: DebtorAccountUpsertWithoutPaymentInput
    disconnect?: DebtorAccountWhereInput | boolean
    delete?: DebtorAccountWhereInput | boolean
    connect?: DebtorAccountWhereUniqueInput
    update?: XOR<XOR<DebtorAccountUpdateToOneWithWhereWithoutPaymentInput, DebtorAccountUpdateWithoutPaymentInput>, DebtorAccountUncheckedUpdateWithoutPaymentInput>
  }

  export type CancellationUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<CancellationCreateWithoutPaymentInput, CancellationUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CancellationCreateOrConnectWithoutPaymentInput
    upsert?: CancellationUpsertWithoutPaymentInput
    disconnect?: CancellationWhereInput | boolean
    delete?: CancellationWhereInput | boolean
    connect?: CancellationWhereUniqueInput
    update?: XOR<XOR<CancellationUpdateToOneWithWhereWithoutPaymentInput, CancellationUpdateWithoutPaymentInput>, CancellationUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentCreateNestedOneWithoutCreditorAccountInput = {
    create?: XOR<PaymentCreateWithoutCreditorAccountInput, PaymentUncheckedCreateWithoutCreditorAccountInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCreditorAccountInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutCreditorAccountNestedInput = {
    create?: XOR<PaymentCreateWithoutCreditorAccountInput, PaymentUncheckedCreateWithoutCreditorAccountInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCreditorAccountInput
    upsert?: PaymentUpsertWithoutCreditorAccountInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutCreditorAccountInput, PaymentUpdateWithoutCreditorAccountInput>, PaymentUncheckedUpdateWithoutCreditorAccountInput>
  }

  export type PaymentCreateNestedOneWithoutDebtorAccountInput = {
    create?: XOR<PaymentCreateWithoutDebtorAccountInput, PaymentUncheckedCreateWithoutDebtorAccountInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDebtorAccountInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutDebtorAccountNestedInput = {
    create?: XOR<PaymentCreateWithoutDebtorAccountInput, PaymentUncheckedCreateWithoutDebtorAccountInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDebtorAccountInput
    upsert?: PaymentUpsertWithoutDebtorAccountInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutDebtorAccountInput, PaymentUpdateWithoutDebtorAccountInput>, PaymentUncheckedUpdateWithoutDebtorAccountInput>
  }

  export type PaymentCreateNestedOneWithoutCancellationInput = {
    create?: XOR<PaymentCreateWithoutCancellationInput, PaymentUncheckedCreateWithoutCancellationInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCancellationInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutCancellationNestedInput = {
    create?: XOR<PaymentCreateWithoutCancellationInput, PaymentUncheckedCreateWithoutCancellationInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCancellationInput
    upsert?: PaymentUpsertWithoutCancellationInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutCancellationInput, PaymentUpdateWithoutCancellationInput>, PaymentUncheckedUpdateWithoutCancellationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type CreditorAccountCreateWithoutPaymentInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
  }

  export type CreditorAccountUncheckedCreateWithoutPaymentInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
  }

  export type CreditorAccountCreateOrConnectWithoutPaymentInput = {
    where: CreditorAccountWhereUniqueInput
    create: XOR<CreditorAccountCreateWithoutPaymentInput, CreditorAccountUncheckedCreateWithoutPaymentInput>
  }

  export type DebtorAccountCreateWithoutPaymentInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
  }

  export type DebtorAccountUncheckedCreateWithoutPaymentInput = {
    id?: string
    ispb: string
    issuer: string
    number: string
    accountType: string
  }

  export type DebtorAccountCreateOrConnectWithoutPaymentInput = {
    where: DebtorAccountWhereUniqueInput
    create: XOR<DebtorAccountCreateWithoutPaymentInput, DebtorAccountUncheckedCreateWithoutPaymentInput>
  }

  export type CancellationCreateWithoutPaymentInput = {
    id?: string
    reason: string
    cancelledFrom: string
    cancelledAt: Date | string
    cancelledByIdentification: string
    cancelledByRel: string
  }

  export type CancellationUncheckedCreateWithoutPaymentInput = {
    id?: string
    reason: string
    cancelledFrom: string
    cancelledAt: Date | string
    cancelledByIdentification: string
    cancelledByRel: string
  }

  export type CancellationCreateOrConnectWithoutPaymentInput = {
    where: CancellationWhereUniqueInput
    create: XOR<CancellationCreateWithoutPaymentInput, CancellationUncheckedCreateWithoutPaymentInput>
  }

  export type CreditorAccountUpsertWithoutPaymentInput = {
    update: XOR<CreditorAccountUpdateWithoutPaymentInput, CreditorAccountUncheckedUpdateWithoutPaymentInput>
    create: XOR<CreditorAccountCreateWithoutPaymentInput, CreditorAccountUncheckedCreateWithoutPaymentInput>
    where?: CreditorAccountWhereInput
  }

  export type CreditorAccountUpdateToOneWithWhereWithoutPaymentInput = {
    where?: CreditorAccountWhereInput
    data: XOR<CreditorAccountUpdateWithoutPaymentInput, CreditorAccountUncheckedUpdateWithoutPaymentInput>
  }

  export type CreditorAccountUpdateWithoutPaymentInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
  }

  export type CreditorAccountUncheckedUpdateWithoutPaymentInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
  }

  export type DebtorAccountUpsertWithoutPaymentInput = {
    update: XOR<DebtorAccountUpdateWithoutPaymentInput, DebtorAccountUncheckedUpdateWithoutPaymentInput>
    create: XOR<DebtorAccountCreateWithoutPaymentInput, DebtorAccountUncheckedCreateWithoutPaymentInput>
    where?: DebtorAccountWhereInput
  }

  export type DebtorAccountUpdateToOneWithWhereWithoutPaymentInput = {
    where?: DebtorAccountWhereInput
    data: XOR<DebtorAccountUpdateWithoutPaymentInput, DebtorAccountUncheckedUpdateWithoutPaymentInput>
  }

  export type DebtorAccountUpdateWithoutPaymentInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
  }

  export type DebtorAccountUncheckedUpdateWithoutPaymentInput = {
    ispb?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    accountType?: StringFieldUpdateOperationsInput | string
  }

  export type CancellationUpsertWithoutPaymentInput = {
    update: XOR<CancellationUpdateWithoutPaymentInput, CancellationUncheckedUpdateWithoutPaymentInput>
    create: XOR<CancellationCreateWithoutPaymentInput, CancellationUncheckedCreateWithoutPaymentInput>
    where?: CancellationWhereInput
  }

  export type CancellationUpdateToOneWithWhereWithoutPaymentInput = {
    where?: CancellationWhereInput
    data: XOR<CancellationUpdateWithoutPaymentInput, CancellationUncheckedUpdateWithoutPaymentInput>
  }

  export type CancellationUpdateWithoutPaymentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    cancelledFrom?: StringFieldUpdateOperationsInput | string
    cancelledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledByIdentification?: StringFieldUpdateOperationsInput | string
    cancelledByRel?: StringFieldUpdateOperationsInput | string
  }

  export type CancellationUncheckedUpdateWithoutPaymentInput = {
    reason?: StringFieldUpdateOperationsInput | string
    cancelledFrom?: StringFieldUpdateOperationsInput | string
    cancelledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledByIdentification?: StringFieldUpdateOperationsInput | string
    cancelledByRel?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateWithoutCreditorAccountInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    debtorAccount?: DebtorAccountCreateNestedOneWithoutPaymentInput
    cancellation?: CancellationCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCreditorAccountInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    debtorAccount?: DebtorAccountUncheckedCreateNestedOneWithoutPaymentInput
    cancellation?: CancellationUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutCreditorAccountInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCreditorAccountInput, PaymentUncheckedCreateWithoutCreditorAccountInput>
  }

  export type PaymentUpsertWithoutCreditorAccountInput = {
    update: XOR<PaymentUpdateWithoutCreditorAccountInput, PaymentUncheckedUpdateWithoutCreditorAccountInput>
    create: XOR<PaymentCreateWithoutCreditorAccountInput, PaymentUncheckedCreateWithoutCreditorAccountInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutCreditorAccountInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutCreditorAccountInput, PaymentUncheckedUpdateWithoutCreditorAccountInput>
  }

  export type PaymentUpdateWithoutCreditorAccountInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    debtorAccount?: DebtorAccountUpdateOneWithoutPaymentNestedInput
    cancellation?: CancellationUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCreditorAccountInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    debtorAccount?: DebtorAccountUncheckedUpdateOneWithoutPaymentNestedInput
    cancellation?: CancellationUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutDebtorAccountInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    creditorAccount?: CreditorAccountCreateNestedOneWithoutPaymentInput
    cancellation?: CancellationCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutDebtorAccountInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    creditorAccount?: CreditorAccountUncheckedCreateNestedOneWithoutPaymentInput
    cancellation?: CancellationUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutDebtorAccountInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutDebtorAccountInput, PaymentUncheckedCreateWithoutDebtorAccountInput>
  }

  export type PaymentUpsertWithoutDebtorAccountInput = {
    update: XOR<PaymentUpdateWithoutDebtorAccountInput, PaymentUncheckedUpdateWithoutDebtorAccountInput>
    create: XOR<PaymentCreateWithoutDebtorAccountInput, PaymentUncheckedCreateWithoutDebtorAccountInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutDebtorAccountInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutDebtorAccountInput, PaymentUncheckedUpdateWithoutDebtorAccountInput>
  }

  export type PaymentUpdateWithoutDebtorAccountInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    creditorAccount?: CreditorAccountUpdateOneWithoutPaymentNestedInput
    cancellation?: CancellationUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutDebtorAccountInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    creditorAccount?: CreditorAccountUncheckedUpdateOneWithoutPaymentNestedInput
    cancellation?: CancellationUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutCancellationInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    creditorAccount?: CreditorAccountCreateNestedOneWithoutPaymentInput
    debtorAccount?: DebtorAccountCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCancellationInput = {
    paymentId?: string
    endToEndId: string
    consentId: string
    creationDateTime?: Date | string
    statusUpdateDateTime?: Date | string
    proxy: string
    ibgeTownCode: string
    status: string
    rejectionReasonCode?: string | null
    rejectionReasonDetail?: string | null
    localInstrument: string
    cnpjInitiator: string
    paymentAmount: string
    paymentCurrency: string
    transactionIdentification: string
    remittanceInformation: string
    creditorAccount?: CreditorAccountUncheckedCreateNestedOneWithoutPaymentInput
    debtorAccount?: DebtorAccountUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutCancellationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCancellationInput, PaymentUncheckedCreateWithoutCancellationInput>
  }

  export type PaymentUpsertWithoutCancellationInput = {
    update: XOR<PaymentUpdateWithoutCancellationInput, PaymentUncheckedUpdateWithoutCancellationInput>
    create: XOR<PaymentCreateWithoutCancellationInput, PaymentUncheckedCreateWithoutCancellationInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutCancellationInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutCancellationInput, PaymentUncheckedUpdateWithoutCancellationInput>
  }

  export type PaymentUpdateWithoutCancellationInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    creditorAccount?: CreditorAccountUpdateOneWithoutPaymentNestedInput
    debtorAccount?: DebtorAccountUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCancellationInput = {
    endToEndId?: StringFieldUpdateOperationsInput | string
    consentId?: StringFieldUpdateOperationsInput | string
    creationDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUpdateDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: StringFieldUpdateOperationsInput | string
    ibgeTownCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReasonCode?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReasonDetail?: NullableStringFieldUpdateOperationsInput | string | null
    localInstrument?: StringFieldUpdateOperationsInput | string
    cnpjInitiator?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    paymentCurrency?: StringFieldUpdateOperationsInput | string
    transactionIdentification?: StringFieldUpdateOperationsInput | string
    remittanceInformation?: StringFieldUpdateOperationsInput | string
    creditorAccount?: CreditorAccountUncheckedUpdateOneWithoutPaymentNestedInput
    debtorAccount?: DebtorAccountUncheckedUpdateOneWithoutPaymentNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditorAccountDefaultArgs instead
     */
    export type CreditorAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditorAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DebtorAccountDefaultArgs instead
     */
    export type DebtorAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DebtorAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CancellationDefaultArgs instead
     */
    export type CancellationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CancellationDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}