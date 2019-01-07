package com.tdd.learn5;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//import com.tdd.unit.PrimeFactors;

class PrimeclassTest {
	
	Primeclass primeobj;

	@BeforeEach
	void setUp() throws Exception {
		primeobj = new Primeclass();
	}

	List<Integer> getFactorlist(int... num) {
		List<Integer> factList = new ArrayList<>();
		for (int n : num)
			factList.add(n);
		return factList;
	}
	

	@Test
	void testGetFactors() {
		assertEquals(null, primeobj.getFactors(1));
	}
	@Test
	void testGetFactors01() {
		assertEquals(getFactorlist(2), primeobj.getFactors(2));
	}
	@Test
	void testGetFactors02() {
		assertEquals(getFactorlist(3), primeobj.getFactors(3));
	}
	@Test
	void testGetFactors03() {
		assertEquals(getFactorlist(2,2), primeobj.getFactors(4));
	}
	@Test
	void testGetFactors04() {
		assertEquals(getFactorlist(2,3), primeobj.getFactors(6));
	}
	@Test
	void testGetFactors05() {
		assertEquals(getFactorlist(3,3), primeobj.getFactors(9));
	}



	

}
