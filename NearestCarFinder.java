public class NearestCarFinder {

    public static int findNearestCar(int[][] cars) {
        int nearestIndex = 0;
        int minDist = Integer.MAX_VALUE;

        for (int i = 0; i < cars.length; i++) {
            int x = cars[i][0];
            int y = cars[i][1];
            int distanceSquared = x * x + y * y;

            if (distanceSquared < minDist) {
                minDist = distanceSquared;
                nearestIndex = i;
            }
        }

        return nearestIndex;
    }

    public static void main(String[] args) {
        int[][] cars = { {1, 2}, {3, 4}, {1, -1} };
        int nearest = findNearestCar(cars);
        System.out.println("Nearest car is at index: " + nearest);
    }
}
