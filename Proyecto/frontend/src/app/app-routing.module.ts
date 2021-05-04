import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { HomeComponent } from './home/home.component';
import { ModificarComponent } from './modificar/modificar.component';
import { VistaGiftcardsComponent } from './vista-giftcards/vista-giftcards.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { RegalarGiftcardsComponent } from './regalar-giftcards/regalar-giftcards.component';
import { InventarioGiftcardsComponent } from './inventario-giftcards/inventario-giftcards.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { DetallesCompraComponent } from './detalles-compra/detalles-compra.component';
import { AdminComponent } from './admin/admin.component';
import { PagarComponent } from './pagar/pagar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'modificar', component: ModificarComponent },
  { path: 'giftcards', component: VistaGiftcardsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'login', component: LoginComponent},
  { path: 'regalar', component: RegalarGiftcardsComponent },
  { path: 'inventario', component: InventarioGiftcardsComponent },
  { path: 'carrito', component: CarritoComponent},
  { path: 'compras',component:HistorialComprasComponent},
  { path: 'detallescompra/:id/:no',component:DetallesCompraComponent},
  { path: 'admin',component:AdminComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'pago/:total', component: PagarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
