import java.util.*;

class AgeDOBCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String dateFormat = "DD-MM-YYYY";
        String delimiter = "-";
        System.out.println("Enter DOB or AGE (e.g., DOB=06-03-2005 or AGE=06-03-0019): ");
        String input = sc.nextLine();
        System.out.println("Enter the reference date (e.g., 22-10-2024): ");
        String refDate = sc.nextLine();
        if (input.startsWith("DOB=")) {
            String dobString = input.split("=")[1];
            calculateAge(dobString, refDate, dateFormat, delimiter);
        } else if (input.startsWith("AGE=")) {
            String ageString = input.split("=")[1];
            calculateDOB(ageString, refDate, dateFormat, delimiter);
        } else {
            System.out.println("Invalid input. Please start with 'DOB=' or 'AGE='.");
        }
    }
    public static void calculateAge(String dobString, String refDate, String dateFormat, String delimiter) {
        String[] dobParts = dobString.split(delimiter);
        String[] refDateParts = refDate.split(delimiter);
        int dobDay = Integer.parseInt(dobParts[0]);
        int dobMonth = Integer.parseInt(dobParts[1]);
        int dobYear = Integer.parseInt(dobParts[2]);
        int refDay = Integer.parseInt(refDateParts[0]);
        int refMonth = Integer.parseInt(refDateParts[1]);
        int refYear = Integer.parseInt(refDateParts[2]);
        int ageYears = refYear - dobYear;
        int ageMonths = refMonth - dobMonth;
        int ageDays = refDay - dobDay;
        if (ageDays < 0) {
            ageDays += 30;
            ageMonths--;
        }
        if (ageMonths < 0) {
            ageMonths += 12;
            ageYears--;
        }

        System.out.println("Age is " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.");
    }
    public static void calculateDOB(String ageString, String refDate, String dateFormat, String delimiter) {
        String[] ageParts = ageString.split(delimiter);
        String[] refDateParts = refDate.split(delimiter);
        int ageYears = Integer.parseInt(ageParts[2]);
        int ageMonths = Integer.parseInt(ageParts[1]);
        int ageDays = Integer.parseInt(ageParts[0]);
        int refDay = Integer.parseInt(refDateParts[0]);
        int refMonth = Integer.parseInt(refDateParts[1]);
        int refYear = Integer.parseInt(refDateParts[2]);
        int dobYear = refYear - ageYears;
        int dobMonth = ageMonths;
        int dobDay = ageDays;
        if (dobMonth <= 0) {
            dobMonth += 12;
            dobYear--;
        }
        System.out.printf("DOB is %02d-%02d-%d\n", dobDay, dobMonth, dobYear);
    }
}
