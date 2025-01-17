import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorWithJestTestCases from "./calculator";

describe("Calculator Test Cases", () => {
  test("Addition", async () => {
    render(<CalculatorWithJestTestCases />);
    
    // Simulate button clicks for addition
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    
    // Wait for the calculation result and validate it
    const result = await screen.findByTestId("result"); 
    expect(result).toHaveTextContent("7"); 
  });

  test("Subtraction", async () => {
    render(<CalculatorWithJestTestCases />);
    
    // Simulate button clicks for subtraction
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    
    // Wait for the calculation result and validate it
    const result = await screen.findByTestId("result"); // Ensure your calculator display has the data-testid="result"
    expect(result).toHaveTextContent("7"); // Validate the result is "1"
  });
  test("Multiplication", async () => {
    render(<CalculatorWithJestTestCases />);
    
    // Simulate button clicks for subtraction
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    
    // Wait for the calculation result and validate it
    const result = await screen.findByTestId("result"); // Ensure your calculator display has the data-testid="result"
    expect(result).toHaveTextContent("6"); // Validate the result is "1"
  });
});
