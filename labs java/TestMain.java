class Student {
    private int studentId;
    private String studentName;
    private String city;
    private int marks1;
    private int marks2;
    private int marks3;
    private float feePerMonth;
    private boolean isEligibleForScholarship;

    // Getter and Setter methods for each attribute
    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getMarks1() {
        return marks1;
    }

    public void setMarks1(int marks1) {
        this.marks1 = marks1;
    }

    public int getMarks2() {
        return marks2;
    }

    public void setMarks2(int marks2) {
        this.marks2 = marks2;
    }

    public int getMarks3() {
        return marks3;
    }

    public void setMarks3(int marks3) {
        this.marks3 = marks3;
    }

    public float getFeePerMonth() {
        return feePerMonth;
    }

    public void setFeePerMonth(float feePerMonth) {
        this.feePerMonth = feePerMonth;
    }

    public boolean isEligibleForScholarship() {
        return isEligibleForScholarship;
    }

    public void setEligibleForScholarship(boolean isEligibleForScholarship) {
        this.isEligibleForScholarship = isEligibleForScholarship;
    }

    // Method to get annual fee
    public float getAnnualFee() {
        return feePerMonth * 12;
    }

    // Method to get total marks
    public int getTotalMarks() {
        return marks1 + marks2 + marks3;
    }

    // Method to get average marks
    public float getAverage() {
        return getTotalMarks() / 3.0f;
    }

    // Method to get result
    public String getResult() {
        if (marks1 > 60 && marks2 > 60 && marks3 > 60) {
            return "pass";
        } else {
            return "fail";
        }
    }
}

public class TestMain {
    public static void main(String[] args) {
        // Create three Student objects
        Student student1 = new Student();
        Student student2 = new Student();
        Student student3 = new Student();

        // Populate the objects using the setter methods
        student1.setStudentId(1);
        student1.setStudentName("Alice");
        student1.setCity("New York");
        student1.setMarks1(75);
        student1.setMarks2(85);
        student1.setMarks3(90);
        student1.setFeePerMonth(500);
        student1.setEligibleForScholarship(true);

        student2.setStudentId(2);
        student2.setStudentName("Bob");
        student2.setCity("Los Angeles");
        student2.setMarks1(65);
        student2.setMarks2(70);
        student2.setMarks3(80);
        student2.setFeePerMonth(300);
        student2.setEligibleForScholarship(false);

        student3.setStudentId(3);
        student3.setStudentName("Charlie");
        student3.setCity("Chicago");
        student3.setMarks1(55);
        student3.setMarks2(60);
        student3.setMarks3(65);
        student3.setFeePerMonth(400);
        student3.setEligibleForScholarship(false);

        // Display the name of the Student who has the highest total marks
        Student highestMarksStudent = student1;
        if (student2.getTotalMarks() > highestMarksStudent.getTotalMarks()) {
            highestMarksStudent = student2;
        }
        if (student3.getTotalMarks() > highestMarksStudent.getTotalMarks()) {
            highestMarksStudent = student3;
        }
        System.out.println("Student with the highest total marks: " + highestMarksStudent.getStudentName());

        // Print the name and fee of the Student who pays the least monthly fee
        Student leastFeeStudent = student1;
        if (student2.getFeePerMonth() < leastFeeStudent.getFeePerMonth()) {
            leastFeeStudent = student2;
        }
        if (student3.getFeePerMonth() < leastFeeStudent.getFeePerMonth()) {
            leastFeeStudent = student3;
        }
        System.out.println("Student who pays the least monthly fee: " + leastFeeStudent.getStudentName() + ", Fee: " + leastFeeStudent.getFeePerMonth());

        // Print the name, total marks, average marks, result, and scholarship status for every student
        printStudentDetails(student1);
        printStudentDetails(student2);
        printStudentDetails(student3);
    }

    // Method to print student details
    public static void printStudentDetails(Student student) {
        System.out.println("Name: " + student.getStudentName());
        System.out.println("Total Marks: " + student.getTotalMarks());
        System.out.println("Average Marks: " + student.getAverage());
        System.out.println("Result: " + student.getResult());
        System.out.println("Scholarship: " + (student.isEligibleForScholarship() ? "Scholarship available" : "Scholarship not available"));
        System.out.println();
    }
}

