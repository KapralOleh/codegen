/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Order } from '../models/order';


/**
 * Access to Petstore orders
 */
@Injectable({
  providedIn: 'root',
})
export class StoreService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getInventory
   */
  static readonly GetInventoryPath = '/store/inventory';

  /**
   * Returns pet inventories by status.
   *
   * Returns a map of status codes to quantities
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventory$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.GetInventoryPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: number;
        }>;
      })
    );
  }

  /**
   * Returns pet inventories by status.
   *
   * Returns a map of status codes to quantities
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getInventory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventory(params?: {
    context?: HttpContext
  }
): Observable<{
[key: string]: number;
}> {

    return this.getInventory$Response(params).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>) => r.body as {
[key: string]: number;
})
    );
  }

  /**
   * Path part for operation placeOrder
   */
  static readonly PlaceOrderPath = '/store/order';

  /**
   * Place an order for a pet.
   *
   * Place a new order in the store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `placeOrder$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  placeOrder$Json$Response(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.PlaceOrderPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Place an order for a pet.
   *
   * Place a new order in the store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `placeOrder$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  placeOrder$Json(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<Order> {

    return this.placeOrder$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Place an order for a pet.
   *
   * Place a new order in the store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `placeOrder$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  placeOrder$Xml$Response(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.PlaceOrderPath, 'post');
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Place an order for a pet.
   *
   * Place a new order in the store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `placeOrder$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  placeOrder$Xml(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<Order> {

    return this.placeOrder$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Place an order for a pet.
   *
   * Place a new order in the store
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `placeOrder$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  placeOrder$XWwwFormUrlencoded$Response(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.PlaceOrderPath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Place an order for a pet.
   *
   * Place a new order in the store
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `placeOrder$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  placeOrder$XWwwFormUrlencoded(params?: {
    context?: HttpContext
    body?: Order
  }
): Observable<Order> {

    return this.placeOrder$XWwwFormUrlencoded$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation getOrderById
   */
  static readonly GetOrderByIdPath = '/store/order/{orderId}';

  /**
   * Find purchase order by ID.
   *
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Json$Response(params: {

    /**
     * ID of order that needs to be fetched
     */
    orderId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.GetOrderByIdPath, 'get');
    if (params) {
      rb.path('orderId', params.orderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Find purchase order by ID.
   *
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Json(params: {

    /**
     * ID of order that needs to be fetched
     */
    orderId: number;
    context?: HttpContext
  }
): Observable<Order> {

    return this.getOrderById$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Find purchase order by ID.
   *
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderById$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Xml$Response(params: {

    /**
     * ID of order that needs to be fetched
     */
    orderId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.GetOrderByIdPath, 'get');
    if (params) {
      rb.path('orderId', params.orderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Find purchase order by ID.
   *
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderById$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Xml(params: {

    /**
     * ID of order that needs to be fetched
     */
    orderId: number;
    context?: HttpContext
  }
): Observable<Order> {

    return this.getOrderById$Xml$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation deleteOrder
   */
  static readonly DeleteOrderPath = '/store/order/{orderId}';

  /**
   * Delete purchase order by ID.
   *
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder$Response(params: {

    /**
     * ID of the order that needs to be deleted
     */
    orderId: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StoreService.DeleteOrderPath, 'delete');
    if (params) {
      rb.path('orderId', params.orderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete purchase order by ID.
   *
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder(params: {

    /**
     * ID of the order that needs to be deleted
     */
    orderId: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.deleteOrder$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
