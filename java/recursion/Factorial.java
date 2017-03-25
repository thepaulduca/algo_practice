import java.util.Scanner;
public class Factorial {
  public static void main (String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter a positive number to recieve its factorial!");
    int input = scanner.nextInt();
    System.out.println(torial(input));

}

  public static int torial(int n) {
    if(n < 2) {
      return 1;
    }
    return n * torial(n - 1);
  }
}
