import java.util.*;

public class AttendanceSystem {

    private Queue<Integer> queue = new LinkedList<>();
    private HashSet<Integer> set = new HashSet<>();
    private Stack<Integer> stack = new Stack<>();
    private Scanner sc = new Scanner(System.in);

   
    public void markAttendance() {
        System.out.print("Enter Student ID to mark attendance: ");
        int id = sc.nextInt();

        if (set.contains(id)) {
            System.out.println(" Student " + id + " is already present!");
        } else {
            queue.add(id);
            set.add(id);
            stack.push(id);
            System.out.println(" Attendance marked for Student: " + id);
        }
    }


    public void checkStatus() {
        System.out.print("Enter Student ID to check: ");
        int id = sc.nextInt();
        if (set.contains(id)) {
            System.out.println(" Student " + id + " is Present.");
        } else {
            System.out.println("Student " + id + " is Absent.");
        }
    }

  
    public void undoAttendance() {
        if (stack.isEmpty()) {
            System.out.println(" No attendance record to undo!");
            return;
        }
        int id = stack.pop();
        set.remove(id);
        queue.remove(id);
        System.out.println("↩ Undo successful for Student: " + id);
    }

    
    public void displayAttendance() {
        if (queue.isEmpty()) {
            System.out.println(" No students present yet.");
        } else {
            System.out.println(" Present Students in Order: " + queue);
        }
    }

    
    public void menu() {
        int choice;
        do {
            System.out.println("\n===== STUDENT ATTENDANCE MANAGEMENT =====");

            System.out.println("1 Mark Attendance");
            System.out.println("2 Check Student Status");
            System.out.println("3 Undo Last Attendance");
            System.out.println("4 Display Attendance List");
            System.out.println("5 Exit");

            System.out.print("  Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> markAttendance();
                case 2 -> checkStatus();
                case 3 -> undoAttendance();
                case 4 -> displayAttendance();
                case 5 -> System.out.println(" Exiting... Thank You!");
                default -> System.out.println(" Invalid Choice. Try Again!");
            }

        } while (choice != 5);
    }

    
    public static void main(String[] args) {
        AttendanceSystem system = new AttendanceSystem();
        system.menu();
    }
}
