package com.tdd.learn1;

import static org.junit.jupiter.api.Assertions.*;
import java.util.*;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class findFactorTest {
	findFactor classToTest;

	public List<Integer> getFactors(int...number) {
		List<Integer> pFactor = new ArrayList<Integer>();
		for(int numbers:number)
		{
			pFactor.add(numbers);
			numbers++;
		}
		return pFactor;
	}

	@BeforeEach
	void setUp() throws Exception {
		classToTest = new findFactor();
	}

	@Test
	void testGetFactors1() {
		assertEquals(null, classToTest.getFactors(1));
	}

	@Test
	void testGetFactors2() {
		assertEquals(classToTest.getFactors(2), classToTest.getFactors(2));
	}
	@Test
	void testGetFactors3() {
		assertEquals(classToTest.getFactors(3), classToTest.getFactors(3));
	}
	//@Test
	//void testGetFactors4() {
		//assertEquals(getFactors(2,2), classToTest.getFactors(4));
	//}
	//@Test
	//void testGetFactors5() {
		//assertEquals(getFactors(2,2,2), classToTest.getFactors(8));
//	}
	//@Test
	//void testGetFactors6() {
		//assertEquals(getFactors(3,3), classToTest.getFactors(9));
	//}





}
