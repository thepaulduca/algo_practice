import java.util.Scanner;
public class Fibonacci {
  public static void main (String[] args){

    Scanner sc = new Scanner(System.in);
    System.out.println("Enter a number to recieve its Fibonacci sequence!");
    int input = sc.nextInt();
    System.out.println(bonacci(input));
  }

  public static int bonacci(int n){
    if(n <= 1){
      return n;
    } else {
      return bonacci(n - 1) + bonacci(n - 2);
    }
  }
}
