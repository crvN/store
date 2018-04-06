import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from '../model/product.model';
import { Order } from '../model/order';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDatasourceService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[] | Order> {
    return this.sendRequest(RequestMethod.Get, this.baseUrl + 'products');
  }

  saveOrder(order: Order): Observable<Order | Product[]> {
    return this.sendRequest(RequestMethod.Post, this.baseUrl + 'orders', order);
  }

  private sendRequest(verb: RequestMethod, url: string, body?: Product | Order): Observable<Order | Product[]> {
    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body
    })).map(resp => resp.json());
  }

}
