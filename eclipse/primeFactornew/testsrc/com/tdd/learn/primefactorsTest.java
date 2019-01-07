package com.tdd.learn;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

//import java.util.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class primefactorTest{
	
	primefactors classToTest;
	public List<Integer> getFactors(int... nummber)
	{
		List<Integer> pfactor =new ArrayList<Integer>();
		//pFactor.add(nummber);
		for(int nummbers:nummber)
		{
			pfactor.add(nummbers);
			nummbers++;
		}
		return pfactor;
	}
	@BeforeEach
	void setUp() throws Exception {
		
		classToTest= new primefactors();
		
	}

	@Test
	void getFactortest01() {
		assertEquals(null, classToTest.getFactors(1));
	}
	
	@Test
	void getFactortest02() {
		assertEquals(getFactors(2), classToTest.getFactors(2));
	}
	
	@Test
	void getFactortest03() {
		assertEquals(getFactors(3), classToTest.getFactors(3));
	}
	@Test
	void getFactortest04() {
		assertEquals(getFactors(2,2), classToTest.getFactors(4));
	}
	@Test
	void getFactortest05() {
		assertEquals(getFactors(2,2,2), classToTest.getFactors(8));
	}
	@Test
	void getFactortest06() {
		assertEquals(getFactors(3,3), classToTest.getFactors(9));
	}
	@Test
	void getFactortest07() {
		assertEquals(getFactors(2,2,3), classToTest.getFactors(12));
	}
	


}
