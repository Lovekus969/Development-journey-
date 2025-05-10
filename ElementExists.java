import java.util.Scanner;

public class ElementExists {

    public static boolean elementExists(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read number of test cases
        System.out.print("Enter number of test cases: ");
        int t = sc.nextInt();

        while (t-- > 0) {
            // Read size of array
            System.out.print("Enter size of array: ");
            int n = sc.nextInt();

            int[] arr = new int[n];

            // Read array elements
            System.out.println("Enter elements of array:");
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            // Read target element
            System.out.print("Enter target to search: ");
            int target = sc.nextInt();

            // Check if element exists
            if (elementExists(arr, target)) {
                System.out.println("Target found.");
            } else {
                System.out.println("Target not found.");
            }
        }

        sc.close();
    }
}
