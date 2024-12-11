

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class ArrayStore {
    private int[] array;
   int  size;

   public ArrayStore(){
    array =
     new int[10];
    size=20;
   }

  public void acceptinput(){
       
    Scanner scanner = new Scanner(System.in);
    System.out.println("enter 10 integers");
    for(int i=0;i<10 ;i++){
        array[i] = scanner.nextInt();

   }
   size=10;
}

public void displaywhile(){
    System.out.println("displaying integers using while loop");
    int i=0;
    while(i<size){ 
        System.out.print(array[i]+ " ");
        i++;
    }
    System.out.println();
}

public void displayfor(){
    System.out.println("displaying integers using for loop");
    for(int i=0;i<size;i++){
        System.out.print(array[i]+" ");

    }
    System.out.println();
}
public void sortarray(){
    Arrays.sort(array,0,size);
}

public int countOccurrences(int number) {
    int count = 0;
    for (int i = 0; i < size; i++) {
        if (array[i] == number) {
            count++;
        }
    }
    return count;
}

public void insertNumber(int number, int position) {
    if (position < 0 || position > size || size >= array.length) {
        throw new IndexOutOfBoundsException("Invalid position or array is full");
    }
    for (int i = size; i > position; i--) {
        array[i] = array[i - 1];
    }
    array[position] = number;
    size++;
}
public int[] uniqueElements() {
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < size; i++) {
            set.add(array[i]);
        }
        int[] uniqueArray = new int[set.size()];
        int index = 0;
        for (int num : set) {
            uniqueArray[index++] = num;
        }
        return uniqueArray;
    }

    public static void main(String[] args) {
        ArrayStore store = new ArrayStore();
        store.acceptinput();
        store.displaywhile();
        store.displayfor();
        store.sortarray();
        System.out.println("Sorted array:");
        store.displayfor();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number to count occurrences: ");
        int number = scanner.nextInt();
        System.out.println("Number of occurrences: " + store.countOccurrences(number));
        System.out.print("Enter a number to insert: ");
        int numToInsert = scanner.nextInt();
        System.out.print("Enter position to insert at: ");
        int position = scanner.nextInt();
        store.insertNumber(numToInsert, position);
        store.displayfor();
        System.out.println("Array with unique elements: " + Arrays.toString(store.uniqueElements()));
    }
}








    
