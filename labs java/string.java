import java.util.Scanner;


public class string {
    public static int countWords(String input)
    {
        if(input== null || input.isEmpty()){

        
            return 0;
    }


    String[] words = input.trim().split("\\s+");
    int count=0;
    for (String word:words){
        if(word.matches("[a-z A-Z]+")){
            count++;
        }
    }
    return count;
  
}

public static void main(String[] args) {

  Scanner scanner=new Scanner(System.in);
  System.out.println("Enter the String");
  String inputString=scanner.nextLine();
  int wordCount = countWords(inputString);
  System.out.println("Number of words :"+ wordCount);
  scanner.close();

}
}