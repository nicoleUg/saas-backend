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

export interface CreateOrderData {
  order_insert: Order_Key;
}

export interface CreateOrderItemData {
  orderItem_insert: OrderItem_Key;
}

export interface CreateOrderItemVariables {
  orderId: UUIDString;
  productName: string;
  quantity: number;
}

export interface CreateOrderVariables {
  id: UUIDString;
  total: number;
  status: string;
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

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  email: string;
  passwordHash: string;
  name: string;
}

export interface GetCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    imageUrl?: string | null;
    orderIndex: number;
  } & Category_Key)[];
}

export interface GetOrdersData {
  orders: ({
    id: UUIDString;
    total: number;
    status: string;
    createdAt: TimestampString;
  } & Order_Key)[];
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

export interface GetUserByEmailData {
  users: ({
    id: UUIDString;
    email: string;
    passwordHash: string;
    name: string;
  } & User_Key)[];
}

export interface GetUserByEmailVariables {
  email: string;
}

export interface OrderItem_Key {
  id: UUIDString;
  __typename?: 'OrderItem_Key';
}

export interface Order_Key {
  id: UUIDString;
  __typename?: 'Order_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

/** Generated Node Admin SDK operation action function for the 'GetCategories' Query. Allow users to execute without passing in DataConnect. */
export function getCategories(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetCategoriesData>>;
/** Generated Node Admin SDK operation action function for the 'GetCategories' Query. Allow users to pass in custom DataConnect instances. */
export function getCategories(options?: OperationOptions): Promise<ExecuteOperationResponse<GetCategoriesData>>;

/** Generated Node Admin SDK operation action function for the 'GetProductsByCategory' Query. Allow users to execute without passing in DataConnect. */
export function getProductsByCategory(dc: DataConnect, vars: GetProductsByCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetProductsByCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'GetProductsByCategory' Query. Allow users to pass in custom DataConnect instances. */
export function getProductsByCategory(vars: GetProductsByCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetProductsByCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'GetOrders' Query. Allow users to execute without passing in DataConnect. */
export function getOrders(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrdersData>>;
/** Generated Node Admin SDK operation action function for the 'GetOrders' Query. Allow users to pass in custom DataConnect instances. */
export function getOrders(options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrdersData>>;

/** Generated Node Admin SDK operation action function for the 'GetUserByEmail' Query. Allow users to execute without passing in DataConnect. */
export function getUserByEmail(dc: DataConnect, vars: GetUserByEmailVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserByEmailData>>;
/** Generated Node Admin SDK operation action function for the 'GetUserByEmail' Query. Allow users to pass in custom DataConnect instances. */
export function getUserByEmail(vars: GetUserByEmailVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetUserByEmailData>>;

/** Generated Node Admin SDK operation action function for the 'CreateCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'CreateCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function createCategory(vars: CreateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'CreateProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function createProduct(dc: DataConnect, vars: CreateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateProductData>>;
/** Generated Node Admin SDK operation action function for the 'CreateProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function createProduct(vars: CreateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateProductData>>;

/** Generated Node Admin SDK operation action function for the 'CreateOrder' Mutation. Allow users to execute without passing in DataConnect. */
export function createOrder(dc: DataConnect, vars: CreateOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderData>>;
/** Generated Node Admin SDK operation action function for the 'CreateOrder' Mutation. Allow users to pass in custom DataConnect instances. */
export function createOrder(vars: CreateOrderVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderData>>;

/** Generated Node Admin SDK operation action function for the 'CreateOrderItem' Mutation. Allow users to execute without passing in DataConnect. */
export function createOrderItem(dc: DataConnect, vars: CreateOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderItemData>>;
/** Generated Node Admin SDK operation action function for the 'CreateOrderItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function createOrderItem(vars: CreateOrderItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateOrderItemData>>;

/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to execute without passing in DataConnect. */
export function createUser(dc: DataConnect, vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;
/** Generated Node Admin SDK operation action function for the 'CreateUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function createUser(vars: CreateUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateUserData>>;

