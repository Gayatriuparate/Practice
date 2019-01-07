package com.tdd.learn4;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class Testcase01 {
	findfactor classToTest;

	@BeforeEach
	void setUp() throws Exception {
		classToTest = new findfactor();
	}
	List<Integer> aFactors(int... number)
	{
		List<Integer> aFactor = new ArrayList<Integer>();
		for(int num:number)
				aFactor.add(num);
		return aFactor;
	}
	@Test
	void test01() {
		assertEquals(null,classToTest.getFactor(1));
	}
	@Test
	void test02() {
		assertEquals(aFactors(2),classToTest.getFactor(2));
	}
	@Test
	void test03() {
		assertEquals(aFactors(2),classToTest.getFactor(2));
	}
	
	@Test
	void test04() {
		assertEquals(aFactors(2,2),classToTest.getFactor(4));
	}
	@Test
	void test05() {
		assertEquals(aFactors(3,3),classToTest.getFactor(9));
	}
	@Test
	void test06() {
		assertEquals(aFactors(2,2,2),classToTest.getFactor(8));
	}
	@Test
	void test07() {
		assertEquals(aFactors(2,2,2,3),classToTest.getFactor(24));
	}



}
