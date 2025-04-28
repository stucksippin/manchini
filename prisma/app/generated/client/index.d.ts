
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
 * Model Realty
 * 
 */
export type Realty = $Result.DefaultSelection<Prisma.$RealtyPayload>
/**
 * Model RealtyInfrastructure
 * 
 */
export type RealtyInfrastructure = $Result.DefaultSelection<Prisma.$RealtyInfrastructurePayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ObjectType: {
  NEW_BUILDING: 'NEW_BUILDING',
  SECONDARY: 'SECONDARY',
  HOUSE: 'HOUSE',
  APARTMENT: 'APARTMENT'
};

export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType]


export const InfrastructureType: {
  SCHOOL: 'SCHOOL',
  PARK: 'PARK',
  MALL: 'MALL',
  KINDERGARTEN: 'KINDERGARTEN'
};

export type InfrastructureType = (typeof InfrastructureType)[keyof typeof InfrastructureType]

}

export type ObjectType = $Enums.ObjectType

export const ObjectType: typeof $Enums.ObjectType

export type InfrastructureType = $Enums.InfrastructureType

export const InfrastructureType: typeof $Enums.InfrastructureType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Realties
 * const realties = await prisma.realty.findMany()
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
   * // Fetch zero or more Realties
   * const realties = await prisma.realty.findMany()
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
   * `prisma.realty`: Exposes CRUD operations for the **Realty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Realties
    * const realties = await prisma.realty.findMany()
    * ```
    */
  get realty(): Prisma.RealtyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.realtyInfrastructure`: Exposes CRUD operations for the **RealtyInfrastructure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealtyInfrastructures
    * const realtyInfrastructures = await prisma.realtyInfrastructure.findMany()
    * ```
    */
  get realtyInfrastructure(): Prisma.RealtyInfrastructureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Realty: 'Realty',
    RealtyInfrastructure: 'RealtyInfrastructure',
    Photo: 'Photo'
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
      modelProps: "realty" | "realtyInfrastructure" | "photo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Realty: {
        payload: Prisma.$RealtyPayload<ExtArgs>
        fields: Prisma.RealtyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealtyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealtyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>
          }
          findFirst: {
            args: Prisma.RealtyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealtyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>
          }
          findMany: {
            args: Prisma.RealtyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>[]
          }
          create: {
            args: Prisma.RealtyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>
          }
          createMany: {
            args: Prisma.RealtyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RealtyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>[]
          }
          delete: {
            args: Prisma.RealtyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>
          }
          update: {
            args: Prisma.RealtyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>
          }
          deleteMany: {
            args: Prisma.RealtyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RealtyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RealtyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>[]
          }
          upsert: {
            args: Prisma.RealtyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyPayload>
          }
          aggregate: {
            args: Prisma.RealtyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRealty>
          }
          groupBy: {
            args: Prisma.RealtyGroupByArgs<ExtArgs>
            result: $Utils.Optional<RealtyGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealtyCountArgs<ExtArgs>
            result: $Utils.Optional<RealtyCountAggregateOutputType> | number
          }
        }
      }
      RealtyInfrastructure: {
        payload: Prisma.$RealtyInfrastructurePayload<ExtArgs>
        fields: Prisma.RealtyInfrastructureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealtyInfrastructureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealtyInfrastructureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>
          }
          findFirst: {
            args: Prisma.RealtyInfrastructureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealtyInfrastructureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>
          }
          findMany: {
            args: Prisma.RealtyInfrastructureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>[]
          }
          create: {
            args: Prisma.RealtyInfrastructureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>
          }
          createMany: {
            args: Prisma.RealtyInfrastructureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RealtyInfrastructureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>[]
          }
          delete: {
            args: Prisma.RealtyInfrastructureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>
          }
          update: {
            args: Prisma.RealtyInfrastructureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>
          }
          deleteMany: {
            args: Prisma.RealtyInfrastructureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RealtyInfrastructureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RealtyInfrastructureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>[]
          }
          upsert: {
            args: Prisma.RealtyInfrastructureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtyInfrastructurePayload>
          }
          aggregate: {
            args: Prisma.RealtyInfrastructureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRealtyInfrastructure>
          }
          groupBy: {
            args: Prisma.RealtyInfrastructureGroupByArgs<ExtArgs>
            result: $Utils.Optional<RealtyInfrastructureGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealtyInfrastructureCountArgs<ExtArgs>
            result: $Utils.Optional<RealtyInfrastructureCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
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
    realty?: RealtyOmit
    realtyInfrastructure?: RealtyInfrastructureOmit
    photo?: PhotoOmit
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
   * Count Type RealtyCountOutputType
   */

  export type RealtyCountOutputType = {
    infrastructures: number
    photos: number
  }

  export type RealtyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infrastructures?: boolean | RealtyCountOutputTypeCountInfrastructuresArgs
    photos?: boolean | RealtyCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * RealtyCountOutputType without action
   */
  export type RealtyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyCountOutputType
     */
    select?: RealtyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RealtyCountOutputType without action
   */
  export type RealtyCountOutputTypeCountInfrastructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealtyInfrastructureWhereInput
  }

  /**
   * RealtyCountOutputType without action
   */
  export type RealtyCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Realty
   */

  export type AggregateRealty = {
    _count: RealtyCountAggregateOutputType | null
    _avg: RealtyAvgAggregateOutputType | null
    _sum: RealtySumAggregateOutputType | null
    _min: RealtyMinAggregateOutputType | null
    _max: RealtyMaxAggregateOutputType | null
  }

  export type RealtyAvgAggregateOutputType = {
    id: number | null
    price: number | null
    area: number | null
    rooms: number | null
    latitude: number | null
    longitude: number | null
  }

  export type RealtySumAggregateOutputType = {
    id: number | null
    price: number | null
    area: number | null
    rooms: number | null
    latitude: number | null
    longitude: number | null
  }

  export type RealtyMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    area: number | null
    rooms: number | null
    type: $Enums.ObjectType | null
    district: string | null
    street: string | null
    latitude: number | null
    longitude: number | null
    dateAdded: Date | null
  }

  export type RealtyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    area: number | null
    rooms: number | null
    type: $Enums.ObjectType | null
    district: string | null
    street: string | null
    latitude: number | null
    longitude: number | null
    dateAdded: Date | null
  }

  export type RealtyCountAggregateOutputType = {
    id: number
    name: number
    price: number
    area: number
    rooms: number
    type: number
    district: number
    street: number
    latitude: number
    longitude: number
    dateAdded: number
    _all: number
  }


  export type RealtyAvgAggregateInputType = {
    id?: true
    price?: true
    area?: true
    rooms?: true
    latitude?: true
    longitude?: true
  }

  export type RealtySumAggregateInputType = {
    id?: true
    price?: true
    area?: true
    rooms?: true
    latitude?: true
    longitude?: true
  }

  export type RealtyMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    area?: true
    rooms?: true
    type?: true
    district?: true
    street?: true
    latitude?: true
    longitude?: true
    dateAdded?: true
  }

  export type RealtyMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    area?: true
    rooms?: true
    type?: true
    district?: true
    street?: true
    latitude?: true
    longitude?: true
    dateAdded?: true
  }

  export type RealtyCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    area?: true
    rooms?: true
    type?: true
    district?: true
    street?: true
    latitude?: true
    longitude?: true
    dateAdded?: true
    _all?: true
  }

  export type RealtyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Realty to aggregate.
     */
    where?: RealtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realties to fetch.
     */
    orderBy?: RealtyOrderByWithRelationInput | RealtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Realties
    **/
    _count?: true | RealtyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealtyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealtySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealtyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealtyMaxAggregateInputType
  }

  export type GetRealtyAggregateType<T extends RealtyAggregateArgs> = {
        [P in keyof T & keyof AggregateRealty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealty[P]>
      : GetScalarType<T[P], AggregateRealty[P]>
  }




  export type RealtyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealtyWhereInput
    orderBy?: RealtyOrderByWithAggregationInput | RealtyOrderByWithAggregationInput[]
    by: RealtyScalarFieldEnum[] | RealtyScalarFieldEnum
    having?: RealtyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealtyCountAggregateInputType | true
    _avg?: RealtyAvgAggregateInputType
    _sum?: RealtySumAggregateInputType
    _min?: RealtyMinAggregateInputType
    _max?: RealtyMaxAggregateInputType
  }

  export type RealtyGroupByOutputType = {
    id: number
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude: number | null
    longitude: number | null
    dateAdded: Date
    _count: RealtyCountAggregateOutputType | null
    _avg: RealtyAvgAggregateOutputType | null
    _sum: RealtySumAggregateOutputType | null
    _min: RealtyMinAggregateOutputType | null
    _max: RealtyMaxAggregateOutputType | null
  }

  type GetRealtyGroupByPayload<T extends RealtyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealtyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealtyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealtyGroupByOutputType[P]>
            : GetScalarType<T[P], RealtyGroupByOutputType[P]>
        }
      >
    >


  export type RealtySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    area?: boolean
    rooms?: boolean
    type?: boolean
    district?: boolean
    street?: boolean
    latitude?: boolean
    longitude?: boolean
    dateAdded?: boolean
    infrastructures?: boolean | Realty$infrastructuresArgs<ExtArgs>
    photos?: boolean | Realty$photosArgs<ExtArgs>
    _count?: boolean | RealtyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realty"]>

  export type RealtySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    area?: boolean
    rooms?: boolean
    type?: boolean
    district?: boolean
    street?: boolean
    latitude?: boolean
    longitude?: boolean
    dateAdded?: boolean
  }, ExtArgs["result"]["realty"]>

  export type RealtySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    area?: boolean
    rooms?: boolean
    type?: boolean
    district?: boolean
    street?: boolean
    latitude?: boolean
    longitude?: boolean
    dateAdded?: boolean
  }, ExtArgs["result"]["realty"]>

  export type RealtySelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    area?: boolean
    rooms?: boolean
    type?: boolean
    district?: boolean
    street?: boolean
    latitude?: boolean
    longitude?: boolean
    dateAdded?: boolean
  }

  export type RealtyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "area" | "rooms" | "type" | "district" | "street" | "latitude" | "longitude" | "dateAdded", ExtArgs["result"]["realty"]>
  export type RealtyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infrastructures?: boolean | Realty$infrastructuresArgs<ExtArgs>
    photos?: boolean | Realty$photosArgs<ExtArgs>
    _count?: boolean | RealtyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RealtyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RealtyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RealtyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Realty"
    objects: {
      infrastructures: Prisma.$RealtyInfrastructurePayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      area: number
      rooms: number
      type: $Enums.ObjectType
      district: string
      street: string
      latitude: number | null
      longitude: number | null
      dateAdded: Date
    }, ExtArgs["result"]["realty"]>
    composites: {}
  }

  type RealtyGetPayload<S extends boolean | null | undefined | RealtyDefaultArgs> = $Result.GetResult<Prisma.$RealtyPayload, S>

  type RealtyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RealtyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RealtyCountAggregateInputType | true
    }

  export interface RealtyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Realty'], meta: { name: 'Realty' } }
    /**
     * Find zero or one Realty that matches the filter.
     * @param {RealtyFindUniqueArgs} args - Arguments to find a Realty
     * @example
     * // Get one Realty
     * const realty = await prisma.realty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RealtyFindUniqueArgs>(args: SelectSubset<T, RealtyFindUniqueArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Realty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RealtyFindUniqueOrThrowArgs} args - Arguments to find a Realty
     * @example
     * // Get one Realty
     * const realty = await prisma.realty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RealtyFindUniqueOrThrowArgs>(args: SelectSubset<T, RealtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Realty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyFindFirstArgs} args - Arguments to find a Realty
     * @example
     * // Get one Realty
     * const realty = await prisma.realty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RealtyFindFirstArgs>(args?: SelectSubset<T, RealtyFindFirstArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Realty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyFindFirstOrThrowArgs} args - Arguments to find a Realty
     * @example
     * // Get one Realty
     * const realty = await prisma.realty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RealtyFindFirstOrThrowArgs>(args?: SelectSubset<T, RealtyFindFirstOrThrowArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Realties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Realties
     * const realties = await prisma.realty.findMany()
     * 
     * // Get first 10 Realties
     * const realties = await prisma.realty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realtyWithIdOnly = await prisma.realty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RealtyFindManyArgs>(args?: SelectSubset<T, RealtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Realty.
     * @param {RealtyCreateArgs} args - Arguments to create a Realty.
     * @example
     * // Create one Realty
     * const Realty = await prisma.realty.create({
     *   data: {
     *     // ... data to create a Realty
     *   }
     * })
     * 
     */
    create<T extends RealtyCreateArgs>(args: SelectSubset<T, RealtyCreateArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Realties.
     * @param {RealtyCreateManyArgs} args - Arguments to create many Realties.
     * @example
     * // Create many Realties
     * const realty = await prisma.realty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RealtyCreateManyArgs>(args?: SelectSubset<T, RealtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Realties and returns the data saved in the database.
     * @param {RealtyCreateManyAndReturnArgs} args - Arguments to create many Realties.
     * @example
     * // Create many Realties
     * const realty = await prisma.realty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Realties and only return the `id`
     * const realtyWithIdOnly = await prisma.realty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RealtyCreateManyAndReturnArgs>(args?: SelectSubset<T, RealtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Realty.
     * @param {RealtyDeleteArgs} args - Arguments to delete one Realty.
     * @example
     * // Delete one Realty
     * const Realty = await prisma.realty.delete({
     *   where: {
     *     // ... filter to delete one Realty
     *   }
     * })
     * 
     */
    delete<T extends RealtyDeleteArgs>(args: SelectSubset<T, RealtyDeleteArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Realty.
     * @param {RealtyUpdateArgs} args - Arguments to update one Realty.
     * @example
     * // Update one Realty
     * const realty = await prisma.realty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RealtyUpdateArgs>(args: SelectSubset<T, RealtyUpdateArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Realties.
     * @param {RealtyDeleteManyArgs} args - Arguments to filter Realties to delete.
     * @example
     * // Delete a few Realties
     * const { count } = await prisma.realty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RealtyDeleteManyArgs>(args?: SelectSubset<T, RealtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Realties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Realties
     * const realty = await prisma.realty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RealtyUpdateManyArgs>(args: SelectSubset<T, RealtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Realties and returns the data updated in the database.
     * @param {RealtyUpdateManyAndReturnArgs} args - Arguments to update many Realties.
     * @example
     * // Update many Realties
     * const realty = await prisma.realty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Realties and only return the `id`
     * const realtyWithIdOnly = await prisma.realty.updateManyAndReturn({
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
    updateManyAndReturn<T extends RealtyUpdateManyAndReturnArgs>(args: SelectSubset<T, RealtyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Realty.
     * @param {RealtyUpsertArgs} args - Arguments to update or create a Realty.
     * @example
     * // Update or create a Realty
     * const realty = await prisma.realty.upsert({
     *   create: {
     *     // ... data to create a Realty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Realty we want to update
     *   }
     * })
     */
    upsert<T extends RealtyUpsertArgs>(args: SelectSubset<T, RealtyUpsertArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Realties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyCountArgs} args - Arguments to filter Realties to count.
     * @example
     * // Count the number of Realties
     * const count = await prisma.realty.count({
     *   where: {
     *     // ... the filter for the Realties we want to count
     *   }
     * })
    **/
    count<T extends RealtyCountArgs>(
      args?: Subset<T, RealtyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealtyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Realty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealtyAggregateArgs>(args: Subset<T, RealtyAggregateArgs>): Prisma.PrismaPromise<GetRealtyAggregateType<T>>

    /**
     * Group by Realty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyGroupByArgs} args - Group by arguments.
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
      T extends RealtyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealtyGroupByArgs['orderBy'] }
        : { orderBy?: RealtyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Realty model
   */
  readonly fields: RealtyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Realty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealtyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    infrastructures<T extends Realty$infrastructuresArgs<ExtArgs> = {}>(args?: Subset<T, Realty$infrastructuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Realty$photosArgs<ExtArgs> = {}>(args?: Subset<T, Realty$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Realty model
   */
  interface RealtyFieldRefs {
    readonly id: FieldRef<"Realty", 'Int'>
    readonly name: FieldRef<"Realty", 'String'>
    readonly price: FieldRef<"Realty", 'Float'>
    readonly area: FieldRef<"Realty", 'Float'>
    readonly rooms: FieldRef<"Realty", 'Int'>
    readonly type: FieldRef<"Realty", 'ObjectType'>
    readonly district: FieldRef<"Realty", 'String'>
    readonly street: FieldRef<"Realty", 'String'>
    readonly latitude: FieldRef<"Realty", 'Float'>
    readonly longitude: FieldRef<"Realty", 'Float'>
    readonly dateAdded: FieldRef<"Realty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Realty findUnique
   */
  export type RealtyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * Filter, which Realty to fetch.
     */
    where: RealtyWhereUniqueInput
  }

  /**
   * Realty findUniqueOrThrow
   */
  export type RealtyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * Filter, which Realty to fetch.
     */
    where: RealtyWhereUniqueInput
  }

  /**
   * Realty findFirst
   */
  export type RealtyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * Filter, which Realty to fetch.
     */
    where?: RealtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realties to fetch.
     */
    orderBy?: RealtyOrderByWithRelationInput | RealtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Realties.
     */
    cursor?: RealtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Realties.
     */
    distinct?: RealtyScalarFieldEnum | RealtyScalarFieldEnum[]
  }

  /**
   * Realty findFirstOrThrow
   */
  export type RealtyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * Filter, which Realty to fetch.
     */
    where?: RealtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realties to fetch.
     */
    orderBy?: RealtyOrderByWithRelationInput | RealtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Realties.
     */
    cursor?: RealtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Realties.
     */
    distinct?: RealtyScalarFieldEnum | RealtyScalarFieldEnum[]
  }

  /**
   * Realty findMany
   */
  export type RealtyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * Filter, which Realties to fetch.
     */
    where?: RealtyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Realties to fetch.
     */
    orderBy?: RealtyOrderByWithRelationInput | RealtyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Realties.
     */
    cursor?: RealtyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Realties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Realties.
     */
    skip?: number
    distinct?: RealtyScalarFieldEnum | RealtyScalarFieldEnum[]
  }

  /**
   * Realty create
   */
  export type RealtyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * The data needed to create a Realty.
     */
    data: XOR<RealtyCreateInput, RealtyUncheckedCreateInput>
  }

  /**
   * Realty createMany
   */
  export type RealtyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Realties.
     */
    data: RealtyCreateManyInput | RealtyCreateManyInput[]
  }

  /**
   * Realty createManyAndReturn
   */
  export type RealtyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * The data used to create many Realties.
     */
    data: RealtyCreateManyInput | RealtyCreateManyInput[]
  }

  /**
   * Realty update
   */
  export type RealtyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * The data needed to update a Realty.
     */
    data: XOR<RealtyUpdateInput, RealtyUncheckedUpdateInput>
    /**
     * Choose, which Realty to update.
     */
    where: RealtyWhereUniqueInput
  }

  /**
   * Realty updateMany
   */
  export type RealtyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Realties.
     */
    data: XOR<RealtyUpdateManyMutationInput, RealtyUncheckedUpdateManyInput>
    /**
     * Filter which Realties to update
     */
    where?: RealtyWhereInput
    /**
     * Limit how many Realties to update.
     */
    limit?: number
  }

  /**
   * Realty updateManyAndReturn
   */
  export type RealtyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * The data used to update Realties.
     */
    data: XOR<RealtyUpdateManyMutationInput, RealtyUncheckedUpdateManyInput>
    /**
     * Filter which Realties to update
     */
    where?: RealtyWhereInput
    /**
     * Limit how many Realties to update.
     */
    limit?: number
  }

  /**
   * Realty upsert
   */
  export type RealtyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * The filter to search for the Realty to update in case it exists.
     */
    where: RealtyWhereUniqueInput
    /**
     * In case the Realty found by the `where` argument doesn't exist, create a new Realty with this data.
     */
    create: XOR<RealtyCreateInput, RealtyUncheckedCreateInput>
    /**
     * In case the Realty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealtyUpdateInput, RealtyUncheckedUpdateInput>
  }

  /**
   * Realty delete
   */
  export type RealtyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
    /**
     * Filter which Realty to delete.
     */
    where: RealtyWhereUniqueInput
  }

  /**
   * Realty deleteMany
   */
  export type RealtyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Realties to delete
     */
    where?: RealtyWhereInput
    /**
     * Limit how many Realties to delete.
     */
    limit?: number
  }

  /**
   * Realty.infrastructures
   */
  export type Realty$infrastructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    where?: RealtyInfrastructureWhereInput
    orderBy?: RealtyInfrastructureOrderByWithRelationInput | RealtyInfrastructureOrderByWithRelationInput[]
    cursor?: RealtyInfrastructureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealtyInfrastructureScalarFieldEnum | RealtyInfrastructureScalarFieldEnum[]
  }

  /**
   * Realty.photos
   */
  export type Realty$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Realty without action
   */
  export type RealtyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Realty
     */
    select?: RealtySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Realty
     */
    omit?: RealtyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInclude<ExtArgs> | null
  }


  /**
   * Model RealtyInfrastructure
   */

  export type AggregateRealtyInfrastructure = {
    _count: RealtyInfrastructureCountAggregateOutputType | null
    _avg: RealtyInfrastructureAvgAggregateOutputType | null
    _sum: RealtyInfrastructureSumAggregateOutputType | null
    _min: RealtyInfrastructureMinAggregateOutputType | null
    _max: RealtyInfrastructureMaxAggregateOutputType | null
  }

  export type RealtyInfrastructureAvgAggregateOutputType = {
    objectId: number | null
  }

  export type RealtyInfrastructureSumAggregateOutputType = {
    objectId: number | null
  }

  export type RealtyInfrastructureMinAggregateOutputType = {
    objectId: number | null
    type: $Enums.InfrastructureType | null
  }

  export type RealtyInfrastructureMaxAggregateOutputType = {
    objectId: number | null
    type: $Enums.InfrastructureType | null
  }

  export type RealtyInfrastructureCountAggregateOutputType = {
    objectId: number
    type: number
    _all: number
  }


  export type RealtyInfrastructureAvgAggregateInputType = {
    objectId?: true
  }

  export type RealtyInfrastructureSumAggregateInputType = {
    objectId?: true
  }

  export type RealtyInfrastructureMinAggregateInputType = {
    objectId?: true
    type?: true
  }

  export type RealtyInfrastructureMaxAggregateInputType = {
    objectId?: true
    type?: true
  }

  export type RealtyInfrastructureCountAggregateInputType = {
    objectId?: true
    type?: true
    _all?: true
  }

  export type RealtyInfrastructureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealtyInfrastructure to aggregate.
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtyInfrastructures to fetch.
     */
    orderBy?: RealtyInfrastructureOrderByWithRelationInput | RealtyInfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealtyInfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtyInfrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtyInfrastructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealtyInfrastructures
    **/
    _count?: true | RealtyInfrastructureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealtyInfrastructureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealtyInfrastructureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealtyInfrastructureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealtyInfrastructureMaxAggregateInputType
  }

  export type GetRealtyInfrastructureAggregateType<T extends RealtyInfrastructureAggregateArgs> = {
        [P in keyof T & keyof AggregateRealtyInfrastructure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealtyInfrastructure[P]>
      : GetScalarType<T[P], AggregateRealtyInfrastructure[P]>
  }




  export type RealtyInfrastructureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealtyInfrastructureWhereInput
    orderBy?: RealtyInfrastructureOrderByWithAggregationInput | RealtyInfrastructureOrderByWithAggregationInput[]
    by: RealtyInfrastructureScalarFieldEnum[] | RealtyInfrastructureScalarFieldEnum
    having?: RealtyInfrastructureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealtyInfrastructureCountAggregateInputType | true
    _avg?: RealtyInfrastructureAvgAggregateInputType
    _sum?: RealtyInfrastructureSumAggregateInputType
    _min?: RealtyInfrastructureMinAggregateInputType
    _max?: RealtyInfrastructureMaxAggregateInputType
  }

  export type RealtyInfrastructureGroupByOutputType = {
    objectId: number
    type: $Enums.InfrastructureType
    _count: RealtyInfrastructureCountAggregateOutputType | null
    _avg: RealtyInfrastructureAvgAggregateOutputType | null
    _sum: RealtyInfrastructureSumAggregateOutputType | null
    _min: RealtyInfrastructureMinAggregateOutputType | null
    _max: RealtyInfrastructureMaxAggregateOutputType | null
  }

  type GetRealtyInfrastructureGroupByPayload<T extends RealtyInfrastructureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealtyInfrastructureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealtyInfrastructureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealtyInfrastructureGroupByOutputType[P]>
            : GetScalarType<T[P], RealtyInfrastructureGroupByOutputType[P]>
        }
      >
    >


  export type RealtyInfrastructureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    objectId?: boolean
    type?: boolean
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realtyInfrastructure"]>

  export type RealtyInfrastructureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    objectId?: boolean
    type?: boolean
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realtyInfrastructure"]>

  export type RealtyInfrastructureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    objectId?: boolean
    type?: boolean
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realtyInfrastructure"]>

  export type RealtyInfrastructureSelectScalar = {
    objectId?: boolean
    type?: boolean
  }

  export type RealtyInfrastructureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"objectId" | "type", ExtArgs["result"]["realtyInfrastructure"]>
  export type RealtyInfrastructureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }
  export type RealtyInfrastructureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }
  export type RealtyInfrastructureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }

  export type $RealtyInfrastructurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RealtyInfrastructure"
    objects: {
      object: Prisma.$RealtyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      objectId: number
      type: $Enums.InfrastructureType
    }, ExtArgs["result"]["realtyInfrastructure"]>
    composites: {}
  }

  type RealtyInfrastructureGetPayload<S extends boolean | null | undefined | RealtyInfrastructureDefaultArgs> = $Result.GetResult<Prisma.$RealtyInfrastructurePayload, S>

  type RealtyInfrastructureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RealtyInfrastructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RealtyInfrastructureCountAggregateInputType | true
    }

  export interface RealtyInfrastructureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RealtyInfrastructure'], meta: { name: 'RealtyInfrastructure' } }
    /**
     * Find zero or one RealtyInfrastructure that matches the filter.
     * @param {RealtyInfrastructureFindUniqueArgs} args - Arguments to find a RealtyInfrastructure
     * @example
     * // Get one RealtyInfrastructure
     * const realtyInfrastructure = await prisma.realtyInfrastructure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RealtyInfrastructureFindUniqueArgs>(args: SelectSubset<T, RealtyInfrastructureFindUniqueArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RealtyInfrastructure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RealtyInfrastructureFindUniqueOrThrowArgs} args - Arguments to find a RealtyInfrastructure
     * @example
     * // Get one RealtyInfrastructure
     * const realtyInfrastructure = await prisma.realtyInfrastructure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RealtyInfrastructureFindUniqueOrThrowArgs>(args: SelectSubset<T, RealtyInfrastructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RealtyInfrastructure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureFindFirstArgs} args - Arguments to find a RealtyInfrastructure
     * @example
     * // Get one RealtyInfrastructure
     * const realtyInfrastructure = await prisma.realtyInfrastructure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RealtyInfrastructureFindFirstArgs>(args?: SelectSubset<T, RealtyInfrastructureFindFirstArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RealtyInfrastructure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureFindFirstOrThrowArgs} args - Arguments to find a RealtyInfrastructure
     * @example
     * // Get one RealtyInfrastructure
     * const realtyInfrastructure = await prisma.realtyInfrastructure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RealtyInfrastructureFindFirstOrThrowArgs>(args?: SelectSubset<T, RealtyInfrastructureFindFirstOrThrowArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RealtyInfrastructures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealtyInfrastructures
     * const realtyInfrastructures = await prisma.realtyInfrastructure.findMany()
     * 
     * // Get first 10 RealtyInfrastructures
     * const realtyInfrastructures = await prisma.realtyInfrastructure.findMany({ take: 10 })
     * 
     * // Only select the `objectId`
     * const realtyInfrastructureWithObjectIdOnly = await prisma.realtyInfrastructure.findMany({ select: { objectId: true } })
     * 
     */
    findMany<T extends RealtyInfrastructureFindManyArgs>(args?: SelectSubset<T, RealtyInfrastructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RealtyInfrastructure.
     * @param {RealtyInfrastructureCreateArgs} args - Arguments to create a RealtyInfrastructure.
     * @example
     * // Create one RealtyInfrastructure
     * const RealtyInfrastructure = await prisma.realtyInfrastructure.create({
     *   data: {
     *     // ... data to create a RealtyInfrastructure
     *   }
     * })
     * 
     */
    create<T extends RealtyInfrastructureCreateArgs>(args: SelectSubset<T, RealtyInfrastructureCreateArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RealtyInfrastructures.
     * @param {RealtyInfrastructureCreateManyArgs} args - Arguments to create many RealtyInfrastructures.
     * @example
     * // Create many RealtyInfrastructures
     * const realtyInfrastructure = await prisma.realtyInfrastructure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RealtyInfrastructureCreateManyArgs>(args?: SelectSubset<T, RealtyInfrastructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RealtyInfrastructures and returns the data saved in the database.
     * @param {RealtyInfrastructureCreateManyAndReturnArgs} args - Arguments to create many RealtyInfrastructures.
     * @example
     * // Create many RealtyInfrastructures
     * const realtyInfrastructure = await prisma.realtyInfrastructure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RealtyInfrastructures and only return the `objectId`
     * const realtyInfrastructureWithObjectIdOnly = await prisma.realtyInfrastructure.createManyAndReturn({
     *   select: { objectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RealtyInfrastructureCreateManyAndReturnArgs>(args?: SelectSubset<T, RealtyInfrastructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RealtyInfrastructure.
     * @param {RealtyInfrastructureDeleteArgs} args - Arguments to delete one RealtyInfrastructure.
     * @example
     * // Delete one RealtyInfrastructure
     * const RealtyInfrastructure = await prisma.realtyInfrastructure.delete({
     *   where: {
     *     // ... filter to delete one RealtyInfrastructure
     *   }
     * })
     * 
     */
    delete<T extends RealtyInfrastructureDeleteArgs>(args: SelectSubset<T, RealtyInfrastructureDeleteArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RealtyInfrastructure.
     * @param {RealtyInfrastructureUpdateArgs} args - Arguments to update one RealtyInfrastructure.
     * @example
     * // Update one RealtyInfrastructure
     * const realtyInfrastructure = await prisma.realtyInfrastructure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RealtyInfrastructureUpdateArgs>(args: SelectSubset<T, RealtyInfrastructureUpdateArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RealtyInfrastructures.
     * @param {RealtyInfrastructureDeleteManyArgs} args - Arguments to filter RealtyInfrastructures to delete.
     * @example
     * // Delete a few RealtyInfrastructures
     * const { count } = await prisma.realtyInfrastructure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RealtyInfrastructureDeleteManyArgs>(args?: SelectSubset<T, RealtyInfrastructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealtyInfrastructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealtyInfrastructures
     * const realtyInfrastructure = await prisma.realtyInfrastructure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RealtyInfrastructureUpdateManyArgs>(args: SelectSubset<T, RealtyInfrastructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealtyInfrastructures and returns the data updated in the database.
     * @param {RealtyInfrastructureUpdateManyAndReturnArgs} args - Arguments to update many RealtyInfrastructures.
     * @example
     * // Update many RealtyInfrastructures
     * const realtyInfrastructure = await prisma.realtyInfrastructure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RealtyInfrastructures and only return the `objectId`
     * const realtyInfrastructureWithObjectIdOnly = await prisma.realtyInfrastructure.updateManyAndReturn({
     *   select: { objectId: true },
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
    updateManyAndReturn<T extends RealtyInfrastructureUpdateManyAndReturnArgs>(args: SelectSubset<T, RealtyInfrastructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RealtyInfrastructure.
     * @param {RealtyInfrastructureUpsertArgs} args - Arguments to update or create a RealtyInfrastructure.
     * @example
     * // Update or create a RealtyInfrastructure
     * const realtyInfrastructure = await prisma.realtyInfrastructure.upsert({
     *   create: {
     *     // ... data to create a RealtyInfrastructure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealtyInfrastructure we want to update
     *   }
     * })
     */
    upsert<T extends RealtyInfrastructureUpsertArgs>(args: SelectSubset<T, RealtyInfrastructureUpsertArgs<ExtArgs>>): Prisma__RealtyInfrastructureClient<$Result.GetResult<Prisma.$RealtyInfrastructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RealtyInfrastructures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureCountArgs} args - Arguments to filter RealtyInfrastructures to count.
     * @example
     * // Count the number of RealtyInfrastructures
     * const count = await prisma.realtyInfrastructure.count({
     *   where: {
     *     // ... the filter for the RealtyInfrastructures we want to count
     *   }
     * })
    **/
    count<T extends RealtyInfrastructureCountArgs>(
      args?: Subset<T, RealtyInfrastructureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealtyInfrastructureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealtyInfrastructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RealtyInfrastructureAggregateArgs>(args: Subset<T, RealtyInfrastructureAggregateArgs>): Prisma.PrismaPromise<GetRealtyInfrastructureAggregateType<T>>

    /**
     * Group by RealtyInfrastructure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtyInfrastructureGroupByArgs} args - Group by arguments.
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
      T extends RealtyInfrastructureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealtyInfrastructureGroupByArgs['orderBy'] }
        : { orderBy?: RealtyInfrastructureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RealtyInfrastructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealtyInfrastructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RealtyInfrastructure model
   */
  readonly fields: RealtyInfrastructureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RealtyInfrastructure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealtyInfrastructureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    object<T extends RealtyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RealtyDefaultArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RealtyInfrastructure model
   */
  interface RealtyInfrastructureFieldRefs {
    readonly objectId: FieldRef<"RealtyInfrastructure", 'Int'>
    readonly type: FieldRef<"RealtyInfrastructure", 'InfrastructureType'>
  }
    

  // Custom InputTypes
  /**
   * RealtyInfrastructure findUnique
   */
  export type RealtyInfrastructureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which RealtyInfrastructure to fetch.
     */
    where: RealtyInfrastructureWhereUniqueInput
  }

  /**
   * RealtyInfrastructure findUniqueOrThrow
   */
  export type RealtyInfrastructureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which RealtyInfrastructure to fetch.
     */
    where: RealtyInfrastructureWhereUniqueInput
  }

  /**
   * RealtyInfrastructure findFirst
   */
  export type RealtyInfrastructureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which RealtyInfrastructure to fetch.
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtyInfrastructures to fetch.
     */
    orderBy?: RealtyInfrastructureOrderByWithRelationInput | RealtyInfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtyInfrastructures.
     */
    cursor?: RealtyInfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtyInfrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtyInfrastructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtyInfrastructures.
     */
    distinct?: RealtyInfrastructureScalarFieldEnum | RealtyInfrastructureScalarFieldEnum[]
  }

  /**
   * RealtyInfrastructure findFirstOrThrow
   */
  export type RealtyInfrastructureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which RealtyInfrastructure to fetch.
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtyInfrastructures to fetch.
     */
    orderBy?: RealtyInfrastructureOrderByWithRelationInput | RealtyInfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtyInfrastructures.
     */
    cursor?: RealtyInfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtyInfrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtyInfrastructures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtyInfrastructures.
     */
    distinct?: RealtyInfrastructureScalarFieldEnum | RealtyInfrastructureScalarFieldEnum[]
  }

  /**
   * RealtyInfrastructure findMany
   */
  export type RealtyInfrastructureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * Filter, which RealtyInfrastructures to fetch.
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtyInfrastructures to fetch.
     */
    orderBy?: RealtyInfrastructureOrderByWithRelationInput | RealtyInfrastructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealtyInfrastructures.
     */
    cursor?: RealtyInfrastructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtyInfrastructures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtyInfrastructures.
     */
    skip?: number
    distinct?: RealtyInfrastructureScalarFieldEnum | RealtyInfrastructureScalarFieldEnum[]
  }

  /**
   * RealtyInfrastructure create
   */
  export type RealtyInfrastructureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * The data needed to create a RealtyInfrastructure.
     */
    data: XOR<RealtyInfrastructureCreateInput, RealtyInfrastructureUncheckedCreateInput>
  }

  /**
   * RealtyInfrastructure createMany
   */
  export type RealtyInfrastructureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RealtyInfrastructures.
     */
    data: RealtyInfrastructureCreateManyInput | RealtyInfrastructureCreateManyInput[]
  }

  /**
   * RealtyInfrastructure createManyAndReturn
   */
  export type RealtyInfrastructureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * The data used to create many RealtyInfrastructures.
     */
    data: RealtyInfrastructureCreateManyInput | RealtyInfrastructureCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealtyInfrastructure update
   */
  export type RealtyInfrastructureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * The data needed to update a RealtyInfrastructure.
     */
    data: XOR<RealtyInfrastructureUpdateInput, RealtyInfrastructureUncheckedUpdateInput>
    /**
     * Choose, which RealtyInfrastructure to update.
     */
    where: RealtyInfrastructureWhereUniqueInput
  }

  /**
   * RealtyInfrastructure updateMany
   */
  export type RealtyInfrastructureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RealtyInfrastructures.
     */
    data: XOR<RealtyInfrastructureUpdateManyMutationInput, RealtyInfrastructureUncheckedUpdateManyInput>
    /**
     * Filter which RealtyInfrastructures to update
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * Limit how many RealtyInfrastructures to update.
     */
    limit?: number
  }

  /**
   * RealtyInfrastructure updateManyAndReturn
   */
  export type RealtyInfrastructureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * The data used to update RealtyInfrastructures.
     */
    data: XOR<RealtyInfrastructureUpdateManyMutationInput, RealtyInfrastructureUncheckedUpdateManyInput>
    /**
     * Filter which RealtyInfrastructures to update
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * Limit how many RealtyInfrastructures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealtyInfrastructure upsert
   */
  export type RealtyInfrastructureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * The filter to search for the RealtyInfrastructure to update in case it exists.
     */
    where: RealtyInfrastructureWhereUniqueInput
    /**
     * In case the RealtyInfrastructure found by the `where` argument doesn't exist, create a new RealtyInfrastructure with this data.
     */
    create: XOR<RealtyInfrastructureCreateInput, RealtyInfrastructureUncheckedCreateInput>
    /**
     * In case the RealtyInfrastructure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealtyInfrastructureUpdateInput, RealtyInfrastructureUncheckedUpdateInput>
  }

  /**
   * RealtyInfrastructure delete
   */
  export type RealtyInfrastructureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
    /**
     * Filter which RealtyInfrastructure to delete.
     */
    where: RealtyInfrastructureWhereUniqueInput
  }

  /**
   * RealtyInfrastructure deleteMany
   */
  export type RealtyInfrastructureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealtyInfrastructures to delete
     */
    where?: RealtyInfrastructureWhereInput
    /**
     * Limit how many RealtyInfrastructures to delete.
     */
    limit?: number
  }

  /**
   * RealtyInfrastructure without action
   */
  export type RealtyInfrastructureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtyInfrastructure
     */
    select?: RealtyInfrastructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtyInfrastructure
     */
    omit?: RealtyInfrastructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtyInfrastructureInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    objectId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    objectId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    url: string | null
    objectId: number | null
    isMain: boolean | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    objectId: number | null
    isMain: boolean | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    url: number
    objectId: number
    isMain: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    objectId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    objectId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    url?: true
    objectId?: true
    isMain?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    url?: true
    objectId?: true
    isMain?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    url?: true
    objectId?: true
    isMain?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    url: string
    objectId: number
    isMain: boolean
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    objectId?: boolean
    isMain?: boolean
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    objectId?: boolean
    isMain?: boolean
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    objectId?: boolean
    isMain?: boolean
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    url?: boolean
    objectId?: boolean
    isMain?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "objectId" | "isMain", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    object?: boolean | RealtyDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      object: Prisma.$RealtyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      objectId: number
      isMain: boolean
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    object<T extends RealtyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RealtyDefaultArgs<ExtArgs>>): Prisma__RealtyClient<$Result.GetResult<Prisma.$RealtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly objectId: FieldRef<"Photo", 'Int'>
    readonly isMain: FieldRef<"Photo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RealtyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    area: 'area',
    rooms: 'rooms',
    type: 'type',
    district: 'district',
    street: 'street',
    latitude: 'latitude',
    longitude: 'longitude',
    dateAdded: 'dateAdded'
  };

  export type RealtyScalarFieldEnum = (typeof RealtyScalarFieldEnum)[keyof typeof RealtyScalarFieldEnum]


  export const RealtyInfrastructureScalarFieldEnum: {
    objectId: 'objectId',
    type: 'type'
  };

  export type RealtyInfrastructureScalarFieldEnum = (typeof RealtyInfrastructureScalarFieldEnum)[keyof typeof RealtyInfrastructureScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    objectId: 'objectId',
    isMain: 'isMain'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ObjectType'
   */
  export type EnumObjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ObjectType'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'InfrastructureType'
   */
  export type EnumInfrastructureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InfrastructureType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type RealtyWhereInput = {
    AND?: RealtyWhereInput | RealtyWhereInput[]
    OR?: RealtyWhereInput[]
    NOT?: RealtyWhereInput | RealtyWhereInput[]
    id?: IntFilter<"Realty"> | number
    name?: StringFilter<"Realty"> | string
    price?: FloatFilter<"Realty"> | number
    area?: FloatFilter<"Realty"> | number
    rooms?: IntFilter<"Realty"> | number
    type?: EnumObjectTypeFilter<"Realty"> | $Enums.ObjectType
    district?: StringFilter<"Realty"> | string
    street?: StringFilter<"Realty"> | string
    latitude?: FloatNullableFilter<"Realty"> | number | null
    longitude?: FloatNullableFilter<"Realty"> | number | null
    dateAdded?: DateTimeFilter<"Realty"> | Date | string
    infrastructures?: RealtyInfrastructureListRelationFilter
    photos?: PhotoListRelationFilter
  }

  export type RealtyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    type?: SortOrder
    district?: SortOrder
    street?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    dateAdded?: SortOrder
    infrastructures?: RealtyInfrastructureOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
  }

  export type RealtyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RealtyWhereInput | RealtyWhereInput[]
    OR?: RealtyWhereInput[]
    NOT?: RealtyWhereInput | RealtyWhereInput[]
    name?: StringFilter<"Realty"> | string
    price?: FloatFilter<"Realty"> | number
    area?: FloatFilter<"Realty"> | number
    rooms?: IntFilter<"Realty"> | number
    type?: EnumObjectTypeFilter<"Realty"> | $Enums.ObjectType
    district?: StringFilter<"Realty"> | string
    street?: StringFilter<"Realty"> | string
    latitude?: FloatNullableFilter<"Realty"> | number | null
    longitude?: FloatNullableFilter<"Realty"> | number | null
    dateAdded?: DateTimeFilter<"Realty"> | Date | string
    infrastructures?: RealtyInfrastructureListRelationFilter
    photos?: PhotoListRelationFilter
  }, "id">

  export type RealtyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    type?: SortOrder
    district?: SortOrder
    street?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    dateAdded?: SortOrder
    _count?: RealtyCountOrderByAggregateInput
    _avg?: RealtyAvgOrderByAggregateInput
    _max?: RealtyMaxOrderByAggregateInput
    _min?: RealtyMinOrderByAggregateInput
    _sum?: RealtySumOrderByAggregateInput
  }

  export type RealtyScalarWhereWithAggregatesInput = {
    AND?: RealtyScalarWhereWithAggregatesInput | RealtyScalarWhereWithAggregatesInput[]
    OR?: RealtyScalarWhereWithAggregatesInput[]
    NOT?: RealtyScalarWhereWithAggregatesInput | RealtyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Realty"> | number
    name?: StringWithAggregatesFilter<"Realty"> | string
    price?: FloatWithAggregatesFilter<"Realty"> | number
    area?: FloatWithAggregatesFilter<"Realty"> | number
    rooms?: IntWithAggregatesFilter<"Realty"> | number
    type?: EnumObjectTypeWithAggregatesFilter<"Realty"> | $Enums.ObjectType
    district?: StringWithAggregatesFilter<"Realty"> | string
    street?: StringWithAggregatesFilter<"Realty"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Realty"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Realty"> | number | null
    dateAdded?: DateTimeWithAggregatesFilter<"Realty"> | Date | string
  }

  export type RealtyInfrastructureWhereInput = {
    AND?: RealtyInfrastructureWhereInput | RealtyInfrastructureWhereInput[]
    OR?: RealtyInfrastructureWhereInput[]
    NOT?: RealtyInfrastructureWhereInput | RealtyInfrastructureWhereInput[]
    objectId?: IntFilter<"RealtyInfrastructure"> | number
    type?: EnumInfrastructureTypeFilter<"RealtyInfrastructure"> | $Enums.InfrastructureType
    object?: XOR<RealtyScalarRelationFilter, RealtyWhereInput>
  }

  export type RealtyInfrastructureOrderByWithRelationInput = {
    objectId?: SortOrder
    type?: SortOrder
    object?: RealtyOrderByWithRelationInput
  }

  export type RealtyInfrastructureWhereUniqueInput = Prisma.AtLeast<{
    objectId_type?: RealtyInfrastructureObjectIdTypeCompoundUniqueInput
    AND?: RealtyInfrastructureWhereInput | RealtyInfrastructureWhereInput[]
    OR?: RealtyInfrastructureWhereInput[]
    NOT?: RealtyInfrastructureWhereInput | RealtyInfrastructureWhereInput[]
    objectId?: IntFilter<"RealtyInfrastructure"> | number
    type?: EnumInfrastructureTypeFilter<"RealtyInfrastructure"> | $Enums.InfrastructureType
    object?: XOR<RealtyScalarRelationFilter, RealtyWhereInput>
  }, "objectId_type">

  export type RealtyInfrastructureOrderByWithAggregationInput = {
    objectId?: SortOrder
    type?: SortOrder
    _count?: RealtyInfrastructureCountOrderByAggregateInput
    _avg?: RealtyInfrastructureAvgOrderByAggregateInput
    _max?: RealtyInfrastructureMaxOrderByAggregateInput
    _min?: RealtyInfrastructureMinOrderByAggregateInput
    _sum?: RealtyInfrastructureSumOrderByAggregateInput
  }

  export type RealtyInfrastructureScalarWhereWithAggregatesInput = {
    AND?: RealtyInfrastructureScalarWhereWithAggregatesInput | RealtyInfrastructureScalarWhereWithAggregatesInput[]
    OR?: RealtyInfrastructureScalarWhereWithAggregatesInput[]
    NOT?: RealtyInfrastructureScalarWhereWithAggregatesInput | RealtyInfrastructureScalarWhereWithAggregatesInput[]
    objectId?: IntWithAggregatesFilter<"RealtyInfrastructure"> | number
    type?: EnumInfrastructureTypeWithAggregatesFilter<"RealtyInfrastructure"> | $Enums.InfrastructureType
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    objectId?: IntFilter<"Photo"> | number
    isMain?: BoolFilter<"Photo"> | boolean
    object?: XOR<RealtyScalarRelationFilter, RealtyWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    objectId?: SortOrder
    isMain?: SortOrder
    object?: RealtyOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    url?: StringFilter<"Photo"> | string
    objectId?: IntFilter<"Photo"> | number
    isMain?: BoolFilter<"Photo"> | boolean
    object?: XOR<RealtyScalarRelationFilter, RealtyWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    objectId?: SortOrder
    isMain?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    url?: StringWithAggregatesFilter<"Photo"> | string
    objectId?: IntWithAggregatesFilter<"Photo"> | number
    isMain?: BoolWithAggregatesFilter<"Photo"> | boolean
  }

  export type RealtyCreateInput = {
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
    infrastructures?: RealtyInfrastructureCreateNestedManyWithoutObjectInput
    photos?: PhotoCreateNestedManyWithoutObjectInput
  }

  export type RealtyUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
    infrastructures?: RealtyInfrastructureUncheckedCreateNestedManyWithoutObjectInput
    photos?: PhotoUncheckedCreateNestedManyWithoutObjectInput
  }

  export type RealtyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    infrastructures?: RealtyInfrastructureUpdateManyWithoutObjectNestedInput
    photos?: PhotoUpdateManyWithoutObjectNestedInput
  }

  export type RealtyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    infrastructures?: RealtyInfrastructureUncheckedUpdateManyWithoutObjectNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type RealtyCreateManyInput = {
    id?: number
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
  }

  export type RealtyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealtyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealtyInfrastructureCreateInput = {
    type: $Enums.InfrastructureType
    object: RealtyCreateNestedOneWithoutInfrastructuresInput
  }

  export type RealtyInfrastructureUncheckedCreateInput = {
    objectId: number
    type: $Enums.InfrastructureType
  }

  export type RealtyInfrastructureUpdateInput = {
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
    object?: RealtyUpdateOneRequiredWithoutInfrastructuresNestedInput
  }

  export type RealtyInfrastructureUncheckedUpdateInput = {
    objectId?: IntFieldUpdateOperationsInput | number
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
  }

  export type RealtyInfrastructureCreateManyInput = {
    objectId: number
    type: $Enums.InfrastructureType
  }

  export type RealtyInfrastructureUpdateManyMutationInput = {
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
  }

  export type RealtyInfrastructureUncheckedUpdateManyInput = {
    objectId?: IntFieldUpdateOperationsInput | number
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
  }

  export type PhotoCreateInput = {
    url: string
    isMain?: boolean
    object: RealtyCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    url: string
    objectId: number
    isMain?: boolean
  }

  export type PhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
    object?: RealtyUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    objectId?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoCreateManyInput = {
    id?: number
    url: string
    objectId: number
    isMain?: boolean
  }

  export type PhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    objectId?: IntFieldUpdateOperationsInput | number
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumObjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectType | EnumObjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectType[]
    notIn?: $Enums.ObjectType[]
    not?: NestedEnumObjectTypeFilter<$PrismaModel> | $Enums.ObjectType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RealtyInfrastructureListRelationFilter = {
    every?: RealtyInfrastructureWhereInput
    some?: RealtyInfrastructureWhereInput
    none?: RealtyInfrastructureWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RealtyInfrastructureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealtyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    type?: SortOrder
    district?: SortOrder
    street?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    dateAdded?: SortOrder
  }

  export type RealtyAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type RealtyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    type?: SortOrder
    district?: SortOrder
    street?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    dateAdded?: SortOrder
  }

  export type RealtyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    type?: SortOrder
    district?: SortOrder
    street?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    dateAdded?: SortOrder
  }

  export type RealtySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    area?: SortOrder
    rooms?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumObjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectType | EnumObjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectType[]
    notIn?: $Enums.ObjectType[]
    not?: NestedEnumObjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ObjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumObjectTypeFilter<$PrismaModel>
    _max?: NestedEnumObjectTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumInfrastructureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InfrastructureType | EnumInfrastructureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InfrastructureType[]
    notIn?: $Enums.InfrastructureType[]
    not?: NestedEnumInfrastructureTypeFilter<$PrismaModel> | $Enums.InfrastructureType
  }

  export type RealtyScalarRelationFilter = {
    is?: RealtyWhereInput
    isNot?: RealtyWhereInput
  }

  export type RealtyInfrastructureObjectIdTypeCompoundUniqueInput = {
    objectId: number
    type: $Enums.InfrastructureType
  }

  export type RealtyInfrastructureCountOrderByAggregateInput = {
    objectId?: SortOrder
    type?: SortOrder
  }

  export type RealtyInfrastructureAvgOrderByAggregateInput = {
    objectId?: SortOrder
  }

  export type RealtyInfrastructureMaxOrderByAggregateInput = {
    objectId?: SortOrder
    type?: SortOrder
  }

  export type RealtyInfrastructureMinOrderByAggregateInput = {
    objectId?: SortOrder
    type?: SortOrder
  }

  export type RealtyInfrastructureSumOrderByAggregateInput = {
    objectId?: SortOrder
  }

  export type EnumInfrastructureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InfrastructureType | EnumInfrastructureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InfrastructureType[]
    notIn?: $Enums.InfrastructureType[]
    not?: NestedEnumInfrastructureTypeWithAggregatesFilter<$PrismaModel> | $Enums.InfrastructureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInfrastructureTypeFilter<$PrismaModel>
    _max?: NestedEnumInfrastructureTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    objectId?: SortOrder
    isMain?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    objectId?: SortOrder
    isMain?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    objectId?: SortOrder
    isMain?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    objectId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RealtyInfrastructureCreateNestedManyWithoutObjectInput = {
    create?: XOR<RealtyInfrastructureCreateWithoutObjectInput, RealtyInfrastructureUncheckedCreateWithoutObjectInput> | RealtyInfrastructureCreateWithoutObjectInput[] | RealtyInfrastructureUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: RealtyInfrastructureCreateOrConnectWithoutObjectInput | RealtyInfrastructureCreateOrConnectWithoutObjectInput[]
    createMany?: RealtyInfrastructureCreateManyObjectInputEnvelope
    connect?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutObjectInput = {
    create?: XOR<PhotoCreateWithoutObjectInput, PhotoUncheckedCreateWithoutObjectInput> | PhotoCreateWithoutObjectInput[] | PhotoUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutObjectInput | PhotoCreateOrConnectWithoutObjectInput[]
    createMany?: PhotoCreateManyObjectInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type RealtyInfrastructureUncheckedCreateNestedManyWithoutObjectInput = {
    create?: XOR<RealtyInfrastructureCreateWithoutObjectInput, RealtyInfrastructureUncheckedCreateWithoutObjectInput> | RealtyInfrastructureCreateWithoutObjectInput[] | RealtyInfrastructureUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: RealtyInfrastructureCreateOrConnectWithoutObjectInput | RealtyInfrastructureCreateOrConnectWithoutObjectInput[]
    createMany?: RealtyInfrastructureCreateManyObjectInputEnvelope
    connect?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutObjectInput = {
    create?: XOR<PhotoCreateWithoutObjectInput, PhotoUncheckedCreateWithoutObjectInput> | PhotoCreateWithoutObjectInput[] | PhotoUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutObjectInput | PhotoCreateOrConnectWithoutObjectInput[]
    createMany?: PhotoCreateManyObjectInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumObjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ObjectType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RealtyInfrastructureUpdateManyWithoutObjectNestedInput = {
    create?: XOR<RealtyInfrastructureCreateWithoutObjectInput, RealtyInfrastructureUncheckedCreateWithoutObjectInput> | RealtyInfrastructureCreateWithoutObjectInput[] | RealtyInfrastructureUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: RealtyInfrastructureCreateOrConnectWithoutObjectInput | RealtyInfrastructureCreateOrConnectWithoutObjectInput[]
    upsert?: RealtyInfrastructureUpsertWithWhereUniqueWithoutObjectInput | RealtyInfrastructureUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: RealtyInfrastructureCreateManyObjectInputEnvelope
    set?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    disconnect?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    delete?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    connect?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    update?: RealtyInfrastructureUpdateWithWhereUniqueWithoutObjectInput | RealtyInfrastructureUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: RealtyInfrastructureUpdateManyWithWhereWithoutObjectInput | RealtyInfrastructureUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: RealtyInfrastructureScalarWhereInput | RealtyInfrastructureScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutObjectNestedInput = {
    create?: XOR<PhotoCreateWithoutObjectInput, PhotoUncheckedCreateWithoutObjectInput> | PhotoCreateWithoutObjectInput[] | PhotoUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutObjectInput | PhotoCreateOrConnectWithoutObjectInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutObjectInput | PhotoUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: PhotoCreateManyObjectInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutObjectInput | PhotoUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutObjectInput | PhotoUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type RealtyInfrastructureUncheckedUpdateManyWithoutObjectNestedInput = {
    create?: XOR<RealtyInfrastructureCreateWithoutObjectInput, RealtyInfrastructureUncheckedCreateWithoutObjectInput> | RealtyInfrastructureCreateWithoutObjectInput[] | RealtyInfrastructureUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: RealtyInfrastructureCreateOrConnectWithoutObjectInput | RealtyInfrastructureCreateOrConnectWithoutObjectInput[]
    upsert?: RealtyInfrastructureUpsertWithWhereUniqueWithoutObjectInput | RealtyInfrastructureUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: RealtyInfrastructureCreateManyObjectInputEnvelope
    set?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    disconnect?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    delete?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    connect?: RealtyInfrastructureWhereUniqueInput | RealtyInfrastructureWhereUniqueInput[]
    update?: RealtyInfrastructureUpdateWithWhereUniqueWithoutObjectInput | RealtyInfrastructureUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: RealtyInfrastructureUpdateManyWithWhereWithoutObjectInput | RealtyInfrastructureUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: RealtyInfrastructureScalarWhereInput | RealtyInfrastructureScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutObjectNestedInput = {
    create?: XOR<PhotoCreateWithoutObjectInput, PhotoUncheckedCreateWithoutObjectInput> | PhotoCreateWithoutObjectInput[] | PhotoUncheckedCreateWithoutObjectInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutObjectInput | PhotoCreateOrConnectWithoutObjectInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutObjectInput | PhotoUpsertWithWhereUniqueWithoutObjectInput[]
    createMany?: PhotoCreateManyObjectInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutObjectInput | PhotoUpdateWithWhereUniqueWithoutObjectInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutObjectInput | PhotoUpdateManyWithWhereWithoutObjectInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type RealtyCreateNestedOneWithoutInfrastructuresInput = {
    create?: XOR<RealtyCreateWithoutInfrastructuresInput, RealtyUncheckedCreateWithoutInfrastructuresInput>
    connectOrCreate?: RealtyCreateOrConnectWithoutInfrastructuresInput
    connect?: RealtyWhereUniqueInput
  }

  export type EnumInfrastructureTypeFieldUpdateOperationsInput = {
    set?: $Enums.InfrastructureType
  }

  export type RealtyUpdateOneRequiredWithoutInfrastructuresNestedInput = {
    create?: XOR<RealtyCreateWithoutInfrastructuresInput, RealtyUncheckedCreateWithoutInfrastructuresInput>
    connectOrCreate?: RealtyCreateOrConnectWithoutInfrastructuresInput
    upsert?: RealtyUpsertWithoutInfrastructuresInput
    connect?: RealtyWhereUniqueInput
    update?: XOR<XOR<RealtyUpdateToOneWithWhereWithoutInfrastructuresInput, RealtyUpdateWithoutInfrastructuresInput>, RealtyUncheckedUpdateWithoutInfrastructuresInput>
  }

  export type RealtyCreateNestedOneWithoutPhotosInput = {
    create?: XOR<RealtyCreateWithoutPhotosInput, RealtyUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: RealtyCreateOrConnectWithoutPhotosInput
    connect?: RealtyWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RealtyUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<RealtyCreateWithoutPhotosInput, RealtyUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: RealtyCreateOrConnectWithoutPhotosInput
    upsert?: RealtyUpsertWithoutPhotosInput
    connect?: RealtyWhereUniqueInput
    update?: XOR<XOR<RealtyUpdateToOneWithWhereWithoutPhotosInput, RealtyUpdateWithoutPhotosInput>, RealtyUncheckedUpdateWithoutPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumObjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectType | EnumObjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectType[]
    notIn?: $Enums.ObjectType[]
    not?: NestedEnumObjectTypeFilter<$PrismaModel> | $Enums.ObjectType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumObjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ObjectType | EnumObjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ObjectType[]
    notIn?: $Enums.ObjectType[]
    not?: NestedEnumObjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ObjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumObjectTypeFilter<$PrismaModel>
    _max?: NestedEnumObjectTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInfrastructureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InfrastructureType | EnumInfrastructureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InfrastructureType[]
    notIn?: $Enums.InfrastructureType[]
    not?: NestedEnumInfrastructureTypeFilter<$PrismaModel> | $Enums.InfrastructureType
  }

  export type NestedEnumInfrastructureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InfrastructureType | EnumInfrastructureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InfrastructureType[]
    notIn?: $Enums.InfrastructureType[]
    not?: NestedEnumInfrastructureTypeWithAggregatesFilter<$PrismaModel> | $Enums.InfrastructureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInfrastructureTypeFilter<$PrismaModel>
    _max?: NestedEnumInfrastructureTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RealtyInfrastructureCreateWithoutObjectInput = {
    type: $Enums.InfrastructureType
  }

  export type RealtyInfrastructureUncheckedCreateWithoutObjectInput = {
    type: $Enums.InfrastructureType
  }

  export type RealtyInfrastructureCreateOrConnectWithoutObjectInput = {
    where: RealtyInfrastructureWhereUniqueInput
    create: XOR<RealtyInfrastructureCreateWithoutObjectInput, RealtyInfrastructureUncheckedCreateWithoutObjectInput>
  }

  export type RealtyInfrastructureCreateManyObjectInputEnvelope = {
    data: RealtyInfrastructureCreateManyObjectInput | RealtyInfrastructureCreateManyObjectInput[]
  }

  export type PhotoCreateWithoutObjectInput = {
    url: string
    isMain?: boolean
  }

  export type PhotoUncheckedCreateWithoutObjectInput = {
    id?: number
    url: string
    isMain?: boolean
  }

  export type PhotoCreateOrConnectWithoutObjectInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutObjectInput, PhotoUncheckedCreateWithoutObjectInput>
  }

  export type PhotoCreateManyObjectInputEnvelope = {
    data: PhotoCreateManyObjectInput | PhotoCreateManyObjectInput[]
  }

  export type RealtyInfrastructureUpsertWithWhereUniqueWithoutObjectInput = {
    where: RealtyInfrastructureWhereUniqueInput
    update: XOR<RealtyInfrastructureUpdateWithoutObjectInput, RealtyInfrastructureUncheckedUpdateWithoutObjectInput>
    create: XOR<RealtyInfrastructureCreateWithoutObjectInput, RealtyInfrastructureUncheckedCreateWithoutObjectInput>
  }

  export type RealtyInfrastructureUpdateWithWhereUniqueWithoutObjectInput = {
    where: RealtyInfrastructureWhereUniqueInput
    data: XOR<RealtyInfrastructureUpdateWithoutObjectInput, RealtyInfrastructureUncheckedUpdateWithoutObjectInput>
  }

  export type RealtyInfrastructureUpdateManyWithWhereWithoutObjectInput = {
    where: RealtyInfrastructureScalarWhereInput
    data: XOR<RealtyInfrastructureUpdateManyMutationInput, RealtyInfrastructureUncheckedUpdateManyWithoutObjectInput>
  }

  export type RealtyInfrastructureScalarWhereInput = {
    AND?: RealtyInfrastructureScalarWhereInput | RealtyInfrastructureScalarWhereInput[]
    OR?: RealtyInfrastructureScalarWhereInput[]
    NOT?: RealtyInfrastructureScalarWhereInput | RealtyInfrastructureScalarWhereInput[]
    objectId?: IntFilter<"RealtyInfrastructure"> | number
    type?: EnumInfrastructureTypeFilter<"RealtyInfrastructure"> | $Enums.InfrastructureType
  }

  export type PhotoUpsertWithWhereUniqueWithoutObjectInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutObjectInput, PhotoUncheckedUpdateWithoutObjectInput>
    create: XOR<PhotoCreateWithoutObjectInput, PhotoUncheckedCreateWithoutObjectInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutObjectInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutObjectInput, PhotoUncheckedUpdateWithoutObjectInput>
  }

  export type PhotoUpdateManyWithWhereWithoutObjectInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutObjectInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    objectId?: IntFilter<"Photo"> | number
    isMain?: BoolFilter<"Photo"> | boolean
  }

  export type RealtyCreateWithoutInfrastructuresInput = {
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
    photos?: PhotoCreateNestedManyWithoutObjectInput
  }

  export type RealtyUncheckedCreateWithoutInfrastructuresInput = {
    id?: number
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutObjectInput
  }

  export type RealtyCreateOrConnectWithoutInfrastructuresInput = {
    where: RealtyWhereUniqueInput
    create: XOR<RealtyCreateWithoutInfrastructuresInput, RealtyUncheckedCreateWithoutInfrastructuresInput>
  }

  export type RealtyUpsertWithoutInfrastructuresInput = {
    update: XOR<RealtyUpdateWithoutInfrastructuresInput, RealtyUncheckedUpdateWithoutInfrastructuresInput>
    create: XOR<RealtyCreateWithoutInfrastructuresInput, RealtyUncheckedCreateWithoutInfrastructuresInput>
    where?: RealtyWhereInput
  }

  export type RealtyUpdateToOneWithWhereWithoutInfrastructuresInput = {
    where?: RealtyWhereInput
    data: XOR<RealtyUpdateWithoutInfrastructuresInput, RealtyUncheckedUpdateWithoutInfrastructuresInput>
  }

  export type RealtyUpdateWithoutInfrastructuresInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutObjectNestedInput
  }

  export type RealtyUncheckedUpdateWithoutInfrastructuresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type RealtyCreateWithoutPhotosInput = {
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
    infrastructures?: RealtyInfrastructureCreateNestedManyWithoutObjectInput
  }

  export type RealtyUncheckedCreateWithoutPhotosInput = {
    id?: number
    name: string
    price: number
    area: number
    rooms: number
    type: $Enums.ObjectType
    district: string
    street: string
    latitude?: number | null
    longitude?: number | null
    dateAdded?: Date | string
    infrastructures?: RealtyInfrastructureUncheckedCreateNestedManyWithoutObjectInput
  }

  export type RealtyCreateOrConnectWithoutPhotosInput = {
    where: RealtyWhereUniqueInput
    create: XOR<RealtyCreateWithoutPhotosInput, RealtyUncheckedCreateWithoutPhotosInput>
  }

  export type RealtyUpsertWithoutPhotosInput = {
    update: XOR<RealtyUpdateWithoutPhotosInput, RealtyUncheckedUpdateWithoutPhotosInput>
    create: XOR<RealtyCreateWithoutPhotosInput, RealtyUncheckedCreateWithoutPhotosInput>
    where?: RealtyWhereInput
  }

  export type RealtyUpdateToOneWithWhereWithoutPhotosInput = {
    where?: RealtyWhereInput
    data: XOR<RealtyUpdateWithoutPhotosInput, RealtyUncheckedUpdateWithoutPhotosInput>
  }

  export type RealtyUpdateWithoutPhotosInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    infrastructures?: RealtyInfrastructureUpdateManyWithoutObjectNestedInput
  }

  export type RealtyUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    rooms?: IntFieldUpdateOperationsInput | number
    type?: EnumObjectTypeFieldUpdateOperationsInput | $Enums.ObjectType
    district?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    infrastructures?: RealtyInfrastructureUncheckedUpdateManyWithoutObjectNestedInput
  }

  export type RealtyInfrastructureCreateManyObjectInput = {
    type: $Enums.InfrastructureType
  }

  export type PhotoCreateManyObjectInput = {
    id?: number
    url: string
    isMain?: boolean
  }

  export type RealtyInfrastructureUpdateWithoutObjectInput = {
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
  }

  export type RealtyInfrastructureUncheckedUpdateWithoutObjectInput = {
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
  }

  export type RealtyInfrastructureUncheckedUpdateManyWithoutObjectInput = {
    type?: EnumInfrastructureTypeFieldUpdateOperationsInput | $Enums.InfrastructureType
  }

  export type PhotoUpdateWithoutObjectInput = {
    url?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateWithoutObjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoUncheckedUpdateManyWithoutObjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isMain?: BoolFieldUpdateOperationsInput | boolean
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