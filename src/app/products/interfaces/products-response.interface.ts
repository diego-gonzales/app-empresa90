export interface ProductsResponse {
    IDPRODUCTO?:     number;
    DESCRIPCION:    string;
    PRECIO_COMPRA:  number;
    PRECIO:         number;
    FOTO?:           null;
    STOCK:          number;
    ESTADOPRODUCTO: Estadoproducto;
}

export enum Estadoproducto {
    Activo = "activo",
    ESTADOPRODUCTOActivo = "Activo",
}
