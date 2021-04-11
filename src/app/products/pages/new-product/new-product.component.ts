import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import { ProductsResponse, Estadoproducto } from '../../interfaces/products-response.interface';
import { ProductsService } from '../../services/products.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: ProductsResponse = {
      DESCRIPCION: '',
      PRECIO_COMPRA: 0,
      PRECIO: 0,
      FOTO: null,
      STOCK: 0,
      ESTADOPRODUCTO: Estadoproducto.Activo
  };

  myForm: FormGroup = this.fb.group({
    product_name: [ '', [Validators.required] ],
    purchase_price: [ '', [Validators.required] ],
    price: [ '', [Validators.required] ],
    photo: [ '' ],
    stock: [ '', [Validators.required] ],
    status: [ '', [Validators.required] ]
  })


  constructor( private fb: FormBuilder,
               private productService: ProductsService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private _snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {
    if ( this.router.url.includes('edit') ) {
      this.activatedRoute.params
          .pipe(
            switchMap( ({id}) => this.productService.getProductById(id) )
          ).subscribe( resp => {
            if ( !resp ) {
              this.router.navigateByUrl('/products/all');
              return;
            };

            this.product = resp;
            console.log(this.product)

            this.myForm.reset({
              product_name: resp.DESCRIPCION,
              purchase_price: resp.PRECIO_COMPRA,
              price: resp.PRECIO,
              photo: resp.FOTO,
              stock: resp.STOCK,
              status: resp.ESTADOPRODUCTO
            });
          });
    };
  };


  save() {
    if (this.myForm.invalid) { return };

    // Si pasa la validacion entonces hacemos esto
    const { product_name, purchase_price, price, photo, stock, status } = this.myForm.value;

    if ( !this.product.IDPRODUCTO ) {

      this.product = {
        DESCRIPCION: product_name,
        PRECIO_COMPRA: purchase_price,
        PRECIO: price,
        // FOTO: photo,
        STOCK: stock,
        ESTADOPRODUCTO: status
      };
      console.log('Mode New');
      console.log(this.product)
      this.productService.postProduct(this.product)
        .subscribe( resp => {
          console.log(resp);
          this.openSnackBar('Product Added');
          this.router.navigateByUrl('/products/all');
        });

    } else {
      // Hago esto para que el ID se mantenga, ya que si lo hago como arriba entonces nos quedamos sin ID que será necesario para el put
      this.product.DESCRIPCION = product_name;
      this.product.PRECIO_COMPRA = purchase_price;
      this.product.PRECIO = price;
      this.product.STOCK = stock;
      this.product.ESTADOPRODUCTO = status;

      console.log('Mode Edit');
      console.log(this.product)

      this.productService.putProduct(this.product)
          .subscribe( resp => {
            console.log(resp);
            this.openSnackBar('Product Updated');
            this.router.navigateByUrl('/products/all');
          });
    };

  };


  delete() {
    const dialogRef = this.dialog.open(ConfirmComponent, { data: {...this.product}});

    dialogRef.afterClosed().subscribe( result => {
      if (result) {
        // TODO hacer solicitud para eleminar el producto
        this.openSnackBar('Product Deleted');
        this.router.navigate(['/products/all']);
      }
    });
  };


  // Metodo para abrir un snackbar de Material
  openSnackBar( message: string ) {
    this._snackBar.open(message, 'ok', {
      duration: 2500
    });
  };
}
