package funda;
import java.util.HashMap;

public class HashMapEx {
    
    public static void main(String[] args) {
        HashMap<String, Integer>countryCodesMap = new HashMap<String,Integer>();

        System.err.println(countryCodesMap.isEmpty());
        countryCodesMap.put("America", 1);
         countryCodesMap.put("Singapore", 2);

    }
}

