package com.tdd.today;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFindTest {
	PrimeFind Primeobj;

	@BeforeEach
	void setUp() throws Exception {
		Primeobj = new PrimeFind();
		
	}
	List<Integer> AFactor(int...number)
	{
		List<Integer> PFactor = new ArrayList<>();
		for(int n:number)
			PFactor.add(n);
		return PFactor;
		
	}

	@Test
	void testGetFactor() {
    assertEquals(null,Primeobj.getFactor(1));
	}
	@Test
	void testGetFactor01() {
    assertEquals(AFactor(2),Primeobj.getFactor(2));
	}
	@Test
	void testGetFactor02() {
    assertEquals(AFactor(3),Primeobj.getFactor(3));
	}
	@Test
	void testGetFactor03() {
    assertEquals(AFactor(2,2),Primeobj.getFactor(4));
	}

}
