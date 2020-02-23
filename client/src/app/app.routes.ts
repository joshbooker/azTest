import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddOrderDetailComponent } from './add-order-detail/add-order-detail.component';
import { EditOrderDetailComponent } from './edit-order-detail/edit-order-detail.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'add-order',
        component: AddOrderComponent
      },
      {
        path: 'edit-order/:Id',
        component: EditOrderComponent
      },
      {
        path: 'order-details',
        component: OrderDetailsComponent
      },
      {
        path: 'add-order-detail',
        component: AddOrderDetailComponent
      },
      {
        path: 'edit-order-detail/:Id',
        component: EditOrderDetailComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: 'edit-product/:Id',
        component: EditProductComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
