public class MultiplicationTable {

    // Method to display multiplication table using a for loop
    public void displayTableFor(int number) {
        System.out.println("Multiplication table of " + number + " using for loop:");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }

    // Method to display multiplication table using a while loop
    public void displayTableWhile(int number) {
        System.out.println("Multiplication table of " + number + " using while loop:");
        int i = 1;
        while (i <= 10) {
            System.out.println(number + " x " + i + " = " + (number * i));
            i++;
        }
    }

    // Method to display multiplication table using a do-while loop
    public void displayTableDoWhile(int number) {
        System.out.println("Multiplication table of " + number + " using do-while loop:");
        int i = 1;
        do {
            System.out.println(number + " x " + i + " = " + (number * i));
            i++;
        } while (i <= 10);
    }

    public static void main(String[] args) {
        MultiplicationTable table = new MultiplicationTable();
        int number = 2; 

        table.displayTableFor(number);
        table.displayTableWhile(number);
        table.displayTableDoWhile(number);
    }
}
