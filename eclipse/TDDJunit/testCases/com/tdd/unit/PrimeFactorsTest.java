package com.tdd.unit;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorsTest {

	PrimeFactors primeObj;

	@BeforeEach
	void setUp() throws Exception {
		primeObj = new PrimeFactors();
	}

	List<Integer> getFactorsInTest(int... num) {
		List<Integer> factList = new ArrayList<>();
		for (int n : num)
			factList.add(n);
		return factList;
	}

	@Test
	void test() {
		assertEquals(null, primeObj.getFactors(1));
	}

	@Test
	void test1() {
		assertEquals(getFactorsInTest(2), primeObj.getFactors(2));
	}

	@Test
	void test3() {
		assertEquals(getFactorsInTest(3), primeObj.getFactors(3));
	}

	@Test
	void test4() {
		assertEquals(getFactorsInTest(2, 2), primeObj.getFactors(4));
	}
	@Test
	void test5() {
		assertEquals(getFactorsInTest(5), primeObj.getFactors(5));
	}
	@Test
	void test6() {
		assertEquals(getFactorsInTest(2, 3), primeObj.getFactors(6));
	}
	@Test
	void test7() {
		assertEquals(getFactorsInTest(2,2, 2), primeObj.getFactors(8));
	}
	@Test
	void test8() {
		assertEquals(getFactorsInTest(3,3), primeObj.getFactors(9));
	}
}
