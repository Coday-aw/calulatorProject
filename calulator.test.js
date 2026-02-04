const { add, subtract, multiply, divide } = require('./calculator.js');
const { describe, test, expect } = require('@jest/globals');

describe('Calculator functions', () => {
    
    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });
        
        test('should add negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });
        
        test('should handle decimals', () => {
           expect(add(2.5, 2.5)).toBe(5)
        });
    });
    
    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(subtract(5,2)).toBe(3)
        });
        
        test('should handle negative results', () => {
            expect(subtract(-10, -5)).toBe(-5)
        });
    });
    
    describe('multiply', () => {
        test('should multiply two numbers', () => {
           expect(multiply(3, 3)).toBe(9)
        });
        
        test('should multiply by zero', () => {
            expect(multiply(5, 0)).toBe(0)
        });
        
        test('should multiply negative numbers', () => {
           expect(multiply(-3, -3 )).toBe(9)
        });
    });
    
    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(divide(10, 2)).toBe(5)
        });
        
        test('should handle decimals', () => {
            expect(divide(10, 2.5)).toBe(4)
        });
        
        test('should throw error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Division med noll är inte tillåten');
        });
    });
});



