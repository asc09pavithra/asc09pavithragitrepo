package funda;

public class StringEx{
    String message = "Hello Pavithra!";
    boolean result = message.endsWith("!");

    public static void main(String[] args) {
        StringEx stringExObject = new StringEx();

        int index = stringExObject.message.indexOf("1");
        System.out.println(index);
        System.out.println(stringExObject.message.indexOf("z"));
        System.out.println(stringExObject.message.length());
        System.out.println(stringExObject.message.substring(0,5));

    }

}