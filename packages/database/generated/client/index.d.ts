
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
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model SourceRecord
 * 
 */
export type SourceRecord = $Result.DefaultSelection<Prisma.$SourceRecordPayload>
/**
 * Model SourceData
 * 
 */
export type SourceData = $Result.DefaultSelection<Prisma.$SourceDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Forms
 * const forms = await prisma.form.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Forms
   * const forms = await prisma.form.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceRecord`: Exposes CRUD operations for the **SourceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceRecords
    * const sourceRecords = await prisma.sourceRecord.findMany()
    * ```
    */
  get sourceRecord(): Prisma.SourceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceData`: Exposes CRUD operations for the **SourceData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceData
    * const sourceData = await prisma.sourceData.findMany()
    * ```
    */
  get sourceData(): Prisma.SourceDataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Form: 'Form',
    SourceRecord: 'SourceRecord',
    SourceData: 'SourceData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "form" | "sourceRecord" | "sourceData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      SourceRecord: {
        payload: Prisma.$SourceRecordPayload<ExtArgs>
        fields: Prisma.SourceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>
          }
          findFirst: {
            args: Prisma.SourceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>
          }
          findMany: {
            args: Prisma.SourceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>[]
          }
          create: {
            args: Prisma.SourceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>
          }
          createMany: {
            args: Prisma.SourceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>[]
          }
          delete: {
            args: Prisma.SourceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>
          }
          update: {
            args: Prisma.SourceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>
          }
          deleteMany: {
            args: Prisma.SourceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>[]
          }
          upsert: {
            args: Prisma.SourceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceRecordPayload>
          }
          aggregate: {
            args: Prisma.SourceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceRecord>
          }
          groupBy: {
            args: Prisma.SourceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<SourceRecordCountAggregateOutputType> | number
          }
        }
      }
      SourceData: {
        payload: Prisma.$SourceDataPayload<ExtArgs>
        fields: Prisma.SourceDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>
          }
          findFirst: {
            args: Prisma.SourceDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>
          }
          findMany: {
            args: Prisma.SourceDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>[]
          }
          create: {
            args: Prisma.SourceDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>
          }
          createMany: {
            args: Prisma.SourceDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>[]
          }
          delete: {
            args: Prisma.SourceDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>
          }
          update: {
            args: Prisma.SourceDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>
          }
          deleteMany: {
            args: Prisma.SourceDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>[]
          }
          upsert: {
            args: Prisma.SourceDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceDataPayload>
          }
          aggregate: {
            args: Prisma.SourceDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceData>
          }
          groupBy: {
            args: Prisma.SourceDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceDataCountArgs<ExtArgs>
            result: $Utils.Optional<SourceDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    form?: FormOmit
    sourceRecord?: SourceRecordOmit
    sourceData?: SourceDataOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type SourceRecordCountOutputType
   */

  export type SourceRecordCountOutputType = {
    sourceData: number
  }

  export type SourceRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceData?: boolean | SourceRecordCountOutputTypeCountSourceDataArgs
  }

  // Custom InputTypes
  /**
   * SourceRecordCountOutputType without action
   */
  export type SourceRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecordCountOutputType
     */
    select?: SourceRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceRecordCountOutputType without action
   */
  export type SourceRecordCountOutputTypeCountSourceDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    name: number
    fields: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    name?: true
    fields?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    name: string
    fields: JsonValue
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fields?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fields?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fields?: boolean
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    name?: boolean
    fields?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fields", ExtArgs["result"]["form"]>

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      fields: Prisma.JsonValue
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
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
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Form model
   */ 
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly name: FieldRef<"Form", 'String'>
    readonly fields: FieldRef<"Form", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
  }


  /**
   * Model SourceRecord
   */

  export type AggregateSourceRecord = {
    _count: SourceRecordCountAggregateOutputType | null
    _min: SourceRecordMinAggregateOutputType | null
    _max: SourceRecordMaxAggregateOutputType | null
  }

  export type SourceRecordMinAggregateOutputType = {
    id: string | null
    formId: string | null
  }

  export type SourceRecordMaxAggregateOutputType = {
    id: string | null
    formId: string | null
  }

  export type SourceRecordCountAggregateOutputType = {
    id: number
    formId: number
    _all: number
  }


  export type SourceRecordMinAggregateInputType = {
    id?: true
    formId?: true
  }

  export type SourceRecordMaxAggregateInputType = {
    id?: true
    formId?: true
  }

  export type SourceRecordCountAggregateInputType = {
    id?: true
    formId?: true
    _all?: true
  }

  export type SourceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceRecord to aggregate.
     */
    where?: SourceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceRecords to fetch.
     */
    orderBy?: SourceRecordOrderByWithRelationInput | SourceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceRecords
    **/
    _count?: true | SourceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceRecordMaxAggregateInputType
  }

  export type GetSourceRecordAggregateType<T extends SourceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceRecord[P]>
      : GetScalarType<T[P], AggregateSourceRecord[P]>
  }




  export type SourceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceRecordWhereInput
    orderBy?: SourceRecordOrderByWithAggregationInput | SourceRecordOrderByWithAggregationInput[]
    by: SourceRecordScalarFieldEnum[] | SourceRecordScalarFieldEnum
    having?: SourceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceRecordCountAggregateInputType | true
    _min?: SourceRecordMinAggregateInputType
    _max?: SourceRecordMaxAggregateInputType
  }

  export type SourceRecordGroupByOutputType = {
    id: string
    formId: string
    _count: SourceRecordCountAggregateOutputType | null
    _min: SourceRecordMinAggregateOutputType | null
    _max: SourceRecordMaxAggregateOutputType | null
  }

  type GetSourceRecordGroupByPayload<T extends SourceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], SourceRecordGroupByOutputType[P]>
        }
      >
    >


  export type SourceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    sourceData?: boolean | SourceRecord$sourceDataArgs<ExtArgs>
    _count?: boolean | SourceRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceRecord"]>

  export type SourceRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
  }, ExtArgs["result"]["sourceRecord"]>

  export type SourceRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
  }, ExtArgs["result"]["sourceRecord"]>

  export type SourceRecordSelectScalar = {
    id?: boolean
    formId?: boolean
  }

  export type SourceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formId", ExtArgs["result"]["sourceRecord"]>
  export type SourceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceData?: boolean | SourceRecord$sourceDataArgs<ExtArgs>
    _count?: boolean | SourceRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceRecord"
    objects: {
      sourceData: Prisma.$SourceDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
    }, ExtArgs["result"]["sourceRecord"]>
    composites: {}
  }

  type SourceRecordGetPayload<S extends boolean | null | undefined | SourceRecordDefaultArgs> = $Result.GetResult<Prisma.$SourceRecordPayload, S>

  type SourceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceRecordCountAggregateInputType | true
    }

  export interface SourceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceRecord'], meta: { name: 'SourceRecord' } }
    /**
     * Find zero or one SourceRecord that matches the filter.
     * @param {SourceRecordFindUniqueArgs} args - Arguments to find a SourceRecord
     * @example
     * // Get one SourceRecord
     * const sourceRecord = await prisma.sourceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceRecordFindUniqueArgs>(args: SelectSubset<T, SourceRecordFindUniqueArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceRecordFindUniqueOrThrowArgs} args - Arguments to find a SourceRecord
     * @example
     * // Get one SourceRecord
     * const sourceRecord = await prisma.sourceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordFindFirstArgs} args - Arguments to find a SourceRecord
     * @example
     * // Get one SourceRecord
     * const sourceRecord = await prisma.sourceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceRecordFindFirstArgs>(args?: SelectSubset<T, SourceRecordFindFirstArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordFindFirstOrThrowArgs} args - Arguments to find a SourceRecord
     * @example
     * // Get one SourceRecord
     * const sourceRecord = await prisma.sourceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceRecords
     * const sourceRecords = await prisma.sourceRecord.findMany()
     * 
     * // Get first 10 SourceRecords
     * const sourceRecords = await prisma.sourceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceRecordWithIdOnly = await prisma.sourceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceRecordFindManyArgs>(args?: SelectSubset<T, SourceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceRecord.
     * @param {SourceRecordCreateArgs} args - Arguments to create a SourceRecord.
     * @example
     * // Create one SourceRecord
     * const SourceRecord = await prisma.sourceRecord.create({
     *   data: {
     *     // ... data to create a SourceRecord
     *   }
     * })
     * 
     */
    create<T extends SourceRecordCreateArgs>(args: SelectSubset<T, SourceRecordCreateArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceRecords.
     * @param {SourceRecordCreateManyArgs} args - Arguments to create many SourceRecords.
     * @example
     * // Create many SourceRecords
     * const sourceRecord = await prisma.sourceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceRecordCreateManyArgs>(args?: SelectSubset<T, SourceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceRecords and returns the data saved in the database.
     * @param {SourceRecordCreateManyAndReturnArgs} args - Arguments to create many SourceRecords.
     * @example
     * // Create many SourceRecords
     * const sourceRecord = await prisma.sourceRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceRecords and only return the `id`
     * const sourceRecordWithIdOnly = await prisma.sourceRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceRecord.
     * @param {SourceRecordDeleteArgs} args - Arguments to delete one SourceRecord.
     * @example
     * // Delete one SourceRecord
     * const SourceRecord = await prisma.sourceRecord.delete({
     *   where: {
     *     // ... filter to delete one SourceRecord
     *   }
     * })
     * 
     */
    delete<T extends SourceRecordDeleteArgs>(args: SelectSubset<T, SourceRecordDeleteArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceRecord.
     * @param {SourceRecordUpdateArgs} args - Arguments to update one SourceRecord.
     * @example
     * // Update one SourceRecord
     * const sourceRecord = await prisma.sourceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceRecordUpdateArgs>(args: SelectSubset<T, SourceRecordUpdateArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceRecords.
     * @param {SourceRecordDeleteManyArgs} args - Arguments to filter SourceRecords to delete.
     * @example
     * // Delete a few SourceRecords
     * const { count } = await prisma.sourceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceRecordDeleteManyArgs>(args?: SelectSubset<T, SourceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceRecords
     * const sourceRecord = await prisma.sourceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceRecordUpdateManyArgs>(args: SelectSubset<T, SourceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceRecords and returns the data updated in the database.
     * @param {SourceRecordUpdateManyAndReturnArgs} args - Arguments to update many SourceRecords.
     * @example
     * // Update many SourceRecords
     * const sourceRecord = await prisma.sourceRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceRecords and only return the `id`
     * const sourceRecordWithIdOnly = await prisma.sourceRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceRecord.
     * @param {SourceRecordUpsertArgs} args - Arguments to update or create a SourceRecord.
     * @example
     * // Update or create a SourceRecord
     * const sourceRecord = await prisma.sourceRecord.upsert({
     *   create: {
     *     // ... data to create a SourceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceRecord we want to update
     *   }
     * })
     */
    upsert<T extends SourceRecordUpsertArgs>(args: SelectSubset<T, SourceRecordUpsertArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordCountArgs} args - Arguments to filter SourceRecords to count.
     * @example
     * // Count the number of SourceRecords
     * const count = await prisma.sourceRecord.count({
     *   where: {
     *     // ... the filter for the SourceRecords we want to count
     *   }
     * })
    **/
    count<T extends SourceRecordCountArgs>(
      args?: Subset<T, SourceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceRecordAggregateArgs>(args: Subset<T, SourceRecordAggregateArgs>): Prisma.PrismaPromise<GetSourceRecordAggregateType<T>>

    /**
     * Group by SourceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceRecordGroupByArgs} args - Group by arguments.
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
      T extends SourceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceRecordGroupByArgs['orderBy'] }
        : { orderBy?: SourceRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceRecord model
   */
  readonly fields: SourceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceData<T extends SourceRecord$sourceDataArgs<ExtArgs> = {}>(args?: Subset<T, SourceRecord$sourceDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceRecord model
   */ 
  interface SourceRecordFieldRefs {
    readonly id: FieldRef<"SourceRecord", 'String'>
    readonly formId: FieldRef<"SourceRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SourceRecord findUnique
   */
  export type SourceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * Filter, which SourceRecord to fetch.
     */
    where: SourceRecordWhereUniqueInput
  }

  /**
   * SourceRecord findUniqueOrThrow
   */
  export type SourceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * Filter, which SourceRecord to fetch.
     */
    where: SourceRecordWhereUniqueInput
  }

  /**
   * SourceRecord findFirst
   */
  export type SourceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * Filter, which SourceRecord to fetch.
     */
    where?: SourceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceRecords to fetch.
     */
    orderBy?: SourceRecordOrderByWithRelationInput | SourceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceRecords.
     */
    cursor?: SourceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceRecords.
     */
    distinct?: SourceRecordScalarFieldEnum | SourceRecordScalarFieldEnum[]
  }

  /**
   * SourceRecord findFirstOrThrow
   */
  export type SourceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * Filter, which SourceRecord to fetch.
     */
    where?: SourceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceRecords to fetch.
     */
    orderBy?: SourceRecordOrderByWithRelationInput | SourceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceRecords.
     */
    cursor?: SourceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceRecords.
     */
    distinct?: SourceRecordScalarFieldEnum | SourceRecordScalarFieldEnum[]
  }

  /**
   * SourceRecord findMany
   */
  export type SourceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * Filter, which SourceRecords to fetch.
     */
    where?: SourceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceRecords to fetch.
     */
    orderBy?: SourceRecordOrderByWithRelationInput | SourceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceRecords.
     */
    cursor?: SourceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceRecords.
     */
    skip?: number
    distinct?: SourceRecordScalarFieldEnum | SourceRecordScalarFieldEnum[]
  }

  /**
   * SourceRecord create
   */
  export type SourceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceRecord.
     */
    data: XOR<SourceRecordCreateInput, SourceRecordUncheckedCreateInput>
  }

  /**
   * SourceRecord createMany
   */
  export type SourceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceRecords.
     */
    data: SourceRecordCreateManyInput | SourceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceRecord createManyAndReturn
   */
  export type SourceRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * The data used to create many SourceRecords.
     */
    data: SourceRecordCreateManyInput | SourceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceRecord update
   */
  export type SourceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceRecord.
     */
    data: XOR<SourceRecordUpdateInput, SourceRecordUncheckedUpdateInput>
    /**
     * Choose, which SourceRecord to update.
     */
    where: SourceRecordWhereUniqueInput
  }

  /**
   * SourceRecord updateMany
   */
  export type SourceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceRecords.
     */
    data: XOR<SourceRecordUpdateManyMutationInput, SourceRecordUncheckedUpdateManyInput>
    /**
     * Filter which SourceRecords to update
     */
    where?: SourceRecordWhereInput
    /**
     * Limit how many SourceRecords to update.
     */
    limit?: number
  }

  /**
   * SourceRecord updateManyAndReturn
   */
  export type SourceRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * The data used to update SourceRecords.
     */
    data: XOR<SourceRecordUpdateManyMutationInput, SourceRecordUncheckedUpdateManyInput>
    /**
     * Filter which SourceRecords to update
     */
    where?: SourceRecordWhereInput
    /**
     * Limit how many SourceRecords to update.
     */
    limit?: number
  }

  /**
   * SourceRecord upsert
   */
  export type SourceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceRecord to update in case it exists.
     */
    where: SourceRecordWhereUniqueInput
    /**
     * In case the SourceRecord found by the `where` argument doesn't exist, create a new SourceRecord with this data.
     */
    create: XOR<SourceRecordCreateInput, SourceRecordUncheckedCreateInput>
    /**
     * In case the SourceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceRecordUpdateInput, SourceRecordUncheckedUpdateInput>
  }

  /**
   * SourceRecord delete
   */
  export type SourceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
    /**
     * Filter which SourceRecord to delete.
     */
    where: SourceRecordWhereUniqueInput
  }

  /**
   * SourceRecord deleteMany
   */
  export type SourceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceRecords to delete
     */
    where?: SourceRecordWhereInput
    /**
     * Limit how many SourceRecords to delete.
     */
    limit?: number
  }

  /**
   * SourceRecord.sourceData
   */
  export type SourceRecord$sourceDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    where?: SourceDataWhereInput
    orderBy?: SourceDataOrderByWithRelationInput | SourceDataOrderByWithRelationInput[]
    cursor?: SourceDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceDataScalarFieldEnum | SourceDataScalarFieldEnum[]
  }

  /**
   * SourceRecord without action
   */
  export type SourceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceRecord
     */
    select?: SourceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceRecord
     */
    omit?: SourceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceRecordInclude<ExtArgs> | null
  }


  /**
   * Model SourceData
   */

  export type AggregateSourceData = {
    _count: SourceDataCountAggregateOutputType | null
    _min: SourceDataMinAggregateOutputType | null
    _max: SourceDataMaxAggregateOutputType | null
  }

  export type SourceDataMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    sourceRecordId: string | null
  }

  export type SourceDataMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    sourceRecordId: string | null
  }

  export type SourceDataCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    sourceRecordId: number
    _all: number
  }


  export type SourceDataMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sourceRecordId?: true
  }

  export type SourceDataMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sourceRecordId?: true
  }

  export type SourceDataCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    sourceRecordId?: true
    _all?: true
  }

  export type SourceDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceData to aggregate.
     */
    where?: SourceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceData to fetch.
     */
    orderBy?: SourceDataOrderByWithRelationInput | SourceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceData
    **/
    _count?: true | SourceDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceDataMaxAggregateInputType
  }

  export type GetSourceDataAggregateType<T extends SourceDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceData[P]>
      : GetScalarType<T[P], AggregateSourceData[P]>
  }




  export type SourceDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceDataWhereInput
    orderBy?: SourceDataOrderByWithAggregationInput | SourceDataOrderByWithAggregationInput[]
    by: SourceDataScalarFieldEnum[] | SourceDataScalarFieldEnum
    having?: SourceDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceDataCountAggregateInputType | true
    _min?: SourceDataMinAggregateInputType
    _max?: SourceDataMaxAggregateInputType
  }

  export type SourceDataGroupByOutputType = {
    id: string
    question: string
    answer: string
    sourceRecordId: string
    _count: SourceDataCountAggregateOutputType | null
    _min: SourceDataMinAggregateOutputType | null
    _max: SourceDataMaxAggregateOutputType | null
  }

  type GetSourceDataGroupByPayload<T extends SourceDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceDataGroupByOutputType[P]>
            : GetScalarType<T[P], SourceDataGroupByOutputType[P]>
        }
      >
    >


  export type SourceDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    sourceRecordId?: boolean
    sourceRecord?: boolean | SourceRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceData"]>

  export type SourceDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    sourceRecordId?: boolean
    sourceRecord?: boolean | SourceRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceData"]>

  export type SourceDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    sourceRecordId?: boolean
    sourceRecord?: boolean | SourceRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceData"]>

  export type SourceDataSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    sourceRecordId?: boolean
  }

  export type SourceDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "sourceRecordId", ExtArgs["result"]["sourceData"]>
  export type SourceDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceRecord?: boolean | SourceRecordDefaultArgs<ExtArgs>
  }
  export type SourceDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceRecord?: boolean | SourceRecordDefaultArgs<ExtArgs>
  }
  export type SourceDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceRecord?: boolean | SourceRecordDefaultArgs<ExtArgs>
  }

  export type $SourceDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceData"
    objects: {
      sourceRecord: Prisma.$SourceRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      sourceRecordId: string
    }, ExtArgs["result"]["sourceData"]>
    composites: {}
  }

  type SourceDataGetPayload<S extends boolean | null | undefined | SourceDataDefaultArgs> = $Result.GetResult<Prisma.$SourceDataPayload, S>

  type SourceDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceDataCountAggregateInputType | true
    }

  export interface SourceDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceData'], meta: { name: 'SourceData' } }
    /**
     * Find zero or one SourceData that matches the filter.
     * @param {SourceDataFindUniqueArgs} args - Arguments to find a SourceData
     * @example
     * // Get one SourceData
     * const sourceData = await prisma.sourceData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceDataFindUniqueArgs>(args: SelectSubset<T, SourceDataFindUniqueArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceDataFindUniqueOrThrowArgs} args - Arguments to find a SourceData
     * @example
     * // Get one SourceData
     * const sourceData = await prisma.sourceData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataFindFirstArgs} args - Arguments to find a SourceData
     * @example
     * // Get one SourceData
     * const sourceData = await prisma.sourceData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceDataFindFirstArgs>(args?: SelectSubset<T, SourceDataFindFirstArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataFindFirstOrThrowArgs} args - Arguments to find a SourceData
     * @example
     * // Get one SourceData
     * const sourceData = await prisma.sourceData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceData
     * const sourceData = await prisma.sourceData.findMany()
     * 
     * // Get first 10 SourceData
     * const sourceData = await prisma.sourceData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceDataWithIdOnly = await prisma.sourceData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceDataFindManyArgs>(args?: SelectSubset<T, SourceDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceData.
     * @param {SourceDataCreateArgs} args - Arguments to create a SourceData.
     * @example
     * // Create one SourceData
     * const SourceData = await prisma.sourceData.create({
     *   data: {
     *     // ... data to create a SourceData
     *   }
     * })
     * 
     */
    create<T extends SourceDataCreateArgs>(args: SelectSubset<T, SourceDataCreateArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceData.
     * @param {SourceDataCreateManyArgs} args - Arguments to create many SourceData.
     * @example
     * // Create many SourceData
     * const sourceData = await prisma.sourceData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceDataCreateManyArgs>(args?: SelectSubset<T, SourceDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceData and returns the data saved in the database.
     * @param {SourceDataCreateManyAndReturnArgs} args - Arguments to create many SourceData.
     * @example
     * // Create many SourceData
     * const sourceData = await prisma.sourceData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceData and only return the `id`
     * const sourceDataWithIdOnly = await prisma.sourceData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceDataCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceData.
     * @param {SourceDataDeleteArgs} args - Arguments to delete one SourceData.
     * @example
     * // Delete one SourceData
     * const SourceData = await prisma.sourceData.delete({
     *   where: {
     *     // ... filter to delete one SourceData
     *   }
     * })
     * 
     */
    delete<T extends SourceDataDeleteArgs>(args: SelectSubset<T, SourceDataDeleteArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceData.
     * @param {SourceDataUpdateArgs} args - Arguments to update one SourceData.
     * @example
     * // Update one SourceData
     * const sourceData = await prisma.sourceData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceDataUpdateArgs>(args: SelectSubset<T, SourceDataUpdateArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceData.
     * @param {SourceDataDeleteManyArgs} args - Arguments to filter SourceData to delete.
     * @example
     * // Delete a few SourceData
     * const { count } = await prisma.sourceData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDataDeleteManyArgs>(args?: SelectSubset<T, SourceDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceData
     * const sourceData = await prisma.sourceData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceDataUpdateManyArgs>(args: SelectSubset<T, SourceDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceData and returns the data updated in the database.
     * @param {SourceDataUpdateManyAndReturnArgs} args - Arguments to update many SourceData.
     * @example
     * // Update many SourceData
     * const sourceData = await prisma.sourceData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceData and only return the `id`
     * const sourceDataWithIdOnly = await prisma.sourceData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceDataUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceData.
     * @param {SourceDataUpsertArgs} args - Arguments to update or create a SourceData.
     * @example
     * // Update or create a SourceData
     * const sourceData = await prisma.sourceData.upsert({
     *   create: {
     *     // ... data to create a SourceData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceData we want to update
     *   }
     * })
     */
    upsert<T extends SourceDataUpsertArgs>(args: SelectSubset<T, SourceDataUpsertArgs<ExtArgs>>): Prisma__SourceDataClient<$Result.GetResult<Prisma.$SourceDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataCountArgs} args - Arguments to filter SourceData to count.
     * @example
     * // Count the number of SourceData
     * const count = await prisma.sourceData.count({
     *   where: {
     *     // ... the filter for the SourceData we want to count
     *   }
     * })
    **/
    count<T extends SourceDataCountArgs>(
      args?: Subset<T, SourceDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceDataAggregateArgs>(args: Subset<T, SourceDataAggregateArgs>): Prisma.PrismaPromise<GetSourceDataAggregateType<T>>

    /**
     * Group by SourceData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceDataGroupByArgs} args - Group by arguments.
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
      T extends SourceDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceDataGroupByArgs['orderBy'] }
        : { orderBy?: SourceDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceData model
   */
  readonly fields: SourceDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceRecord<T extends SourceRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceRecordDefaultArgs<ExtArgs>>): Prisma__SourceRecordClient<$Result.GetResult<Prisma.$SourceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceData model
   */ 
  interface SourceDataFieldRefs {
    readonly id: FieldRef<"SourceData", 'String'>
    readonly question: FieldRef<"SourceData", 'String'>
    readonly answer: FieldRef<"SourceData", 'String'>
    readonly sourceRecordId: FieldRef<"SourceData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SourceData findUnique
   */
  export type SourceDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * Filter, which SourceData to fetch.
     */
    where: SourceDataWhereUniqueInput
  }

  /**
   * SourceData findUniqueOrThrow
   */
  export type SourceDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * Filter, which SourceData to fetch.
     */
    where: SourceDataWhereUniqueInput
  }

  /**
   * SourceData findFirst
   */
  export type SourceDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * Filter, which SourceData to fetch.
     */
    where?: SourceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceData to fetch.
     */
    orderBy?: SourceDataOrderByWithRelationInput | SourceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceData.
     */
    cursor?: SourceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceData.
     */
    distinct?: SourceDataScalarFieldEnum | SourceDataScalarFieldEnum[]
  }

  /**
   * SourceData findFirstOrThrow
   */
  export type SourceDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * Filter, which SourceData to fetch.
     */
    where?: SourceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceData to fetch.
     */
    orderBy?: SourceDataOrderByWithRelationInput | SourceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceData.
     */
    cursor?: SourceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceData.
     */
    distinct?: SourceDataScalarFieldEnum | SourceDataScalarFieldEnum[]
  }

  /**
   * SourceData findMany
   */
  export type SourceDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * Filter, which SourceData to fetch.
     */
    where?: SourceDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceData to fetch.
     */
    orderBy?: SourceDataOrderByWithRelationInput | SourceDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceData.
     */
    cursor?: SourceDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceData.
     */
    skip?: number
    distinct?: SourceDataScalarFieldEnum | SourceDataScalarFieldEnum[]
  }

  /**
   * SourceData create
   */
  export type SourceDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceData.
     */
    data: XOR<SourceDataCreateInput, SourceDataUncheckedCreateInput>
  }

  /**
   * SourceData createMany
   */
  export type SourceDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceData.
     */
    data: SourceDataCreateManyInput | SourceDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceData createManyAndReturn
   */
  export type SourceDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * The data used to create many SourceData.
     */
    data: SourceDataCreateManyInput | SourceDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceData update
   */
  export type SourceDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceData.
     */
    data: XOR<SourceDataUpdateInput, SourceDataUncheckedUpdateInput>
    /**
     * Choose, which SourceData to update.
     */
    where: SourceDataWhereUniqueInput
  }

  /**
   * SourceData updateMany
   */
  export type SourceDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceData.
     */
    data: XOR<SourceDataUpdateManyMutationInput, SourceDataUncheckedUpdateManyInput>
    /**
     * Filter which SourceData to update
     */
    where?: SourceDataWhereInput
    /**
     * Limit how many SourceData to update.
     */
    limit?: number
  }

  /**
   * SourceData updateManyAndReturn
   */
  export type SourceDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * The data used to update SourceData.
     */
    data: XOR<SourceDataUpdateManyMutationInput, SourceDataUncheckedUpdateManyInput>
    /**
     * Filter which SourceData to update
     */
    where?: SourceDataWhereInput
    /**
     * Limit how many SourceData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceData upsert
   */
  export type SourceDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceData to update in case it exists.
     */
    where: SourceDataWhereUniqueInput
    /**
     * In case the SourceData found by the `where` argument doesn't exist, create a new SourceData with this data.
     */
    create: XOR<SourceDataCreateInput, SourceDataUncheckedCreateInput>
    /**
     * In case the SourceData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceDataUpdateInput, SourceDataUncheckedUpdateInput>
  }

  /**
   * SourceData delete
   */
  export type SourceDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
    /**
     * Filter which SourceData to delete.
     */
    where: SourceDataWhereUniqueInput
  }

  /**
   * SourceData deleteMany
   */
  export type SourceDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceData to delete
     */
    where?: SourceDataWhereInput
    /**
     * Limit how many SourceData to delete.
     */
    limit?: number
  }

  /**
   * SourceData without action
   */
  export type SourceDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceData
     */
    select?: SourceDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceData
     */
    omit?: SourceDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fields: 'fields'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const SourceRecordScalarFieldEnum: {
    id: 'id',
    formId: 'formId'
  };

  export type SourceRecordScalarFieldEnum = (typeof SourceRecordScalarFieldEnum)[keyof typeof SourceRecordScalarFieldEnum]


  export const SourceDataScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    sourceRecordId: 'sourceRecordId'
  };

  export type SourceDataScalarFieldEnum = (typeof SourceDataScalarFieldEnum)[keyof typeof SourceDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: UuidFilter<"Form"> | string
    name?: StringFilter<"Form"> | string
    fields?: JsonFilter<"Form">
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fields?: SortOrder
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    name?: StringFilter<"Form"> | string
    fields?: JsonFilter<"Form">
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fields?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Form"> | string
    name?: StringWithAggregatesFilter<"Form"> | string
    fields?: JsonWithAggregatesFilter<"Form">
  }

  export type SourceRecordWhereInput = {
    AND?: SourceRecordWhereInput | SourceRecordWhereInput[]
    OR?: SourceRecordWhereInput[]
    NOT?: SourceRecordWhereInput | SourceRecordWhereInput[]
    id?: UuidFilter<"SourceRecord"> | string
    formId?: UuidFilter<"SourceRecord"> | string
    sourceData?: SourceDataListRelationFilter
  }

  export type SourceRecordOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    sourceData?: SourceDataOrderByRelationAggregateInput
  }

  export type SourceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceRecordWhereInput | SourceRecordWhereInput[]
    OR?: SourceRecordWhereInput[]
    NOT?: SourceRecordWhereInput | SourceRecordWhereInput[]
    formId?: UuidFilter<"SourceRecord"> | string
    sourceData?: SourceDataListRelationFilter
  }, "id">

  export type SourceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    _count?: SourceRecordCountOrderByAggregateInput
    _max?: SourceRecordMaxOrderByAggregateInput
    _min?: SourceRecordMinOrderByAggregateInput
  }

  export type SourceRecordScalarWhereWithAggregatesInput = {
    AND?: SourceRecordScalarWhereWithAggregatesInput | SourceRecordScalarWhereWithAggregatesInput[]
    OR?: SourceRecordScalarWhereWithAggregatesInput[]
    NOT?: SourceRecordScalarWhereWithAggregatesInput | SourceRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SourceRecord"> | string
    formId?: UuidWithAggregatesFilter<"SourceRecord"> | string
  }

  export type SourceDataWhereInput = {
    AND?: SourceDataWhereInput | SourceDataWhereInput[]
    OR?: SourceDataWhereInput[]
    NOT?: SourceDataWhereInput | SourceDataWhereInput[]
    id?: UuidFilter<"SourceData"> | string
    question?: StringFilter<"SourceData"> | string
    answer?: StringFilter<"SourceData"> | string
    sourceRecordId?: UuidFilter<"SourceData"> | string
    sourceRecord?: XOR<SourceRecordScalarRelationFilter, SourceRecordWhereInput>
  }

  export type SourceDataOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sourceRecordId?: SortOrder
    sourceRecord?: SourceRecordOrderByWithRelationInput
  }

  export type SourceDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceDataWhereInput | SourceDataWhereInput[]
    OR?: SourceDataWhereInput[]
    NOT?: SourceDataWhereInput | SourceDataWhereInput[]
    question?: StringFilter<"SourceData"> | string
    answer?: StringFilter<"SourceData"> | string
    sourceRecordId?: UuidFilter<"SourceData"> | string
    sourceRecord?: XOR<SourceRecordScalarRelationFilter, SourceRecordWhereInput>
  }, "id">

  export type SourceDataOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sourceRecordId?: SortOrder
    _count?: SourceDataCountOrderByAggregateInput
    _max?: SourceDataMaxOrderByAggregateInput
    _min?: SourceDataMinOrderByAggregateInput
  }

  export type SourceDataScalarWhereWithAggregatesInput = {
    AND?: SourceDataScalarWhereWithAggregatesInput | SourceDataScalarWhereWithAggregatesInput[]
    OR?: SourceDataScalarWhereWithAggregatesInput[]
    NOT?: SourceDataScalarWhereWithAggregatesInput | SourceDataScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SourceData"> | string
    question?: StringWithAggregatesFilter<"SourceData"> | string
    answer?: StringWithAggregatesFilter<"SourceData"> | string
    sourceRecordId?: UuidWithAggregatesFilter<"SourceData"> | string
  }

  export type FormCreateInput = {
    id?: string
    name: string
    fields: JsonNullValueInput | InputJsonValue
  }

  export type FormUncheckedCreateInput = {
    id?: string
    name: string
    fields: JsonNullValueInput | InputJsonValue
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
  }

  export type FormCreateManyInput = {
    id?: string
    name: string
    fields: JsonNullValueInput | InputJsonValue
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fields?: JsonNullValueInput | InputJsonValue
  }

  export type SourceRecordCreateInput = {
    id?: string
    formId: string
    sourceData?: SourceDataCreateNestedManyWithoutSourceRecordInput
  }

  export type SourceRecordUncheckedCreateInput = {
    id?: string
    formId: string
    sourceData?: SourceDataUncheckedCreateNestedManyWithoutSourceRecordInput
  }

  export type SourceRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    sourceData?: SourceDataUpdateManyWithoutSourceRecordNestedInput
  }

  export type SourceRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    sourceData?: SourceDataUncheckedUpdateManyWithoutSourceRecordNestedInput
  }

  export type SourceRecordCreateManyInput = {
    id?: string
    formId: string
  }

  export type SourceRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceDataCreateInput = {
    id?: string
    question: string
    answer: string
    sourceRecord: SourceRecordCreateNestedOneWithoutSourceDataInput
  }

  export type SourceDataUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    sourceRecordId: string
  }

  export type SourceDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sourceRecord?: SourceRecordUpdateOneRequiredWithoutSourceDataNestedInput
  }

  export type SourceDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceDataCreateManyInput = {
    id?: string
    question: string
    answer: string
    sourceRecordId: string
  }

  export type SourceDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type SourceDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sourceRecordId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fields?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SourceDataListRelationFilter = {
    every?: SourceDataWhereInput
    some?: SourceDataWhereInput
    none?: SourceDataWhereInput
  }

  export type SourceDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
  }

  export type SourceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
  }

  export type SourceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
  }

  export type SourceRecordScalarRelationFilter = {
    is?: SourceRecordWhereInput
    isNot?: SourceRecordWhereInput
  }

  export type SourceDataCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sourceRecordId?: SortOrder
  }

  export type SourceDataMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sourceRecordId?: SortOrder
  }

  export type SourceDataMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    sourceRecordId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SourceDataCreateNestedManyWithoutSourceRecordInput = {
    create?: XOR<SourceDataCreateWithoutSourceRecordInput, SourceDataUncheckedCreateWithoutSourceRecordInput> | SourceDataCreateWithoutSourceRecordInput[] | SourceDataUncheckedCreateWithoutSourceRecordInput[]
    connectOrCreate?: SourceDataCreateOrConnectWithoutSourceRecordInput | SourceDataCreateOrConnectWithoutSourceRecordInput[]
    createMany?: SourceDataCreateManySourceRecordInputEnvelope
    connect?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
  }

  export type SourceDataUncheckedCreateNestedManyWithoutSourceRecordInput = {
    create?: XOR<SourceDataCreateWithoutSourceRecordInput, SourceDataUncheckedCreateWithoutSourceRecordInput> | SourceDataCreateWithoutSourceRecordInput[] | SourceDataUncheckedCreateWithoutSourceRecordInput[]
    connectOrCreate?: SourceDataCreateOrConnectWithoutSourceRecordInput | SourceDataCreateOrConnectWithoutSourceRecordInput[]
    createMany?: SourceDataCreateManySourceRecordInputEnvelope
    connect?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
  }

  export type SourceDataUpdateManyWithoutSourceRecordNestedInput = {
    create?: XOR<SourceDataCreateWithoutSourceRecordInput, SourceDataUncheckedCreateWithoutSourceRecordInput> | SourceDataCreateWithoutSourceRecordInput[] | SourceDataUncheckedCreateWithoutSourceRecordInput[]
    connectOrCreate?: SourceDataCreateOrConnectWithoutSourceRecordInput | SourceDataCreateOrConnectWithoutSourceRecordInput[]
    upsert?: SourceDataUpsertWithWhereUniqueWithoutSourceRecordInput | SourceDataUpsertWithWhereUniqueWithoutSourceRecordInput[]
    createMany?: SourceDataCreateManySourceRecordInputEnvelope
    set?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    disconnect?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    delete?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    connect?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    update?: SourceDataUpdateWithWhereUniqueWithoutSourceRecordInput | SourceDataUpdateWithWhereUniqueWithoutSourceRecordInput[]
    updateMany?: SourceDataUpdateManyWithWhereWithoutSourceRecordInput | SourceDataUpdateManyWithWhereWithoutSourceRecordInput[]
    deleteMany?: SourceDataScalarWhereInput | SourceDataScalarWhereInput[]
  }

  export type SourceDataUncheckedUpdateManyWithoutSourceRecordNestedInput = {
    create?: XOR<SourceDataCreateWithoutSourceRecordInput, SourceDataUncheckedCreateWithoutSourceRecordInput> | SourceDataCreateWithoutSourceRecordInput[] | SourceDataUncheckedCreateWithoutSourceRecordInput[]
    connectOrCreate?: SourceDataCreateOrConnectWithoutSourceRecordInput | SourceDataCreateOrConnectWithoutSourceRecordInput[]
    upsert?: SourceDataUpsertWithWhereUniqueWithoutSourceRecordInput | SourceDataUpsertWithWhereUniqueWithoutSourceRecordInput[]
    createMany?: SourceDataCreateManySourceRecordInputEnvelope
    set?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    disconnect?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    delete?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    connect?: SourceDataWhereUniqueInput | SourceDataWhereUniqueInput[]
    update?: SourceDataUpdateWithWhereUniqueWithoutSourceRecordInput | SourceDataUpdateWithWhereUniqueWithoutSourceRecordInput[]
    updateMany?: SourceDataUpdateManyWithWhereWithoutSourceRecordInput | SourceDataUpdateManyWithWhereWithoutSourceRecordInput[]
    deleteMany?: SourceDataScalarWhereInput | SourceDataScalarWhereInput[]
  }

  export type SourceRecordCreateNestedOneWithoutSourceDataInput = {
    create?: XOR<SourceRecordCreateWithoutSourceDataInput, SourceRecordUncheckedCreateWithoutSourceDataInput>
    connectOrCreate?: SourceRecordCreateOrConnectWithoutSourceDataInput
    connect?: SourceRecordWhereUniqueInput
  }

  export type SourceRecordUpdateOneRequiredWithoutSourceDataNestedInput = {
    create?: XOR<SourceRecordCreateWithoutSourceDataInput, SourceRecordUncheckedCreateWithoutSourceDataInput>
    connectOrCreate?: SourceRecordCreateOrConnectWithoutSourceDataInput
    upsert?: SourceRecordUpsertWithoutSourceDataInput
    connect?: SourceRecordWhereUniqueInput
    update?: XOR<XOR<SourceRecordUpdateToOneWithWhereWithoutSourceDataInput, SourceRecordUpdateWithoutSourceDataInput>, SourceRecordUncheckedUpdateWithoutSourceDataInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SourceDataCreateWithoutSourceRecordInput = {
    id?: string
    question: string
    answer: string
  }

  export type SourceDataUncheckedCreateWithoutSourceRecordInput = {
    id?: string
    question: string
    answer: string
  }

  export type SourceDataCreateOrConnectWithoutSourceRecordInput = {
    where: SourceDataWhereUniqueInput
    create: XOR<SourceDataCreateWithoutSourceRecordInput, SourceDataUncheckedCreateWithoutSourceRecordInput>
  }

  export type SourceDataCreateManySourceRecordInputEnvelope = {
    data: SourceDataCreateManySourceRecordInput | SourceDataCreateManySourceRecordInput[]
    skipDuplicates?: boolean
  }

  export type SourceDataUpsertWithWhereUniqueWithoutSourceRecordInput = {
    where: SourceDataWhereUniqueInput
    update: XOR<SourceDataUpdateWithoutSourceRecordInput, SourceDataUncheckedUpdateWithoutSourceRecordInput>
    create: XOR<SourceDataCreateWithoutSourceRecordInput, SourceDataUncheckedCreateWithoutSourceRecordInput>
  }

  export type SourceDataUpdateWithWhereUniqueWithoutSourceRecordInput = {
    where: SourceDataWhereUniqueInput
    data: XOR<SourceDataUpdateWithoutSourceRecordInput, SourceDataUncheckedUpdateWithoutSourceRecordInput>
  }

  export type SourceDataUpdateManyWithWhereWithoutSourceRecordInput = {
    where: SourceDataScalarWhereInput
    data: XOR<SourceDataUpdateManyMutationInput, SourceDataUncheckedUpdateManyWithoutSourceRecordInput>
  }

  export type SourceDataScalarWhereInput = {
    AND?: SourceDataScalarWhereInput | SourceDataScalarWhereInput[]
    OR?: SourceDataScalarWhereInput[]
    NOT?: SourceDataScalarWhereInput | SourceDataScalarWhereInput[]
    id?: UuidFilter<"SourceData"> | string
    question?: StringFilter<"SourceData"> | string
    answer?: StringFilter<"SourceData"> | string
    sourceRecordId?: UuidFilter<"SourceData"> | string
  }

  export type SourceRecordCreateWithoutSourceDataInput = {
    id?: string
    formId: string
  }

  export type SourceRecordUncheckedCreateWithoutSourceDataInput = {
    id?: string
    formId: string
  }

  export type SourceRecordCreateOrConnectWithoutSourceDataInput = {
    where: SourceRecordWhereUniqueInput
    create: XOR<SourceRecordCreateWithoutSourceDataInput, SourceRecordUncheckedCreateWithoutSourceDataInput>
  }

  export type SourceRecordUpsertWithoutSourceDataInput = {
    update: XOR<SourceRecordUpdateWithoutSourceDataInput, SourceRecordUncheckedUpdateWithoutSourceDataInput>
    create: XOR<SourceRecordCreateWithoutSourceDataInput, SourceRecordUncheckedCreateWithoutSourceDataInput>
    where?: SourceRecordWhereInput
  }

  export type SourceRecordUpdateToOneWithWhereWithoutSourceDataInput = {
    where?: SourceRecordWhereInput
    data: XOR<SourceRecordUpdateWithoutSourceDataInput, SourceRecordUncheckedUpdateWithoutSourceDataInput>
  }

  export type SourceRecordUpdateWithoutSourceDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceRecordUncheckedUpdateWithoutSourceDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceDataCreateManySourceRecordInput = {
    id?: string
    question: string
    answer: string
  }

  export type SourceDataUpdateWithoutSourceRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type SourceDataUncheckedUpdateWithoutSourceRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type SourceDataUncheckedUpdateManyWithoutSourceRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }



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