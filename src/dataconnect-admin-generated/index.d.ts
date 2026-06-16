import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  name: string;
  orderIndex: number;
  imageUrl?: string | null;
}

export interface CreateProductData {
  product_insert: Product_Key;
}

export interface CreateProductVariables {
  categoryId: UUIDString;
  name: string;
  description: string;
  price: number;
}

export interface GetCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    imageUrl?: string | null;
    orderIndex: number;
  } & Category_Key)[];
}

export interface GetProductsByCategoryData {
  products: ({
    id: UUIDString;
    name: string;
    description: string;
    price: number;
    imageUrl?: string | null;
    isAvailable: boolean;
  } & Product_Key)[];
}

export interface GetProductsByCategoryVariables {
  categoryId: UUIDString;
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

/** Generated Node Admin SDK operation action function for the 'GetCategories' Query. Allow users to execute without passing in DataConnect. */
export function getCategories(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCategoriesData>>;
/** Generated Node Admin SDK operation action function for the 'GetCategories' Query. Allow users to pass in custom DataConnect instances. */
export function getCategories(options?: OperationOptions): Promise<ExecuteOperationResponse<GetCategoriesData>>;

/** Generated Node Admin SDK operation action function for the 'GetProductsByCategory' Query. Allow users to execute without passing in DataConnect. */
export function getProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetProductsByCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'GetProductsByCategory' Query. Allow users to pass in custom DataConnect instances. */
export function getProductsByCategory(vars: GetProductsByCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetProductsByCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'CreateCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'CreateCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function createCategory(vars: CreateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'CreateProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function createProduct(dc: DataConnect, vars: CreateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateProductData>>;
/** Generated Node Admin SDK operation action function for the 'CreateProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function createProduct(vars: CreateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateProductData>>;

