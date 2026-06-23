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

export interface CreateFavoriteData {
  favorite_insert: Favorite_Key;
}

export interface CreateFavoriteVariables {
  productId: UUIDString;
  userId: UUIDString;
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
  imageUrl?: string | null;
}

export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  productId: UUIDString;
  userId: UUIDString;
  rating: number;
  comment: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  email: string;
  passwordHash: string;
  name: string;
}

export interface DeleteCategoryData {
  category_delete?: Category_Key | null;
}

export interface DeleteCategoryVariables {
  id: UUIDString;
}

export interface DeleteFavoriteData {
  favorite_deleteMany: number;
}

export interface DeleteFavoriteVariables {
  productId: UUIDString;
  userId: UUIDString;
}

export interface DeleteProductData {
  product_delete?: Product_Key | null;
}

export interface DeleteProductVariables {
  id: UUIDString;
}

export interface Favorite_Key {
  id: UUIDString;
  __typename?: 'Favorite_Key';
}

export interface GetCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    imageUrl?: string | null;
    orderIndex: number;
  } & Category_Key)[];
}

export interface GetFavoritesData {
  favorites: ({
    id: UUIDString;
    product: {
      id: UUIDString;
      name: string;
      description: string;
      price: number;
      imageUrl?: string | null;
      isAvailable: boolean;
    } & Product_Key;
  } & Favorite_Key)[];
}

export interface GetFavoritesVariables {
  userId: UUIDString;
}

export interface GetOrderByIdData {
  order?: {
    id: UUIDString;
    total: number;
    status: string;
    createdAt: TimestampString;
  } & Order_Key;
  orderItems: ({
    id: UUIDString;
    productName: string;
    quantity: number;
  } & OrderItem_Key)[];
}

export interface GetOrderByIdVariables {
  id: UUIDString;
}

export interface GetOrdersData {
  orders: ({
    id: UUIDString;
    total: number;
    status: string;
    createdAt: TimestampString;
  } & Order_Key)[];
}

export interface GetOrdersWithItemsData {
  orders: ({
    id: UUIDString;
    total: number;
    status: string;
    createdAt: TimestampString;
  } & Order_Key)[];
  orderItems: ({
    orderId: UUIDString;
    productName: string;
    quantity: number;
  })[];
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

export interface GetReviewsByProductData {
  reviews: ({
    id: UUIDString;
    rating: number;
    comment: string;
    createdAt: TimestampString;
    user: {
      name: string;
    };
  } & Review_Key)[];
}

export interface GetReviewsByProductVariables {
  productId: UUIDString;
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

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
  orderIndex?: number | null;
  imageUrl?: string | null;
}

export interface UpdateOrderStatusData {
  order_update?: Order_Key | null;
}

export interface UpdateOrderStatusVariables {
  id: UUIDString;
  status: string;
}

export interface UpdateProductData {
  product_update?: Product_Key | null;
}

export interface UpdateProductVariables {
  id: UUIDString;
  categoryId?: UUIDString | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  imageUrl?: string | null;
  isAvailable?: boolean | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

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

/** Generated Node Admin SDK operation action function for the 'UpdateOrderStatus' Mutation. Allow users to execute without passing in DataConnect. */
export function updateOrderStatus(dc: DataConnect, vars: UpdateOrderStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateOrderStatusData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateOrderStatus' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateOrderStatus(vars: UpdateOrderStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateOrderStatusData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function updateProduct(dc: DataConnect, vars: UpdateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateProductData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateProduct(vars: UpdateProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateProductData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteProduct' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteProduct(dc: DataConnect, vars: DeleteProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteProductData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteProduct' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteProduct(vars: DeleteProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteProductData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateCategory(vars: UpdateCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteCategory' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteCategory(dc: DataConnect, vars: DeleteCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteCategoryData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteCategory' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteCategory(vars: DeleteCategoryVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteCategoryData>>;

/** Generated Node Admin SDK operation action function for the 'CreateReview' Mutation. Allow users to execute without passing in DataConnect. */
export function createReview(dc: DataConnect, vars: CreateReviewVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateReviewData>>;
/** Generated Node Admin SDK operation action function for the 'CreateReview' Mutation. Allow users to pass in custom DataConnect instances. */
export function createReview(vars: CreateReviewVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateReviewData>>;

/** Generated Node Admin SDK operation action function for the 'CreateFavorite' Mutation. Allow users to execute without passing in DataConnect. */
export function createFavorite(dc: DataConnect, vars: CreateFavoriteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateFavoriteData>>;
/** Generated Node Admin SDK operation action function for the 'CreateFavorite' Mutation. Allow users to pass in custom DataConnect instances. */
export function createFavorite(vars: CreateFavoriteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateFavoriteData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteFavorite' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteFavorite(dc: DataConnect, vars: DeleteFavoriteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteFavoriteData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteFavorite' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteFavorite(vars: DeleteFavoriteVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteFavoriteData>>;

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

/** Generated Node Admin SDK operation action function for the 'GetOrderById' Query. Allow users to execute without passing in DataConnect. */
export function getOrderById(dc: DataConnect, vars: GetOrderByIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrderByIdData>>;
/** Generated Node Admin SDK operation action function for the 'GetOrderById' Query. Allow users to pass in custom DataConnect instances. */
export function getOrderById(vars: GetOrderByIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrderByIdData>>;

/** Generated Node Admin SDK operation action function for the 'GetOrdersWithItems' Query. Allow users to execute without passing in DataConnect. */
export function getOrdersWithItems(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrdersWithItemsData>>;
/** Generated Node Admin SDK operation action function for the 'GetOrdersWithItems' Query. Allow users to pass in custom DataConnect instances. */
export function getOrdersWithItems(options?: OperationOptions): Promise<ExecuteOperationResponse<GetOrdersWithItemsData>>;

/** Generated Node Admin SDK operation action function for the 'GetReviewsByProduct' Query. Allow users to execute without passing in DataConnect. */
export function getReviewsByProduct(dc: DataConnect, vars: GetReviewsByProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetReviewsByProductData>>;
/** Generated Node Admin SDK operation action function for the 'GetReviewsByProduct' Query. Allow users to pass in custom DataConnect instances. */
export function getReviewsByProduct(vars: GetReviewsByProductVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetReviewsByProductData>>;

/** Generated Node Admin SDK operation action function for the 'GetFavorites' Query. Allow users to execute without passing in DataConnect. */
export function getFavorites(dc: DataConnect, vars: GetFavoritesVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetFavoritesData>>;
/** Generated Node Admin SDK operation action function for the 'GetFavorites' Query. Allow users to pass in custom DataConnect instances. */
export function getFavorites(vars: GetFavoritesVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetFavoritesData>>;

