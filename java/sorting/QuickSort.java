public class QuickSort {
  int[] intAry;
  int i;
  public static void main (String[] args) {

  }

  // check for null or empty
  public static int[] sort(int[] ary) {
    if ( ary == null || ary.lenght()==0){
      return;
    }
    this.intAry = ary;
    i = ary.length();
    qsort(0, i - 1);
  }

  public void qsort(int low, int high){
    int x = low, y = high;
    // get pivot
    int piv = intAry[low + (high - low)/2];

  }
}
