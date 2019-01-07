package com.tdd.learn12;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorTest {
	
	PrimeFactor classToTest;

	@BeforeEach
	void setUp() throws Exception {
		classToTest=new PrimeFactor();
	}
	List<Integer> aFactors(int... number)
	{
		List<Integer> aFactor = new ArrayList<Integer>();
		for(int num:number)
				aFactor.add(num);
		return aFactor;
	}

	@Test
	void testGetFactors01() {
		assertEquals(null,classToTest.getFactors(1));
	}
	@Test
	void testGetFactors02() {
		assertEquals(aFactors(2),classToTest.getFactors(2));
	}
	@Test
	void testGetFactors03() {
		assertEquals(aFactors(3),classToTest.getFactors(3));
	}
	@Test
	void testGetFactors04() {
		assertEquals(aFactors(3),classToTest.getFactors(3));
	}
	

	@Test
	void testGetFactors05() {
		assertEquals(aFactors(2,2,2),classToTest.getFactors(8));
	}
	@Test
	void testGetFactors06() {
		assertEquals(aFactors(2,2,2,3),classToTest.getFactors(24));
	}


}
