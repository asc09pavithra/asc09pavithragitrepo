
    
        public class StringMethodTest {

            public static void main(String[] args) {
                // Test string
                String str = "Hello, World!   ";
                String str2 = "HELLO, WORLD!   ";
                String str3 = "hello";
        
                // Testing charAt method
                System.out.println("charAt(1): " + str.charAt(1)); // 'e'
        
                // Testing contains method
                System.out.println("contains(\"World\"): " + str.contains("World")); // true
        
                // Testing length method
                System.out.println("length(): " + str.length()); // 16
        
                // Testing indexOf method
                System.out.println("indexOf('o'): " + str.indexOf('o')); // 4
        
                // Testing equals method
                System.out.println("equals(str2): " + str.equals(str2)); // false
        
                // Testing equalsIgnoreCase method
                System.out.println("equalsIgnoreCase(str2): " + str.equalsIgnoreCase(str2.trim())); // true
        
                // Testing join method
                String joinedString = String.join("-", "2024", "11", "22");
                System.out.println("join(\"-\", \"2024\", \"11\", \"22\"): " + joinedString); // 2024-11-22
        
                // Testing lastIndexOf method
                System.out.println("lastIndexOf('o'): " + str.lastIndexOf('o')); // 8
        
                // Testing substring method
                System.out.println("substring(7): " + str.substring(7)); // "World!   "
                System.out.println("substring(0, 5): " + str.substring(0, 5)); // "Hello"
        
                // Testing toLowerCase method
                System.out.println("toLowerCase(): " + str.toLowerCase()); // "hello, world!   "
        
                // Testing toUpperCase method
                System.out.println("toUpperCase(): " + str.toUpperCase()); // "HELLO, WORLD!   "
        
                // Testing trim method
                System.out.println("trim(): " + str.trim()); // "Hello, World!"
        
                // Additional examples to demonstrate the methods with different strings
                System.out.println("\nAdditional Examples:");
        
                // charAt
                System.out.println("charAt(0): " + str3.charAt(0)); // 'h'
        
                // contains
                System.out.println("contains(\"lo\"): " + str3.contains("lo")); // true
        
                // length
                System.out.println("length(): " + str3.length()); // 5
        
                // indexOf
                System.out.println("indexOf('l'): " + str3.indexOf('l')); // 2
        
                // equals
                System.out.println("equals(\"hello\"): " + str3.equals("hello")); // true
        
                // equalsIgnoreCase
                System.out.println("equalsIgnoreCase(\"HELLO\"): " + str3.equalsIgnoreCase("HELLO")); // true
        
                // join
                String joinedString2 = String.join(" ", "Java", "is", "fun");
                System.out.println("join(\" \", \"Java\", \"is\", \"fun\"): " + joinedString2); // "Java is fun"
        
                // lastIndexOf
                System.out.println("lastIndexOf('l'): " + str3.lastIndexOf('l')); // 3
        
                // substring
                System.out.println("substring(1): " + str3.substring(1)); // "ello"
                System.out.println("substring(1, 3): " + str3.substring(1, 3)); // "el"
        
                // toLowerCase
                System.out.println("toLowerCase(): " + str2.toLowerCase()); // "hello, world!   "
        
                // toUpperCase
                System.out.println("toUpperCase(): " + str3.toUpperCase()); // "HELLO"
        
                // trim
                System.out.println("trim(): " + str2.trim()); // "HELLO, WORLD!"
            }
        }
        

