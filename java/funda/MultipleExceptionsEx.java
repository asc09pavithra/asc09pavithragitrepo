package funda;

import java.util.Scanner;

public class MultipleExceptionsEx {
    public static void main(String[] args) {
        int num1=0;
        int num2=10;
        int values[]={10,2,3};

        try(Scanner scanner = new Scanner(System.in)){
            String num1String = scanner.nextLine();
            num1 = Integer.parseInt(num1String);
            System.err.println(num1/num2);
            System.err.println(values[3]);
        }
        catch(NumberFormatException numberFormatException){
            System.err.println("Inavlid value for number");
        }
        catch(ArithmeticException arithmeticException){
            System.err.println("cannot divided by zero");
        }
        catch(Throwable exception){
            System.err.println("All exception (which are not handled above)");
            System.err.println(exception);
        }
    }
    
}
