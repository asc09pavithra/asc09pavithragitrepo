package funda;

public class singleinheritance {
    public static void main(String[] args){
        B b = new B();
        b.display();
    }
    
}

class A{
    protected String message = "welcome";

    public A(){
        System.out.println("A()");
    }

    public A(String message){
        this.message = message;
        System.out.println("A(String)");
    }
    void dispaly(){
        System.out.println("base/parent/ super class method");
    }
        
    }

    class B extends A{
        public B(){
            System.out.println("B()");
        }

        void display(){
            System.out.println("derived/child/sub class method");
            System.out.println("message:"+ message);
        }

    
    }

