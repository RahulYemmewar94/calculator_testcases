import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorWithJestTestCases from "./calculator";

describe("Calculator Test Cases", () => {
    // Test case for addition with decimal points
    test("Addition", () => {
        render(<CalculatorWithJestTestCases />);
        
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("="));
        
        expect(screen.getByText("17")).toBeInTheDocument();
      });

});
