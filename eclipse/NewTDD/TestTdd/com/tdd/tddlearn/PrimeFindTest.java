package com.tdd.tddlearn;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFindTest {
	
	PrimeFind classToTest;
	@BeforeEach
	void setUp() throws Exception {
		 classToTest = new PrimeFind();
		 
	}

	@Test
	void testGetFactors() {
		assertEquals(null, classToTest.getFactors(1));
	}
	@Test
	void testGetFactors01() {
		assertEquals(null, classToTest.getFactors(1));
	}

}
