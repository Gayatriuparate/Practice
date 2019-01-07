package com.tdd.ll;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFindTest {
	PrimeFind primeobj;

	@BeforeEach
	void setUp() throws Exception {
		primeobj= new PrimeFind();
		
	}
	List<Integer> aFactor(int...number){
		List<Integer> pFactor = new ArrayList<>();
		for(int n : number)
			pFactor.add(n);
		return pFactor;
		}
		
		
	

	@Test
	void testGetFactor() {
		assertEquals(null,primeobj.getFactor(1));

	}
	@Test
	void testGetFactor01() {
		assertEquals(aFactor(2),primeobj.getFactor(2));

	}

}
