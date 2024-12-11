package funda;

public class ProductModel {
    private String productId =  "ISp001";
    private String productName = "Laptop";
    private int productPrice = 1000;

    @Override
    public String toString(){
        return "ProductModel [productId=" + productId + ",productName=" + productName +"]";
    }

    public void setProductprice( int productprice){
        if(this.productPrice < 0 || this.productPrice>100000){
            System.err.println("Inavlid Product Price");
            return;
        }
        this.productPrice = productprice;
    }

    public int getProductPrice(){
        return productPrice;
    }
  
    public String getProductId(){
        return productId;

    }

    class ProductModelEx{
        public static void main(String[] args) {
            ProductModel productModel = new ProductModel();
            System.out.println(productModel);
            productModel.setProductprice(2000);
            System.out.println(productModel);
            productModel.setProductprice(100000);
            System.out.println(productModel);
            System.out.println(productModel.getProductPrice());
            System.out.println(productModel.getProductId());
        }
    }

    
}
